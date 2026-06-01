# Frontend Setup Guide

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file with:
```
REACT_APP_API_URL=http://localhost:5000
```

## Running the Application

### Development Mode
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Project Structure

- `public/` - Static files and index.html
- `src/components/` - React components
  - `Login.js` - Authentication component
  - `Dashboard.js` - Main dashboard view
  - `WorkoutForm.js` - Workout logging
  - `NutritionForm.js` - Meal logging
  - `MoodForm.js` - Mood tracking
- `src/utils/` - Utility functions
  - `api.js` - API client with axios
- `src/styles/` - CSS stylesheets
  - `App.css` - Main app styles
  - `Auth.css` - Authentication styles
  - `Dashboard.css` - Dashboard styles
  - `Form.css` - Form component styles

## Components

### Login Component
- Email and password input
- Demo credentials display
- Error handling

### Dashboard Component
- Stats overview cards
- Workout, nutrition, and mood summaries
- Quick action buttons

### Workout Form
- Workout type selection
- Duration and calories input
- Optional description

### Nutrition Form
- Meal type selection
- Calorie and macro tracking
- Daily summary support

### Mood Form
- Emoji mood selector (1-10 scale)
- Focus time tracking
- Optional notes

## Styling

The app uses a modern gradient color scheme:
- Primary: `#667eea` to `#764ba2` (Purple gradient)
- Accent colors for different features:
  - Workouts: Purple gradient
  - Nutrition: Pink/Red gradient
  - Mood: Cyan gradient

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

### Connection Issues
- Ensure backend is running on port 5000
- Check `.env` REACT_APP_API_URL
- Verify CORS is enabled on backend

### Module Not Found
```bash
rm -rf node_modules
npm install
```

### Port 3000 Already in Use
```bash
npm start -- --port 3001
```
