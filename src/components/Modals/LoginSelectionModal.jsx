import React from 'react';
import '../Internship/InternshipModal.css';

const LoginSelectionModal = ({ onClose, onAdminClick, onEmployeeClick, onInternClick }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content internship-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '400px', textAlign: 'center' }}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 style={{ marginBottom: '2rem' }}>Select Login Type</h2>

                <div className="login-options" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button className="btn btn-primary btn-full" onClick={onInternClick}>
                        Intern Login
                    </button>
                    <button className="btn btn-secondary btn-full" onClick={onEmployeeClick}>
                        Employee Login
                    </button>
                    <button className="btn btn-outline btn-full" onClick={onAdminClick} style={{ marginTop: '1rem', opacity: 0.7 }}>
                        Admin Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginSelectionModal;
