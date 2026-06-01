const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Add nutrition entry
router.post('/', (req, res) => {
  const { userId, meal, description, calories, protein, carbs, fat, date } = req.body;
  
  if (!userId || !meal || !calories) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const nutrition = db.addNutrition({
    userId,
    meal, // 'breakfast', 'lunch', 'dinner', 'snack'
    description: description || '',
    calories,
    protein: protein || 0,
    carbs: carbs || 0,
    fat: fat || 0,
    date: date || new Date()
  });
  
  res.json(nutrition);
});

// Get user nutrition entries
router.get('/:userId', (req, res) => {
  const nutrition = db.getNutritionByUserId(parseInt(req.params.userId));
  res.json(nutrition);
});

// Get daily summary
router.get('/:userId/daily', (req, res) => {
  const { date } = req.query;
  const userId = parseInt(req.params.userId);
  const targetDate = date ? new Date(date) : new Date();
  
  const nutrition = db.getNutritionByUserId(userId).filter(n => {
    const nDate = new Date(n.date);
    return nDate.toDateString() === targetDate.toDateString();
  });
  
  const summary = {
    totalCalories: nutrition.reduce((sum, n) => sum + n.calories, 0),
    totalProtein: nutrition.reduce((sum, n) => sum + n.protein, 0),
    totalCarbs: nutrition.reduce((sum, n) => sum + n.carbs, 0),
    totalFat: nutrition.reduce((sum, n) => sum + n.fat, 0),
    entries: nutrition
  };
  
  res.json(summary);
});

module.exports = router;
