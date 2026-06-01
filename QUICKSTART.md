# Quick Start Guide

## 1️⃣ Initial Setup

Run the setup script:

### On Windows (PowerShell or CMD)
```bash
.\setup.bat
```

### On macOS/Linux (Terminal)
```bash
bash setup.sh
```

This will install all dependencies for both frontend and backend.

## 2️⃣ Start the Backend

In a terminal:
```bash
cd backend
npm start
```

You should see: `Server running on port 5000`

## 3️⃣ Start the Frontend

In another terminal:
```bash
cd frontend
npm start
```

The app will automatically open at `http://localhost:3000`

## 4️⃣ Login

Use the demo credentials:
- **Email:** demo@example.com
- **Password:** demo

Or register a new account.

## 🎯 Features to Try

1. **Dashboard** - View your health statistics
2. **Log Workout** - Record a new exercise session
3. **Log Meal** - Track what you eat with nutrition info
4. **Log Mood** - Record your daily mood and focus time
5. **View Stats** - See detailed statistics on the dashboard

## 🛠️ Development Tips

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:3000`
- Changes in React will hot-reload automatically
- Use browser DevTools (F12) to debug
- Check browser console for API errors

## 📱 Mobile Testing

Open `http://localhost:3000` on your phone or use Chrome DevTools responsive mode (Ctrl+Shift+M).

## 🐛 Troubleshooting

**Backend won't start?**
- Make sure port 5000 is not in use
- Check Node.js is installed: `node --version`

**Frontend shows errors?**
- Clear browser cache (Ctrl+Shift+Delete)
- Delete `node_modules` and run `npm install` again
- Ensure backend is running on port 5000

**API connection issues?**
- Check `.env` files in both frontend and backend
- Verify `REACT_APP_API_URL=http://localhost:5000` in frontend/.env

## 📚 Documentation

- [Main README](./README.md)
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
