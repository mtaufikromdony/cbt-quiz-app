import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import type { Question, QuestionType } from '../../types/quiz';
import { BulkImportModal } from './BulkImportModal';
import { ArrowLeft, Save, Plus, Trash2, Upload, CheckCircle2 } from 'lucide-react';

export const QuizEditor: React.FC = () => {
  const { editingSet, addQuizSet, updateQuizSet, setCurrentView } = useQuiz();
  const [showBulkImport, setShowBulkImport] = useState(false);

  // Set Metadata Form
  const [title, setTitle] = useState(editingSet?.title || '');
  const [description, setDescription] = useState(editingSet?.description || '');
  const [category, setCategory] = useState(editingSet?.category || 'General');
  const [tags, setTags] = useState(editingSet?.tags.join(', ') || '');
  const [color] = useState(editingSet?.color || '#6366f1');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(editingSet?.timeLimitMinutes || 10);
  const [questions, setQuestions] = useState<Question[]>(editingSet?.questions || []);

  // New Question Form State
  const [newType, setNewType] = useState<QuestionType>('single');
  const [newPrompt, setNewPrompt] = useState('');
  const [newOptions, setNewOptions] = useState<string[]>(['Option A', 'Option B', 'Option C', 'Option D']);
  const [newCorrectIndices, setNewCorrectIndices] = useState<number[]>([0]);
  const [newTrueFalseAns, setNewTrueFalseAns] = useState<'true' | 'false'>('true');
  const [newFillBlankAns, setNewFillBlankAns] = useState('');
  const [newFlashcardAns, setNewFlashcardAns] = useState('');
  const [newExplanation, setNewExplanation] = useState('');
  const [newHint, setNewHint] = useState('');

  const handleOptionChange = (idx: number, val: string) => {
    const updated = [...newOptions];
    updated[idx] = val;
    setNewOptions(updated);
  };

  const addOptionField = () => {
    if (newOptions.length < 6) {
      setNewOptions([...newOptions, `Option ${String.fromCharCode(65 + newOptions.length)}`]);
    }
  };

  const removeOptionField = (idx: number) => {
    if (newOptions.length > 2) {
      setNewOptions(newOptions.filter((_, i) => i !== idx));
      setNewCorrectIndices(newCorrectIndices.filter(i => i !== idx).map(i => i > idx ? i - 1 : i));
    }
  };

  const toggleCorrectIndex = (idx: number) => {
    if (newType === 'single') {
      setNewCorrectIndices([idx]);
    } else {
      if (newCorrectIndices.includes(idx)) {
        if (newCorrectIndices.length > 1) {
          setNewCorrectIndices(newCorrectIndices.filter(i => i !== idx));
        }
      } else {
        setNewCorrectIndices([...newCorrectIndices, idx]);
      }
    }
  };

  const handleAddQuestion = () => {
    if (!newPrompt.trim()) return;

    let correctAnswers: (number | string)[] = [];
    if (newType === 'single' || newType === 'multiple') {
      correctAnswers = newCorrectIndices;
    } else if (newType === 'true-false') {
      correctAnswers = [newTrueFalseAns];
    } else if (newType === 'fill-blank') {
      correctAnswers = [newFillBlankAns.trim()];
    } else if (newType === 'flashcard') {
      correctAnswers = [newFlashcardAns.trim()];
    }

    const questionObj: Question = {
      id: `q_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      type: newType,
      prompt: newPrompt.trim(),
      options: (newType === 'single' || newType === 'multiple') ? newOptions : (newType === 'true-false' ? ['True', 'False'] : undefined),
      correctAnswers,
      explanation: newExplanation.trim() || undefined,
      hint: newHint.trim() || undefined,
      points: 1
    };

    setQuestions([...questions, questionObj]);

    // Reset new question form
    setNewPrompt('');
    setNewExplanation('');
    setNewHint('');
    setNewFillBlankAns('');
    setNewFlashcardAns('');
  };

  const handleDeleteQuestion = (qId: string) => {
    setQuestions(questions.filter(q => q.id !== qId));
  };

  const handleSaveSet = () => {
    if (!title.trim()) {
      alert('Please provide a Quiz Title.');
      return;
    }

    const parsedTags = tags.split(',').map(t => t.trim()).filter(Boolean);

    if (editingSet) {
      updateQuizSet(editingSet.id, {
        title,
        description,
        category,
        tags: parsedTags,
        color,
        timeLimitMinutes: Number(timeLimitMinutes) || undefined,
        questions
      });
    } else {
      addQuizSet({
        title,
        description,
        category,
        tags: parsedTags,
        color,
        timeLimitMinutes: Number(timeLimitMinutes) || undefined,
        questions
      });
    }

    setCurrentView('dashboard');
  };

  return (
    <div style={{ padding: '0 24px 48px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Top Header Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0' }}>
        <button className="btn btn-ghost" onClick={() => setCurrentView('dashboard')}>
          <ArrowLeft size={20} /> Back to Dashboard
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary" onClick={() => setShowBulkImport(true)}>
            <Upload size={18} color="var(--accent-secondary)" /> Bulk Import
          </button>
          <button className="btn btn-primary" onClick={handleSaveSet}>
            <Save size={18} /> Save Quiz Set
          </button>
        </div>
      </div>

      {/* Quiz Set Details Panel */}
      <div className="glass-panel" style={{ padding: '28px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          {editingSet ? '✏️ Edit Quiz Set Details' : '✨ Create New Quiz Set'}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Quiz Title *</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g., AWS Solutions Architect Associate" 
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Category</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. Cloud Computing, History, Biology" 
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Tags (comma separated)</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. AWS, Cloud, Exam2026" 
              value={tags}
              onChange={e => setTags(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>CBT Exam Time Limit (Minutes)</label>
            <input 
              type="number" 
              className="input-field" 
              placeholder="10" 
              value={timeLimitMinutes}
              onChange={e => setTimeLimitMinutes(Number(e.target.value))}
            />
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Description</label>
          <textarea 
            className="input-field" 
            rows={2} 
            placeholder="Brief overview of what this quiz set covers..." 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Questions List */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Questions ({questions.length})
        </h3>

        {questions.map((q, idx) => (
          <div key={q.id} className="glass-card" style={{ padding: '20px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="badge badge-indigo">Q{idx + 1} • {q.type.toUpperCase()}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{q.prompt}</h4>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={() => handleDeleteQuestion(q.id)} title="Delete Question">
                <Trash2 size={18} color="#f43f5e" />
              </button>
            </div>

            {q.options && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {q.options.map((opt, oIdx) => {
                  const isCorrect = q.correctAnswers.includes(oIdx);
                  return (
                    <span 
                      key={oIdx} 
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        background: isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-input)',
                        color: isCorrect ? '#34d399' : 'var(--text-secondary)',
                        border: isCorrect ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-color)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {isCorrect && <CheckCircle2 size={14} />}
                      {opt}
                    </span>
                  );
                })}
              </div>
            )}

            {q.explanation && (
              <p style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                💡 {q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Add New Question Section */}
      <div className="glass-panel" style={{ padding: '28px' }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={20} color="var(--accent-primary)" /> Add New Question
        </h3>

        {/* Type Selector */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {(['single', 'multiple', 'true-false', 'fill-blank', 'flashcard'] as QuestionType[]).map(t => (
            <button
              key={t}
              className={`btn btn-sm ${newType === t ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setNewType(t)}
            >
              {t === 'single' && 'Single Choice'}
              {t === 'multiple' && 'Multiple Choice'}
              {t === 'true-false' && 'True / False'}
              {t === 'fill-blank' && 'Fill in Blank'}
              {t === 'flashcard' && '3D Flashcard'}
            </button>
          ))}
        </div>

        {/* Question Prompt */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Question Prompt *</label>
          <input
            type="text"
            className="input-field"
            placeholder="Type your question or flashcard prompt..."
            value={newPrompt}
            onChange={e => setNewPrompt(e.target.value)}
          />
        </div>

        {/* Dynamic Inputs Based on Type */}
        {(newType === 'single' || newType === 'multiple') && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Options (Click checkbox/radio to set correct answer):
            </label>
            {newOptions.map((opt, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <input
                  type={newType === 'single' ? 'radio' : 'checkbox'}
                  name="correctOpt"
                  checked={newCorrectIndices.includes(idx)}
                  onChange={() => toggleCorrectIndex(idx)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <input
                  type="text"
                  className="input-field"
                  value={opt}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                />
                {newOptions.length > 2 && (
                  <button className="btn btn-ghost btn-sm" onClick={() => removeOptionField(idx)}>
                    <Trash2 size={16} color="#f43f5e" />
                  </button>
                )}
              </div>
            ))}
            {newOptions.length < 6 && (
              <button className="btn btn-ghost btn-sm" onClick={addOptionField} style={{ color: 'var(--accent-primary)' }}>
                + Add Option Field
              </button>
            )}
          </div>
        )}

        {newType === 'true-false' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Correct Answer:</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className={`btn ${newTrueFalseAns === 'true' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setNewTrueFalseAns('true')}
              >
                True
              </button>
              <button
                className={`btn ${newTrueFalseAns === 'false' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setNewTrueFalseAns('false')}
              >
                False
              </button>
            </div>
          </div>
        )}

        {newType === 'fill-blank' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Correct Answer Word / Text</label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g. Amazon Web Services"
              value={newFillBlankAns}
              onChange={e => setNewFillBlankAns(e.target.value)}
            />
          </div>
        )}

        {newType === 'flashcard' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Flashcard Back (Answer & Key Takeaways)</label>
            <textarea
              className="input-field"
              rows={3}
              placeholder="Detailed answer or explanation shown on back flip..."
              value={newFlashcardAns}
              onChange={e => setNewFlashcardAns(e.target.value)}
            />
          </div>
        )}

        {/* Explanation & Hint */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Explanation (Optional)</label>
            <input
              type="text"
              className="input-field"
              placeholder="Why this answer is correct..."
              value={newExplanation}
              onChange={e => setNewExplanation(e.target.value)}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Hint (Optional)</label>
            <input
              type="text"
              className="input-field"
              placeholder="Clue provided in Practice Mode..."
              value={newHint}
              onChange={e => setNewHint(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleAddQuestion} style={{ width: '100%' }}>
          <Plus size={18} /> Add Question to Set
        </button>
      </div>

      {showBulkImport && (
        <BulkImportModal
          onClose={() => setShowBulkImport(false)}
          targetSetId={editingSet?.id}
        />
      )}
    </div>
  );
};
