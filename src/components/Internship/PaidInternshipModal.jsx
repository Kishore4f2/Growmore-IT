import React from 'react';
import './InternshipModal.css'; // We'll create this for shared modal styles if needed, or use inline/existing

const PaidInternshipModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content internship-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Paid Internship</h2>
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
        </div>
    );
};

export default PaidInternshipModal;
