import React, { useState, useEffect } from 'react';
import { useQuiz } from '@/context/QuizContext';
import type { QuizAttempt, UserAnswer } from '@/types/quiz';
import { QuizResultModal } from './QuizResultModal';
import { soundFx } from '@/utils/sound';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Clock, Flag, Check, ChevronLeft, ChevronRight, Grid, Volume2, AlertCircle } from 'lucide-react';

export const CBTQuizRunner: React.FC = () => {
  const { activeSet, runnerMode, saveAttempt, setCurrentView, activeSession, saveActiveSession, clearActiveSession } = useQuiz();

  if (!activeSet) {
    return (
      <div className="p-12 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">No Active Quiz Selected</h2>
        <Button onClick={() => setCurrentView('dashboard')}>
          Return to Dashboard
        </Button>
      </div>
    );
  }

  const isResuming = activeSession && activeSession.activeSet.id === activeSet.id && activeSession.runnerMode === runnerMode;

  const [currentIndex, setCurrentIndex] = useState(() => isResuming ? (activeSession?.currentIndex || 0) : 0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>(() => isResuming ? (activeSession?.userAnswers || {}) : {});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(() => isResuming && activeSession?.flaggedIds ? new Set(activeSession.flaggedIds) : new Set());
  const [showHint, setShowHint] = useState(false);
  const [showNavGrid, setShowNavGrid] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [finalAttempt, setFinalAttempt] = useState<QuizAttempt | null>(null);

  const [practiceRevealed, setPracticeRevealed] = useState(false);

  const timeLimitSeconds = (activeSet.timeLimitMinutes || 10) * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(() => {
    if (isResuming && typeof activeSession?.secondsRemaining === 'number') {
      return activeSession.secondsRemaining;
    }
    return timeLimitSeconds;
  });

  // Synchronize in-progress session to localStorage
  useEffect(() => {
    if (!activeSet || isFinished) return;
    saveActiveSession({
      type: 'runner',
      activeSet,
      runnerMode,
      currentIndex,
      userAnswers,
      flaggedIds: Array.from(flaggedIds),
      secondsRemaining,
      lastUpdated: Date.now(),
    });
  }, [activeSet, runnerMode, currentIndex, userAnswers, flaggedIds, secondsRemaining, isFinished]);

  // Ensure state is immediately saved when screen sleeps or tab hides
  useEffect(() => {
    const handleSaveOnHidden = () => {
      if (document.visibilityState === 'hidden' && activeSet && !isFinished) {
        saveActiveSession({
          type: 'runner',
          activeSet,
          runnerMode,
          currentIndex,
          userAnswers,
          flaggedIds: Array.from(flaggedIds),
          secondsRemaining,
          lastUpdated: Date.now(),
        });
      }
    };
    document.addEventListener('visibilitychange', handleSaveOnHidden);
    window.addEventListener('pagehide', handleSaveOnHidden);
    return () => {
      document.removeEventListener('visibilitychange', handleSaveOnHidden);
      window.removeEventListener('pagehide', handleSaveOnHidden);
    };
  }, [activeSet, runnerMode, currentIndex, userAnswers, flaggedIds, secondsRemaining, isFinished]);

  useEffect(() => {
    if (runnerMode !== 'exam' || isFinished) return;

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleCompleteQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [runnerMode, isFinished]);

  const currentQuestion = activeSet.questions[currentIndex];
  const currentSelection = userAnswers[currentQuestion.id]?.selected || [];

  const handleSelectOption = (optionIndexOrVal: number | string) => {
    setPracticeRevealed(false);
    setShowHint(false);

    let updatedSelection: (number | string)[] = [];

    if (currentQuestion.type === 'multiple') {
      if (currentSelection.includes(optionIndexOrVal)) {
        updatedSelection = currentSelection.filter(item => item !== optionIndexOrVal);
      } else {
        updatedSelection = [...currentSelection, optionIndexOrVal];
      }
    } else {
      updatedSelection = [optionIndexOrVal];
    }

    let isCorrect = false;
    if (currentQuestion.type === 'multiple') {
      const correctSet = new Set(currentQuestion.correctAnswers.map(String));
      const userSet = new Set(updatedSelection.map(String));
      isCorrect = correctSet.size === userSet.size && [...correctSet].every(val => userSet.has(val));
    } else if (currentQuestion.type === 'fill-blank') {
      const target = String(currentQuestion.correctAnswers[0] || '').trim().toLowerCase();
      const entered = String(updatedSelection[0] || '').trim().toLowerCase();
      isCorrect = target === entered;
    } else {
      isCorrect = String(currentQuestion.correctAnswers[0]) === String(updatedSelection[0]);
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selected: updatedSelection,
        isCorrect,
        timeSpentSeconds: prev[currentQuestion.id]?.timeSpentSeconds || 0
      }
    }));
  };

  const toggleFlagQuestion = (qId: string) => {
    setFlaggedIds(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const handleCheckPracticeAnswer = () => {
    setPracticeRevealed(true);
    const isCorrect = userAnswers[currentQuestion.id]?.isCorrect;
    if (isCorrect) soundFx.playCorrect();
    else soundFx.playIncorrect();
  };

  const handleCompleteQuiz = () => {
    let score = 0;
    let totalPoints = 0;
    const missedIds: string[] = [];

    activeSet.questions.forEach(q => {
      totalPoints += q.points || 1;
      const uAns = userAnswers[q.id];
      if (uAns && uAns.isCorrect) {
        score += q.points || 1;
      } else {
        missedIds.push(q.id);
      }
    });

    const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;
    const timeSpentSeconds = timeLimitSeconds - secondsRemaining;

    const attempt: QuizAttempt = {
      id: `att_${Date.now()}`,
      quizSetId: activeSet.id,
      quizTitle: activeSet.title,
      mode: runnerMode,
      date: new Date().toISOString(),
      score,
      totalPoints,
      percentage,
      timeSpentSeconds: runnerMode === 'exam' ? timeSpentSeconds : 0,
      answers: userAnswers,
      missedQuestionIds: missedIds
    };

    clearActiveSession();
    saveAttempt(attempt);
    setFinalAttempt(attempt);
    setIsFinished(true);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (isFinished && finalAttempt) {
    return (
      <QuizResultModal
        quizSet={activeSet}
        attempt={finalAttempt}
        onRetake={() => {
          setIsFinished(false);
          setCurrentIndex(0);
          setUserAnswers({});
          setFlaggedIds(new Set());
          setSecondsRemaining(timeLimitSeconds);
        }}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-16">
      {/* Header Bar */}
      <Card className="mb-5 shadow-sm">
        <CardContent className="p-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView('dashboard')} className="gap-1.5">
              <ArrowLeft className="w-4 h-4" /> Exit
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant={runnerMode === 'exam' ? 'destructive' : 'secondary'} className="text-[10px] uppercase font-bold tracking-wider">
                  {runnerMode === 'exam' ? 'EXAM MODE' : 'PRACTICE MODE'}
                </Badge>
                <span className="text-xs text-muted-foreground">{activeSet.category}</span>
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-foreground line-clamp-1 mt-0.5">{activeSet.title}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {runnerMode === 'exam' && (
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm font-bold font-mono transition-colors ${
                secondsRemaining < 120 
                  ? 'bg-rose-500/20 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 border-rose-500/50 dark:border-rose-500/70 animate-pulse shadow-xs' 
                  : 'bg-secondary/80 dark:bg-secondary/50 text-foreground border-border'
              }`}>
                <Clock className={`w-4 h-4 ${secondsRemaining < 120 ? 'text-rose-600 dark:text-rose-400' : 'text-primary dark:text-blue-400'}`} />
                <span className={secondsRemaining < 120 ? 'text-rose-600 dark:text-rose-300' : 'text-foreground'}>
                  {formatTimer(secondsRemaining)}
                </span>
              </div>
            )}

            <Button variant="outline" size="sm" onClick={() => setShowNavGrid(!showNavGrid)} className="gap-1.5">
              <Grid className="w-4 h-4" /> Palette ({Object.keys(userAnswers).length}/{activeSet.questions.length})
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Slide-out Navigation Drawer */}
      {showNavGrid && (
        <Card className="mb-5 shadow-sm animate-in fade-in">
          <CardContent className="p-4">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Question Navigator:</h4>
            <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-1.5">
              {activeSet.questions.map((q, idx) => {
                const isAns = !!userAnswers[q.id]?.selected.length;
                const isFlag = flaggedIds.has(q.id);
                const isCurrent = idx === currentIndex;

                let variant: "default" | "outline" | "secondary" | "destructive" = "outline";
                let customClass = "h-8 text-xs font-semibold";

                if (isCurrent) {
                  variant = "default";
                  customClass += " ring-2 ring-primary ring-offset-1";
                } else if (isFlag) {
                  customClass += " bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40";
                } else if (isAns) {
                  customClass += " bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40";
                }

                return (
                  <Button
                    key={q.id}
                    variant={variant}
                    size="sm"
                    className={customClass}
                    onClick={() => { setCurrentIndex(idx); setPracticeRevealed(false); }}
                  >
                    {idx + 1}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Question Card */}
      <Card className="mb-6 shadow-sm">
        <CardHeader className="pb-3 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Question {currentIndex + 1} of {activeSet.questions.length}</Badge>
              <Badge variant="outline" className="uppercase text-[10px]">{currentQuestion.type}</Badge>
            </div>

            <div className="flex items-center gap-1.5">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 text-primary"
                onClick={() => soundFx.speak(currentQuestion.prompt)}
                title="Speak question prompt"
              >
                <Volume2 className="w-4 h-4" />
              </Button>

              <Button
                variant={flaggedIds.has(currentQuestion.id) ? 'destructive' : 'ghost'}
                size="sm"
                className="gap-1.5 h-8 text-xs"
                onClick={() => toggleFlagQuestion(currentQuestion.id)}
              >
                <Flag className="w-3.5 h-3.5" />
                {flaggedIds.has(currentQuestion.id) ? 'Flagged' : 'Flag'}
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-5 pb-6">
          <h3 className="text-base sm:text-lg font-semibold leading-relaxed text-foreground mb-6">
            {currentQuestion.prompt}
          </h3>

          {/* Options */}
          {currentQuestion.options ? (
            <div className="flex flex-col gap-2.5 mb-6">
              {currentQuestion.options.map((opt, oIdx) => {
                const isSelected = currentSelection.includes(oIdx);
                const isRevealed = runnerMode === 'practice' && practiceRevealed;
                const isRight = currentQuestion.correctAnswers.includes(oIdx);

                let stateClasses = "border-border bg-card hover:bg-accent/50 text-foreground";
                let badgeClasses = isSelected ? "bg-primary text-primary-foreground font-bold" : "bg-secondary text-muted-foreground font-semibold";
                let textClasses = "text-foreground";

                if (isSelected) {
                  stateClasses = "border-primary bg-primary/10 text-foreground font-medium ring-1 ring-primary";
                }

                if (isRevealed) {
                  if (isRight) {
                    stateClasses = "border-emerald-500 bg-emerald-500/15 dark:bg-emerald-950/60 font-semibold ring-1 ring-emerald-500";
                    badgeClasses = "bg-emerald-600 dark:bg-emerald-500 text-white font-bold shadow-xs";
                    textClasses = "text-emerald-900 dark:text-emerald-200 font-semibold";
                  } else if (isSelected && !isRight) {
                    stateClasses = "border-destructive bg-destructive/15 dark:bg-rose-950/50 font-medium ring-1 ring-destructive";
                    badgeClasses = "bg-destructive text-white font-bold shadow-xs";
                    textClasses = "text-destructive dark:text-rose-200 font-medium";
                  }
                }

                return (
                  <div
                    key={oIdx}
                    className={`p-3.5 rounded-lg border flex items-start gap-3.5 cursor-pointer transition-all ${stateClasses}`}
                    onClick={() => handleSelectOption(oIdx)}
                  >
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs shrink-0 mt-0.5 ${badgeClasses}`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className={`text-sm leading-relaxed flex-1 ${textClasses}`}>{opt}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mb-6">
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Enter Answer:</label>
              <Input
                type="text"
                placeholder="Type answer..."
                value={currentSelection[0] || ''}
                onChange={e => handleSelectOption(e.target.value)}
                className="text-base py-5"
              />
            </div>
          )}

          {/* Practice Mode Explanation */}
          {runnerMode === 'practice' && (
            <div className="pt-4 border-t space-y-3">
              {!practiceRevealed ? (
                <div className="flex items-center gap-2">
                  <Button size="sm" onClick={handleCheckPracticeAnswer} className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Check className="w-4 h-4" /> Check Answer
                  </Button>
                  {currentQuestion.hint && (
                    <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)}>
                      {showHint ? 'Hide Hint' : 'Show Hint'}
                    </Button>
                  )}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>
                      Correct Answer: {
                        currentQuestion.options && currentQuestion.type !== 'fill-blank'
                          ? currentQuestion.correctAnswers
                              .map(ans => {
                                const idx = typeof ans === 'number' ? ans : parseInt(String(ans), 10);
                                if (!isNaN(idx) && currentQuestion.options && currentQuestion.options[idx]) {
                                  return `${String.fromCharCode(65 + idx)}. ${currentQuestion.options[idx]}`;
                                }
                                return String(ans);
                              })
                              .join(', ')
                          : currentQuestion.correctAnswers.join(', ')
                      }
                    </span>
                  </div>
                  {currentQuestion.explanation && (
                    <p className="text-sm text-foreground/90 dark:text-emerald-100/90 leading-relaxed m-0 pl-6">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              )}

              {showHint && currentQuestion.hint && (
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Hint: {currentQuestion.hint}</span>
                </div>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-4 border-t flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => { setCurrentIndex(prev => Math.max(0, prev - 1)); setPracticeRevealed(false); }}
            disabled={currentIndex === 0}
            className="gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>

          {currentIndex < activeSet.questions.length - 1 ? (
            <Button
              onClick={() => { setCurrentIndex(prev => prev + 1); setPracticeRevealed(false); }}
              className="gap-1.5"
            >
              Next Question <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleCompleteQuiz} className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white">
              Submit Test <Check className="w-4 h-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
