import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const InternApply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    year: '',
    internshipType: '',
    duration: '',
    skills: '',
    coverLetter: ''
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

    // Demo application - store application
    const applications = JSON.parse(localStorage.getItem('internApplications') || '[]');
    applications.push({
      ...formData,
      id: Date.now(),
      status: 'pending',
      appliedDate: new Date().toISOString()
    });
    localStorage.setItem('internApplications', JSON.stringify(applications));

    setSuccess(true);

    setTimeout(() => {
      alert('Application submitted successfully! Admin will review your application and you will receive credentials upon approval.');
      navigate('/');
    }, 500);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <div className="register-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#F59E0B" />
              <path d="M20 25L30 15L40 25V35C40 40 36 44 30 44C24 44 20 40 20 35V25Z" fill="white" />
              <path d="M25 30L28 33L35 26" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1>Internship Application</h1>
          <p>Apply for an internship opportunity at Growmore IT Services</p>
        </div>

        {success && (
          <div className="success-message">
            Application submitted successfully! Admin will review your application.
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
              <label className="form-label">University/College *</label>
              <input
                type="text"
                name="university"
                className="form-input"
                placeholder="Enter your university/college"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Course *</label>
              <input
                type="text"
                name="course"
                className="form-input"
                placeholder="Enter your course"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Year *</label>
              <select
                name="year"
                className="form-select"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Internship Type *</label>
              <select
                name="internshipType"
                className="form-select"
                value={formData.internshipType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Paid">Paid Internship</option>
                <option value="Unpaid">Unpaid Internship</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Duration *</label>
              <select
                name="duration"
                className="form-select"
                value={formData.duration}
                onChange={handleChange}
                required
              >
                <option value="">Select Duration</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Skills *</label>
            <input
              type="text"
              name="skills"
              className="form-input"
              placeholder="e.g., React, Python, JavaScript"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cover Letter *</label>
            <textarea
              name="coverLetter"
              className="form-textarea"
              placeholder="Tell us why you want to intern with us..."
              value={formData.coverLetter}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Submit Application
          </button>

          <div className="register-footer">
            <p>Already applied? <Link to="/intern/login">Login Here</Link></p>
            <a href="/" className="back-link">← <span className="btn-text">Back to Home</span></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternApply;
