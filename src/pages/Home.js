import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">
              <img src="/Growmore1.jpg" width="500" height="60" viewBox="0 0 40 40" fill="none">
              </img>
            </div>
            {/* <span className="logo-text">Growmore IT Services</span> */}
          </div>
          <div className="nav-links">
            <Link to="/employee/register" className="nav-link">Employee Registration</Link>
            <Link to="/intern/apply" className="nav-link">Apply for Internship</Link>
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Advanced Management System
            <span className="gradient-text">Powered by AI</span>
          </h1>
          <p className="hero-subtitle">
            Streamline your business operations with our comprehensive management platform.
            Manage employees, internships, payments, tasks, and documents all in one place.
          </p>
          
          <div className="hero-buttons">
            <Link to="/admin/login" className="btn btn-primary btn-large">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Admin Login
            </Link>
            <Link to="/employee/login" className="btn btn-secondary btn-large">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Employee Login
            </Link>
            <Link to="/intern/login" className="btn btn-success btn-large">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Intern Login
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="floating-card card-1">
            <div className="card-icon">📊</div>
            <h3>Analytics</h3>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🤖</div>
            <h3>AI Powered</h3>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">⚡</div>
            <h3>Automation</h3>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Employee Management</h3>
            <p>Complete employee lifecycle management with automated workflows</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Internship Program</h3>
            <p>Streamlined internship application and management system</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Payment Tracking</h3>
            <p>Real-time payment status and automated reports</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Task Management</h3>
            <p>Assign, track, and monitor tasks with ease</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Auto Document Generation</h3>
            <p>AI-powered document creation for certificates and letters</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Assistant</h3>
            <p>Smart chatbot for instant support and guidance</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Growmore IT Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
