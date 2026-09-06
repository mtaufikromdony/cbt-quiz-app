import React, { useState, useEffect, useCallback } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { soundFx } from '@/utils/sound';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, RotateCw, Volume2, Check, ChevronRight, ChevronLeft } from 'lucide-react';

export const FlashcardRunner: React.FC = () => {
  const { activeSet, setCurrentView, activeSession, saveActiveSession, clearActiveSession } = useQuiz();

  if (!activeSet || activeSet.questions.length === 0) {
    return (
      <div className="p-12 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">No Flashcards Available</h2>
        <Button onClick={() => setCurrentView('dashboard')}>
          Dashboard
        </Button>
      </div>
    );
  }

  const isResuming = activeSession && activeSession.type === 'flashcard' && activeSession.activeSet.id === activeSet.id;
  const [cardIndex, setCardIndex] = useState(() => isResuming ? (activeSession?.currentIndex || 0) : 0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!activeSet) return;
    saveActiveSession({
      type: 'flashcard',
      activeSet,
      runnerMode: 'practice',
      currentIndex: cardIndex,
      userAnswers: {},
      flaggedIds: [],
      lastUpdated: Date.now(),
    });
  }, [activeSet, cardIndex]);

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
      clearActiveSession();
      soundFx.playFanfare();
      alert(`Flashcard review session completed (${activeSet.questions.length} cards).`);
      setCurrentView('dashboard');
    }
  }, [cardIndex, activeSet.questions.length, setCurrentView, clearActiveSession]);

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

  const progressPercent = ((cardIndex + 1) / activeSet.questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 pb-16">
      {/* Top Header */}
      <div className="flex justify-between items-center my-5">
        <Button variant="ghost" size="sm" onClick={() => setCurrentView('dashboard')} className="gap-1.5">
          <ArrowLeft className="w-4 h-4" /> Exit Flashcards
        </Button>
        <Badge variant="secondary" className="font-medium">
          Card {cardIndex + 1} of {activeSet.questions.length}
        </Badge>
      </div>

      {/* Progress Bar */}
      <Progress value={progressPercent} className="h-1.5 mb-6" />

      {/* 3D Flip Flashcard */}
      <div className="flashcard-perspective mb-6">
        <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Card Front */}
          <div className="flashcard-face bg-card border shadow-sm">
            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="blue">Prompt</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary"
                  onClick={(e) => { e.stopPropagation(); soundFx.speak(currentQuestion.prompt); }}
                  title="Speak prompt text"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="flashcard-content-area">
                <h3 className="text-xl font-semibold leading-relaxed text-foreground m-0">
                  {currentQuestion.prompt}
                </h3>
              </div>
            </div>

            <div className="flex justify-center pt-4 border-t">
              <Button onClick={handleFlip} className="gap-2">
                <RotateCw className="w-4 h-4" /> Flip to Reveal Answer
              </Button>
            </div>
          </div>

          {/* Card Back */}
          <div className="flashcard-face flashcard-back bg-card border shadow-sm">
            <div className="flex flex-col flex-1 min-h-0">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="success">Correct Answer</Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    const textToSpeak = currentQuestion.correctAnswers.join(' ') || currentQuestion.explanation || '';
                    soundFx.speak(textToSpeak);
                  }}
                  title="Speak answer"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="flashcard-content-area">
                {currentQuestion.options ? (
                  <div className="flex flex-col gap-2">
                    {currentQuestion.options.map((opt, idx) => {
                      const isCorrect = currentQuestion.correctAnswers.includes(idx);
                      const letter = String.fromCharCode(65 + idx);
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg border text-sm flex items-start gap-3 leading-relaxed transition-colors ${
                            isCorrect 
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200 font-medium' 
                              : 'bg-muted/40 border-border text-muted-foreground'
                          }`}
                        >
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                              isCorrect 
                                ? 'bg-emerald-600 text-white shadow-sm' 
                                : 'bg-secondary text-muted-foreground'
                            }`}
                          >
                            {isCorrect ? <Check className="w-3.5 h-3.5" /> : letter}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 m-0">
                      {currentQuestion.correctAnswers.join(', ')}
                    </h4>
                  </div>
                )}

                {currentQuestion.explanation && (
                  <div className="mt-4 p-3.5 rounded-lg bg-secondary/50 border text-sm text-muted-foreground leading-relaxed">
                    <div className="font-semibold text-foreground mb-1 text-xs flex items-center gap-1.5 uppercase tracking-wider">
                      <span>💡</span> Explanation
                    </div>
                    <p className="m-0 text-xs sm:text-sm">{currentQuestion.explanation}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center pt-4 border-t">
              <Button variant="secondary" size="sm" onClick={handleFlip} className="gap-2">
                <RotateCw className="w-4 h-4" /> Flip Back to Prompt
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spaced Repetition Rating Panel */}
      {isFlipped && (
        <Card className="mb-6 shadow-sm border bg-card/60 backdrop-blur animate-in fade-in">
          <CardContent className="p-4 sm:p-5 text-center">
            <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
              <span className="text-sm font-semibold text-foreground">
                Rate Recall Difficulty
              </span>
              <span className="text-xs text-muted-foreground">
                Hotkeys: 1 (Again) · 2 (Hard) · 3 (Good) · 4 (Easy)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleRating('again')} 
                className="border-rose-500/40 text-rose-600 hover:bg-rose-500/10 dark:text-rose-400"
              >
                1 · Again
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleRating('hard')} 
                className="border-amber-500/40 text-amber-600 hover:bg-amber-500/10 dark:text-amber-400"
              >
                2 · Hard
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleRating('good')} 
                className="border-blue-500/40 text-blue-600 hover:bg-blue-500/10 dark:text-blue-400"
              >
                3 · Good
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleRating('easy')} 
                className="border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400"
              >
                4 · Easy
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Nav Controls */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setCardIndex(prev => Math.max(0, prev - 1)); setIsFlipped(false); }}
          disabled={cardIndex === 0}
          className="gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" /> Previous Card
        </Button>

        <span className="text-xs text-muted-foreground">
          Press <kbd className="px-1.5 py-0.5 rounded bg-muted border font-mono text-[11px]">Space</kbd> to flip
        </span>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setCardIndex(prev => Math.min(activeSet.questions.length - 1, prev + 1)); setIsFlipped(false); }}
          disabled={cardIndex === activeSet.questions.length - 1}
          className="gap-1.5"
        >
          Next Card <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
