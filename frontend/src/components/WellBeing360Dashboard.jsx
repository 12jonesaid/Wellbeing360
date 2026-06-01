import React from 'react';

export default function WellBeing360Dashboard({ user }) {
  const rawName = user?.name || 'Student';
  const displayName = rawName.trim().toLowerCase() === 'james' ? 'Student' : rawName;

  return (
    <div className="dashboard-root">
      <section className="dash-premium-header">
        <div className="header-greeting">
          <div className="greeting-row">
            <h1>Welcome back, {displayName}.</h1>
            <span className="verified-check">Verified student</span>
          </div>
          <p className="greeting-sub">
            Your Health & Wellness dashboard gives you quick access to mood trends, meal tracking, exercise goals, and daily wellbeing tips.
          </p>
        </div>

        <div className="header-controls">
          <button className="premium-icon-btn" aria-label="Notifications">
            🔔
            <span className="bell-badge" />
          </button>
          <button className="premium-icon-btn" aria-label="Premium features">
            ⭐
          </button>
          <div className="premium-avatar">{displayName.charAt(0)}</div>
        </div>
      </section>

      <div className="dash-premium-grid">
        <div className="premium-card">
          <div className="card-header-row">
            <h3>Daily Mood</h3>
            <span className="badge-pill progress-badge">85% happy</span>
          </div>
          <div className="weight-main-value">
            <span className="weight-num">8.5</span>
            <span className="weight-unit">/ 10</span>
          </div>
          <div className="weight-sub-metrics">
            <span className="weight-diff">Stable since yesterday</span>
            <span className="weight-helper">Keep logging your mood to improve your week.</span>
          </div>
        </div>

        <div className="premium-card">
          <div className="card-header-row">
            <h3>Nutrition Balance</h3>
            <span className="badge-pill calorie-badge">1,750 kcal</span>
          </div>
          <div className="calorie-display-wrap">
            <div>
              <p className="calorie-num">1,750</p>
              <p className="calorie-unit">Calories today</p>
            </div>
          </div>
          <div className="weight-sub-metrics">
            <span className="calorie-left-indicator">300 kcal under goal</span>
            <span className="calorie-tip">Try adding a protein snack before evening study.</span>
          </div>
        </div>

        <div className="premium-card">
          <div className="card-header-row">
            <h3>Workout Progress</h3>
            <span className="badge-pill">+12% this week</span>
          </div>
          <div className="weight-main-value">
            <span className="weight-num">4</span>
            <span className="weight-unit">Workouts</span>
          </div>
          <div className="weight-sub-metrics">
            <span className="weight-diff">3 planned sessions left</span>
            <span className="weight-helper">Keep the momentum going with short daily exercises.</span>
          </div>
        </div>

        <div className="premium-card">
          <div className="card-header-row">
            <h3>Daily Focus</h3>
            <span className="badge-pill">Healthy habits</span>
          </div>
          <div className="weight-main-value">
            <span className="weight-num">92%</span>
            <span className="weight-unit">Goal completion</span>
          </div>
          <div className="weight-sub-metrics">
            <span className="weight-diff">2 habits added</span>
            <span className="weight-helper">Use the quick add buttons to log meals, moods, and workouts.</span>
          </div>
        </div>
      </div>

      <section className="premium-card dashboard-wellbeing-card">
        <div className="wellbeing-card-header">
          <div>
            <p className="wellbeing-card-label">Weekly wellbeing score</p>
            <h3>78% of goal reached</h3>
          </div>
          <span className="trend-pill">Trend +7%</span>
        </div>

        <div className="progress-content-layout">
          <div className="circular-progress-wrap">
            <svg className="svg-circle-progress" viewBox="0 0 100 100">
              <circle className="circle-bg" cx="50" cy="50" r="40" />
              <circle className="circle-fill" cx="50" cy="50" r="40" style={{ strokeDashoffset: '40' }} />
            </svg>
            <div className="progress-percentage-label">
              <span className="percentage-num">78%</span>
              <span>of your wellbeing goal</span>
            </div>
          </div>

          <div className="wellbeing-chart-panel">
            <p className="weight-trend-label">Your mood, nutrition, and movement are aligned this week.</p>
            <div className="sparkline-chart-container">
              <svg className="sparkline-svg" viewBox="0 0 300 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="sparkline-area" d="M0,92 C70,70 120,62 170,72 C220,82 250,60 300,50 L300,120 L0,120 Z" />
                <path className="sparkline-line" d="M0,92 C70,70 120,62 170,72 C220,82 250,60 300,50" fill="none" strokeWidth="4" />
                <circle className="pulsing-spark-dot" cx="300" cy="50" r="6" fill="#22c55e" />
              </svg>
            </div>
            <div className="wellbeing-note">
              <span>Continue logging meals and moods to keep this score steady.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-card meal-content-wrap">
        <div>
          <p className="meal-title">Add a quick meal</p>
          <p className="meal-calories">Need help estimating calories? Use the meal helper in Nutrition.</p>
        </div>
        <button className="meal-add-btn" type="button">+</button>
      </section>

      <section className="dashboard-stats-badges-section">
        <h2>Today’s highlights</h2>
        <div className="stats-badges-grid">
          <div className="stats-badge-card">
            <div className="badge-icon icon-workout">💪</div>
            <div className="badge-info">
              <h4>Energy boost</h4>
              <p className="badge-value">Active 58 min</p>
              <p className="badge-sub">Walk, yoga, or strength session</p>
            </div>
          </div>

          <div className="stats-badge-card">
            <div className="badge-icon icon-nutrition">🥗</div>
            <div className="badge-info">
              <h4>Nutrition summary</h4>
              <p className="badge-value">3 meals logged</p>
              <p className="badge-sub">Balanced carbs, protein, and fats</p>
            </div>
          </div>

          <div className="stats-badge-card">
            <div className="badge-icon icon-mood">😊</div>
            <div className="badge-info">
              <h4>Mood boost</h4>
              <p className="badge-value">Consistent 4 days</p>
              <p className="badge-sub">Stay mindful with short breaks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dash-promo-banner">
        <div className="promo-left">
          <h3>Ready for your next wellness win?</h3>
          <p>Open the Mood, Nutrition, or Workout tab to add entries and keep your progress steady.</p>
        </div>
        <button className="btn-promo-claim" type="button">Go to quick entry</button>
      </section>
    </div>
  );
}
