import React, { useState, useEffect, useCallback } from 'react';
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

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
    soundFx.playClick();
  }, []);

  const handleRating = useCallback((_rating: 'again' | 'hard' | 'good' | 'easy') => {
    soundFx.playClick();
    setIsFlipped(false);

    if (cardIndex < activeSet.questions.length - 1) {
      setCardIndex(prev => prev + 1);
    } else {
      soundFx.playFanfare();
      alert(`Flashcard review session completed (${activeSet.questions.length} cards).`);
      setCurrentView('dashboard');
    }
  }, [cardIndex, activeSet.questions.length, setCurrentView]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCardIndex(prev => Math.max(0, prev - 1));
        setIsFlipped(false);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCardIndex(prev => Math.min(activeSet.questions.length - 1, prev + 1));
        setIsFlipped(false);
      } else if (isFlipped) {
        if (e.key === '1') handleRating('again');
        else if (e.key === '2') handleRating('hard');
        else if (e.key === '3') handleRating('good');
        else if (e.key === '4') handleRating('easy');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleRating, isFlipped, activeSet.questions.length]);

  return (
    <div style={{ padding: '0 24px 48px', maxWidth: '760px', margin: '0 auto' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
        <button className="btn btn-ghost" onClick={() => setCurrentView('dashboard')}>
          <ArrowLeft size={16} /> Exit Flashcards
        </button>
        <span className="badge badge-gray">Card {cardIndex + 1} of {activeSet.questions.length}</span>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '4px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', marginBottom: '24px', overflow: 'hidden' }}>
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
          <div className="flashcard-face panel">
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="badge badge-blue">Prompt</span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={(e) => { e.stopPropagation(); soundFx.speak(currentQuestion.prompt); }}
                  title="Speak prompt text"
                >
                  <Volume2 size={18} color="var(--accent-blue)" />
                </button>
              </div>

              <div className="flashcard-content-area">
                <h3 style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  {currentQuestion.prompt}
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <button className="btn btn-primary" onClick={handleFlip}>
                <RotateCw size={16} /> Flip to Reveal Answer
              </button>
            </div>
          </div>

          {/* Card Back */}
          <div className="flashcard-face flashcard-back panel">
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="badge badge-emerald">Correct Answer</span>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    const textToSpeak = currentQuestion.correctAnswers.join(' ') || currentQuestion.explanation || '';
                    soundFx.speak(textToSpeak);
                  }}
                  title="Speak answer"
                >
                  <Volume2 size={18} color="var(--accent-emerald)" />
                </button>
              </div>

              <div className="flashcard-content-area">
                {currentQuestion.options ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {currentQuestion.options.map((opt, idx) => {
                      const isCorrect = currentQuestion.correctAnswers.includes(idx);
                      const letter = String.fromCharCode(65 + idx);
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-sm)',
                            background: isCorrect ? 'rgba(46, 160, 67, 0.12)' : 'var(--bg-input)',
                            border: isCorrect ? '1px solid rgba(46, 160, 67, 0.4)' : '1px solid var(--border-subtle)',
                            color: isCorrect ? '#3fb950' : 'var(--text-secondary)',
                            fontWeight: isCorrect ? 600 : 400,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            lineHeight: 1.5
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              background: isCorrect ? 'var(--accent-emerald)' : 'var(--bg-elevated)',
                              color: isCorrect ? '#ffffff' : 'var(--text-muted)',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              flexShrink: 0,
                              marginTop: '1px'
                            }}
                          >
                            {isCorrect ? <Check size={14} /> : letter}
                          </span>
                          <span style={{ flex: 1 }}>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(46, 160, 67, 0.12)', border: '1px solid rgba(46, 160, 67, 0.3)' }}>
                    <h4 style={{ fontSize: '1.2rem', color: '#3fb950', fontWeight: 600, margin: 0 }}>
                      {currentQuestion.correctAnswers.join(', ')}
                    </h4>
                  </div>
                )}

                {currentQuestion.explanation && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>💡</span> EXPLANATION
                    </div>
                    <p style={{ margin: 0 }}>{currentQuestion.explanation}</p>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <button className="btn btn-secondary btn-sm" onClick={handleFlip}>
                <RotateCw size={15} /> Flip Back to Prompt
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spaced Repetition Rating */}
      {isFlipped && (
        <div className="panel animate-fade-in" style={{ padding: '18px 20px', textAlign: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Rate Recall Difficulty
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Hotkeys: 1 (Again) · 2 (Hard) · 3 (Good) · 4 (Easy)
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('again')} style={{ border: '1px solid var(--accent-rose)', color: 'var(--accent-rose)' }}>
              1 · Again
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('hard')} style={{ border: '1px solid var(--accent-amber)', color: 'var(--accent-amber)' }}>
              2 · Hard
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('good')} style={{ border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}>
              3 · Good
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => handleRating('easy')} style={{ border: '1px solid var(--accent-emerald)', color: '#3fb950' }}>
              4 · Easy
            </button>
          </div>
        </div>
      )}

      {/* Nav Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => { setCardIndex(prev => Math.max(0, prev - 1)); setIsFlipped(false); }}
          disabled={cardIndex === 0}
        >
          <ChevronLeft size={16} /> Previous Card
        </button>

        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Press <kbd style={{ padding: '2px 6px', background: 'var(--bg-elevated)', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontFamily: 'monospace' }}>Space</kbd> to flip
        </span>

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
