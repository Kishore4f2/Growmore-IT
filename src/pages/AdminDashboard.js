import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatbot from '../components/AIChatbot';
import './Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [employees, setEmployees] = useState([]);
  const [interns, setInterns] = useState([]);
  const [internApplications, setInternApplications] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    // Check if admin is logged in
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
      return;
    }

    // Load demo data
    loadData();
  }, [navigate]);

  const loadData = () => {
    // Load employees
    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    setEmployees(storedEmployees);

    // Load interns (demo data)
    const demoInterns = [
      { id: 1, name: 'John Doe', email: 'john@example.com', type: 'Paid', status: 'Active', startDate: '2024-01-15', completionDate: null },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', type: 'Unpaid', status: 'Active', startDate: '2024-02-01', completionDate: null },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', type: 'Paid', status: 'Completed', startDate: '2023-12-01', completionDate: '2024-02-28' }
    ];
    setInterns(demoInterns);

    // Load applications
    const storedApplications = JSON.parse(localStorage.getItem('internApplications') || '[]');
    setInternApplications(storedApplications);

    // Load tasks (demo data)
    const demoTasks = [
      { id: 1, employee: 'John Doe', title: 'Website Redesign', status: 'In Progress', dueDate: '2024-03-15', priority: 'High' },
      { id: 2, employee: 'Jane Smith', title: 'API Integration', status: 'Completed', dueDate: '2024-03-10', priority: 'Medium' },
      { id: 3, employee: 'Mike Johnson', title: 'Database Optimization', status: 'Pending', dueDate: '2024-03-20', priority: 'High' }
    ];
    setTasks(demoTasks);

    // Load queries (demo data)
    const demoQueries = [
      { id: 1, employee: 'John Doe', subject: 'Leave Request', message: 'I need to take leave next week', status: 'Pending', date: '2024-03-05' },
      { id: 2, employee: 'Jane Smith', subject: 'Payment Query', message: 'When will my payment be processed?', status: 'Resolved', date: '2024-03-03' }
    ];
    setQueries(demoQueries);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    navigate('/admin/login');
  };

  const approveApplication = (appId) => {
    const app = internApplications.find(a => a.id === appId);
    if (app) {
      const loginId = `INT${Date.now().toString().slice(-6)}`;
      const password = `PASS${Math.random().toString(36).slice(-8).toUpperCase()}`;
      
      const newIntern = {
        ...app,
        loginId,
        password,
        status: 'Active',
        startDate: new Date().toISOString().split('T')[0],
        offerLetterGenerated: true
      };
      
      setInterns(prev => [...prev, newIntern]);
      setInternApplications(prev => prev.filter(a => a.id !== appId));
      
      alert(`Application approved! Login ID: ${loginId}, Password: ${password}`);
    }
  };

  const generateOfferLetter = (internId) => {
    const intern = interns.find(i => i.id === internId);
    if (intern) {
      const offerLetter = {
        internName: intern.fullName,
        email: intern.email,
        internshipType: intern.internshipType,
        duration: intern.duration,
        startDate: intern.startDate || new Date().toISOString().split('T')[0],
        generatedDate: new Date().toISOString().split('T')[0]
      };
      
      // In a real app, this would generate a PDF
      const content = `OFFER LETTER\n\nDear ${offerLetter.internName},\n\nWe are pleased to offer you a ${offerLetter.internshipType} internship position at Growmore IT Services.\n\nDuration: ${offerLetter.duration}\nStart Date: ${offerLetter.startDate}\n\nWelcome to the team!\n\nBest regards,\nGrowmore IT Services`;
      
      alert('Offer Letter Generated!\n\n' + content);
    }
  };

  const generateCompletionCertificate = (internId) => {
    const intern = interns.find(i => i.id === internId);
    if (intern) {
      const certificate = {
        internName: intern.name,
        startDate: intern.startDate,
        completionDate: new Date().toISOString().split('T')[0],
        generatedDate: new Date().toISOString().split('T')[0]
      };
      
      const content = `COMPLETION CERTIFICATE\n\nThis certifies that ${certificate.internName} has successfully completed the internship program at Growmore IT Services.\n\nDuration: ${certificate.startDate} to ${certificate.completionDate}\n\nCongratulations on your achievement!\n\nGrowmore IT Services`;
      
      alert('Completion Certificate Generated!\n\n' + content);
      
      // Update intern status
      setInterns(prev => prev.map(i => 
        i.id === internId ? { ...i, status: 'Completed', completionDate: certificate.completionDate } : i
      ));
    }
  };

  const stats = {
    totalEmployees: employees.length,
    totalInterns: interns.length,
    activeInterns: interns.filter(i => i.status === 'Active').length,
    pendingApplications: internApplications.length,
    pendingTasks: tasks.filter(t => t.status === 'Pending').length,
    pendingQueries: queries.filter(q => q.status === 'Pending').length
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Growmore IT Services</h2>
          <span className="nav-subtitle">Admin Dashboard</span>
        </div>
        <div className="nav-actions">
          <span className="nav-user">Welcome, Admin</span>
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
            className={`sidebar-item ${activeTab === 'employees' ? 'active' : ''}`}
            onClick={() => setActiveTab('employees')}
          >
            👥 Employees
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'interns' ? 'active' : ''}`}
            onClick={() => setActiveTab('interns')}
          >
            🎓 Interns
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            📝 Applications
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            ✅ Tasks
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'queries' ? 'active' : ''}`}
            onClick={() => setActiveTab('queries')}
          >
            💬 Queries
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            📈 Reports
          </button>
        </div>

        <div className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2 className="tab-title">Dashboard Overview</h2>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-info">
                    <h3>{stats.totalEmployees}</h3>
                    <p>Total Employees</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🎓</div>
                  <div className="stat-info">
                    <h3>{stats.totalInterns}</h3>
                    <p>Total Interns</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">✅</div>
                  <div className="stat-info">
                    <h3>{stats.activeInterns}</h3>
                    <p>Active Interns</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📝</div>
                  <div className="stat-info">
                    <h3>{stats.pendingApplications}</h3>
                    <p>Pending Applications</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⏳</div>
                  <div className="stat-info">
                    <h3>{stats.pendingTasks}</h3>
                    <p>Pending Tasks</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">💬</div>
                  <div className="stat-info">
                    <h3>{stats.pendingQueries}</h3>
                    <p>Pending Queries</p>
                  </div>
                </div>
              </div>

              <div className="recent-activity">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  {tasks.slice(0, 5).map(task => (
                    <div key={task.id} className="activity-item">
                      <div className="activity-icon">✅</div>
                      <div className="activity-content">
                        <p><strong>{task.employee}</strong> - {task.title}</p>
                        <span className="activity-date">{task.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'employees' && (
            <div className="tab-content">
              <h2 className="tab-title">Employee Management</h2>
              
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Login ID</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.length > 0 ? (
                      employees.map(emp => (
                        <tr key={emp.id}>
                          <td>{emp.fullName}</td>
                          <td>{emp.email}</td>
                          <td>{emp.department}</td>
                          <td>{emp.position}</td>
                          <td>{emp.loginId || 'N/A'}</td>
                          <td>
                            <button className="btn btn-secondary btn-sm">Edit</button>
                            <button className="btn btn-danger btn-sm">Disable</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '40px' }}>
                          No employees registered yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'interns' && (
            <div className="tab-content">
              <h2 className="tab-title">Intern Management</h2>
              
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Start Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interns.map(intern => (
                      <tr key={intern.id}>
                        <td>{intern.name}</td>
                        <td>{intern.email}</td>
                        <td><span className={`badge ${intern.type === 'Paid' ? 'badge-success' : 'badge-info'}`}>{intern.type}</span></td>
                        <td><span className={`badge ${intern.status === 'Active' ? 'badge-success' : 'badge-primary'}`}>{intern.status}</span></td>
                        <td>{intern.startDate}</td>
                        <td>
                          {!intern.offerLetterGenerated && (
                            <button className="btn btn-success btn-sm" onClick={() => generateOfferLetter(intern.id)}>
                              Generate Offer Letter
                            </button>
                          )}
                          {intern.status === 'Active' && (
                            <button className="btn btn-primary btn-sm" onClick={() => generateCompletionCertificate(intern.id)}>
                              Generate Certificate
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="tab-content">
              <h2 className="tab-title">Internship Applications</h2>
              
              <div className="applications-grid">
                {internApplications.length > 0 ? (
                  internApplications.map(app => (
                    <div key={app.id} className="application-card">
                      <div className="application-header">
                        <h3>{app.fullName}</h3>
                        <span className={`badge ${app.status === 'approved' ? 'badge-success' : 'badge-warning'}`}>
                          {app.status || 'Pending'}
                        </span>
                      </div>
                      <div className="application-details">
                        <p><strong>Email:</strong> {app.email}</p>
                        <p><strong>University:</strong> {app.university}</p>
                        <p><strong>Course:</strong> {app.course} - {app.year}</p>
                        <p><strong>Type:</strong> {app.internshipType}</p>
                        <p><strong>Duration:</strong> {app.duration}</p>
                        <p><strong>Skills:</strong> {app.skills}</p>
                      </div>
                      <div className="application-actions">
                        <button className="btn btn-success" onClick={() => approveApplication(app.id)}>
                          Approve Application
                        </button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: 'center', padding: '40px' }}>No pending applications.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="tab-content">
              <h2 className="tab-title">Task Management</h2>
              
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Task Title</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Due Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map(task => (
                      <tr key={task.id}>
                        <td>{task.employee}</td>
                        <td>{task.title}</td>
                        <td><span className={`badge ${task.status === 'Completed' ? 'badge-success' : task.status === 'In Progress' ? 'badge-info' : 'badge-warning'}`}>{task.status}</span></td>
                        <td><span className={`badge ${task.priority === 'High' ? 'badge-danger' : 'badge-primary'}`}>{task.priority}</span></td>
                        <td>{task.dueDate}</td>
                        <td>
                          <button className="btn btn-secondary btn-sm">View</button>
                          <button className="btn btn-success btn-sm">Approve</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'queries' && (
            <div className="tab-content">
              <h2 className="tab-title">Employee Queries</h2>
              
              <div className="queries-list">
                {queries.map(query => (
                  <div key={query.id} className="query-card">
                    <div className="query-header">
                      <div>
                        <h3>{query.subject}</h3>
                        <p className="query-employee">From: {query.employee}</p>
                      </div>
                      <span className={`badge ${query.status === 'Resolved' ? 'badge-success' : 'badge-warning'}`}>
                        {query.status}
                      </span>
                    </div>
                    <p className="query-message">{query.message}</p>
                    <div className="query-footer">
                      <span className="query-date">{query.date}</span>
                      <div className="query-actions">
                        <button className="btn btn-success btn-sm">Resolve</button>
                        <button className="btn btn-secondary btn-sm">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="tab-content">
              <h2 className="tab-title">Reports & Analytics</h2>
              
              <div className="reports-section">
                <div className="report-options">
                  <button className="btn btn-primary">Download Daily Report (PDF)</button>
                  <button className="btn btn-primary">Download Weekly Report (PDF)</button>
                  <button className="btn btn-primary">Download Monthly Report (PDF)</button>
                  <button className="btn btn-success">Download Excel Report</button>
                </div>
                
                <div className="analytics-grid">
                  <div className="analytics-card">
                    <h3>Employee Analytics</h3>
                    <div className="analytics-content">
                      <p>Total Employees: {stats.totalEmployees}</p>
                      <p>Active Employees: {stats.totalEmployees}</p>
                      <p>Tasks Completed: {tasks.filter(t => t.status === 'Completed').length}</p>
                    </div>
                  </div>
                  <div className="analytics-card">
                    <h3>Internship Analytics</h3>
                    <div className="analytics-content">
                      <p>Total Interns: {stats.totalInterns}</p>
                      <p>Active Interns: {stats.activeInterns}</p>
                      <p>Completed Internships: {interns.filter(i => i.status === 'Completed').length}</p>
                    </div>
                  </div>
                  <div className="analytics-card">
                    <h3>Payment Analytics</h3>
                    <div className="analytics-content">
                      <p>Paid Interns: {interns.filter(i => i.type === 'Paid').length}</p>
                      <p>Total Payments: $12,500</p>
                      <p>Pending Payments: $2,300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <AIChatbot userType="admin" />
    </div>
  );
};

export default AdminDashboard;
