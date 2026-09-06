import React, { useEffect, useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import type { QuizAttempt, QuizSet } from '../../types/quiz';
import { triggerConfetti } from '../../utils/confetti';
import { soundFx } from '../../utils/sound';
import { Award, CheckCircle, XCircle, RefreshCw, Home, Filter, AlertTriangle } from 'lucide-react';

interface Props {
  quizSet: QuizSet;
  attempt: QuizAttempt;
  onRetake: () => void;
}

export const QuizResultModal: React.FC<Props> = ({ quizSet, attempt, onRetake }) => {
  const { setCurrentView } = useQuiz();
  const [filterMissed, setFilterMissed] = useState(false);

  const isPassed = attempt.percentage >= 70;

  useEffect(() => {
    if (isPassed) {
      triggerConfetti();
      soundFx.playFanfare();
    } else {
      soundFx.playIncorrect();
    }
  }, [isPassed]);

  const questionsToDisplay = filterMissed
    ? quizSet.questions.filter(q => attempt.missedQuestionIds.includes(q.id))
    : quizSet.questions;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '850px', margin: '0 auto' }}>
      {/* Result Summary */}
      <div className="panel" style={{ padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          margin: '0 auto 14px',
          background: isPassed ? 'rgba(46, 160, 67, 0.15)' : 'rgba(248, 81, 73, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isPassed ? <Award size={28} color="#3fb950" /> : <AlertTriangle size={28} color="#ff7b72" />}
        </div>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>
          {isPassed ? 'Test Passed' : 'Test Completed'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
          {isPassed ? 'You reached the 70% passing threshold.' : 'Score was below 70%. Review missed items below.'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <div style={{ padding: '12px 24px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>PERCENTAGE</span>
            <strong style={{ fontSize: '1.75rem', color: isPassed ? '#3fb950' : '#ff7b72' }}>{attempt.percentage}%</strong>
          </div>

          <div style={{ padding: '12px 24px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>POINTS</span>
            <strong style={{ fontSize: '1.75rem' }}>{attempt.score} / {attempt.totalPoints}</strong>
          </div>

          <div style={{ padding: '12px 24px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>TIME SPENT</span>
            <strong style={{ fontSize: '1.25rem', marginTop: '4px', display: 'block' }}>{formatTime(attempt.timeSpentSeconds)}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={onRetake}>
            <RefreshCw size={16} /> Retake Test
          </button>
          <button className="btn btn-secondary" onClick={() => setCurrentView('dashboard')}>
            <Home size={16} /> Dashboard
          </button>
        </div>
      </div>

      {/* Question Review List */}
      <div className="panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Question Review</h3>
          
          <button
            className={`btn btn-sm ${filterMissed ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterMissed(!filterMissed)}
          >
            <Filter size={14} />
            {filterMissed ? 'Show All Questions' : `Missed Questions (${attempt.missedQuestionIds.length})`}
          </button>
        </div>

        {questionsToDisplay.map((q, idx) => {
          const uAns = attempt.answers[q.id];
          const isCorrect = uAns?.isCorrect;

          return (
            <div 
              key={q.id} 
              className="panel" 
              style={{
                padding: '16px',
                marginBottom: '12px',
                borderLeft: `3px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}`
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {isCorrect ? <CheckCircle size={18} color="#3fb950" /> : <XCircle size={18} color="#ff7b72" />}
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Q{idx + 1}: {q.prompt}</h4>
                </div>
                <span className={`badge ${isCorrect ? 'badge-emerald' : 'badge-rose'}`}>
                  {isCorrect ? 'Correct' : 'Incorrect'}
                </span>
              </div>

              {q.options ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px', margin: '10px 0' }}>
                  {q.options.map((opt, oIdx) => {
                    const isSelected = uAns?.selected?.includes(oIdx);
                    const isRightAns = q.correctAnswers.includes(oIdx);

                    let bg = 'var(--bg-input)';
                    let border = 'var(--border-subtle)';
                    let color = 'var(--text-secondary)';

                    if (isRightAns) {
                      bg = 'rgba(46, 160, 67, 0.12)';
                      border = 'rgba(46, 160, 67, 0.3)';
                      color = '#3fb950';
                    } else if (isSelected && !isRightAns) {
                      bg = 'rgba(248, 81, 73, 0.12)';
                      border = 'rgba(248, 81, 73, 0.3)';
                      color = '#ff7b72';
                    }

                    return (
                      <div 
                        key={oIdx} 
                        style={{
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.85rem',
                          background: bg,
                          border: `1px solid ${border}`,
                          color: color,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>{String.fromCharCode(65 + oIdx)}.</span> {opt}
                        {isSelected && <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>(Selected)</span>}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{ padding: '10px 14px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', margin: '10px 0', fontSize: '0.85rem' }}>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Your Answer: <strong style={{ color: isCorrect ? '#3fb950' : '#ff7b72' }}>{uAns?.selected?.join(', ') || '(Blank)'}</strong>
                  </p>
                  {!isCorrect && (
                    <p style={{ color: '#3fb950', marginTop: '4px' }}>
                      Correct Answer: <strong>{q.correctAnswers.join(', ')}</strong>
                    </p>
                  )}
                </div>
              )}

              {q.explanation && (
                <div style={{ marginTop: '8px', padding: '8px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', fontSize: '0.85rem', border: '1px solid var(--border-subtle)' }}>
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
