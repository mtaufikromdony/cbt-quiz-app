import React, { useState } from 'react';
import type { QuizSet } from '../../types/quiz';
import { Play, X, Layers, Shuffle } from 'lucide-react';

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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '24px'
    }}>
      <div className="panel" style={{ width: '100%', maxWidth: '580px', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Session Setup</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{quizSet.title}</p>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose}><X size={18} /></button>
        </div>

        {presets.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Batch Split Presets (50 Questions):
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxHeight: '120px', overflowY: 'auto' }}>
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  className={`btn btn-sm ${startRange === p.start && selectedCount === p.count && !randomize ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => handleApplyPreset(p.start, p.count)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Number of Questions:
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[10, 25, 50, 100, totalQuestions].map(count => {
              if (count > totalQuestions && count !== totalQuestions) return null;
              return (
                <button
                  key={count}
                  className={`btn btn-sm ${selectedCount === count ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => { setSelectedCount(count); setCustomTime(Math.ceil(count * 1.2)); }}
                >
                  {count === totalQuestions ? `All (${totalQuestions}q)` : `${count} Questions`}
                </button>
              );
            })}
          </div>
        </div>

        {!randomize && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Start Question #:
              </label>
              <input
                type="number"
                min={1}
                max={totalQuestions}
                className="input-field"
                value={startRange}
                onChange={e => setStartRange(Math.max(1, Math.min(totalQuestions, Number(e.target.value))))}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Active Range:
              </label>
              <div style={{ padding: '8px 12px', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                Q{startRange} – Q{Math.min(totalQuestions, startRange + selectedCount - 1)}
              </div>
            </div>
          </div>
        )}

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Question Order:
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className={`btn btn-sm ${!randomize ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setRandomize(false)}
            >
              <Layers size={14} /> Sequential Order
            </button>
            <button
              className={`btn btn-sm ${randomize ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setRandomize(true)}
            >
              <Shuffle size={14} /> Random Order
            </button>
          </div>
        </div>

        {mode === 'exam' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Exam Timer (Minutes):
            </label>
            <input
              type="number"
              min={1}
              className="input-field"
              value={customTime}
              onChange={e => setCustomTime(Number(e.target.value))}
            />
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleStart}>
            <Play size={16} /> Start {mode.toUpperCase()} ({selectedCount} Questions)
          </button>
        </div>
      </div>
    </div>
  );
};
