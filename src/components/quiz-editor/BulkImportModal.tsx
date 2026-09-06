import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import type { Question } from '../../types/quiz';
import { parseQuickTextToQuestions } from '../../utils/exportImport';
import { X, Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface Props {
  onClose: () => void;
  targetSetId?: string;
}

export const BulkImportModal: React.FC<Props> = ({ onClose, targetSetId }) => {
  const { quizSets, addQuestionsToSet, addQuizSet } = useQuiz();
  const [selectedSetId, setSelectedSetId] = useState<string>(targetSetId || (quizSets[0]?.id || 'new'));
  const [newTitle, setNewTitle] = useState<string>('');
  const [rawText, setRawText] = useState<string>(
`Q: What is Active Recall?
A) Staring at a page
B) Testing yourself to retrieve information from memory
C) Rereading notes 10 times
D) Passive listening
Answer: B
Explanation: Active recall requires retrieving knowledge without looking at answers.

Q: True or False: CBT exams allow marking questions for review.
Answer: True
Explanation: Most CBT test engines feature a review drawer to re-visit flagged questions.

Q: Fill in the blank: The process of repeating information at expanding intervals is called ______ repetition.
Answer: spaced
Explanation: Spaced repetition optimizes retention curves.`
  );
  const [previewQuestions, setPreviewQuestions] = useState<Question[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleParse = () => {
    try {
      const parsed = parseQuickTextToQuestions(rawText);
      if (parsed.length === 0) {
        setErrorMsg('No valid questions recognized. Ensure questions start with Q: or Question #:');
        setPreviewQuestions([]);
      } else {
        setErrorMsg('');
        setPreviewQuestions(parsed);
      }
    } catch {
      setErrorMsg('Failed to parse text format.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (file.name.endsWith('.json')) {
        try {
          const parsedJson = JSON.parse(content);
          if (Array.isArray(parsedJson.questions)) {
            setPreviewQuestions(parsedJson.questions);
            if (parsedJson.title) setNewTitle(parsedJson.title);
            setErrorMsg('');
          } else if (Array.isArray(parsedJson)) {
            setPreviewQuestions(parsedJson);
            setErrorMsg('');
          }
        } catch {
          setErrorMsg('Invalid JSON format.');
        }
      } else {
        setRawText(content);
        const parsed = parseQuickTextToQuestions(content);
        setPreviewQuestions(parsed);
      }
    };
    reader.readAsText(file);
  };

  const handleImportSubmit = () => {
    let questionsToImport = previewQuestions;
    if (questionsToImport.length === 0) {
      questionsToImport = parseQuickTextToQuestions(rawText);
    }

    if (questionsToImport.length === 0) {
      setErrorMsg('Please add questions before importing.');
      return;
    }

    if (selectedSetId === 'new') {
      const title = newTitle.trim() || `Imported Quiz (${new Date().toLocaleDateString()})`;
      addQuizSet({
        title,
        description: `Imported with ${questionsToImport.length} questions.`,
        category: 'Imported',
        tags: ['Imported'],
        color: '#6366f1',
        questions: questionsToImport
      });
    } else {
      addQuestionsToSet(selectedSetId, questionsToImport);
    }

    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '24px'
    }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', padding: '32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Upload size={20} color="var(--accent-secondary)" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem' }}>Bulk Import Questions</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Import via Quick Text format or JSON/CSV files</p>
            </div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose}><X size={20} /></button>
        </div>

        {/* Target Quiz Set Selection */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
            Import Into Quiz Set:
          </label>
          <select 
            className="input-field"
            value={selectedSetId}
            onChange={e => setSelectedSetId(e.target.value)}
          >
            <option value="new">➕ Create New Quiz Set</option>
            {quizSets.map(s => (
              <option key={s.id} value={s.id}>{s.title} ({s.questions.length} questions)</option>
            ))}
          </select>
        </div>

        {selectedSetId === 'new' && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
              New Quiz Title:
            </label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. AWS Certified Solutions Architect Practice" 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
          </div>
        )}

        {/* File Upload Option */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', border: '1.5px dashed var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', background: 'var(--bg-input)' }}>
            <FileText size={20} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Click to upload JSON or CSV file</span>
            <input type="file" accept=".json,.csv,.txt" onChange={handleFileUpload} style={{ display: 'none' }} />
          </label>
        </div>

        {/* Quick Format Paste */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Paste Formatted Text:</label>
            <button className="btn btn-ghost btn-sm" onClick={handleParse} style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>
              Preview Parse
            </button>
          </div>
          <textarea
            className="input-field"
            rows={8}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            value={rawText}
            onChange={e => setRawText(e.target.value)}
          />
        </div>

        {/* Status & Preview */}
        {errorMsg && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', marginBottom: '20px', fontSize: '0.85rem' }}>
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {previewQuestions.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', marginBottom: '20px', fontSize: '0.85rem' }}>
            <CheckCircle size={18} />
            <span>Ready to import <strong>{previewQuestions.length}</strong> questions!</span>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleImportSubmit}>
            Import Questions
          </button>
        </div>
      </div>
    </div>
  );
};
