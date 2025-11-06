import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    address: '',
    joiningDate: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
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
    
    // Demo registration - auto-generate credentials
    const loginId = `EMP${Date.now().toString().slice(-6)}`;
    const password = `PASS${Math.random().toString(36).slice(-8).toUpperCase()}`;
    
    // Store in localStorage (demo)
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.push({
      ...formData,
      loginId,
      password,
      id: Date.now()
    });
    localStorage.setItem('employees', JSON.stringify(employees));
    
    setSuccess(true);
    
    // Show credentials
    setTimeout(() => {
      alert(`Registration Successful!\n\nYour Login ID: ${loginId}\nYour Password: ${password}\n\nPlease save these credentials.`);
      navigate('/employee/login');
    }, 500);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <div className="register-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#10B981"/>
              <path d="M30 15C36.627 15 42 20.373 42 27C42 33.627 36.627 39 30 39C23.373 39 18 33.627 18 27C18 20.373 23.373 15 30 15Z" fill="white"/>
              <path d="M15 47C15 41 18 36 22 34C22 36 24 38 27 38C30 38 32 36 32 34C36 36 39 41 39 47" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Employee Registration</h1>
          <p>Fill out the form to register as a new employee</p>
        </div>

        {success && (
          <div className="success-message">
            Registration successful! Your credentials will be shown in a moment.
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Department *</label>
              <select
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Position *</label>
              <input
                type="text"
                name="position"
                className="form-input"
                placeholder="Enter your position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Joining Date *</label>
              <input
                type="date"
                name="joiningDate"
                className="form-input"
                value={formData.joiningDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Address *</label>
            <textarea
              name="address"
              className="form-textarea"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Register Now
          </button>

          <div className="register-footer">
            <p>Already registered? <Link to="/employee/login">Login Here</Link></p>
            <a href="/" className="back-link">← Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegister;
