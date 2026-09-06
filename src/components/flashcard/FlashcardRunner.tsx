import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { soundFx } from '../../utils/sound';
import { ArrowLeft, RotateCw, Volume2, Check, ChevronRight, ChevronLeft } from 'lucide-react';

export const FlashcardRunner: React.FC = () => {
  const { activeSet, setCurrentView } = useQuiz();

  if (!activeSet || activeSet.questions.length === 0) {
    return (
      <div style={{ padding: '48px', textAlign: 'center' }}>
        <h2>No Flashcards Available</h2>
        <button className="btn btn-primary" onClick={() => setCurrentView('dashboard')} style={{ marginTop: '16px' }}>
          Dashboard
        </button>
      </div>
    );
  }

  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentQuestion = activeSet.questions[cardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    soundFx.playClick();
  };

  const handleRating = (_rating: 'again' | 'hard' | 'good' | 'easy') => {
    soundFx.playClick();
    setIsFlipped(false);

    if (cardIndex < activeSet.questions.length - 1) {
      setCardIndex(prev => prev + 1);
    } else {
      soundFx.playFanfare();
      alert(`Flashcard review session completed (${activeSet.questions.length} cards).`);
      setCurrentView('dashboard');
    }
  };

  return (
    <div style={{ padding: '0 24px 48px', maxWidth: '720px', margin: '0 auto' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
        <button className="btn btn-ghost" onClick={() => setCurrentView('dashboard')}>
          <ArrowLeft size={16} /> Exit Flashcards
        </button>
        <span className="badge badge-gray">Card {cardIndex + 1} of {activeSet.questions.length}</span>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '4px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', marginBottom: '28px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${((cardIndex + 1) / activeSet.questions.length) * 100}%`,
          background: 'var(--accent-blue)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* 3D Flip Flashcard */}
      <div className="flashcard-perspective" style={{ marginBottom: '24px' }}>
        <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Card Front */}
          <div className="flashcard-face panel" style={{ background: 'var(--bg-surface)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge badge-blue">Prompt</span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={(e) => { e.stopPropagation(); soundFx.speak(currentQuestion.prompt); }}
                  title="Speak text"
                >
                  <Volume2 size={18} color="var(--accent-blue)" />
                </button>
              </div>

              <h3 style={{ fontSize: '1.25rem', lineHeight: 1.5, margin: '20px 0', fontWeight: 600 }}>
                {currentQuestion.prompt}
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={handleFlip}>
                <RotateCw size={16} /> Flip Card
              </button>
            </div>
          </div>

          {/* Card Back */}
          <div className="flashcard-face flashcard-back panel" style={{ background: 'var(--bg-surface)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge badge-emerald">Answer</span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    const textToSpeak = currentQuestion.correctAnswers.join(' ') || currentQuestion.explanation || '';
                    soundFx.speak(textToSpeak);
                  }}
                >
                  <Volume2 size={18} color="var(--accent-emerald)" />
                </button>
              </div>

              <div style={{ margin: '14px 0' }}>
                {currentQuestion.options ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {currentQuestion.options.map((opt, idx) => {
                      const isCorrect = currentQuestion.correctAnswers.includes(idx);
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: '8px 12px',
                            borderRadius: 'var(--radius-sm)',
                            background: isCorrect ? 'rgba(46, 160, 67, 0.12)' : 'var(--bg-input)',
                            color: isCorrect ? '#3fb950' : 'var(--text-secondary)',
                            fontWeight: isCorrect ? 600 : 400,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          {isCorrect && <Check size={14} />}
                          {String.fromCharCode(65 + idx)}. {opt}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <h4 style={{ fontSize: '1.15rem', color: '#3fb950', marginBottom: '10px', fontWeight: 600 }}>
                    {currentQuestion.correctAnswers.join(', ')}
                  </h4>
                )}

                {currentQuestion.explanation && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '14px', background: 'var(--bg-input)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    Explanation: {currentQuestion.explanation}
                  </p>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="btn btn-secondary btn-sm" onClick={handleFlip}>
                <RotateCw size={15} /> Flip Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spaced Repetition Rating */}
      {isFlipped && (
        <div className="panel animate-fade-in" style={{ padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
            Rate your recall difficulty:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('again')} style={{ border: '1px solid var(--accent-rose)', color: 'var(--accent-rose)' }}>
              Again
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('hard')} style={{ border: '1px solid var(--accent-amber)', color: 'var(--accent-amber)' }}>
              Hard
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('good')} style={{ border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}>
              Good
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('easy')} style={{ border: '1px solid var(--accent-emerald)', color: '#3fb950' }}>
              Easy
            </button>
          </div>
        </div>
      )}

      {/* Nav Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => { setCardIndex(prev => Math.max(0, prev - 1)); setIsFlipped(false); }}
          disabled={cardIndex === 0}
        >
          <ChevronLeft size={16} /> Previous Card
        </button>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => { setCardIndex(prev => Math.min(activeSet.questions.length - 1, prev + 1)); setIsFlipped(false); }}
          disabled={cardIndex === activeSet.questions.length - 1}
        >
          Next Card <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
