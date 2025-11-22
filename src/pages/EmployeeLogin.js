import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const EmployeeLogin = () => {
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
      localStorage.setItem('employeeLoggedIn', 'true');
      localStorage.setItem('employeeLoginId', formData.loginId);
      navigate('/employee/dashboard');
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
              <circle cx="30" cy="30" r="30" fill="#10B981"/>
              <path d="M30 15C36.627 15 42 20.373 42 27C42 33.627 36.627 39 30 39C23.373 39 18 33.627 18 27C18 20.373 23.373 15 30 15Z" fill="white"/>
              <path d="M15 47C15 41 18 36 22 34C22 36 24 38 27 38C30 38 32 36 32 34C36 36 39 41 39 47" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Employee Login</h1>
          <p>Access your employee dashboard</p>
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
            <p>New Employee? <Link to="/employee/register">Register Here</Link></p>
            <a href="/" className="back-link">← Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
