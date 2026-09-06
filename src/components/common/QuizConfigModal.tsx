import React, { useState } from 'react';
import type { QuizSet } from '@/types/quiz';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Layers, Shuffle, Clock } from 'lucide-react';

interface Props {
  quizSet: QuizSet;
  mode: 'exam' | 'practice' | 'flashcard';
  onClose: () => void;
  onStartSession: (configuredSet: QuizSet, mode: 'exam' | 'practice' | 'flashcard') => void;
}

export const QuizConfigModal: React.FC<Props> = ({ quizSet, mode, onClose, onStartSession }) => {
  const totalQuestions = quizSet.questions.length;
  
  const [selectedCount, setSelectedCount] = useState<number>(Math.min(50, totalQuestions));
  const [startRange, setStartRange] = useState<number>(1);
  const [randomize, setRandomize] = useState<boolean>(false);
  const [customTime, setCustomTime] = useState<number>(Math.min(50, Math.ceil(Math.min(50, totalQuestions) * 1.2)));

  const presets = [];
  if (totalQuestions > 50) {
    const numBatches = Math.ceil(totalQuestions / 50);
    for (let b = 0; b < numBatches; b++) {
      const start = b * 50 + 1;
      const end = Math.min((b + 1) * 50, totalQuestions);
      presets.push({ label: `Batch ${b + 1} (Q${start}–${end})`, start, count: end - start + 1 });
    }
  }

  const handleApplyPreset = (start: number, count: number) => {
    setStartRange(start);
    setSelectedCount(count);
    setCustomTime(Math.ceil(count * 1.2));
  };

  const handleStart = () => {
    let slicedQuestions = [...quizSet.questions];

    if (!randomize) {
      const startIdx = Math.max(0, startRange - 1);
      slicedQuestions = slicedQuestions.slice(startIdx, startIdx + selectedCount);
    } else {
      slicedQuestions.sort(() => Math.random() - 0.5);
      slicedQuestions = slicedQuestions.slice(0, selectedCount);
    }

    const configuredSet: QuizSet = {
      ...quizSet,
      title: `${quizSet.title} (${slicedQuestions.length} Questions)`,
      timeLimitMinutes: customTime,
      questions: slicedQuestions
    };

    onStartSession(configuredSet, mode);
  };

  return (
    <Dialog open={true} onClose={onClose} className="max-w-xl">
      <DialogHeader>
        <div className="flex items-center gap-2">
          <DialogTitle>Session Setup</DialogTitle>
          <Badge variant="blue" className="uppercase text-[10px]">{mode}</Badge>
        </div>
        <DialogDescription className="line-clamp-1">{quizSet.title}</DialogDescription>
      </DialogHeader>

      <div className="space-y-5 py-2">
        {presets.length > 0 && (
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              Batch Split Presets (50 Questions):
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-1 bg-secondary/30 rounded-lg border">
              {presets.map((p, idx) => (
                <Button
                  key={idx}
                  variant={startRange === p.start && selectedCount === p.count && !randomize ? 'default' : 'outline'}
                  size="sm"
                  className="text-xs h-7"
                  onClick={() => handleApplyPreset(p.start, p.count)}
                >
                  {p.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">
            Number of Questions:
          </label>
          <div className="flex gap-2 flex-wrap">
            {[10, 25, 50, 100, totalQuestions].map(count => {
              if (count > totalQuestions && count !== totalQuestions) return null;
              return (
                <Button
                  key={count}
                  variant={selectedCount === count ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => { setSelectedCount(count); setCustomTime(Math.ceil(count * 1.2)); }}
                >
                  {count === totalQuestions ? `All (${totalQuestions}q)` : `${count} Questions`}
                </Button>
              );
            })}
          </div>
        </div>

        {!randomize && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                Start Question #:
              </label>
              <Input
                type="number"
                min={1}
                max={totalQuestions}
                value={startRange}
                onChange={e => setStartRange(Math.max(1, Math.min(totalQuestions, Number(e.target.value))))}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                Active Range:
              </label>
              <div className="h-9 px-3 flex items-center rounded-md border bg-secondary/50 text-sm font-semibold text-primary">
                Q{startRange} – Q{Math.min(totalQuestions, startRange + selectedCount - 1)}
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">
            Question Order:
          </label>
          <div className="flex gap-2">
            <Button
              variant={!randomize ? 'default' : 'outline'}
              size="sm"
              className="gap-1.5"
              onClick={() => setRandomize(false)}
            >
              <Layers className="w-3.5 h-3.5" /> Sequential Order
            </Button>
            <Button
              variant={randomize ? 'default' : 'outline'}
              size="sm"
              className="gap-1.5"
              onClick={() => setRandomize(true)}
            >
              <Shuffle className="w-3.5 h-3.5" /> Random Order
            </Button>
          </div>
        </div>

        {mode === 'exam' && (
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Exam Timer (Minutes):
            </label>
            <Input
              type="number"
              min={1}
              value={customTime}
              onChange={e => setCustomTime(Number(e.target.value))}
            />
          </div>
        )}
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleStart} className="gap-1.5">
          <Play className="w-4 h-4" /> Start {mode.toUpperCase()} ({selectedCount} Questions)
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
