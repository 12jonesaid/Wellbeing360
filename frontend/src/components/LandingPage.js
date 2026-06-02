import React from 'react';
import '../styles/LandingPage.css';

import appLogoImg from '../assets/app_logo.jpg';
import landingHeroImg from '../assets/landing_hero.png';

export default function LandingPage({ onNavigate }) {
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
        <section className="hero-card hero-home">
          <div className="hero-left">
            <h1 className="hero-title">
              Better well-being,
              <br />
              <span className="hero-title-accent">every day.</span>
            </h1>
            <p className="hero-description">
              Track your mood, stay active, and discover tips to live a healthier, happier life.
            </p>
            <div className="hero-buttons">
              <button className="btn-signin" onClick={() => onNavigate('signup')}>
                Get Started
              </button>
              <button className="btn-secondary" onClick={() => onNavigate('healthtips')}>
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src={landingHeroImg} alt="Students using WellBeing360" />
          </div>
        </section>

        <section className="feature-cards">
          <article className="feature-card">
            <div className="feature-icon mood-icon">Mood</div>
            <h2>Track Your Mood</h2>
            <p>Log your feelings and understand your patterns.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon workout-icon">Move</div>
            <h2>Do Exercises</h2>
            <p>Simple workouts to boost your body and mind.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon tips-icon">Tips</div>
            <h2>Get Health Tips</h2>
            <p>Practical tips to help you live better every day.</p>
          </article>
        </section>

        <section className="banner-section">
          <div className="banner-card">
            <div className="banner-icon">Step</div>
            <div>
              <h2>Small steps today,</h2>
              <p>stronger you tomorrow.</p>
            </div>
          </div>

          <div className="banner-card banner-card-alt">
            <div className="banner-icon">Team</div>
            <p>Join a growing community of students choosing a healthier life.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
