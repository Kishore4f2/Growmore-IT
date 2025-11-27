import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatbot from '../components/AIChatbot';
import './Dashboard.css';
import './Home.css';
import { curatedBackgrounds } from '../assets/curatedBackgrounds';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [tasks, setTasks] = useState([]);
  const [queries, setQueries] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newQuery, setNewQuery] = useState({ subject: '', message: '' });

  useEffect(() => {
    if (!localStorage.getItem('employeeLoggedIn')) {
      navigate('/employee/login');
      return;
    }

    loadData();
  }, [navigate]);

  const loadData = () => {
    // Demo tasks
    const demoTasks = [
      { id: 1, title: 'Website Redesign', status: 'In Progress', dueDate: '2024-03-15', priority: 'High', description: 'Redesign the company website with modern UI/UX' },
      { id: 2, title: 'API Integration', status: 'Completed', dueDate: '2024-03-10', priority: 'Medium', description: 'Integrate payment gateway API' },
      { id: 3, title: 'Database Optimization', status: 'Pending', dueDate: '2024-03-20', priority: 'High', description: 'Optimize database queries for better performance' }
    ];
    setTasks(demoTasks);

    // Demo payment info
    setPaymentInfo({
      salary: 50000,
      lastPayment: '2024-02-28',
      nextPayment: '2024-03-28',
      paymentHistory: [
        { date: '2024-02-28', amount: 50000, status: 'Paid' },
        { date: '2024-01-28', amount: 50000, status: 'Paid' },
        { date: '2023-12-28', amount: 50000, status: 'Paid' }
      ]
    });

    // Demo leave requests
    const demoLeaveRequests = [
      { id: 1, startDate: '2025-11-15', endDate: '2025-11-17', reason: 'Personal', status: 'Pending', days: 3 },
      { id: 2, startDate: '2025-12-10', endDate: '2025-12-12', reason: 'Sick Leave', status: 'Approved', days: 3 }
    ];
    setLeaveRequests(demoLeaveRequests);

    // Demo queries
    const demoQueries = [
      { id: 1, subject: 'Payment Query', message: 'When will my payment be processed?', status: 'Resolved', date: '2025-12-02' },
      { id: 2, subject: 'Leave Request', message: 'I need to take leave next week', status: 'Pending', date: '2025-11-08' }
    ];
    setQueries(demoQueries);
  };

  const handleLogout = () => {
    localStorage.removeItem('employeeLoggedIn');
    localStorage.removeItem('employeeLoginId');
    navigate('/employee/login');
  };

  const markTaskComplete = (taskId) => {
    setTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, status: 'Completed' } : t
    ));
    alert('Task marked as completed! Admin will review it.');
  };

  const submitQuery = (e) => {
    e.preventDefault();
    if (newQuery.subject && newQuery.message) {
      const query = {
        id: Date.now(),
        ...newQuery,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0]
      };
      setQueries(prev => [query, ...prev]);
      setNewQuery({ subject: '', message: '' });
      alert('Query submitted successfully! Admin will review it.');
    }
  };

  const submitLeaveRequest = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const leaveRequest = {
      id: Date.now(),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      reason: formData.get('reason'),
      status: 'Pending',
      days: Math.ceil((new Date(formData.get('endDate')) - new Date(formData.get('startDate'))) / (1000 * 60 * 60 * 24)) + 1
    };
    setLeaveRequests(prev => [leaveRequest, ...prev]);
    e.target.reset();
    alert('Leave request submitted! Admin will review it.');
  };

  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const pendingTasks = tasks.filter(t => t.status === 'Pending').length;
  const inProgressTasks = tasks.filter(t => t.status === 'In Progress').length;

  return (
    <div className="dashboard-container with-blur-bg">
      <div className="section-bg">
        <div className="section-bg__media" style={{ backgroundImage: `url('${curatedBackgrounds.pages.dashboardEmployee}')` }} />
        <div className="section-bg__overlay" />
      </div>
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Growmore IT Services</h2>
          <span className="nav-subtitle">Employee Dashboard</span>
        </div>
        <div className="nav-actions">
          <span className="nav-user">Welcome, {localStorage.getItem('employeeLoginId') || 'Employee'}</span>
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
          <button 
            className={`sidebar-item ${activeTab === 'payments' ? 'active' : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            💳 Payments
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'leave' ? 'active' : ''}`}
            onClick={() => setActiveTab('leave')}
          >
            🏖️ Leave Requests
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'queries' ? 'active' : ''}`}
            onClick={() => setActiveTab('queries')}
          >
            💬 Queries
          </button>
        </div>

        <div className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2 className="tab-title">Dashboard Overview</h2>
              
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
                  <div className="stat-icon">💳</div>
                  <div className="stat-info">
                    <h3>${paymentInfo?.salary?.toLocaleString() || '0'}</h3>
                    <p>Monthly Salary</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🏖️</div>
                  <div className="stat-info">
                    <h3>{leaveRequests.filter(l => l.status === 'Pending').length}</h3>
                    <p>Pending Leave Requests</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">💬</div>
                  <div className="stat-info">
                    <h3>{queries.filter(q => q.status === 'Pending').length}</h3>
                    <p>Pending Queries</p>
                  </div>
                </div>
              </div>

              <div className="recent-tasks">
                <h3>Recent Tasks</h3>
                <div className="tasks-list">
                  {tasks.slice(0, 5).map(task => (
                    <div key={task.id} className="task-item">
                      <div className="task-header">
                        <h4>{task.title}</h4>
                        <span className={`badge ${task.status === 'Completed' ? 'badge-success' : task.status === 'In Progress' ? 'badge-info' : 'badge-warning'}`}>
                          {task.status}
                        </span>
                      </div>
                      <p className="task-description">{task.description}</p>
                      <div className="task-footer">
                        <span>Due: {task.dueDate}</span>
                        <span className={`badge ${task.priority === 'High' ? 'badge-danger' : 'badge-primary'}`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
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
                      <p><strong>Priority:</strong> <span className={`badge ${task.priority === 'High' ? 'badge-danger' : 'badge-primary'}`}>{task.priority}</span></p>
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
                  <h3>Salary Information</h3>
                  <div className="payment-details">
                    <div className="payment-item">
                      <span>Monthly Salary</span>
                      <strong>${paymentInfo.salary.toLocaleString()}</strong>
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

          {activeTab === 'leave' && (
            <div className="tab-content">
              <h2 className="tab-title">Leave Requests</h2>
              
              <div className="leave-form-section">
                <h3>Request Leave</h3>
                <form onSubmit={submitLeaveRequest} className="leave-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Start Date</label>
                      <input type="date" name="startDate" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">End Date</label>
                      <input type="date" name="endDate" className="form-input" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Reason</label>
                    <textarea name="reason" className="form-textarea" placeholder="Enter reason for leave" required />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Leave Request</button>
                </form>
              </div>

              <div className="leave-requests-list">
                <h3>My Leave Requests</h3>
                <div className="leave-requests-grid">
                  {leaveRequests.map(request => (
                    <div key={request.id} className="leave-request-card">
                      <div className="leave-header">
                        <h4>{request.reason}</h4>
                        <span className={`badge ${request.status === 'Approved' ? 'badge-success' : request.status === 'Rejected' ? 'badge-danger' : 'badge-warning'}`}>
                          {request.status}
                        </span>
                      </div>
                      <div className="leave-details">
                        <p><strong>Start Date:</strong> {request.startDate}</p>
                        <p><strong>End Date:</strong> {request.endDate}</p>
                        <p><strong>Days:</strong> {request.days}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'queries' && (
            <div className="tab-content">
              <h2 className="tab-title">Queries & Requests</h2>
              
              <div className="query-form-section">
                <h3>Submit New Query</h3>
                <form onSubmit={submitQuery} className="query-form">
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter query subject"
                      value={newQuery.subject}
                      onChange={(e) => setNewQuery({ ...newQuery, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Enter your query or request"
                      value={newQuery.message}
                      onChange={(e) => setNewQuery({ ...newQuery, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Query</button>
                </form>
              </div>

              <div className="queries-list">
                <h3>My Queries</h3>
                {queries.map(query => (
                  <div key={query.id} className="query-card">
                    <div className="query-header">
                      <h4>{query.subject}</h4>
                      <span className={`badge ${query.status === 'Resolved' ? 'badge-success' : 'badge-warning'}`}>
                        {query.status}
                      </span>
                    </div>
                    <p className="query-message">{query.message}</p>
                    <span className="query-date">{query.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <AIChatbot userType="employee" />
    </div>
  );
};

export default EmployeeDashboard;
