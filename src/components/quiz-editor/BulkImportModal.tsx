import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import type { Question } from '@/types/quiz';
import { parseQuickTextToQuestions } from '@/utils/exportImport';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

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
    <Dialog open={true} onClose={onClose} className="max-w-2xl">
      <DialogHeader>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <Upload className="w-4 h-4" />
          </div>
          <div>
            <DialogTitle>Bulk Import Questions</DialogTitle>
            <DialogDescription>Import via formatted text or JSON/CSV files</DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="space-y-4 py-2">
        {/* Target Quiz Set Selection */}
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
            Import Into Quiz Set:
          </label>
          <select 
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
              New Quiz Title:
            </label>
            <Input 
              type="text" 
              placeholder="e.g. AWS Certified Solutions Architect Practice" 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
          </div>
        )}

        {/* File Upload Option */}
        <div>
          <label className="flex items-center justify-center gap-2 p-3.5 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/30 hover:bg-secondary/50 border-muted-foreground/30 transition-colors">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Click to upload JSON or CSV file</span>
            <input type="file" accept=".json,.csv,.txt" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>

        {/* Quick Format Paste */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-semibold text-muted-foreground">Paste Formatted Text:</label>
            <Button variant="ghost" size="sm" onClick={handleParse} className="h-7 text-xs text-primary">
              Preview Parse
            </Button>
          </div>
          <textarea
            className="flex min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            rows={7}
            value={rawText}
            onChange={e => setRawText(e.target.value)}
          />
        </div>

        {/* Status & Preview */}
        {errorMsg && (
          <div className="flex items-center gap-2 p-3 rounded-md bg-destructive/15 text-destructive text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {previewQuestions.length > 0 && (
          <div className="flex items-center gap-2 p-3 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Ready to import <strong className="font-bold">{previewQuestions.length}</strong> questions!</span>
          </div>
        )}
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleImportSubmit}>
          Import Questions
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
