import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const ApplyJob = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container dark">
      <section className="grow-together-section" style={{ marginTop: 24 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Apply for Job</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Home</button>
          </div>
          <div className="job-form-container">
            <h3>Job Application Form</h3>
            <form className="job-form" onSubmit={(e)=>{e.preventDefault(); alert('Job application submitted.')}}>
              <div className="form-group">
                <label>Full Name:</label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
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
                <label>College Name:</label>
                <input type="text" className="form-control" placeholder="Enter your college name" />
              </div>
              <div className="form-group">
                <label>Year of Graduation:</label>
                <input type="number" min="1900" max="2100" className="form-control" placeholder="e.g. 2026" />
              </div>
              <div className="form-group">
                <label>Position Applied For:</label>
                <input type="text" className="form-control" placeholder="Enter position" />
              </div>
              <div className="form-group">
                <label>Resume Upload:</label>
                <input type="file" className="form-control" accept=".pdf,.doc,.docx" />
              </div>
              <div className="form-group">
                <label>Cover Letter:</label>
                <textarea className="form-control" rows="4" placeholder="Enter your cover letter"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyJob;


