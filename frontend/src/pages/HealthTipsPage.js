import React from 'react';
import '../styles/LandingPage.css';
import appLogoImg from '../assets/app_logo.jpg';
import healthTipsImg from '../assets/health_tips.jpg';

export default function HealthTipsPage({ onNavigate }) {
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
            <h1 className="hero-title">Health tips for a balanced student life.</h1>
            <p className="hero-description">
              WellBeing360 delivers wellness guidance alongside your tracking data, so your daily tips are relevant to where you are in the week.
            </p>
            <p className="hero-description">
              The app connects your mood, sleep, workouts, and meals to practical suggestions that help you feel more energetic, more focused, and better prepared for your schedule.
            </p>
            <div className="feature-grid">
              <article className="feature-box">
                <h3>Nutrition habits</h3>
                <p>Find easy meal ideas and smart snack choices that support study focus and recovery.</p>
              </article>
              <article className="feature-box">
                <h3>Mindful rest</h3>
                <p>Learn small routines for better sleep and less stress between classes.</p>
              </article>
              <article className="feature-box">
                <h3>Exercise balance</h3>
                <p>Get short workout recommendations that fit busy days without adding pressure.</p>
              </article>
            </div>
          </div>
          <div className="hero-right about-right">
            <img src={healthTipsImg} alt="Health tips for students" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
          </div>
        </section>
      </main>
    </div>
  );
}
