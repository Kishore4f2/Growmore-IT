import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const UnpaidInternship = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container dark">
      <section className="internship-section neon-panel" style={{ marginTop: 24 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Unpaid Internship</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Home</button>
          </div>
          <p className="section-subtitle">
            Gain real-world experience, build your portfolio, and learn industry practices.
          </p>

          <div className="unpaid-internship-message">
            <p>If the company has any openings, they'll contact the candidate directly.</p>
            <p className="thank-you">Thanks for applying!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnpaidInternship;


