import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Internship/InternshipModal.css';

const InternLoginModal = ({ onClose, onApplyClick }) => {
    const [formData, setFormData] = useState({
        loginId: '',
        password: ''
    });
    const [error, setError] = useState('');
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

        if (formData.loginId && formData.password) {
            localStorage.setItem('internLoggedIn', 'true');
            localStorage.setItem('internLoginId', formData.loginId);
            onClose();
            navigate('/intern/dashboard');
        } else {
            setError('Please enter both Login ID and Password');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content internship-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="login-header">
                    <div className="login-icon">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="#F59E0B" />
                            <path d="M20 25L30 15L40 25V35C40 40 36 44 30 44C24 44 20 40 20 35V25Z" fill="white" />
                            <path d="M25 30L28 33L35 26" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1>Intern Login</h1>
                    <p>Access your intern dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label className="form-label">Login ID</label>
                        <input
                            type="text"
                            name="loginId"
                            className="form-control"
                            placeholder="Enter your Login ID"
                            value={formData.loginId}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-full">
                        Login to Dashboard
                    </button>

                    <div className="login-footer">
                        <p>New to Internship? <button className="btn-link" onClick={onApplyClick}>Apply Here</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InternLoginModal;
