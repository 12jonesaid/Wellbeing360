# Backend Setup Guide

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/health-wellness
JWT_SECRET=your_jwt_secret_key_change_this
NODE_ENV=development
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Routes

All endpoints expect JSON with appropriate data. See routes directory for details.

- Authentication: `/api/auth/*`
- Workouts: `/api/workouts/*`
- Nutrition: `/api/nutrition/*`
- Mood: `/api/mood/*`
- Statistics: `/api/stats/*`

## Current Implementation

The backend currently uses in-memory storage for demo purposes. To use MongoDB:

1. Install mongoose: `npm install mongoose`
2. Update models in `models/` directory
3. Update routes to use MongoDB models

## Testing

Use Postman or curl to test endpoints:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"pass123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'
```
