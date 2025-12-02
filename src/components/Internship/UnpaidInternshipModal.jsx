import React from 'react';

const UnpaidInternshipModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content internship-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Unpaid Internship</h2>
                <p className="section-subtitle">
                    Gain real-world experience, build your portfolio, and learn industry practices.
                </p>

                <div className="unpaid-internship-message">
                    <p>If the company has any openings, they'll contact the candidate directly.</p>
                    <p className="thank-you">Thanks for applying!</p>
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <button className="btn btn-secondary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default UnpaidInternshipModal;
