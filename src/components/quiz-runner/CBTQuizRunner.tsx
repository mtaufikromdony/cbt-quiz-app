import React, { useState, useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import type { QuizAttempt, UserAnswer } from '../../types/quiz';
import { QuizResultModal } from './QuizResultModal';
import { soundFx } from '../../utils/sound';
import { ArrowLeft, Clock, Flag, Check, ChevronLeft, ChevronRight, Grid, Volume2 } from 'lucide-react';

export const CBTQuizRunner: React.FC = () => {
  const { activeSet, runnerMode, saveAttempt, setCurrentView } = useQuiz();

  if (!activeSet) {
    return (
      <div style={{ padding: '48px', textAlign: 'center' }}>
        <h2>No Active Quiz Selected</h2>
        <button className="btn btn-primary" onClick={() => setCurrentView('dashboard')} style={{ marginTop: '16px' }}>
          Return to Dashboard
        </button>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const [showNavGrid, setShowNavGrid] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [finalAttempt, setFinalAttempt] = useState<QuizAttempt | null>(null);

  const [practiceRevealed, setPracticeRevealed] = useState(false);

  const timeLimitSeconds = (activeSet.timeLimitMinutes || 10) * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(timeLimitSeconds);

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

    if (currentQuestion.type === 'single' || currentQuestion.type === 'true-false') {
      updatedSelection = [optionIndexOrVal];
      soundFx.playClick();
    } else if (currentQuestion.type === 'multiple') {
      const idx = optionIndexOrVal as number;
      if (currentSelection.includes(idx)) {
        updatedSelection = currentSelection.filter(i => i !== idx);
      } else {
        updatedSelection = [...currentSelection, idx];
      }
      soundFx.playClick();
    } else if (currentQuestion.type === 'fill-blank') {
      updatedSelection = [optionIndexOrVal as string];
    }

    const isCorrect = checkIsCorrect(currentQuestion, updatedSelection);

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selected: updatedSelection,
        isCorrect,
        timeSpentSeconds: (prev[currentQuestion.id]?.timeSpentSeconds || 0) + 1,
        isFlagged: flaggedIds.has(currentQuestion.id)
      }
    }));
  };

  const checkIsCorrect = (q: typeof currentQuestion, selected: (number | string)[]): boolean => {
    if (selected.length === 0) return false;

    if (q.type === 'single') {
      return selected[0] === q.correctAnswers[0];
    } else if (q.type === 'multiple') {
      if (selected.length !== q.correctAnswers.length) return false;
      return q.correctAnswers.every(ca => selected.includes(ca as number));
    } else if (q.type === 'true-false') {
      return String(selected[0]).toLowerCase() === String(q.correctAnswers[0]).toLowerCase();
    } else if (q.type === 'fill-blank') {
      const uStr = String(selected[0] || '').trim().toLowerCase();
      const targetStr = String(q.correctAnswers[0] || '').trim().toLowerCase();
      return uStr === targetStr;
    }
    return false;
  };

  const toggleFlagQuestion = (qId: string) => {
    setFlaggedIds(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
    soundFx.playClick();
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
    <div style={{ padding: '0 24px 48px', maxWidth: '950px', margin: '0 auto' }}>
      {/* Header Bar */}
      <div className="panel" style={{ padding: '14px 20px', margin: '16px 0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setCurrentView('dashboard')}>
            <ArrowLeft size={16} /> Exit
          </button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className={`badge ${runnerMode === 'exam' ? 'badge-rose' : 'badge-blue'}`}>
                {runnerMode === 'exam' ? 'EXAM MODE' : 'PRACTICE MODE'}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{activeSet.category}</span>
            </div>
            <h2 style={{ fontSize: '1.05rem', marginTop: '2px', fontWeight: 600 }}>{activeSet.title}</h2>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {runnerMode === 'exam' && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              background: secondsRemaining < 120 ? 'rgba(248, 81, 73, 0.15)' : 'var(--bg-input)',
              color: secondsRemaining < 120 ? 'var(--accent-rose)' : 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              fontWeight: 600,
              fontSize: '1rem'
            }}>
              <Clock size={16} />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>
          )}

          <button className="btn btn-secondary btn-sm" onClick={() => setShowNavGrid(!showNavGrid)}>
            <Grid size={15} /> Palette ({Object.keys(userAnswers).length}/{activeSet.questions.length})
          </button>
        </div>
      </div>

      {/* Slide-out Navigation Drawer */}
      {showNavGrid && (
        <div className="panel" style={{ padding: '16px', marginBottom: '16px' }}>
          <h4 style={{ fontSize: '0.85rem', marginBottom: '10px', color: 'var(--text-secondary)' }}>Question Navigation:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))', gap: '6px' }}>
            {activeSet.questions.map((q, idx) => {
              const isAns = !!userAnswers[q.id]?.selected.length;
              const isFlag = flaggedIds.has(q.id);
              const isCurrent = idx === currentIndex;

              let bg = 'var(--bg-input)';
              let color = 'var(--text-secondary)';
              let border = '1px solid var(--border-subtle)';

              if (isCurrent) {
                border = '2px solid var(--accent-blue)';
                bg = 'rgba(56, 139, 253, 0.15)';
                color = '#ffffff';
              } else if (isFlag) {
                bg = 'rgba(210, 153, 34, 0.15)';
                color = '#d29922';
                border = '1px solid #d29922';
              } else if (isAns) {
                bg = 'rgba(46, 160, 67, 0.15)';
                color = '#3fb950';
                border = '1px solid #2ea043';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => { setCurrentIndex(idx); setPracticeRevealed(false); }}
                  style={{
                    padding: '8px 0',
                    borderRadius: 'var(--radius-sm)',
                    background: bg,
                    color: color,
                    border: border,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Panel */}
      <div className="panel" style={{ padding: '28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-gray">Question {currentIndex + 1} of {activeSet.questions.length}</span>
            <span className="badge badge-blue">{currentQuestion.type.toUpperCase()}</span>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button 
              className="btn btn-ghost btn-sm"
              onClick={() => soundFx.speak(currentQuestion.prompt)}
              title="Speak question prompt"
            >
              <Volume2 size={16} />
            </button>

            <button
              className={`btn btn-sm ${flaggedIds.has(currentQuestion.id) ? 'btn-danger' : 'btn-ghost'}`}
              onClick={() => toggleFlagQuestion(currentQuestion.id)}
            >
              <Flag size={15} />
              {flaggedIds.has(currentQuestion.id) ? 'Flagged' : 'Flag'}
            </button>
          </div>
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '20px', lineHeight: 1.5 }}>
          {currentQuestion.prompt}
        </h3>

        {/* Options */}
        {currentQuestion.options ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {currentQuestion.options.map((opt, oIdx) => {
              const isSelected = currentSelection.includes(oIdx);
              let optionClass = 'option-card';
              if (isSelected) optionClass += ' selected';

              if (runnerMode === 'practice' && practiceRevealed) {
                const isRight = currentQuestion.correctAnswers.includes(oIdx);
                if (isRight) optionClass += ' correct';
                else if (isSelected && !isRight) optionClass += ' incorrect';
              }

              return (
                <div
                  key={oIdx}
                  className={optionClass}
                  onClick={() => handleSelectOption(oIdx)}
                >
                  <div className="option-indicator">
                    {String.fromCharCode(65 + oIdx)}
                  </div>
                  <span style={{ fontSize: '0.95rem', flex: 1 }}>{opt}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Enter Answer:</label>
            <input
              type="text"
              className="input-field"
              placeholder="Type answer..."
              value={currentSelection[0] || ''}
              onChange={e => handleSelectOption(e.target.value)}
              style={{ fontSize: '1rem', padding: '12px' }}
            />
          </div>
        )}

        {/* Practice Mode Explanation */}
        {runnerMode === 'practice' && (
          <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            {!practiceRevealed ? (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-secondary btn-sm" onClick={handleCheckPracticeAnswer}>
                  <Check size={15} color="var(--accent-emerald)" /> Check Answer
                </button>
                {currentQuestion.hint && (
                  <button className="btn btn-ghost btn-sm" onClick={() => setShowHint(!showHint)}>
                    {showHint ? 'Hide Hint' : 'Show Hint'}
                  </button>
                )}
              </div>
            ) : (
              <div style={{ padding: '14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--accent-blue)', marginBottom: '4px', fontWeight: 600 }}>Explanation</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  {currentQuestion.explanation || `Correct Answer: ${currentQuestion.correctAnswers.join(', ')}`}
                </p>
              </div>
            )}

            {showHint && currentQuestion.hint && (
              <div style={{ marginTop: '8px', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'rgba(210, 153, 34, 0.12)', border: '1px solid rgba(210, 153, 34, 0.3)', color: '#d29922', fontSize: '0.85rem' }}>
                Hint: {currentQuestion.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          className="btn btn-secondary"
          onClick={() => { setCurrentIndex(prev => Math.max(0, prev - 1)); setPracticeRevealed(false); }}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft size={16} /> Previous
        </button>

        {currentIndex < activeSet.questions.length - 1 ? (
          <button
            className="btn btn-primary"
            onClick={() => { setCurrentIndex(prev => prev + 1); setPracticeRevealed(false); }}
          >
            Next Question <ChevronRight size={16} />
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleCompleteQuiz}>
            Submit Test <Check size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
