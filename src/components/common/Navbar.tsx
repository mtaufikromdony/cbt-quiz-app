import React from 'react';
import { useQuiz } from '../../context/QuizContext';
import { useTheme } from '../../context/ThemeContext';
import { BookOpen, LayoutDashboard, BarChart2, Plus, Volume2, VolumeX, Moon, Sun, RotateCcw } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentView, setCurrentView, openEditor, soundEnabled, toggleSound, resetToDefaults } = useQuiz();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="panel" style={{ margin: '12px 16px', padding: '10px 16px', borderRadius: 'var(--radius-md)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        {/* Brand Header */}
        <div 
          onClick={() => setCurrentView('dashboard')} 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--accent-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <BookOpen size={20} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              CBT Exam Prep
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Practice & Study Engine
            </p>
          </div>
        </div>

        {/* Navigation & Controls Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <button 
            className={`btn btn-sm ${currentView === 'dashboard' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setCurrentView('dashboard')}
          >
            <LayoutDashboard size={15} />
            <span className="nav-label">Dashboard</span>
          </button>
          
          <button 
            className={`btn btn-sm ${currentView === 'analytics' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setCurrentView('analytics')}
          >
            <BarChart2 size={15} />
            <span className="nav-label">Analytics</span>
          </button>

          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => openEditor()}
          >
            <Plus size={15} />
            <span>New Quiz</span>
          </button>

          <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)', margin: '0 4px' }} />

          <button 
            className="btn btn-ghost btn-sm"
            onClick={toggleSound}
            title={soundEnabled ? "Mute audio" : "Enable audio"}
          >
            {soundEnabled ? <Volume2 size={15} color="var(--accent-blue)" /> : <VolumeX size={15} color="var(--text-muted)" />}
          </button>

          <button 
            className="btn btn-ghost btn-sm"
            onClick={toggleTheme}
            title="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={15} color="#d29922" /> : <Moon size={15} color="#388bfd" />}
          </button>

          <button 
            className="btn btn-ghost btn-sm"
            onClick={() => {
              if (window.confirm("Reset all quiz sets to default sample datasets?")) {
                resetToDefaults();
              }
            }}
            title="Reset default datasets"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};
