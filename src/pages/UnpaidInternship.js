import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { curatedBackgrounds } from '../assets/curatedBackgrounds';

const UnpaidInternship = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container dark">
      <section className="internship-section neon-panel with-blur-bg" style={{ marginTop: 24 }}>
        <div className="section-bg">
          <div className="section-bg__media" style={{ backgroundImage: `url('${curatedBackgrounds.pages.internshipUnpaid}')` }} />
          <div className="section-bg__overlay" />
        </div>
        <div className="container">
          <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Unpaid Internship</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>← <span className="btn-text">Back to Home</span></button>
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


