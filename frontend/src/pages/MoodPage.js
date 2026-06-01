import React from 'react';
import '../styles/LandingPage.css';
import appLogoImg from '../assets/app_logo.jpg';

export default function MoodPage({ onNavigate }) {
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
          <button className="btn-signin" onClick={() => onNavigate('login')}>
            Login
          </button>
        </div>
      </nav>

      <main className="landing-main">
        <section className="hero-card about-card">
          <div className="hero-left">
            <h1 className="hero-title">Mood tracking made simple for students.</h1>
            <p className="hero-description">
              WellBeing360 helps you capture your mental state in just a few taps, so you can see how sleep, study stress, and social life affect your mood.
            </p>
            <p className="hero-description">
              Your check-ins are saved in the app, making it easier to spot what lifts your energy and what should change before a big exam week.
            </p>
            <div className="combines-section">
              <span className="combines-item">Daily mood check-ins</span>
              <span className="combines-item">Reflection prompts for full wellness</span>
              <span className="combines-item">Trend reports over time</span>
            </div>
          </div>
          <div className="hero-right about-right">
            <h2>Turn feelings into better routines.</h2>
            <p>
              The app collects your mood entries and shows you meaningful patterns, so you can adjust rest, study, and exercise with smarter decisions.
            </p>
            <p>
              This makes the mood tracker more than a diary — it becomes a tool for staying balanced through campus life.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
