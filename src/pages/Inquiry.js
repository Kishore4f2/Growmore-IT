import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { curatedBackgrounds } from '../assets/curatedBackgrounds';

const Inquiry = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container dark">
      <section className="grow-together-section with-blur-bg" style={{ marginTop: 24 }}>
        <div className="section-bg">
          <div className="section-bg__media" style={{ backgroundImage: `url('${curatedBackgrounds.pages.inquiry}')` }} />
          <div className="section-bg__overlay" />
        </div>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Inquiry</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Home</button>
          </div>
          <div className="inquiry-form-container">
            <h3>Inquiry Form</h3>
            <form className="inquiry-form" onSubmit={(e)=>{e.preventDefault(); alert('Inquiry submitted. We will contact you soon.')}}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input type="tel" className="form-control" placeholder="Enter your contact number" required />
              </div>
              <div className="form-group">
                <label>Type of Enquiry:</label>
                <select className="form-control">
                  <option>General Inquiry</option>
                  <option>Service Inquiry</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea className="form-control" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;


