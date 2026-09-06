import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { exportQuizSetToCSV, exportQuizSetToJSON } from '../../utils/exportImport';
import { BulkImportModal } from '../quiz-editor/BulkImportModal';
import { QuizConfigModal } from '../common/QuizConfigModal';
import type { QuizSet } from '../../types/quiz';
import { Play, BookOpen, Edit, Trash2, Download, Search, Plus, Upload, Clock, FileSpreadsheet } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { quizSets, startConfiguredQuiz, startConfiguredFlashcard, openEditor, deleteQuizSet, getStats } = useQuiz();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showBulkImportModal, setShowBulkImportModal] = useState(false);
  const [configTarget, setConfigTarget] = useState<{ quizSet: QuizSet; mode: 'exam' | 'practice' | 'flashcard' } | null>(null);

  const stats = getStats();

  const categories = ['All', ...Array.from(new Set(quizSets.map(s => s.category)))];

  const filteredSets = quizSets.filter(set => {
    const matchesSearch = set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          set.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          set.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === 'All' || set.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleLaunchSession = (configuredSet: QuizSet, mode: 'exam' | 'practice' | 'flashcard') => {
    setConfigTarget(null);
    if (mode === 'flashcard') {
      startConfiguredFlashcard(configuredSet);
    } else {
      startConfiguredQuiz(configuredSet, mode);
    }
  };

  return (
    <div style={{ padding: '0 24px 48px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Banner */}
      <div className="panel" style={{ padding: '24px 28px', margin: '16px 0 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
              Question Sets
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Build practice exams, study with flashcards, and track your scores offline.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ padding: '10px 18px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>QUIZ SETS</span>
              <strong style={{ fontSize: '1.25rem', color: 'var(--accent-blue)' }}>{stats.totalQuizzes}</strong>
            </div>
            <div style={{ padding: '10px 18px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>TOTAL QUESTIONS</span>
              <strong style={{ fontSize: '1.25rem', color: 'var(--accent-emerald)' }}>{stats.totalQuestions}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        {/* Search & Category Filter */}
        <div style={{ display: 'flex', gap: '12px', flex: 1, minWidth: '280px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="input-field"
              placeholder="Search quiz title, tags, or description..."
              style={{ paddingLeft: '38px' }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="input-field"
            style={{ width: 'auto', minWidth: '150px' }}
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-secondary" onClick={() => setShowBulkImportModal(true)}>
            <Upload size={15} /> Bulk Import
          </button>
          <button className="btn btn-primary" onClick={() => openEditor()}>
            <Plus size={16} /> Create Quiz Set
          </button>
        </div>
      </div>

      {/* Quiz Sets Grid */}
      {filteredSets.length === 0 ? (
        <div className="panel" style={{ padding: '48px', textAlign: 'center', margin: '24px 0' }}>
          <BookOpen size={40} color="var(--text-muted)" style={{ marginBottom: '12px', opacity: 0.4 }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>No Quiz Sets Found</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
            {searchQuery ? 'No sets matched your search filter.' : 'Create a quiz set or use bulk import to add questions.'}
          </p>
          <button className="btn btn-primary" onClick={() => openEditor()}>
            <Plus size={16} /> Create Quiz Set
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {filteredSets.map(set => (
            <div key={set.id} className="panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="badge badge-blue">{set.category}</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => exportQuizSetToJSON(set)}
                      title="Export as JSON (.json)"
                    >
                      <Download size={14} /> JSON
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => exportQuizSetToCSV(set)}
                      title="Export as CSV (.csv)"
                    >
                      <FileSpreadsheet size={14} /> CSV
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => openEditor(set.id)}
                      title="Edit Quiz Set"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => {
                        if (window.confirm(`Delete "${set.title}"?`)) {
                          deleteQuizSet(set.id);
                        }
                      }}
                      title="Delete Quiz Set"
                    >
                      <Trash2 size={14} color="var(--accent-rose)" />
                    </button>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{set.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {set.description || 'No description provided.'}
                </p>

                <div style={{ display: 'flex', gap: '14px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  <span>{set.questions.length} Questions</span>
                  {set.timeLimitMinutes && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {set.timeLimitMinutes}m Timer
                    </span>
                  )}
                </div>
              </div>

              {/* Mode Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setConfigTarget({ quizSet: set, mode: 'exam' })}
                >
                  <Play size={14} /> CBT Exam
                </button>
                
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setConfigTarget({ quizSet: set, mode: 'practice' })}
                >
                  Practice
                </button>

                <button
                  className="btn btn-secondary btn-sm"
                  style={{ gridColumn: 'span 2' }}
                  onClick={() => setConfigTarget({ quizSet: set, mode: 'flashcard' })}
                >
                  3D Flashcards
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showBulkImportModal && (
        <BulkImportModal onClose={() => setShowBulkImportModal(false)} />
      )}

      {configTarget && (
        <QuizConfigModal
          quizSet={configTarget.quizSet}
          mode={configTarget.mode}
          onClose={() => setConfigTarget(null)}
          onStartSession={handleLaunchSession}
        />
      )}
    </div>
  );
};
