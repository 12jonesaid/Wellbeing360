import React from 'react';
import '../styles/LandingPage.css';
import appLogoImg from '../assets/app_logo.jpg';

export default function FeaturesPage({ onNavigate }) {
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
            <h1 className="hero-title">Features that support healthy habits</h1>
            <p className="hero-description">
              WellBeing360 brings together every part of your daily routine into one app. It helps you track activity, food, mood, and recovery with simple controls and clear insights.
            </p>
            <p className="hero-description">
              Each feature is built to reduce friction for students: log entries quickly, see your trends instantly, and use built-in reminders to stick with habits that matter.
            </p>
            <div className="feature-grid">
              <article className="feature-box">
                <h3>Workout logging</h3>
                <p>Record exercises, duration, intensity, and post-workout energy so you can review what works best for your schedule.</p>
              </article>
              <article className="feature-box">
                <h3>Nutrition tracking</h3>
                <p>Capture meals and healthy choices with ease, then compare how food affects energy, focus, and recovery.</p>
              </article>
              <article className="feature-box">
                <h3>Mood tracking</h3>
                <p>Check in with your feelings, add quick notes, and let the app highlight patterns in stress, calm, and motivation.</p>
              </article>
              <article className="feature-box">
                <h3>Personalized dashboard</h3>
                <p>View daily summaries, weekly progress, and wellness suggestions in one calming space designed for students.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
