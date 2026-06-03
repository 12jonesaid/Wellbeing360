const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const user = db.addUser({ name, email, password, createdAt: new Date() });
  res.json({ id: user.id, name: user.name, email: user.email });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  res.json({ id: user.id, name: user.name, email: user.email });
});

// Get user profile with data summary
router.get('/profile/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = db.getUserById(userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const userWorkouts = db.getWorkoutsByUserId(userId);
  const userNutrition = db.getNutritionByUserId(userId);
  const userMood = db.getMoodByUserId(userId);
  
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    dataStatus: {
      workouts: userWorkouts.length,
      nutritionEntries: userNutrition.length,
      moodEntries: userMood.length,
      totalDataPoints: userWorkouts.length + userNutrition.length + userMood.length,
      message: userWorkouts.length + userNutrition.length + userMood.length === 0 ? 
        'New user - data starts from zero. Start tracking to see your progress!' : 
        'User has tracking data'
    }
  });
});

module.exports = router;
