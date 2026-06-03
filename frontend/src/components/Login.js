import React, { useState, useEffect } from 'react';
import { Mail, Lock } from 'lucide-react';
import * as api from '../utils/api';
import '../styles/Auth.css';

export default function Login({ onLogin, onBack, defaultMode = 'login' }) {
  const [mode, setMode] = useState(defaultMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = mode === 'login'
        ? await api.login(email, password)
        : await api.register(name, email, password);

      onLogin(response.data);
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Unable to authenticate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Lock className="icon" size={44} />
          <h1>{mode === 'login' ? 'Student Login' : 'Create Account'}</h1>
          <p>
            {mode === 'login'
              ? 'Sign in to your student wellness dashboard.'
              : 'Register now and start tracking your health improvements.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#124925' }} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ paddingLeft: '42px' }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#124925' }} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ paddingLeft: '42px' }}
            />
          </div>

          {error && <div className="error">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? 'Working...' : mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="demo-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {mode === 'login' && (
            <div style={{ fontSize: '0.95rem', color: '#475569' }}>
              Demo credentials: <strong>demo@example.com</strong> / <strong>demo</strong>
            </div>
          )}
          <span>
            {mode === 'login' ? 'Don’t have an account?' : 'Already have an account?'}
            <button
              type="button"
              onClick={() => {
                setMode(mode === 'login' ? 'register' : 'login');
                setError('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#124925',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginLeft: '0.35rem',
                fontWeight: 700,
              }}
            >
              {mode === 'login' ? 'Create account' : 'Sign in'}
            </button>
          </span>
          <button
            type="button"
            onClick={onBack}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#4b5563',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0,
              fontSize: '0.94rem',
            }}
          >
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
}

