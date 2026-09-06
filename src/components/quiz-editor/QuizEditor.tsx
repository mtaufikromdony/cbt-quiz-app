import React, { useState, useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import type { Question, QuestionType } from '../../types/quiz';
import { BulkImportModal } from './BulkImportModal';
import { ArrowLeft, Save, Plus, Trash2, Upload, Edit3, Check, X } from 'lucide-react';

export const QuizEditor: React.FC = () => {
  const { editingSet, addQuizSet, updateQuizSet, setCurrentView } = useQuiz();
  const [showBulkImport, setShowBulkImport] = useState(false);

  // Set Metadata Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General');
  const [tags, setTags] = useState('');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Sync state whenever editingSet changes
  useEffect(() => {
    if (editingSet) {
      setTitle(editingSet.title || '');
      setDescription(editingSet.description || '');
      setCategory(editingSet.category || 'General');
      setTags(editingSet.tags ? editingSet.tags.join(', ') : '');
      setTimeLimitMinutes(editingSet.timeLimitMinutes || 10);
      setQuestions(editingSet.questions || []);
    } else {
      setTitle('');
      setDescription('');
      setCategory('General');
      setTags('');
      setTimeLimitMinutes(10);
      setQuestions([]);
    }
  }, [editingSet]);

  // Inline Question Editing State
  const [editingQId, setEditingQId] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [editType, setEditType] = useState<QuestionType>('single');
  const [editOptions, setEditOptions] = useState<string[]>([]);
  const [editCorrectAnswers, setEditCorrectAnswers] = useState<(number | string)[]>([]);
  const [editExplanation, setEditExplanation] = useState('');
  const [editHint, setEditHint] = useState('');

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

  // Start Inline Editing Question
  const startEditingQuestion = (q: Question) => {
    setEditingQId(q.id);
    setEditPrompt(q.prompt);
    setEditType(q.type);
    setEditOptions(q.options ? [...q.options] : ['Option A', 'Option B', 'Option C', 'Option D']);
    setEditCorrectAnswers(q.correctAnswers ? [...q.correctAnswers] : [0]);
    setEditExplanation(q.explanation || '');
    setEditHint(q.hint || '');
  };

  const saveEditedQuestion = () => {
    if (!editPrompt.trim() || !editingQId) return;

    setQuestions(prev => prev.map(q => {
      if (q.id === editingQId) {
        return {
          ...q,
          prompt: editPrompt.trim(),
          type: editType,
          options: (editType === 'single' || editType === 'multiple') ? editOptions : (editType === 'true-false' ? ['True', 'False'] : undefined),
          correctAnswers: editCorrectAnswers,
          explanation: editExplanation.trim() || undefined,
          hint: editHint.trim() || undefined
        };
      }
      return q;
    }));

    setEditingQId(null);
  };

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
      alert('Please enter a Quiz Title.');
      return;
    }

    const parsedTags = tags.split(',').map(t => t.trim()).filter(Boolean);

    if (editingSet) {
      updateQuizSet(editingSet.id, {
        title,
        description,
        category,
        tags: parsedTags,
        timeLimitMinutes: Number(timeLimitMinutes) || undefined,
        questions
      });
    } else {
      addQuizSet({
        title,
        description,
        category,
        tags: parsedTags,
        timeLimitMinutes: Number(timeLimitMinutes) || undefined,
        questions
      });
    }

    setCurrentView('dashboard');
  };

  return (
    <div style={{ padding: '0 24px 48px', maxWidth: '950px', margin: '0 auto' }}>
      {/* Top Header Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
        <button className="btn btn-ghost" onClick={() => setCurrentView('dashboard')}>
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-secondary" onClick={() => setShowBulkImport(true)}>
            <Upload size={15} /> Bulk Import
          </button>
          <button className="btn btn-primary" onClick={handleSaveSet}>
            <Save size={16} /> Save Quiz Set
          </button>
        </div>
      </div>

      {/* Quiz Set Details Panel */}
      <div className="panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
          {editingSet ? 'Edit Quiz Set Details' : 'Create New Quiz Set'}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Quiz Title *</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. AWS Solutions Architect Practice" 
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Category</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. Cloud Computing, Science, History" 
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Tags (comma separated)</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. AWS, Cloud, Exam" 
              value={tags}
              onChange={e => setTags(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Exam Time Limit (Minutes)</label>
            <input 
              type="number" 
              className="input-field" 
              placeholder="10" 
              value={timeLimitMinutes}
              onChange={e => setTimeLimitMinutes(Number(e.target.value))}
            />
          </div>
        </div>

        <div style={{ marginTop: '14px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Description</label>
          <textarea 
            className="input-field" 
            rows={2} 
            placeholder="Overview of what this quiz set covers..." 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Questions List with Inline Editing */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Questions ({questions.length})
        </h3>

        {questions.map((q, idx) => (
          <div key={q.id} className="panel" style={{ padding: '18px', marginBottom: '12px' }}>
            {editingQId === q.id ? (
              /* Inline Question Edit Form */
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-blue">Editing Question {idx + 1}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditingQId(null)}>
                      <X size={14} /> Cancel
                    </button>
                    <button className="btn btn-primary btn-sm" onClick={saveEditedQuestion}>
                      <Check size={14} /> Save Question
                    </button>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>Question Prompt</label>
                  <input
                    type="text"
                    className="input-field"
                    value={editPrompt}
                    onChange={e => setEditPrompt(e.target.value)}
                  />
                </div>

                {(editType === 'single' || editType === 'multiple') && editOptions && (
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>Options & Correct Answer Selection:</label>
                    {editOptions.map((opt, oIdx) => (
                      <div key={oIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <input
                          type={editType === 'single' ? 'radio' : 'checkbox'}
                          name="editCorrect"
                          checked={editCorrectAnswers.includes(oIdx)}
                          onChange={() => {
                            if (editType === 'single') setEditCorrectAnswers([oIdx]);
                            else {
                              if (editCorrectAnswers.includes(oIdx)) {
                                setEditCorrectAnswers(editCorrectAnswers.filter(i => i !== oIdx));
                              } else {
                                setEditCorrectAnswers([...editCorrectAnswers, oIdx]);
                              }
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="input-field"
                          value={opt}
                          onChange={e => {
                            const updated = [...editOptions];
                            updated[oIdx] = e.target.value;
                            setEditOptions(updated);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Explanation</label>
                    <input
                      type="text"
                      className="input-field"
                      value={editExplanation}
                      onChange={e => setEditExplanation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Hint</label>
                    <input
                      type="text"
                      className="input-field"
                      value={editHint}
                      onChange={e => setEditHint(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Question Summary View */
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span className="badge badge-blue">Q{idx + 1} • {q.type.toUpperCase()}</span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{q.prompt}</h4>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button className="btn btn-ghost btn-sm" onClick={() => startEditingQuestion(q)} title="Edit Question">
                      <Edit3 size={15} color="var(--accent-blue)" />
                    </button>
                    <button className="btn btn-ghost btn-sm" onClick={() => handleDeleteQuestion(q.id)} title="Delete Question">
                      <Trash2 size={15} color="var(--accent-rose)" />
                    </button>
                  </div>
                </div>

                {q.options && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = q.correctAnswers.includes(oIdx);
                      return (
                        <span 
                          key={oIdx} 
                          style={{
                            padding: '3px 10px',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8rem',
                            background: isCorrect ? 'rgba(46, 160, 67, 0.12)' : 'var(--bg-input)',
                            color: isCorrect ? '#3fb950' : 'var(--text-secondary)',
                            border: isCorrect ? '1px solid rgba(46, 160, 67, 0.3)' : '1px solid var(--border-subtle)',
                          }}
                        >
                          {String.fromCharCode(65 + oIdx)}. {opt}
                        </span>
                      );
                    })}
                  </div>
                )}

                {q.explanation && (
                  <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Explanation: {q.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Question Form */}
      <div className="panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Plus size={18} color="var(--accent-blue)" /> Add Question
        </h3>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
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

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Question Prompt *</label>
          <input
            type="text"
            className="input-field"
            placeholder="Type question prompt..."
            value={newPrompt}
            onChange={e => setNewPrompt(e.target.value)}
          />
        </div>

        {(newType === 'single' || newType === 'multiple') && (
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
              Options (Select radio/checkbox for correct answer):
            </label>
            {newOptions.map((opt, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <input
                  type={newType === 'single' ? 'radio' : 'checkbox'}
                  name="correctOpt"
                  checked={newCorrectIndices.includes(idx)}
                  onChange={() => toggleCorrectIndex(idx)}
                />
                <input
                  type="text"
                  className="input-field"
                  value={opt}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                />
                {newOptions.length > 2 && (
                  <button className="btn btn-ghost btn-sm" onClick={() => removeOptionField(idx)}>
                    <Trash2 size={15} color="var(--accent-rose)" />
                  </button>
                )}
              </div>
            ))}
            {newOptions.length < 6 && (
              <button className="btn btn-ghost btn-sm" onClick={addOptionField} style={{ color: 'var(--accent-blue)' }}>
                + Add Option Field
              </button>
            )}
          </div>
        )}

        {newType === 'true-false' && (
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Correct Answer:</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className={`btn btn-sm ${newTrueFalseAns === 'true' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setNewTrueFalseAns('true')}
              >
                True
              </button>
              <button
                className={`btn btn-sm ${newTrueFalseAns === 'false' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setNewTrueFalseAns('false')}
              >
                False
              </button>
            </div>
          </div>
        )}

        {newType === 'fill-blank' && (
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Correct Answer Text</label>
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
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Flashcard Back (Answer & Key Notes)</label>
            <textarea
              className="input-field"
              rows={3}
              placeholder="Answer shown on reverse card flip..."
              value={newFlashcardAns}
              onChange={e => setNewFlashcardAns(e.target.value)}
            />
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-secondary)' }}>Explanation (Optional)</label>
            <input
              type="text"
              className="input-field"
              placeholder="Explanation for correct answer..."
              value={newExplanation}
              onChange={e => setNewExplanation(e.target.value)}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-secondary)' }}>Hint (Optional)</label>
            <input
              type="text"
              className="input-field"
              placeholder="Hint provided during practice..."
              value={newHint}
              onChange={e => setNewHint(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleAddQuestion} style={{ width: '100%' }}>
          <Plus size={16} /> Add Question to Set
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
