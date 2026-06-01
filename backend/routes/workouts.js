const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Add workout
router.post('/', (req, res) => {
  const { userId, type, duration, calories, date } = req.body;
  
  if (!userId || !type || !duration) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const workout = db.addWorkout({
    userId,
    type, // 'yoga', 'cycling', 'running', 'crossfit', 'swimming'
    duration, // in minutes
    calories: calories || 0,
    date: date || new Date(),
    description: req.body.description || ''
  });
  
  res.json(workout);
});

// Get user workouts
router.get('/:userId', (req, res) => {
  const workouts = db.getWorkoutsByUserId(parseInt(req.params.userId));
  res.json(workouts);
});

// Get workouts by date range
router.get('/:userId/range', (req, res) => {
  const { startDate, endDate } = req.query;
  const userId = parseInt(req.params.userId);
  
  let workouts = db.getWorkoutsByUserId(userId);
  
  if (startDate || endDate) {
    workouts = workouts.filter(w => {
      const workoutDate = new Date(w.date);
      if (startDate && workoutDate < new Date(startDate)) return false;
      if (endDate && workoutDate > new Date(endDate)) return false;
      return true;
    });
  }
  
  res.json(workouts);
});

module.exports = router;
