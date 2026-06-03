import React, { useState, useEffect } from 'react';
import '../styles/DetailPages.css';

export default function MoodDetailPage({ user, onNavigate }) {
  const [moodEntries, setMoodEntries] = useState([]);
  const [newMood, setNewMood] = useState('5');

  useEffect(() => {
    // Load mood data from localStorage
    const savedData = localStorage.getItem(`user_${user.id}_mood`) || '[]';
    setMoodEntries(JSON.parse(savedData));
  }, [user.id]);

  const handleAddMood = () => {
    if (!newMood) return;
    const entry = {
      id: Date.now(),
      mood: parseInt(newMood),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [entry, ...moodEntries];
    setMoodEntries(updated);
    localStorage.setItem(`user_${user.id}_mood`, JSON.stringify(updated));
    setNewMood('5');
  };

  const moodLabels = {
    1: '😢 Very Poor',
    2: '😟 Poor',
    3: '😐 Neutral',
    4: '🙂 Good',
    5: '😊 Great',
    6: '😄 Excellent',
    7: '😍 Amazing',
    8: '🤩 Outstanding',
    9: '🥳 Euphoric',
    10: '🌟 Perfect'
  };

  const averageMood = moodEntries.length > 0 
    ? (moodEntries.reduce((sum, entry) => sum + entry.mood, 0) / moodEntries.length).toFixed(1)
    : 0;

  const rawName = user?.name || 'Student';
  const displayName = rawName.trim().toLowerCase() === 'james' ? 'Student' : rawName;

  return (
    <div className="detail-page-root">
      <section className="detail-header">
        <div className="header-content">
          <h1>Daily Mood Tracking</h1>
          <p className="header-subtitle">Monitor your emotional wellbeing and track patterns over time</p>
        </div>
      </section>

      <div className="detail-grid">
        <div className="stats-panel">
          <div className="stat-card mood-card">
            <div className="stat-label">Current Average</div>
            <div className="stat-value">{averageMood}/10</div>
            <div className="stat-description">{moodLabels[Math.round(averageMood)]}</div>
          </div>
          
          <div className="stat-card mood-card">
            <div className="stat-label">Total Entries</div>
            <div className="stat-value">{moodEntries.length}</div>
            <div className="stat-description">Mood logs recorded</div>
          </div>
        </div>

        <div className="input-panel mood-input-panel">
          <h2>Log Your Mood</h2>
          <div className="mood-slider-container">
            <div className="mood-slider-labels">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={newMood}
              onChange={(e) => setNewMood(e.target.value)}
              className="mood-slider"
            />
            <div className="mood-display">
              <div className="mood-emoji" style={{ fontSize: '3rem' }}>
                {moodLabels[parseInt(newMood)].split(' ')[0]}
              </div>
              <div className="mood-text">
                <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>{newMood}/10</p>
                <p style={{ margin: '0.25rem 0 0 0', color: '#475569' }}>{moodLabels[parseInt(newMood)]}</p>
              </div>
            </div>
          </div>
          <button onClick={handleAddMood} className="btn-log-mood">
            Log Mood Entry
          </button>
        </div>
      </div>

      <div className="entries-section">
        <h2>Recent Mood Entries</h2>
        {moodEntries.length === 0 ? (
          <div className="empty-state">
            <p>No mood entries yet. Start tracking to see your patterns!</p>
          </div>
        ) : (
          <div className="entries-list">
            {moodEntries.map((entry) => (
              <div key={entry.id} className="entry-item mood-entry">
                <div className="entry-left">
                  <div className="entry-emoji">{moodLabels[entry.mood].split(' ')[0]}</div>
                </div>
                <div className="entry-middle">
                  <p className="entry-text">{moodLabels[entry.mood]}</p>
                  <p className="entry-date">{entry.date} at {entry.time}</p>
                </div>
                <div className="entry-right">
                  <span className="entry-value">{entry.mood}/10</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
