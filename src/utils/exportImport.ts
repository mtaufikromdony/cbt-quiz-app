import type { Question, QuizSet } from '../types/quiz';

export function exportQuizSetToJSON(quizSet: QuizSet) {
  const jsonStr = JSON.stringify(quizSet, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const cleanTitle = (quizSet.title || 'quiz_set')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  const fileName = `${cleanTitle || 'quiz_set'}.json`;

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.setAttribute('download', fileName);
  document.body.appendChild(a);
  a.click();
  
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 150);
}

export function exportQuizSetToCSV(quizSet: QuizSet) {
  const headers = ['Type', 'Prompt', 'Options (pipe separated)', 'Correct Answers (pipe separated)', 'Explanation', 'Hint', 'Points'];
  const rows = quizSet.questions.map(q => [
    q.type,
    `"${(q.prompt || '').replace(/"/g, '""')}"`,
    `"${(q.options || []).join('|').replace(/"/g, '""')}"`,
    `"${(q.correctAnswers || []).join('|').replace(/"/g, '""')}"`,
    `"${(q.explanation || '').replace(/"/g, '""')}"`,
    `"${(q.hint || '').replace(/"/g, '""')}"`,
    q.points || 1
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const cleanTitle = (quizSet.title || 'quiz_set')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  const fileName = `${cleanTitle || 'quiz_set'}.csv`;

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.setAttribute('download', fileName);
  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 150);
}

export function parseQuickTextToQuestions(text: string): Question[] {
  const questions: Question[] = [];
  const rawBlocks = text.split(/(?=\bQ:|\bQuestion\s*\d+:)/i).filter(b => b.trim().length > 0);

  rawBlocks.forEach((block, idx) => {
    const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    let prompt = '';
    const options: string[] = [];
    let correctStr = '';
    let explanation = '';
    let hint = '';
    
    lines.forEach(line => {
      if (line.match(/^(Q:|Question\s*\d+:)/i)) {
        prompt = line.replace(/^(Q:|Question\s*\d+:)/i, '').trim();
      } else if (line.match(/^([A-E])[\).]\s*(.*)/i)) {
        const match = line.match(/^([A-E])[\).]\s*(.*)/i);
        if (match && match[2]) {
          options.push(match[2].trim());
        }
      } else if (line.match(/^(Answer|Correct|Ans):/i)) {
        correctStr = line.replace(/^(Answer|Correct|Ans):/i, '').trim();
      } else if (line.match(/^Explanation:/i)) {
        explanation = line.replace(/^Explanation:/i, '').trim();
      } else if (line.match(/^Hint:/i)) {
        hint = line.replace(/^Hint:/i, '').trim();
      } else if (!prompt) {
        prompt = line;
      }
    });

    if (!prompt) return;

    let type: Question['type'] = 'single';
    let correctAnswers: (number | string)[] = [];

    if (correctStr.match(/^(True|False)$/i)) {
      type = 'true-false';
      correctAnswers = [correctStr.toLowerCase()];
    } else if (options.length > 0) {
      const selectedLetters = correctStr.toUpperCase().split(/[,|&]/).map(s => s.trim());
      const indices: number[] = [];
      selectedLetters.forEach(lettr => {
        const charCode = lettr.charCodeAt(0);
        if (charCode >= 65 && charCode <= 69) {
          indices.push(charCode - 65);
        } else if (!isNaN(Number(lettr))) {
          indices.push(Number(lettr) - 1);
        }
      });
      
      if (indices.length > 1) {
        type = 'multiple';
        correctAnswers = indices;
      } else if (indices.length === 1) {
        type = 'single';
        correctAnswers = indices;
      } else {
        type = 'single';
        correctAnswers = [0];
      }
    } else {
      type = 'fill-blank';
      correctAnswers = [correctStr];
    }

    questions.push({
      id: `q_${Date.now()}_${idx}`,
      type,
      prompt,
      options: options.length > 0 ? options : undefined,
      correctAnswers,
      explanation: explanation || undefined,
      hint: hint || undefined,
      points: 1
    });
  });

  return questions;
}
