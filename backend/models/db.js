// Mock data storage (in-memory for simplicity)
let users = [];
let workouts = [];
let nutrition = [];
let moodEntries = [];
let userId = 1;

// Add demo user
users.push({ id: 1, name: 'Student', email: 'demo@example.com', password: 'demo' });

const mockData = {
  users,
  workouts,
  nutrition,
  moodEntries,
  userId,
  
  addUser(user) {
    user.id = this.userId++;
    this.users.push(user);
    return user;
  },
  
  getUserById(id) {
    return this.users.find(u => u.id === id);
  },
  
  addWorkout(workout) {
    workout.id = Date.now();
    this.workouts.push(workout);
    return workout;
  },
  
  getWorkoutsByUserId(userId) {
    return this.workouts.filter(w => w.userId === userId);
  },
  
  addNutrition(nutrition) {
    nutrition.id = Date.now();
    this.nutrition.push(nutrition);
    return nutrition;
  },
  
  getNutritionByUserId(userId) {
    return this.nutrition.filter(n => n.userId === userId);
  },
  
  addMood(mood) {
    mood.id = Date.now();
    this.moodEntries.push(mood);
    return mood;
  },
  
  getMoodByUserId(userId) {
    return this.moodEntries.filter(m => m.userId === userId);
  }
};

module.exports = mockData;
