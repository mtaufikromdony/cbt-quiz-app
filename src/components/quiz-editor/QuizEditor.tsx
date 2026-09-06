import React, { useState, useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import type { Question, QuestionType } from '../../types/quiz';
import { BulkImportModal } from './BulkImportModal';
import { ArrowLeft, Save, Plus, Trash2, Upload, Edit3, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

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
  const [editTrueFalseAns, setEditTrueFalseAns] = useState<'true' | 'false'>('true');
  const [editFillBlankAns, setEditFillBlankAns] = useState('');
  const [editFlashcardAns, setEditFlashcardAns] = useState('');

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

    if (q.type === 'true-false') {
      setEditTrueFalseAns(q.correctAnswers?.[0] === 'false' ? 'false' : 'true');
    } else if (q.type === 'fill-blank') {
      setEditFillBlankAns(String(q.correctAnswers?.[0] || ''));
    } else if (q.type === 'flashcard') {
      setEditFlashcardAns(String(q.correctAnswers?.[0] || ''));
    }
  };

  const handleEditOptionChange = (idx: number, val: string) => {
    const updated = [...editOptions];
    updated[idx] = val;
    setEditOptions(updated);
  };

  const addEditOptionField = () => {
    if (editOptions.length < 10) {
      const letter = String.fromCharCode(65 + editOptions.length);
      setEditOptions([...editOptions, `Option ${letter}`]);
    }
  };

  const removeEditOptionField = (idx: number) => {
    if (editOptions.length > 2) {
      setEditOptions(editOptions.filter((_, i) => i !== idx));
      setEditCorrectAnswers(
        editCorrectAnswers
          .filter(ans => ans !== idx)
          .map(ans => (typeof ans === 'number' && ans > idx ? ans - 1 : ans))
      );
    }
  };

  const toggleEditCorrectIndex = (idx: number) => {
    if (editType === 'single') {
      setEditCorrectAnswers([idx]);
    } else {
      if (editCorrectAnswers.includes(idx)) {
        if (editCorrectAnswers.length > 1) {
          setEditCorrectAnswers(editCorrectAnswers.filter(i => i !== idx));
        }
      } else {
        setEditCorrectAnswers([...editCorrectAnswers, idx]);
      }
    }
  };

  const saveEditedQuestion = () => {
    if (!editPrompt.trim() || !editingQId) return;

    let finalCorrectAnswers = editCorrectAnswers;
    if (editType === 'single' || editType === 'multiple') {
      if (finalCorrectAnswers.length === 0) {
        finalCorrectAnswers = [0];
      }
    } else if (editType === 'true-false') {
      finalCorrectAnswers = [editTrueFalseAns];
    } else if (editType === 'fill-blank') {
      finalCorrectAnswers = [editFillBlankAns.trim()];
    } else if (editType === 'flashcard') {
      finalCorrectAnswers = [editFlashcardAns.trim()];
    }

    setQuestions(prev => prev.map(q => {
      if (q.id === editingQId) {
        return {
          ...q,
          prompt: editPrompt.trim(),
          type: editType,
          options: (editType === 'single' || editType === 'multiple') 
            ? editOptions 
            : (editType === 'true-false' ? ['True', 'False'] : undefined),
          correctAnswers: finalCorrectAnswers,
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
    if (newOptions.length < 10) {
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
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Button>

        <div className="flex items-center gap-2.5">
          <Button variant="secondary" onClick={() => setShowBulkImport(true)} className="gap-2">
            <Upload className="h-4 w-4" /> Bulk Import
          </Button>
          <Button onClick={handleSaveSet} className="gap-2">
            <Save className="h-4 w-4" /> Save Quiz Set
          </Button>
        </div>
      </div>

      {/* Quiz Set Details Card */}
      <Card className="shadow-xs border-border/80">
        <CardHeader className="px-6 pt-6 pb-4">
          <CardTitle className="text-xl font-bold tracking-tight">
            {editingSet ? 'Edit Quiz Set Details' : 'Create New Quiz Set'}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quiz Title *</label>
              <Input 
                type="text" 
                placeholder="e.g. AWS Solutions Architect Practice" 
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</label>
              <Input 
                type="text" 
                placeholder="e.g. Cloud Computing, Science" 
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tags (comma separated)</label>
              <Input 
                type="text" 
                placeholder="e.g. AWS, Cloud, Exam" 
                value={tags}
                onChange={e => setTags(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Exam Time Limit (Mins)</label>
              <Input 
                type="number" 
                placeholder="10" 
                value={timeLimitMinutes}
                onChange={e => setTimeLimitMinutes(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description</label>
            <textarea 
              className="flex min-h-[70px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
              rows={2} 
              placeholder="Overview of what this quiz set covers..." 
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Questions List with Inline Editing */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          Questions <Badge variant="secondary">{questions.length}</Badge>
        </h3>

        {questions.map((q, idx) => (
          <Card key={q.id} className="p-5 shadow-xs border-border/70">
            {editingQId === q.id ? (
              /* Inline Question Edit Form */
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <Badge variant="blue">Editing Question {idx + 1}</Badge>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" onClick={() => setEditingQId(null)} className="h-8 gap-1">
                      <X className="h-3.5 w-3.5" /> Cancel
                    </Button>
                    <Button size="sm" onClick={saveEditedQuestion} className="h-8 gap-1">
                      <Check className="h-3.5 w-3.5" /> Save Question
                    </Button>
                  </div>
                </div>

                {/* Question Type Switcher */}
                <div className="flex gap-2 flex-wrap">
                  {(['single', 'multiple', 'true-false', 'fill-blank', 'flashcard'] as QuestionType[]).map(t => (
                    <Button
                      key={t}
                      variant={editType === t ? 'default' : 'secondary'}
                      size="sm"
                      onClick={() => {
                        setEditType(t);
                        if (t === 'true-false') {
                          setEditTrueFalseAns('true');
                        } else if (t === 'single' && editCorrectAnswers.length > 1) {
                          setEditCorrectAnswers([editCorrectAnswers[0]]);
                        }
                      }}
                    >
                      {t === 'single' && 'Single Choice'}
                      {t === 'multiple' && 'Multiple Choice'}
                      {t === 'true-false' && 'True / False'}
                      {t === 'fill-blank' && 'Fill in Blank'}
                      {t === 'flashcard' && '3D Flashcard'}
                    </Button>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Question Prompt</label>
                  <Input
                    type="text"
                    value={editPrompt}
                    onChange={e => setEditPrompt(e.target.value)}
                  />
                </div>

                {(editType === 'single' || editType === 'multiple') && editOptions && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Options & Correct Answer Selection:
                      </label>
                      <span className="text-xs text-muted-foreground">
                        {editOptions.length} of 10 options
                      </span>
                    </div>
                    {editOptions.map((opt, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2.5">
                        <input
                          type={editType === 'single' ? 'radio' : 'checkbox'}
                          name="editCorrect"
                          className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                          checked={editCorrectAnswers.includes(oIdx)}
                          onChange={() => toggleEditCorrectIndex(oIdx)}
                        />
                        <span className="w-6 h-6 rounded-md bg-muted text-foreground flex items-center justify-center text-xs font-bold shrink-0 border border-border">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <Input
                          type="text"
                          value={opt}
                          onChange={e => handleEditOptionChange(oIdx, e.target.value)}
                        />
                        {editOptions.length > 2 && (
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeEditOptionField(oIdx)} 
                            className="h-9 w-9 text-destructive shrink-0 hover:bg-destructive/10"
                            title="Remove option"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    {editOptions.length < 10 && (
                      <Button variant="outline" size="sm" onClick={addEditOptionField} className="gap-1.5 text-xs">
                        <Plus className="h-3.5 w-3.5" /> Add Option Field ({String.fromCharCode(65 + editOptions.length)})
                      </Button>
                    )}
                  </div>
                )}

                {editType === 'true-false' && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Correct Answer:</label>
                    <div className="flex gap-2">
                      <Button
                        variant={editTrueFalseAns === 'true' ? 'default' : 'secondary'}
                        size="sm"
                        onClick={() => setEditTrueFalseAns('true')}
                      >
                        True
                      </Button>
                      <Button
                        variant={editTrueFalseAns === 'false' ? 'default' : 'secondary'}
                        size="sm"
                        onClick={() => setEditTrueFalseAns('false')}
                      >
                        False
                      </Button>
                    </div>
                  </div>
                )}

                {editType === 'fill-blank' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Correct Answer Text</label>
                    <Input
                      type="text"
                      placeholder="e.g. Amazon Web Services"
                      value={editFillBlankAns}
                      onChange={e => setEditFillBlankAns(e.target.value)}
                    />
                  </div>
                )}

                {editType === 'flashcard' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Flashcard Back (Answer & Key Notes)</label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      rows={3}
                      placeholder="Answer shown on reverse card flip..."
                      value={editFlashcardAns}
                      onChange={e => setEditFlashcardAns(e.target.value)}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explanation</label>
                    <Input
                      type="text"
                      value={editExplanation}
                      onChange={e => setEditExplanation(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hint</label>
                    <Input
                      type="text"
                      value={editHint}
                      onChange={e => setEditHint(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Question Summary View */
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="blue">Q{idx + 1} • {q.type.toUpperCase()}</Badge>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground pt-1">{q.prompt}</h4>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Button variant="ghost" size="icon" onClick={() => startEditingQuestion(q)} title="Edit Question" className="h-8 w-8 text-blue-500 hover:text-blue-600">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteQuestion(q.id)} title="Delete Question" className="h-8 w-8 text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {q.options && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = q.correctAnswers.includes(oIdx);
                      return (
                        <span 
                          key={oIdx} 
                          className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                            isCorrect 
                              ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30 font-semibold' 
                              : 'bg-muted/40 text-muted-foreground border-border'
                          }`}
                        >
                          {String.fromCharCode(65 + oIdx)}. {opt}
                        </span>
                      );
                    })}
                  </div>
                )}

                {q.explanation && (
                  <p className="text-xs text-muted-foreground pt-1 italic">
                    <span className="font-semibold text-foreground not-italic">Explanation:</span> {q.explanation}
                  </p>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Add Question Form */}
      <Card className="p-6 shadow-xs border-border/80 space-y-5">
        <h3 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" /> Add Question
        </h3>

        <div className="flex gap-2 flex-wrap">
          {(['single', 'multiple', 'true-false', 'fill-blank', 'flashcard'] as QuestionType[]).map(t => (
            <Button
              key={t}
              variant={newType === t ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setNewType(t)}
            >
              {t === 'single' && 'Single Choice'}
              {t === 'multiple' && 'Multiple Choice'}
              {t === 'true-false' && 'True / False'}
              {t === 'fill-blank' && 'Fill in Blank'}
              {t === 'flashcard' && '3D Flashcard'}
            </Button>
          ))}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Question Prompt *</label>
          <Input
            type="text"
            placeholder="Type question prompt..."
            value={newPrompt}
            onChange={e => setNewPrompt(e.target.value)}
          />
        </div>

        {(newType === 'single' || newType === 'multiple') && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Options (Select radio/checkbox for correct answer):
              </label>
              <span className="text-xs text-muted-foreground">
                {newOptions.length} of 10 options
              </span>
            </div>
            {newOptions.map((opt, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <input
                  type={newType === 'single' ? 'radio' : 'checkbox'}
                  name="correctOpt"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                  checked={newCorrectIndices.includes(idx)}
                  onChange={() => toggleCorrectIndex(idx)}
                />
                <span className="w-6 h-6 rounded-md bg-muted text-foreground flex items-center justify-center text-xs font-bold shrink-0 border border-border">
                  {String.fromCharCode(65 + idx)}
                </span>
                <Input
                  type="text"
                  value={opt}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                />
                {newOptions.length > 2 && (
                  <Button variant="ghost" size="icon" onClick={() => removeOptionField(idx)} className="h-9 w-9 text-destructive shrink-0 hover:bg-destructive/10">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {newOptions.length < 10 && (
              <Button variant="outline" size="sm" onClick={addOptionField} className="gap-1.5 text-xs">
                <Plus className="h-3.5 w-3.5" /> Add Option Field ({String.fromCharCode(65 + newOptions.length)})
              </Button>
            )}
          </div>
        )}

        {newType === 'true-false' && (
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Correct Answer:</label>
            <div className="flex gap-2">
              <Button
                variant={newTrueFalseAns === 'true' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setNewTrueFalseAns('true')}
              >
                True
              </Button>
              <Button
                variant={newTrueFalseAns === 'false' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setNewTrueFalseAns('false')}
              >
                False
              </Button>
            </div>
          </div>
        )}

        {newType === 'fill-blank' && (
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Correct Answer Text</label>
            <Input
              type="text"
              placeholder="e.g. Amazon Web Services"
              value={newFillBlankAns}
              onChange={e => setNewFillBlankAns(e.target.value)}
            />
          </div>
        )}

        {newType === 'flashcard' && (
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Flashcard Back (Answer & Key Notes)</label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              rows={3}
              placeholder="Answer shown on reverse card flip..."
              value={newFlashcardAns}
              onChange={e => setNewFlashcardAns(e.target.value)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explanation (Optional)</label>
            <Input
              type="text"
              placeholder="Explanation for correct answer..."
              value={newExplanation}
              onChange={e => setNewExplanation(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hint (Optional)</label>
            <Input
              type="text"
              placeholder="Hint provided during practice..."
              value={newHint}
              onChange={e => setNewHint(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleAddQuestion} className="w-full gap-2 font-semibold">
          <Plus className="h-4 w-4" /> Add Question to Set
        </Button>
      </Card>

      {showBulkImport && (
        <BulkImportModal
          onClose={() => setShowBulkImport(false)}
          targetSetId={editingSet?.id}
        />
      )}
    </div>
  );
};

