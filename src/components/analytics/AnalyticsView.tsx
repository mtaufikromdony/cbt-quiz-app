import React from 'react';
import { useQuiz } from '../../context/QuizContext';
import { Award, Target, History, Play, AlertTriangle } from 'lucide-react';

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
    <div style={{ padding: '0 24px 48px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Banner */}
      <div className="panel" style={{ padding: '24px 28px', margin: '16px 0 24px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
          Analytics & History
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Track score averages, attempt history, and practice missed questions.
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
        <div className="panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <Award size={18} color="var(--accent-blue)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AVERAGE SCORE</span>
          </div>
          <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-blue)' }}>{stats.averageScore}%</p>
        </div>

        <div className="panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <Target size={18} color="var(--accent-emerald)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PASSED QUIZZES</span>
          </div>
          <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{stats.masteredCount} / {stats.totalQuizzes}</p>
        </div>

        <div className="panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <History size={18} color="var(--text-secondary)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TOTAL ATTEMPTS</span>
          </div>
          <p style={{ fontSize: '1.75rem', fontWeight: 700 }}>{stats.totalAttempts}</p>
        </div>

        <div className="panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>STUDY DAYS</span>
          </div>
          <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-amber)' }}>{stats.streakDays} Days</p>
        </div>
      </div>

      {/* Target Missed Questions CTA */}
      <div className="panel" style={{ padding: '20px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <AlertTriangle size={24} color="var(--accent-rose)" />
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Missed Questions Vault</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Combine all previously missed questions into a targeted practice session.
            </p>
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleGenerateWeakSpot}>
          Practice Missed Questions
        </button>
      </div>

      {/* History Log */}
      <div className="panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Attempt History Log</h3>

        {attempts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '28px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            No exam attempts recorded yet.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '10px 12px' }}>Quiz Title</th>
                  <th style={{ padding: '10px 12px' }}>Mode</th>
                  <th style={{ padding: '10px 12px' }}>Score</th>
                  <th style={{ padding: '10px 12px' }}>Date</th>
                  <th style={{ padding: '10px 12px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map(att => {
                  const isPass = att.percentage >= 70;
                  return (
                    <tr key={att.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600 }}>{att.quizTitle}</td>
                      <td style={{ padding: '10px 12px' }}>
                        <span className={`badge ${att.mode === 'exam' ? 'badge-rose' : 'badge-blue'}`}>
                          {att.mode.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: isPass ? '#3fb950' : '#ff7b72' }}>
                        {att.percentage}% ({att.score}/{att.totalPoints})
                      </td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        {new Date(att.date).toLocaleString()}
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right' }}>
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() => startQuiz(att.quizSetId, att.mode === 'flashcard' ? 'practice' : att.mode)}
                        >
                          <Play size={13} /> Retake
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
