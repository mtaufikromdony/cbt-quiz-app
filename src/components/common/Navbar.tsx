import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { BookOpen, LayoutDashboard, BarChart2, Plus, Volume2, VolumeX, Moon, Sun, RotateCcw } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentView, setCurrentView, openEditor, soundEnabled, toggleSound, resetToDefaults } = useQuiz();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-3 mb-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        {/* Brand Header */}
        <div 
          onClick={() => setCurrentView('dashboard')} 
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold leading-none tracking-tight">
              CBT Exam Prep
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              Practice & Study Engine
            </p>
          </div>
        </div>

        {/* Navigation & Controls Row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <Button 
            variant={currentView === 'dashboard' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('dashboard')}
            className="gap-2"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Button>
          
          <Button 
            variant={currentView === 'analytics' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('analytics')}
            className="gap-2"
          >
            <BarChart2 className="w-4 h-4" />
            <span>Analytics</span>
          </Button>

          <Button 
            variant="secondary"
            size="sm"
            onClick={() => openEditor()}
            className="gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>New Quiz</span>
          </Button>

          <div className="w-[1px] h-5 bg-border mx-1" />

          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSound}
            title={soundEnabled ? "Mute audio" : "Enable audio"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-primary" />
            ) : (
              <VolumeX className="w-4 h-4 text-muted-foreground" />
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            title="Toggle color theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-primary" />
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => {
              if (window.confirm("Reset all quiz sets to default sample datasets?")) {
                resetToDefaults();
              }
            }}
            title="Reset default datasets"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
