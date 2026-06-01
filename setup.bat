@echo off
echo 🚀 Health ^& Wellness App Setup
echo ==============================
echo.

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install it first.
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo.

REM Backend setup
echo 📦 Setting up backend...
cd backend
call npm install
echo ✅ Backend dependencies installed
cd ..

REM Frontend setup
echo 📦 Setting up frontend...
cd frontend
call npm install
echo ✅ Frontend dependencies installed
cd ..

echo.
echo ✅ Setup complete!
echo.
echo To start the app:
echo 1. Start backend: cd backend ^&^& npm start
echo 2. Start frontend: cd frontend ^&^& npm start (in another terminal)
echo.
echo Demo credentials:
echo Email: demo@example.com
echo Password: demo
