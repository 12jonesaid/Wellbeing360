const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Add mood entry
router.post('/', (req, res) => {
  const { userId, mood, focusTime, notes, date } = req.body;
  
  if (!userId || !mood) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const moodEntry = db.addMood({
    userId,
    mood, // 1-10 scale or emoji: happy, sad, angry, neutral, excited, anxious
    focusTime: focusTime || 0, // in minutes
    notes: notes || '',
    date: date || new Date()
  });
  
  res.json(moodEntry);
});

// Get user mood entries
router.get('/:userId', (req, res) => {
  const mood = db.getMoodByUserId(parseInt(req.params.userId));
  res.json(mood);
});

// Get mood statistics
router.get('/:userId/stats', (req, res) => {
  const { days } = req.query;
  const userId = parseInt(req.params.userId);
  const dayRange = parseInt(days) || 7;
  
  const now = new Date();
  const pastDate = new Date(now.getTime() - dayRange * 24 * 60 * 60 * 1000);
  
  const moodData = db.getMoodByUserId(userId).filter(m => {
    return new Date(m.date) >= pastDate;
  });
  
  const stats = {
    averageMood: moodData.length > 0 ? 
      (moodData.reduce((sum, m) => sum + m.mood, 0) / moodData.length).toFixed(1) : 0,
    totalFocusTime: moodData.reduce((sum, m) => sum + m.focusTime, 0),
    entries: moodData
  };
  
  res.json(stats);
});

module.exports = router;
