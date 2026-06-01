import React from 'react';
import '../styles/LandingPage.css';
import appLogoImg from '../assets/app_logo.jpg';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="nav-brand" onClick={() => onNavigate('home')}>
          <img src={appLogoImg} alt="WellBeing360 Logo" className="nav-logo-icon" />
          <span>WellBeing360</span>
        </div>
        <div className="nav-actions">
          <button className="nav-link" onClick={() => onNavigate('home')}>
            Home
          </button>
          <button className="nav-link" onClick={() => onNavigate('mood')}>
            Mood
          </button>
          <button className="nav-link" onClick={() => onNavigate('features')}>
            Exercises
          </button>
          <button className="nav-link" onClick={() => onNavigate('healthtips')}>
            Health Tips
          </button>
          <button className="nav-link" onClick={() => onNavigate('about')}>
            About Us
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('signup')}>
            Sign Up
          </button>
          <button className="btn-signin" onClick={() => onNavigate('login')}>
            Login
          </button>
        </div>
      </nav>

      <main className="landing-main">
        <section className="hero-card about-card">
          <div className="hero-left">
            <h1 className="hero-title">About WellBeing360</h1>
            <p className="hero-description">
              WellBeing360 is the student wellness app that brings your health, fitness, and mood data into one simple, supportive experience.
            </p>
            <p className="hero-description">
              It was designed for busy students who want to track habits without extra clutter. Every screen helps you stay motivated with progress snapshots, reminders, and simple actions you can take today.
            </p>
            <ul className="about-list">
              <li>Capture workouts, meals, and mood so your wellbeing feels complete.</li>
              <li>Use the dashboard to review trends and celebrate steady improvement.</li>
              <li>Build healthier routines with a calm, focused design made for study weeks.</li>
            </ul>
          </div>
          <div className="hero-right about-right">
            <h2>Our mission</h2>
            <p>
              We built WellBeing360 to help students move from stress to steady progress. The app balances useful tracking with thoughtful guidance so wellness becomes part of daily life, not another task.
            </p>
            <p>
              Whether you want to improve sleep, stay consistent with workouts, or understand what affects your mood, the app gives you clear feedback and a smoother path to better habits.
            </p>
            <div className="feature-chip">Student-centered wellness tools</div>
            <div className="feature-chip">Smart daily habit support</div>
            <div className="feature-chip">Calm interface for better focus</div>
          </div>
        </section>
      </main>
    </div>
  );
}
