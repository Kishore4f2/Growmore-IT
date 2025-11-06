import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatbot from '../components/AIChatbot';
import './Dashboard.css';

const InternDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [tasks, setTasks] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [internInfo, setInternInfo] = useState(null);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('internLoggedIn')) {
      navigate('/intern/login');
      return;
    }

    loadData();
  }, [navigate]);

  const loadData = () => {
    // Demo intern info
    setInternInfo({
      name: 'John Doe',
      email: 'john@example.com',
      type: 'Paid',
      startDate: '2024-01-15',
      duration: '3 Months',
      status: 'Active'
    });

    // Demo tasks
    const demoTasks = [
      { id: 1, title: 'Complete React Tutorial', status: 'Completed', dueDate: '2024-02-15', description: 'Finish the React.js tutorial course' },
      { id: 2, title: 'Build Portfolio Website', status: 'In Progress', dueDate: '2024-03-20', description: 'Create a portfolio website using React' },
      { id: 3, title: 'API Integration Project', status: 'Pending', dueDate: '2024-03-25', description: 'Integrate REST API in a sample project' }
    ];
    setTasks(demoTasks);

    // Demo payment info (for paid interns)
    if (internInfo?.type === 'Paid') {
      setPaymentInfo({
        stipend: 5000,
        lastPayment: '2024-02-28',
        nextPayment: '2024-03-28',
        paymentHistory: [
          { date: '2024-02-28', amount: 5000, status: 'Paid' },
          { date: '2024-01-28', amount: 5000, status: 'Paid' }
        ]
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('internLoggedIn');
    localStorage.removeItem('internLoginId');
    navigate('/intern/login');
  };

  const markTaskComplete = (taskId) => {
    setTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, status: 'Completed' } : t
    ));
    
    // Check if all tasks are completed
    const updatedTasks = tasks.map(t => t.id === taskId ? { ...t, status: 'Completed' } : t);
    const allCompleted = updatedTasks.every(t => t.status === 'Completed');
    
    if (allCompleted && !certificateGenerated) {
      generateCompletionCertificate();
    } else {
      alert('Task marked as completed!');
    }
  };

  const generateCompletionCertificate = () => {
    const certificate = {
      internName: internInfo?.name || 'Intern',
      startDate: internInfo?.startDate || '2024-01-15',
      completionDate: new Date().toISOString().split('T')[0],
      duration: internInfo?.duration || '3 Months'
    };
    
    const content = `COMPLETION CERTIFICATE

This certifies that ${certificate.internName} has successfully completed the internship program at Growmore IT Services.

Duration: ${certificate.duration}
Start Date: ${certificate.startDate}
Completion Date: ${certificate.completionDate}

Congratulations on your achievement!

Growmore IT Services`;

    alert('🎉 All tasks completed!\n\nCompletion Certificate Generated!\n\n' + content);
    setCertificateGenerated(true);
  };

  const generateOfferLetter = () => {
    if (!internInfo) return;
    
    const offerLetter = {
      internName: internInfo.name,
      email: internInfo.email,
      internshipType: internInfo.type,
      duration: internInfo.duration,
      startDate: internInfo.startDate
    };
    
    const content = `OFFER LETTER

Dear ${offerLetter.internName},

We are pleased to offer you a ${offerLetter.internshipType} internship position at Growmore IT Services.

Duration: ${offerLetter.duration}
Start Date: ${offerLetter.startDate}

Welcome to the team!

Best regards,
Growmore IT Services`;

    alert('Offer Letter:\n\n' + content);
  };

  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const pendingTasks = tasks.filter(t => t.status === 'Pending').length;
  const inProgressTasks = tasks.filter(t => t.status === 'In Progress').length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Growmore IT Services</h2>
          <span className="nav-subtitle">Intern Dashboard</span>
        </div>
        <div className="nav-actions">
          <span className="nav-user">Welcome, {localStorage.getItem('internLoginId') || 'Intern'}</span>
          <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <button 
            className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Overview
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            ✅ Tasks
          </button>
          {internInfo?.type === 'Paid' && (
            <button 
              className={`sidebar-item ${activeTab === 'payments' ? 'active' : ''}`}
              onClick={() => setActiveTab('payments')}
            >
              💳 Payments
            </button>
          )}
          <button 
            className={`sidebar-item ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            📄 Documents
          </button>
        </div>

        <div className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2 className="tab-title">Dashboard Overview</h2>
              
              {internInfo && (
                <div className="intern-info-card">
                  <div className="intern-header">
                    <div className="intern-avatar">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="30" fill="#F59E0B"/>
                        <path d="M30 15C36.627 15 42 20.373 42 27C42 33.627 36.627 39 30 39C23.373 39 18 33.627 18 27C18 20.373 23.373 15 30 15Z" fill="white"/>
                        <path d="M15 47C15 41 18 36 22 34C22 36 24 38 27 38C30 38 32 36 32 34C36 36 39 41 39 47" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="intern-details">
                      <h3>{internInfo.name}</h3>
                      <p>{internInfo.email}</p>
                      <span className={`badge ${internInfo.type === 'Paid' ? 'badge-success' : 'badge-info'}`}>
                        {internInfo.type} Internship
                      </span>
                    </div>
                  </div>
                  <div className="intern-stats">
                    <div className="intern-stat">
                      <span>Start Date</span>
                      <strong>{internInfo.startDate}</strong>
                    </div>
                    <div className="intern-stat">
                      <span>Duration</span>
                      <strong>{internInfo.duration}</strong>
                    </div>
                    <div className="intern-stat">
                      <span>Status</span>
                      <strong>{internInfo.status}</strong>
                    </div>
                  </div>
                </div>
              )}

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">✅</div>
                  <div className="stat-info">
                    <h3>{completedTasks}</h3>
                    <p>Completed Tasks</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⏳</div>
                  <div className="stat-info">
                    <h3>{inProgressTasks}</h3>
                    <p>In Progress</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📋</div>
                  <div className="stat-info">
                    <h3>{pendingTasks}</h3>
                    <p>Pending Tasks</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-info">
                    <h3>{completionPercentage}%</h3>
                    <p>Completion Rate</p>
                  </div>
                </div>
                {internInfo?.type === 'Paid' && (
                  <div className="stat-card">
                    <div className="stat-icon">💳</div>
                    <div className="stat-info">
                      <h3>${paymentInfo?.stipend?.toLocaleString() || '0'}</h3>
                      <p>Monthly Stipend</p>
                    </div>
                  </div>
                )}
                {certificateGenerated && (
                  <div className="stat-card">
                    <div className="stat-icon">🎓</div>
                    <div className="stat-info">
                      <h3>✓</h3>
                      <p>Certificate Generated</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="progress-section">
                <h3>Internship Progress</h3>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${completionPercentage}%` }}>
                    {completionPercentage}%
                  </div>
                </div>
                <p className="progress-text">
                  {completedTasks} of {totalTasks} tasks completed
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="tab-content">
              <h2 className="tab-title">My Tasks</h2>
              
              <div className="tasks-grid">
                {tasks.map(task => (
                  <div key={task.id} className="task-card">
                    <div className="task-header">
                      <h3>{task.title}</h3>
                      <span className={`badge ${task.status === 'Completed' ? 'badge-success' : task.status === 'In Progress' ? 'badge-info' : 'badge-warning'}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="task-description">{task.description}</p>
                    <div className="task-details">
                      <p><strong>Due Date:</strong> {task.dueDate}</p>
                    </div>
                    {task.status !== 'Completed' && (
                      <button className="btn btn-success btn-full" onClick={() => markTaskComplete(task.id)}>
                        Mark as Complete
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payments' && paymentInfo && (
            <div className="tab-content">
              <h2 className="tab-title">Payment Details</h2>
              
              <div className="payment-summary">
                <div className="payment-card">
                  <h3>Stipend Information</h3>
                  <div className="payment-details">
                    <div className="payment-item">
                      <span>Monthly Stipend</span>
                      <strong>${paymentInfo.stipend.toLocaleString()}</strong>
                    </div>
                    <div className="payment-item">
                      <span>Last Payment</span>
                      <strong>{paymentInfo.lastPayment}</strong>
                    </div>
                    <div className="payment-item">
                      <span>Next Payment</span>
                      <strong>{paymentInfo.nextPayment}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment-history">
                <h3>Payment History</h3>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentInfo.paymentHistory.map((payment, idx) => (
                        <tr key={idx}>
                          <td>{payment.date}</td>
                          <td>${payment.amount.toLocaleString()}</td>
                          <td><span className="badge badge-success">{payment.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="tab-content">
              <h2 className="tab-title">Documents</h2>
              
              <div className="documents-grid">
                <div className="document-card">
                  <div className="document-icon">📄</div>
                  <h3>Offer Letter</h3>
                  <p>Your internship offer letter</p>
                  <button className="btn btn-primary" onClick={generateOfferLetter}>
                    View Offer Letter
                  </button>
                </div>
                
                {certificateGenerated && (
                  <div className="document-card">
                    <div className="document-icon">🎓</div>
                    <h3>Completion Certificate</h3>
                    <p>Your internship completion certificate</p>
                    <button className="btn btn-success" onClick={() => alert('Certificate downloaded!')}>
                      Download Certificate
                    </button>
                  </div>
                )}
                
                {!certificateGenerated && (
                  <div className="document-card disabled">
                    <div className="document-icon">🎓</div>
                    <h3>Completion Certificate</h3>
                    <p>Complete all tasks to generate certificate</p>
                    <button className="btn btn-secondary" disabled>
                      Not Available
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <AIChatbot userType="intern" />
    </div>
  );
};

export default InternDashboard;
