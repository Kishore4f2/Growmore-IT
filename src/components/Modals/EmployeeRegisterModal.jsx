import React, { useState } from 'react';
import '../Internship/InternshipModal.css';

const EmployeeRegisterModal = ({ onClose, onLoginClick }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        department: '',
        position: '',
        address: '',
        joiningDate: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginId = `EMP${Date.now().toString().slice(-6)}`;
        const password = `PASS${Math.random().toString(36).slice(-8).toUpperCase()}`;

        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
        employees.push({
            ...formData,
            loginId,
            password,
            id: Date.now()
        });
        localStorage.setItem('employees', JSON.stringify(employees));

        setSuccess(true);

        setTimeout(() => {
            alert(`Registration Successful!\n\nYour Login ID: ${loginId}\nYour Password: ${password}\n\nPlease save these credentials.`);
            onLoginClick(); // Switch to login modal
        }, 500);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content internship-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="login-header">
                    <div className="login-icon">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="#10B981" />
                            <path d="M30 15C36.627 15 42 20.373 42 27C42 33.627 36.627 39 30 39C23.373 39 18 33.627 18 27C18 20.373 23.373 15 30 15Z" fill="white" />
                            <path d="M15 47C15 41 18 36 22 34C22 36 24 38 27 38C30 38 32 36 32 34C36 36 39 41 39 47" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h1>Employee Registration</h1>
                    <p>Fill out the form to register as a new employee</p>
                </div>

                {success && (
                    <div className="success-message">
                        Registration successful! Your credentials will be shown in a moment.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="register-form">
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
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
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Department *</label>
                        <select
                            name="department"
                            className="form-control"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="Operations">Operations</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Position *</label>
                        <input
                            type="text"
                            name="position"
                            className="form-control"
                            placeholder="Enter your position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Joining Date *</label>
                        <input
                            type="date"
                            name="joiningDate"
                            className="form-control"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Address *</label>
                        <textarea
                            name="address"
                            className="form-control"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-full">
                        Register Now
                    </button>

                    <div className="register-footer">
                        <p>Already registered? <button className="btn-link" onClick={onLoginClick}>Login Here</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeRegisterModal;
