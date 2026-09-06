export type QuestionType = 'single' | 'multiple' | 'true-false' | 'fill-blank' | 'flashcard';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: string[]; // For single, multiple
  correctAnswers: (number | string)[]; // Index numbers for single/multiple, string "true"/"false", or strings for fill-blank
  explanation?: string;
  hint?: string;
  batch?: string;
  points: number;
}

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  color?: string;
  createdAt: string;
  updatedAt: string;
  timeLimitMinutes?: number; // Optional timer for CBT exam mode
  passingPercentage?: number; // Custom passing score threshold (e.g. 70%)
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  selected: (number | string)[];
  isCorrect: boolean;
  timeSpentSeconds: number;
  isFlagged?: boolean;
}

export interface QuizAttempt {
  id: string;
  quizSetId: string;
  quizTitle: string;
  mode: 'exam' | 'practice' | 'flashcard';
  date: string;
  score: number;
  totalPoints: number;
  percentage: number;
  passingPercentage?: number;
  timeSpentSeconds: number;
  answers: Record<string, UserAnswer>;
  missedQuestionIds: string[];
}

export interface QuizStats {
  totalQuizzes: number;
  totalQuestions: number;
  totalAttempts: number;
  averageScore: number;
  masteredCount: number;
  streakDays: number;
}

export interface ActiveSession {
  type: 'runner' | 'flashcard';
  activeSet: QuizSet;
  runnerMode: 'exam' | 'practice';
  currentIndex: number;
  userAnswers: Record<string, UserAnswer>;
  flaggedIds: string[];
  secondsRemaining?: number;
  passingPercentage?: number;
  lastUpdated: number;
}

