import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const PaidInternship = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container dark">
      <section className="internship-section neon-panel" style={{ marginTop: 24 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Paid Internship</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Home</button>
          </div>
          <p className="section-subtitle">Instant Internship – Get your login ID and password within 2 minutes!</p>

          <div className="paid-internship-form">
            <div className="instant-notice">
              <strong>Instant Internship</strong> – Receive credentials immediately after successful payment.
            </div>
            <form className="internship-form" onSubmit={(e) => { e.preventDefault(); alert('Submitted. Redirecting to payment gateway...'); }}>
              <div className="form-group">
                <label>Select Duration:</label>
                <select className="form-control" defaultValue="1 Month – ₹200">
                  <option>1 Month – ₹200</option>
                  <option>3 Months – ₹500</option>
                  <option>6 Months – ₹1000</option>
                </select>
              </div>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>College Name:</label>
                <input type="text" className="form-control" placeholder="Enter your college name" required />
              </div>
              <div className="form-group">
                <label>Year of Graduation:</label>
                <input type="number" min="1900" max="2100" className="form-control" placeholder="e.g. 2026" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input type="tel" className="form-control" placeholder="Enter your contact number" required />
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Resume Upload:</label>
                <input type="file" className="form-control" accept=".pdf,.doc,.docx" />
              </div>
              <button type="submit" className="btn btn-primary">Submit & Proceed to Payment</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidInternship;


