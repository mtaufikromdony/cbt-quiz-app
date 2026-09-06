import React, { useEffect, useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import type { QuizAttempt, QuizSet } from '@/types/quiz';
import { triggerConfetti } from '@/utils/confetti';
import { soundFx } from '@/utils/sound';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    <div className="max-w-4xl mx-auto px-4 pb-16">
      {/* Result Summary Card */}
      <Card className="p-8 text-center mb-6 shadow-sm">
        <CardContent className="p-0">
          <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
            isPassed ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
          }`}>
            {isPassed ? <Award className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
          </div>

          <h2 className="text-2xl font-bold tracking-tight mb-1">
            {isPassed ? 'Test Passed' : 'Test Completed'}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {isPassed ? 'You reached the 70% passing threshold.' : 'Score was below 70%. Review missed items below.'}
          </p>

          <div className="flex justify-center items-center gap-4 flex-wrap mb-6">
            <div className="px-6 py-3 bg-secondary/50 rounded-lg border text-center min-w-[120px]">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">PERCENTAGE</span>
              <strong className={`text-2xl font-bold ${isPassed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {attempt.percentage}%
              </strong>
            </div>

            <div className="px-6 py-3 bg-secondary/50 rounded-lg border text-center min-w-[120px]">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">POINTS</span>
              <strong className="text-2xl font-bold">{attempt.score} / {attempt.totalPoints}</strong>
            </div>

            <div className="px-6 py-3 bg-secondary/50 rounded-lg border text-center min-w-[120px]">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">TIME SPENT</span>
              <strong className="text-xl font-bold mt-1 block">{formatTime(attempt.timeSpentSeconds)}</strong>
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <Button onClick={onRetake} className="gap-2">
              <RefreshCw className="w-4 h-4" /> Retake Test
            </Button>
            <Button variant="outline" onClick={() => setCurrentView('dashboard')} className="gap-2">
              <Home className="w-4 h-4" /> Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Question Review Card */}
      <Card className="shadow-sm">
        <CardHeader className="pb-4 border-b flex flex-row items-center justify-between flex-wrap gap-3">
          <CardTitle className="text-base font-bold">Question Review</CardTitle>
          
          <Button
            variant={filterMissed ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterMissed(!filterMissed)}
            className="gap-1.5 text-xs"
          >
            <Filter className="w-3.5 h-3.5" />
            {filterMissed ? 'Show All Questions' : `Missed Questions (${attempt.missedQuestionIds.length})`}
          </Button>
        </CardHeader>

        <CardContent className="pt-5 space-y-4">
          {questionsToDisplay.map((q, idx) => {
            const uAns = attempt.answers[q.id];
            const isCorrect = uAns?.isCorrect;

            return (
              <div 
                key={q.id} 
                className={`p-4 rounded-lg border bg-card transition-all ${
                  isCorrect 
                    ? 'border-l-4 border-l-emerald-500 border-border' 
                    : 'border-l-4 border-l-destructive border-border'
                }`}
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="flex items-start gap-2.5">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    )}
                    <h4 className="text-sm font-semibold leading-snug">Q{idx + 1}: {q.prompt}</h4>
                  </div>
                  <Badge variant={isCorrect ? 'success' : 'destructive'} className="text-[10px]">
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </Badge>
                </div>

                {q.options ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = uAns?.selected?.includes(oIdx);
                      const isRightAns = q.correctAnswers.includes(oIdx);

                      let stateClass = "bg-secondary/40 border-border text-muted-foreground";
                      let letterBadge = "bg-secondary text-muted-foreground font-semibold";
                      let textClass = "text-muted-foreground";

                      if (isRightAns) {
                        stateClass = "bg-emerald-500/15 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500/50";
                        letterBadge = "bg-emerald-600 dark:bg-emerald-500 text-white font-bold";
                        textClass = "text-emerald-900 dark:text-emerald-200 font-semibold";
                      } else if (isSelected && !isRightAns) {
                        stateClass = "bg-destructive/15 dark:bg-rose-950/50 border-destructive text-destructive dark:text-rose-200 font-medium ring-1 ring-destructive/50";
                        letterBadge = "bg-destructive text-white font-bold";
                        textClass = "text-destructive dark:text-rose-200 font-medium";
                      }

                      return (
                        <div 
                          key={oIdx} 
                          className={`p-2.5 rounded-md text-xs border flex items-start gap-2 ${stateClass}`}
                        >
                          <span className={`w-5 h-5 inline-flex items-center justify-center rounded text-[11px] shrink-0 ${letterBadge}`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span> 
                          <span className={`flex-1 mt-0.5 ${textClass}`}>{opt}</span>
                          {isSelected && <span className="text-[10px] opacity-80 shrink-0 mt-0.5 font-bold">(Selected)</span>}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-3 bg-secondary/50 rounded-md my-3 text-xs space-y-1">
                    <p className="text-muted-foreground">
                      Your Answer: <strong className={isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}>{uAns?.selected?.join(', ') || '(Blank)'}</strong>
                    </p>
                    {!isCorrect && (
                      <p className="text-emerald-600 dark:text-emerald-400">
                        Correct Answer: <strong>{q.correctAnswers.join(', ')}</strong>
                      </p>
                    )}
                  </div>
                )}

                {q.explanation && (
                  <div className="mt-2.5 p-2.5 rounded-md bg-muted/40 border text-xs text-muted-foreground">
                    <strong className="text-foreground">Explanation:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
