import React from 'react';
import { useQuiz } from '../../context/QuizContext';
import { Award, Target, History, Play, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export const AnalyticsView: React.FC = () => {
  const { getStats, attempts, createWeakSpotQuiz, startQuiz } = useQuiz();
  const stats = getStats();

  const handleGenerateWeakSpot = () => {
    const weakSet = createWeakSpotQuiz();
    if (weakSet) {
      startQuiz(weakSet.id, 'practice');
    } else {
      alert('No recorded missed questions in your attempt history.');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Banner */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/80 shadow-sm">
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Analytics & History
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1">
            Track score averages, attempt history, and practice missed questions.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 shadow-xs border-border/70 hover:border-border transition-colors">
          <div className="flex items-center gap-2 mb-2 text-primary font-medium">
            <Award className="h-5 w-5 text-blue-500" />
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Average Score</span>
          </div>
          <p className="text-3xl font-extrabold text-blue-500">{stats.averageScore}%</p>
        </Card>

        <Card className="p-5 shadow-xs border-border/70 hover:border-border transition-colors">
          <div className="flex items-center gap-2 mb-2 text-emerald-500 font-medium">
            <Target className="h-5 w-5" />
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Passed Quizzes</span>
          </div>
          <p className="text-3xl font-extrabold text-emerald-500">{stats.masteredCount} / {stats.totalQuizzes}</p>
        </Card>

        <Card className="p-5 shadow-xs border-border/70 hover:border-border transition-colors">
          <div className="flex items-center gap-2 mb-2 font-medium">
            <History className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Total Attempts</span>
          </div>
          <p className="text-3xl font-extrabold text-foreground">{stats.totalAttempts}</p>
        </Card>

        <Card className="p-5 shadow-xs border-border/70 hover:border-border transition-colors">
          <div className="flex items-center gap-2 mb-2 font-medium">
            <Award className="h-5 w-5 text-amber-500" />
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Study Days</span>
          </div>
          <p className="text-3xl font-extrabold text-amber-500">{stats.streakDays} Days</p>
        </Card>
      </div>

      {/* Target Missed Questions CTA */}
      <Card className="p-6 border-rose-500/20 bg-rose-500/5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20 shrink-0">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Missed Questions Vault</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Combine all previously missed questions into a targeted practice session.
            </p>
          </div>
        </div>

        <Button 
          variant="destructive" 
          onClick={handleGenerateWeakSpot}
          className="shrink-0 font-medium"
        >
          Practice Missed Questions
        </Button>
      </Card>

      {/* History Log */}
      <Card className="shadow-xs border-border/70">
        <CardHeader className="px-6 pt-6 pb-4">
          <CardTitle className="text-lg font-semibold">Attempt History Log</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          {attempts.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              No exam attempts recorded yet.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <th className="px-4 py-3">Quiz Title</th>
                    <th className="px-4 py-3">Mode</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {attempts.map(att => {
                    const isPass = att.percentage >= 70;
                    return (
                      <tr key={att.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3.5 font-medium text-foreground">{att.quizTitle}</td>
                        <td className="px-4 py-3.5">
                          <Badge variant={att.mode === 'exam' ? 'destructive' : 'blue'}>
                            {att.mode.toUpperCase()}
                          </Badge>
                        </td>
                        <td className={`px-4 py-3.5 font-bold ${isPass ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {att.percentage}% ({att.score}/{att.totalPoints})
                        </td>
                        <td className="px-4 py-3.5 text-xs text-muted-foreground">
                          {new Date(att.date).toLocaleString()}
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => startQuiz(att.quizSetId, att.mode === 'flashcard' ? 'practice' : att.mode)}
                            className="h-8 gap-1 text-xs"
                          >
                            <Play className="h-3.5 w-3.5 fill-current" /> Retake
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

