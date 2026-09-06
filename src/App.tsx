import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { QuizProvider, useQuiz } from './context/QuizContext';
import { Navbar } from './components/common/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { QuizEditor } from './components/quiz-editor/QuizEditor';
import { CBTQuizRunner } from './components/quiz-runner/CBTQuizRunner';
import { FlashcardRunner } from './components/flashcard/FlashcardRunner';
import { AnalyticsView } from './components/analytics/AnalyticsView';

const MainContent: React.FC = () => {
  const { currentView } = useQuiz();

  return (
    <main style={{ flex: 1 }}>
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'editor' && <QuizEditor />}
      {currentView === 'runner' && <CBTQuizRunner />}
      {currentView === 'flashcard' && <FlashcardRunner />}
      {currentView === 'analytics' && <AnalyticsView />}
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Navbar />
        <MainContent />

        <footer style={{
          padding: '20px',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: 'auto'
        }}>
          CBT Exam Prep App • Local Storage Offline Engine
        </footer>
      </QuizProvider>
    </ThemeProvider>
  );
};

export default App;
