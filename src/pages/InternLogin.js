import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const InternLogin = () => {
  const [formData, setFormData] = useState({
    loginId: '',
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
    if (formData.loginId && formData.password) {
      localStorage.setItem('internLoggedIn', 'true');
      localStorage.setItem('internLoginId', formData.loginId);
      navigate('/intern/dashboard');
    } else {
      setError('Please enter both Login ID and Password');
    }
  };

  return (
    <div className="login-container">
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
              <circle cx="30" cy="30" r="30" fill="#F59E0B"/>
              <path d="M20 25L30 15L40 25V35C40 40 36 44 30 44C24 44 20 40 20 35V25Z" fill="white"/>
              <path d="M25 30L28 33L35 26" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Intern Login</h1>
          <p>Access your intern dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label className="form-label">Login ID</label>
            <input
              type="text"
              name="loginId"
              className="form-input"
              placeholder="Enter your Login ID"
              value={formData.loginId}
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
            <p>New to Internship? <Link to="/intern/apply">Apply Here</Link></p>
            <a href="/" className="back-link">← Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternLogin;
