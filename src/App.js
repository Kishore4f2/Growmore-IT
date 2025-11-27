import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import EmployeeLogin from './pages/EmployeeLogin';
import InternLogin from './pages/InternLogin';
import EmployeeRegister from './pages/EmployeeRegister';
import InternApply from './pages/InternApply';
import ServiceDetail from './pages/ServiceDetail';

// Dashboards
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import InternDashboard from './pages/InternDashboard';
import PaidInternship from './pages/PaidInternship';
import UnpaidInternship from './pages/UnpaidInternship';
import Inquiry from './pages/Inquiry';
import ApplyJob from './pages/ApplyJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship/paid" element={<PaidInternship />} />
        <Route path="/internship/unpaid" element={<UnpaidInternship />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/apply-job" element={<ApplyJob />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/intern/login" element={<InternLogin />} />
        <Route path="/employee/register" element={<EmployeeRegister />} />
        <Route path="/intern/apply" element={<InternApply />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/intern/dashboard" element={<InternDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
