import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultQuizSets } from '../data/defaultQuizzes';
import type { Question, QuizAttempt, QuizSet, QuizStats, ActiveSession } from '../types/quiz';
import { soundFx } from '../utils/sound';

export type ViewMode = 'dashboard' | 'editor' | 'runner' | 'flashcard' | 'analytics';

interface QuizContextType {
  quizSets: QuizSet[];
  attempts: QuizAttempt[];
  currentView: ViewMode;
  activeSet: QuizSet | null;
  editingSet: QuizSet | null;
  runnerMode: 'exam' | 'practice';
  soundEnabled: boolean;
  activeSession: ActiveSession | null;
  
  // Navigation & Actions
  setCurrentView: (view: ViewMode) => void;
  startQuiz: (setId: string, mode: 'exam' | 'practice') => void;
  startConfiguredQuiz: (configuredSet: QuizSet, mode: 'exam' | 'practice') => void;
  startFlashcard: (setId: string) => void;
  startConfiguredFlashcard: (configuredSet: QuizSet) => void;
  openEditor: (setId?: string) => void;
  saveActiveSession: (session: ActiveSession) => void;
  clearActiveSession: () => void;
  resumeActiveSession: () => void;
  
  // Quiz Sets & Questions CRUD
  addQuizSet: (set: Omit<QuizSet, 'id' | 'createdAt' | 'updatedAt'>) => QuizSet;
  updateQuizSet: (id: string, updated: Partial<QuizSet>) => void;
  deleteQuizSet: (id: string) => void;
  addQuestionsToSet: (setId: string, newQuestions: Question[]) => void;
  
  // Attempts & Stats
  saveAttempt: (attempt: QuizAttempt) => void;
  createWeakSpotQuiz: () => QuizSet | null;
  getStats: () => QuizStats;
  resetToDefaults: () => void;
  toggleSound: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const LOCAL_KEY_SETS = 'cbt_quiz_sets';
const LOCAL_KEY_ATTEMPTS = 'cbt_quiz_attempts';
const LOCAL_KEY_SOUND = 'cbt_quiz_sound';
const LOCAL_KEY_ACTIVE_SESSION = 'cbt_active_session';

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quizSets, setQuizSets] = useState<QuizSet[]>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_SETS);
    if (saved) {
      try {
        const parsed: QuizSet[] = JSON.parse(saved);
        const hasGcp = parsed.some(s => s.id.startsWith('gcp_pde'));
        if (!hasGcp) {
          return [...defaultQuizSets];
        }
        return parsed;
      } catch {
        // Fallback
      }
    }
    return defaultQuizSets;
  });

  const [attempts, setAttempts] = useState<QuizAttempt[]>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_ATTEMPTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return [];
  });

  const [activeSession, setActiveSession] = useState<ActiveSession | null>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_ACTIVE_SESSION);
    if (saved) {
      try {
        const parsed: ActiveSession = JSON.parse(saved);
        if (parsed && parsed.activeSet && parsed.activeSet.questions?.length > 0) {
          return parsed;
        }
      } catch {}
    }
    return null;
  });

  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_ACTIVE_SESSION);
    if (saved) {
      try {
        const parsed: ActiveSession = JSON.parse(saved);
        if (parsed && parsed.activeSet && parsed.activeSet.questions?.length > 0) {
          return parsed.type === 'flashcard' ? 'flashcard' : 'runner';
        }
      } catch {}
    }
    return 'dashboard';
  });

  const [activeCustomSet, setActiveCustomSet] = useState<QuizSet | null>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_ACTIVE_SESSION);
    if (saved) {
      try {
        const parsed: ActiveSession = JSON.parse(saved);
        if (parsed?.activeSet) return parsed.activeSet;
      } catch {}
    }
    return null;
  });

  const [activeSetId, setActiveSetId] = useState<string | null>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_ACTIVE_SESSION);
    if (saved) {
      try {
        const parsed: ActiveSession = JSON.parse(saved);
        if (parsed?.activeSet?.id) return parsed.activeSet.id;
      } catch {}
    }
    return null;
  });

  const [runnerMode, setRunnerMode] = useState<'exam' | 'practice'>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_ACTIVE_SESSION);
    if (saved) {
      try {
        const parsed: ActiveSession = JSON.parse(saved);
        if (parsed?.runnerMode) return parsed.runnerMode;
      } catch {}
    }
    return 'exam';
  });

  const [editingSetId, setEditingSetId] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem(LOCAL_KEY_SOUND);
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_SETS, JSON.stringify(quizSets));
  }, [quizSets]);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_ATTEMPTS, JSON.stringify(attempts));
  }, [attempts]);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_SOUND, JSON.stringify(soundEnabled));
    soundFx.enabled = soundEnabled;
  }, [soundEnabled]);

  const saveActiveSession = (session: ActiveSession) => {
    setActiveSession(session);
    try {
      localStorage.setItem(LOCAL_KEY_ACTIVE_SESSION, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to save session to localStorage', e);
    }
  };

  const clearActiveSession = () => {
    setActiveSession(null);
    localStorage.removeItem(LOCAL_KEY_ACTIVE_SESSION);
  };

  const resumeActiveSession = () => {
    if (!activeSession) return;
    setActiveCustomSet(activeSession.activeSet);
    setActiveSetId(activeSession.activeSet.id);
    setRunnerMode(activeSession.runnerMode);
    setCurrentView(activeSession.type === 'flashcard' ? 'flashcard' : 'runner');
    soundFx.playClick();
  };

  const activeSet = activeCustomSet || quizSets.find(s => s.id === activeSetId) || null;
  const editingSet = quizSets.find(s => s.id === editingSetId) || null;

  const startQuiz = (setId: string, mode: 'exam' | 'practice') => {
    const targetSet = quizSets.find(s => s.id === setId);
    if (!targetSet) return;
    setActiveCustomSet(null);
    setActiveSetId(setId);
    setRunnerMode(mode);
    setCurrentView('runner');
    const newSession: ActiveSession = {
      type: 'runner',
      activeSet: targetSet,
      runnerMode: mode,
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      secondsRemaining: (targetSet.timeLimitMinutes || 10) * 60,
      lastUpdated: Date.now(),
    };
    saveActiveSession(newSession);
    soundFx.playClick();
  };

  const startConfiguredQuiz = (configuredSet: QuizSet, mode: 'exam' | 'practice') => {
    setActiveCustomSet(configuredSet);
    setActiveSetId(configuredSet.id);
    setRunnerMode(mode);
    setCurrentView('runner');
    const newSession: ActiveSession = {
      type: 'runner',
      activeSet: configuredSet,
      runnerMode: mode,
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      secondsRemaining: (configuredSet.timeLimitMinutes || 10) * 60,
      passingPercentage: configuredSet.passingPercentage ?? 70,
      lastUpdated: Date.now(),
    };
    saveActiveSession(newSession);
    soundFx.playClick();
  };

  const startFlashcard = (setId: string) => {
    const targetSet = quizSets.find(s => s.id === setId);
    if (!targetSet) return;
    setActiveCustomSet(null);
    setActiveSetId(setId);
    setCurrentView('flashcard');
    const newSession: ActiveSession = {
      type: 'flashcard',
      activeSet: targetSet,
      runnerMode: 'practice',
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      lastUpdated: Date.now(),
    };
    saveActiveSession(newSession);
    soundFx.playClick();
  };

  const startConfiguredFlashcard = (configuredSet: QuizSet) => {
    setActiveCustomSet(configuredSet);
    setActiveSetId(configuredSet.id);
    setCurrentView('flashcard');
    const newSession: ActiveSession = {
      type: 'flashcard',
      activeSet: configuredSet,
      runnerMode: 'practice',
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      lastUpdated: Date.now(),
    };
    saveActiveSession(newSession);
    soundFx.playClick();
  };

  const openEditor = (setId?: string) => {
    setEditingSetId(setId || null);
    setCurrentView('editor');
    soundFx.playClick();
  };

  const addQuizSet = (setData: Omit<QuizSet, 'id' | 'createdAt' | 'updatedAt'>): QuizSet => {
    const now = new Date().toISOString();
    const newSet: QuizSet = {
      ...setData,
      id: `quiz_${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    setQuizSets(prev => [newSet, ...prev]);
    return newSet;
  };

  const updateQuizSet = (id: string, updated: Partial<QuizSet>) => {
    setQuizSets(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          ...updated,
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    }));
  };

  const deleteQuizSet = (id: string) => {
    setQuizSets(prev => prev.filter(s => s.id !== id));
    if (activeSetId === id) setActiveSetId(null);
    if (editingSetId === id) setEditingSetId(null);
    soundFx.playClick();
  };

  const addQuestionsToSet = (setId: string, newQuestions: Question[]) => {
    setQuizSets(prev => prev.map(s => {
      if (s.id === setId) {
        return {
          ...s,
          questions: [...s.questions, ...newQuestions],
          updatedAt: new Date().toISOString()
        };
      }
      return s;
    }));
  };

  const saveAttempt = (attempt: QuizAttempt) => {
    setAttempts(prev => [attempt, ...prev]);
  };

  const createWeakSpotQuiz = (): QuizSet | null => {
    // Collect all missed question IDs across attempts
    const missedMap = new Map<string, number>();
    attempts.forEach(att => {
      att.missedQuestionIds.forEach(qId => {
        missedMap.set(qId, (missedMap.get(qId) || 0) + 1);
      });
    });

    if (missedMap.size === 0) return null;

    // Gather question objects
    const allQuestions: Question[] = [];
    quizSets.forEach(s => {
      s.questions.forEach(q => {
        if (missedMap.has(q.id)) {
          allQuestions.push(q);
        }
      });
    });

    if (allQuestions.length === 0) return null;

    const weakSet: QuizSet = {
      id: `weak_spot_${Date.now()}`,
      title: '🎯 Weak Spot Focus Vault',
      description: `Targeted review of ${allQuestions.length} questions missed in your previous attempts.`,
      category: 'Smart Review',
      tags: ['Weak Spots', 'Targeted Review'],
      color: '#ef4444',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      questions: allQuestions
    };

    setQuizSets(prev => [weakSet, ...prev]);
    return weakSet;
  };

  const getStats = (): QuizStats => {
    const totalQuizzes = quizSets.length;
    const totalQuestions = quizSets.reduce((sum, s) => sum + s.questions.length, 0);
    const totalAttempts = attempts.length;

    let averageScore = 0;
    if (totalAttempts > 0) {
      const sumPerc = attempts.reduce((sum, a) => sum + a.percentage, 0);
      averageScore = Math.round(sumPerc / totalAttempts);
    }

    const masteredCount = quizSets.filter(s => {
      const setAttempts = attempts.filter(a => a.quizSetId === s.id);
      return setAttempts.some(a => a.percentage >= 80);
    }).length;

    // Streak calculation (days with attempt)
    const uniqueDays = new Set(attempts.map(a => a.date.split('T')[0]));
    const streakDays = uniqueDays.size;

    return {
      totalQuizzes,
      totalQuestions,
      totalAttempts,
      averageScore,
      masteredCount,
      streakDays
    };
  };

  const resetToDefaults = () => {
    setQuizSets(defaultQuizSets);
    setAttempts([]);
    localStorage.removeItem(LOCAL_KEY_SETS);
    localStorage.removeItem(LOCAL_KEY_ATTEMPTS);
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <QuizContext.Provider
      value={{
        quizSets,
        attempts,
        currentView,
        activeSet,
        editingSet,
        runnerMode,
        soundEnabled,
        activeSession,
        setCurrentView,
        startQuiz,
        startConfiguredQuiz,
        startFlashcard,
        startConfiguredFlashcard,
        openEditor,
        saveActiveSession,
        clearActiveSession,
        resumeActiveSession,
        addQuizSet,
        updateQuizSet,
        deleteQuizSet,
        addQuestionsToSet,
        saveAttempt,
        createWeakSpotQuiz,
        getStats,
        resetToDefaults,
        toggleSound,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('useQuiz must be used within QuizProvider');
  return ctx;
};
