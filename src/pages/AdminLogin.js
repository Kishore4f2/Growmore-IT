import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Home.css';
import { curatedBackgrounds } from '../assets/curatedBackgrounds';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Demo login - accept any credentials
    if (formData.username && formData.password) {
      localStorage.setItem('adminLoggedIn', 'true');
      localStorage.setItem('adminUsername', formData.username);
      navigate('/admin/dashboard');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="login-container with-blur-bg">
      <div className="section-bg">
        <div className="section-bg__media" style={{ backgroundImage: `url('${curatedBackgrounds.pages.loginAdmin}')` }} />
        <div className="section-bg__overlay" />
      </div>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">
              <img src="/Growmore1.jpg" alt="Growmore IT" className="logo-img" />
            </div>
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => navigate('/')}>Home</button>
            <button className="nav-link" onClick={() => navigate('/internship/paid')}>Paid Internship</button>
            <button className="nav-link" onClick={() => navigate('/internship/unpaid')}>Unpaid Internship</button>
            <button className="nav-link" onClick={() => navigate('/inquiry')}>Inquiry</button>
          </div>
          <div className="nav-actions"></div>
        </div>
      </nav>
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#667eea"/>
              <path d="M30 15L40 22.5V37.5L30 45L20 37.5V22.5L30 15Z" fill="white"/>
              <path d="M22.5 30L27.5 33.75L37.5 24" stroke="#667eea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Admin Login</h1>
          <p>Access your admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Login to Dashboard
          </button>

          <div className="login-footer">
            <p>Demo Mode: Use any credentials to login</p>
            <a href="/" className="back-link">← Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
