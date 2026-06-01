#!/bin/bash

echo "🚀 Health & Wellness App Setup"
echo "=============================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Backend setup
echo "📦 Setting up backend..."
cd backend
npm install
echo "✅ Backend dependencies installed"
cd ..

# Frontend setup
echo "📦 Setting up frontend..."
cd frontend
npm install
echo "✅ Frontend dependencies installed"
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the app:"
echo "1. Start backend: cd backend && npm start"
echo "2. Start frontend: cd frontend && npm start (in another terminal)"
echo ""
echo "Demo credentials:"
echo "Email: demo@example.com"
echo "Password: demo"
