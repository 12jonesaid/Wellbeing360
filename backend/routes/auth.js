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

module.exports = router;
