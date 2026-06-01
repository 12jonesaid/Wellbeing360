import React from 'react';
import '../styles/LandingPage.css';
import appLogoImg from '../assets/app_logo.jpg';

export default function SupportPage({ onNavigate }) {
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
            <h1 className="hero-title">Support for every app moment</h1>
            <p className="hero-description">
              WellBeing360 includes detailed help so you can use every feature with confidence. From account setup to habit tracking, we’re here to make the app easy to understand and even easier to keep using.
            </p>
            <p className="hero-description">
              If you have questions about logging mood, adjusting goals, or interpreting your wellness charts, our support options are designed to guide you quickly.
            </p>
            <div className="support-boxes">
              <article className="support-box">
                <h3>In-app guidance</h3>
                <p>Step-by-step help for the dashboard, entries, and wellbeing features.</p>
              </article>
              <article className="support-box">
                <h3>Contact support</h3>
                <p>Email us at support@wellbeing360.example for account or technical help.</p>
              </article>
              <article className="support-box">
                <h3>Wellness resources</h3>
                <p>Explore how to use the app alongside student routines, exams, and recovery days.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
