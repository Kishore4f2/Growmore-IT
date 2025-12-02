import React from 'react';
import '../Internship/InternshipModal.css';

const ApplyJobModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content internship-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Apply for Job</h2>

                <div className="job-form-container">
                    <h3>Job Application Form</h3>
                    <form className="job-form" onSubmit={(e) => { e.preventDefault(); alert('Job application submitted.'); onClose(); }}>
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
        </div>
    );
};

export default ApplyJobModal;
