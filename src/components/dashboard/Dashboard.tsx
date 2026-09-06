import React, { useState } from 'react';
import { useQuiz } from '@/context/QuizContext';
import { exportQuizSetToCSV, exportQuizSetToJSON } from '@/utils/exportImport';
import { BulkImportModal } from '../quiz-editor/BulkImportModal';
import { QuizConfigModal } from '../common/QuizConfigModal';
import type { QuizSet } from '@/types/quiz';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, BookOpen, Edit, Trash2, Download, Search, Plus, Upload, Clock, FileSpreadsheet, Layers, CheckCircle2 } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { 
    quizSets, 
    startConfiguredQuiz, 
    startConfiguredFlashcard, 
    openEditor, 
    deleteQuizSet, 
    getStats,
    activeSession,
    resumeActiveSession,
    clearActiveSession
  } = useQuiz();
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
    <div className="max-w-7xl mx-auto px-4 pb-16">
      {/* Header Banner Card */}
      <Card className="mb-6 border bg-card/60 backdrop-blur shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Question Sets
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Build practice exams, study with flashcards, and track your scores offline.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-center">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">Quiz Sets</span>
                <span className="text-xl font-bold text-primary">{stats.totalQuizzes}</span>
              </div>
              <div className="flex-1 md:flex-initial px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-center">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block">Questions</span>
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{stats.totalQuestions}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* In-Progress Session Resume Banner */}
      {activeSession && (
        <Card className="mb-6 border-blue-500/40 bg-blue-500/5 dark:bg-blue-950/20 shadow-sm animate-in fade-in">
          <CardContent className="p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                  <Play className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      In-Progress Session
                    </span>
                    <Badge variant={activeSession.runnerMode === 'exam' ? 'destructive' : 'blue'} className="text-[10px] uppercase">
                      {activeSession.runnerMode}
                    </Badge>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground mt-0.5">
                    {activeSession.activeSet.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activeSession.type === 'flashcard' ? (
                      `Card ${activeSession.currentIndex + 1} of ${activeSession.activeSet.questions.length}`
                    ) : (
                      `Progress: ${Object.keys(activeSession.userAnswers).length} answered of ${activeSession.activeSet.questions.length} • Currently on Question ${activeSession.currentIndex + 1}`
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearActiveSession} 
                  className="text-xs text-muted-foreground hover:text-destructive h-8"
                >
                  Discard
                </Button>
                <Button 
                  size="sm" 
                  onClick={resumeActiveSession} 
                  className="gap-1.5 text-xs font-semibold h-8"
                >
                  <Play className="h-3.5 w-3.5 fill-current" /> Resume Session
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-6">
        {/* Search & Category Filter */}
        <div className="flex flex-1 gap-2.5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search quiz title, tags, or description..."
              className="pl-9 bg-background"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowBulkImportModal(true)} className="gap-1.5">
            <Upload className="w-4 h-4" /> Bulk Import
          </Button>
          <Button size="sm" onClick={() => openEditor()} className="gap-1.5">
            <Plus className="w-4 h-4" /> Create Quiz Set
          </Button>
        </div>
      </div>

      {/* Quiz Sets Grid */}
      {filteredSets.length === 0 ? (
        <Card className="p-12 text-center border-dashed">
          <CardContent className="flex flex-col items-center justify-center p-0">
            <BookOpen className="w-12 h-12 text-muted-foreground/40 mb-3" />
            <h3 className="text-base font-semibold mb-1">No Quiz Sets Found</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              {searchQuery ? 'No sets matched your search filter.' : 'Create a quiz set or use bulk import to add questions.'}
            </p>
            <Button size="sm" onClick={() => openEditor()}>
              <Plus className="w-4 h-4 mr-1.5" /> Create Quiz Set
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSets.map(set => (
            <Card key={set.id} className="flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="blue">{set.category}</Badge>
                  <div className="flex items-center gap-0.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-foreground"
                      onClick={() => exportQuizSetToJSON(set)}
                      title="Export as JSON (.json)"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-foreground"
                      onClick={() => exportQuizSetToCSV(set)}
                      title="Export as CSV (.csv)"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-foreground"
                      onClick={() => openEditor(set.id)}
                      title="Edit Quiz Set"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive"
                      onClick={() => {
                        if (window.confirm(`Delete "${set.title}"?`)) {
                          deleteQuizSet(set.id);
                        }
                      }}
                      title="Delete Quiz Set"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                <CardTitle className="text-base font-semibold leading-snug line-clamp-2">
                  {set.title}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-2 mt-1">
                  {set.description || 'No description provided.'}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> {set.questions.length} Questions
                  </span>
                  {set.timeLimitMinutes && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {set.timeLimitMinutes}m Timer
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-3 border-t grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  onClick={() => setConfigTarget({ quizSet: set, mode: 'exam' })}
                  className="gap-1.5 text-xs font-medium"
                >
                  <Play className="w-3.5 h-3.5" /> CBT Exam
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setConfigTarget({ quizSet: set, mode: 'practice' })}
                  className="gap-1.5 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Practice
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  className="col-span-2 text-xs font-medium"
                  onClick={() => setConfigTarget({ quizSet: set, mode: 'flashcard' })}
                >
                  3D Flashcards
                </Button>
              </CardFooter>
            </Card>
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
