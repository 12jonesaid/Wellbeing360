import React, { useState } from 'react';
import '../styles/LandingPage.css';

// Import Assets
import sdgHealthImg from '../assets/sdg_health.png';
import landingHeroImg from '../assets/landing_hero.png';
import happyPeopleImg from '../assets/happy_people.jpg';
import marathonImg from '../assets/marathon.png';
import appLogoImg from '../assets/app_logo.jpg';

export default function LandingPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('fitness');

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
        <section className="hero-card">
          <div className="hero-left">
            <h1 className="hero-title">Better well-being, every day.</h1>
            <p className="hero-description">
              Track your mood, stay active, and access health tips to live a healthier, happier life.
            </p>
            <div className="combines-section">
              <span className="combines-label">Everything you need for student wellness:</span>
              <span className="combines-item">Mood tracking</span>
              <span className="combines-item">Exercise planning</span>
              <span className="combines-item">Health guidance</span>
            </div>
            <div className="cta-group">
              <button className="btn-signin" onClick={() => onNavigate('signup')}>
                Get Started
              </button>
              <button className="btn-secondary" onClick={() => onNavigate('healthtips')}>
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-right">
            <h2 className="allowed-title">Track health the easy way.</h2>
            <ul className="allowed-list">
              <li>Personal growth dashboard</li>
              <li>Daily exercise motivators</li>
              <li>Meal and mood check-ins</li>
            </ul>
          </div>

          <div className="mockup-left">
            <img src={landingHeroImg} alt="Students using WellBeing360" />
          </div>

          <div className="mockup-panel-right">
            <div className="panel-header">
              <span className="panel-title">Student wellness moments</span>
              <div className="panel-tabs">
                <button
                  className={`panel-tab ${activeTab === 'fitness' ? 'active' : ''}`}
                  onClick={() => setActiveTab('fitness')}
                >
                  💪 Fitness
                </button>
                <button
                  className={`panel-tab ${activeTab === 'mental' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mental')}
                >
                  🧠 Mood
                </button>
              </div>
            </div>

            <div className="panel-content">
              {activeTab === 'fitness' ? (
                <img src={happyPeopleImg} alt="Students exercising together" key="fitness" />
              ) : (
                <img src={landingHeroImg} alt="Students sharing a wellness moment" key="mental" />
              )}
            </div>
          </div>
        </section>

        <section className="sdg-section">
          <div className="sdg-graphic">
            <img src={sdgHealthImg} alt="UN Goal 3 Good Health and Well-Being Logo" />
          </div>
          <div className="sdg-info">
            <h2>Proudly aligned with student health goals</h2>
            <p>
              Our green and white homepage design is calm, welcoming, and built to help students feel supported while they build better habits.
            </p>
            <div className="sdg-badges">
              <span className="sdg-badge">🟢 Calm experience</span>
              <span className="sdg-badge">🤍 Clean interface</span>
              <span className="sdg-badge">📘 Student-focused</span>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-banner">
            <img src={marathonImg} alt="Runners crossing a city marathon finish line" />
          </div>
          <div className="mission-content">
            <div className="mission-content-left">
              <h2>Wellness that fits student life.</h2>
              <p>
                Log meals, workouts, and moods in a supportive app designed to feel fresh, bright, and motivating.
              </p>
            </div>
            <div className="mission-grid">
              <div className="mission-item">
                <h3>👥 Supportive design</h3>
                <p>Built for daily student check-ins.</p>
              </div>
              <div className="mission-item">
                <h3>🌿 Better balance</h3>
                <p>Bring fitness and calm together.</p>
              </div>
              <div className="mission-item">
                <h3>📈 Clear goals</h3>
                <p>See progress at a glance.</p>
              </div>
              <div className="mission-item">
                <h3>🚀 Quick start</h3>
                <p>Begin tracking with one click.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
