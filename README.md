# Growmore IT Services - Advanced Management System

A comprehensive Company Management System built with React, featuring AI-powered automation, employee management, internship tracking, payment processing, and document generation.

## 🌟 Features

### 👥 Employee Management
- Employee registration with auto-generated credentials
- Employee dashboard with tasks, payments, and leave requests
- Query submission system
- Real-time task tracking

### 🎓 Internship Management
- Internship application system (Paid/Unpaid)
- Auto-generated offer letters
- Task assignment and tracking
- Auto-generated completion certificates
- Payment tracking for paid interns

### 🔐 Admin Panel
- Secure admin dashboard
- Complete employee and intern management
- Task and query management
- Application approval system
- Report generation (PDF/Excel)
- Document generation (Offer Letters, Certificates)

### 🤖 AI Features
- AI Chat Assistant for instant support
- AI Performance Tracker
- AI Document Generator
- AI Query Resolver

### 💳 Payment & Reports
- Real-time payment status
- Payment history tracking
- Automated report generation (Daily, Weekly, Monthly)
- Export to PDF and Excel

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔁 UI/UX Overhaul (branch: `improve/ui-services-carousel`)

Changes included:

- feat(services): added `data/services.json` and `ServiceCard` component
- feat(carousel): added lightweight `ServiceCarousel` (arrows, dots, lazy images)
- style(layout): reduced section paddings/margins on mobile (8–12px gutters), 2/4 column services grid
- feat(services-page): enhanced `/services/:slug` using `services.json` (hero carousel, features, description, CTA)
- fix(ui): reduced hero image height and compacted “Let’s Grow” image area
- feat(footer): footer with logo, LinkedIn/Facebook links, and legal links
- fix(login): admin login is a centered modal on mobile, drawer on desktop

### Test checklist
1. Home spacing compact on mobile; services grid 2 cols (mobile), 4 cols (desktop).
2. Each service card shows a carousel + “Visit Our Service →” CTA; keyboard focus + Enter works.
3. Navigate to `/services/web-development`; verify carousel, features, and contact form.
4. Product Demo section is removed.
5. “Share Your Project Idea” box appears between Inquiry and Apply for Job; heights are compact.
6. Footer shows logo, social links, and Privacy/Terms.
7. Admin login behaves as modal (mobile) and drawer (desktop).
8. Images have `alt` + `loading=\"lazy\"`; controls have `aria-label`.

## 📁 Project Structure

```
growmore-management-system/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AIChatbot.js
│   │   └── AIChatbot.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── AdminLogin.js
│   │   ├── EmployeeLogin.js
│   │   ├── InternLogin.js
│   │   ├── Login.css
│   │   ├── EmployeeRegister.js
│   │   ├── InternApply.js
│   │   ├── Register.css
│   │   ├── AdminDashboard.js
│   │   ├── EmployeeDashboard.js
│   │   ├── InternDashboard.js
│   │   └── Dashboard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Usage

### Demo Mode
The application is currently in demo mode. You can use any credentials to login:

- **Admin Login**: Use any username and password
- **Employee Login**: Use any Login ID and password
- **Intern Login**: Use any Login ID and password

### Registration Flow

1. **Employee Registration**: Navigate to `/employee/register` and fill out the form. You'll receive auto-generated Login ID and Password.

2. **Internship Application**: Navigate to `/intern/apply` and submit your application. Admin will review and approve it.

### Dashboard Features

- **Admin Dashboard**: Manage employees, interns, tasks, queries, and generate reports
- **Employee Dashboard**: View tasks, payments, submit leave requests, and queries
- **Intern Dashboard**: Track tasks, view payments (if paid), and access documents

## 🎨 Design Features

- Modern, professional UI with gradient backgrounds
- Fully responsive design (Desktop, Tablet, Mobile)
- Smooth animations and transitions
- Clean and intuitive user interface
- Professional color scheme

## 🔧 Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 (Modern styling with gradients and animations)
- LocalStorage (Demo data storage)

## 📝 Notes

- This is a frontend-only application with demo data stored in localStorage
- In a production environment, you would connect to a backend API
- All document generation currently shows alerts (in production, these would generate actual PDFs)
- Email notifications are simulated (in production, these would send actual emails)

## 🚧 Future Enhancements

- Backend API integration
- Real PDF generation
- Email notification system
- Database integration
- Advanced AI features
- Real-time notifications
- Advanced analytics and reporting

## 📄 License

This project is created for Growmore IT Services.

## 👨‍💻 Development

Built with ❤️ using React and modern web technologies.

---

**Growmore IT Services** - Advanced Management System
