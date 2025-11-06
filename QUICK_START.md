# Quick Start Guide

## 🚀 Running the Application

### Step 1: Install Node.js
If you don't have Node.js installed, download and install it from [nodejs.org](https://nodejs.org/)

### Step 2: Install Dependencies
Open terminal/command prompt in the project directory and run:
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

## 🎯 Demo Login Credentials

Since this is a demo application, you can use **any credentials** to login:

### Admin Login
- **URL**: `/admin/login`
- **Username**: Any text
- **Password**: Any text

### Employee Login
- **URL**: `/employee/login`
- **Login ID**: Any text
- **Password**: Any text

### Intern Login
- **URL**: `/intern/login`
- **Login ID**: Any text
- **Password**: Any text

## 📋 Testing the Application

### 1. Employee Registration
1. Navigate to `/employee/register`
2. Fill out the registration form
3. You'll receive auto-generated Login ID and Password
4. Use these credentials to login at `/employee/login`

### 2. Internship Application
1. Navigate to `/intern/apply`
2. Fill out the application form
3. Select Paid or Unpaid internship
4. Submit the application
5. Admin can approve the application from the Admin Dashboard

### 3. Admin Dashboard Features
1. Login as Admin
2. Navigate through different sections:
   - Overview: See statistics and recent activity
   - Employees: View and manage all employees
   - Interns: View and manage interns, generate offer letters and certificates
   - Applications: Review and approve internship applications
   - Tasks: View and manage all tasks
   - Queries: Review and respond to employee queries
   - Reports: Download reports in PDF/Excel format

### 4. Employee Dashboard Features
1. Login as Employee
2. View assigned tasks
3. Mark tasks as complete
4. View payment details
5. Submit leave requests
6. Submit queries to admin
7. Use AI Chat Assistant for help

### 5. Intern Dashboard Features
1. Login as Intern
2. View assigned tasks
3. Complete tasks (completion certificate auto-generates when all tasks are done)
4. View payment details (for paid interns)
5. Access documents (Offer Letter, Completion Certificate)
6. Track internship progress
7. Use AI Chat Assistant for help

## 🤖 AI Chatbot

The AI Chat Assistant is available on all dashboards:
- Click the floating chat button in the bottom-right corner
- Ask questions about tasks, payments, leave, etc.
- The AI will provide helpful responses

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Features Highlights

- Modern, professional UI with gradient backgrounds
- Smooth animations and transitions
- Real-time task tracking
- Auto-generated documents (Offer Letters, Certificates)
- Payment tracking
- Leave request management
- Query system
- AI-powered chat assistant
- Comprehensive reporting

## 💡 Tips

- All data is stored in localStorage (browser storage)
- Refresh the page to see updated data
- Use the sidebar navigation to switch between sections
- The AI chatbot is always available for help

Enjoy exploring the Advanced Management System! 🎉
