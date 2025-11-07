import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [showInternshipOptions, setShowInternshipOptions] = useState(false);
  const [internshipType, setInternshipType] = useState(null);
  const [showGrowTogether, setShowGrowTogether] = useState(false);
  const [growTogetherType, setGrowTogetherType] = useState(null);
  const [showLetterDownload, setShowLetterDownload] = useState(false);
  const [letterAuth, setLetterAuth] = useState({ dob: '', email: '' });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginSelection, setShowLoginSelection] = useState(false);
  const [loginType, setLoginType] = useState('intern');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = () => {
    navigate('/admin/login');
  };

  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      shortDesc: 'We create modern, responsive, and growth-focused websites that make your business stand out online.',
      fullDesc: 'Our web development services are built around performance, creativity, and user engagement. We design websites that reflect your brand identity, attract your target audience, and convert visitors into customers. From corporate sites to dynamic business portals, we handle everything from planning to launch — ensuring a flawless user experience across all devices.',
      includes: ['Custom business and portfolio websites', 'Admin panels and contact systems', 'Optimized structure for faster loading and SEO', 'Integration of forms, chat, and booking tools', 'Full domain, hosting, and maintenance support'],
      cta: ['Get a Free Website Demo', 'Request a Quote']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile App Development',
      shortDesc: 'Engaging, high-performance mobile apps designed to connect businesses with their customers.',
      fullDesc: 'We build intuitive and scalable mobile applications tailored to your business needs. From idea to deployment, our team ensures your app delivers a smooth experience that keeps users coming back. Whether you want a business app, an e-commerce app, or a customer service app — we create it with precision and creativity.',
      includes: ['Android and iOS mobile applications', 'Personalized design and seamless navigation', 'In-app chat, notifications, and analytics', 'Easy management dashboard', 'Post-launch updates and maintenance'],
      cta: ['See App Portfolio', 'Book a Free Consultation']
    },
    {
      id: 3,
      icon: '🧠',
      title: 'IT Consulting',
      shortDesc: 'Strategic guidance to help you make the right technology decisions for your business growth.',
      fullDesc: 'Our IT consulting services help you bridge the gap between business goals and technology execution. We analyze your workflow, identify improvement areas, and create customized digital strategies that increase efficiency and profitability.',
      includes: ['Business process automation planning', 'Digital transformation roadmap', 'IT infrastructure and scalability consulting', 'Cost-effective project implementation strategy', 'Security and performance audits'],
      cta: ['Book Free IT Consultation', 'Talk to an Expert']
    },
    {
      id: 4,
      icon: '💡',
      title: 'Digital Solutions',
      shortDesc: 'Tailored digital systems to streamline your operations and accelerate growth.',
      fullDesc: 'Our digital solutions help businesses automate manual tasks, manage operations, and improve decision-making. From ERP and CRM systems to automation tools, we provide complete digital ecosystems that simplify your work and increase productivity.',
      includes: ['Custom management and reporting systems', 'Billing, HR, and CRM automation', 'Smart dashboards and data visualization', 'Secure, cloud-enabled access', 'Integration with existing workflows'],
      cta: ['Explore Custom Solutions', 'Schedule a Demo']
    },
    {
      id: 5,
      icon: '🧩',
      title: 'Software Development',
      shortDesc: 'Custom software designed to meet your exact business needs.',
      fullDesc: 'We build robust and flexible software solutions tailored to your business processes. Our approach focuses on usability, reliability, and long-term scalability — giving you tools that simplify operations and enhance decision-making.',
      includes: ['Business management and billing systems', 'Data management and analytics tools', 'Automated reporting and dashboards', 'Multi-user role-based control', 'Ongoing updates and technical support'],
      cta: ['Try Free Demo Software', 'Get Custom Quote']
    },
    {
      id: 6,
      icon: '🎨',
      title: 'UI/UX Design',
      shortDesc: 'Designs that balance beauty, usability, and performance.',
      fullDesc: 'We craft user interfaces that not only look great but also deliver intuitive and enjoyable user experiences. Our design process is focused on understanding user behavior, ensuring every click feels natural and every screen feels inviting.',
      includes: ['Brand-focused layouts', 'Prototypes and wireframes', 'User journey optimization', 'Conversion-focused design approach', 'Visual identity consistency'],
      cta: ['View Design Samples', 'Start Your Design Project']
    },
    {
      id: 7,
      icon: '☁',
      title: 'Cloud & Hosting Solutions',
      shortDesc: 'Reliable, secure, and scalable digital infrastructure for your business.',
      fullDesc: 'We provide complete cloud and hosting solutions to keep your business running smoothly around the clock. Our services ensure high performance, data protection, and zero downtime — so your business stays connected anywhere, anytime.',
      includes: ['Secure business hosting setup', 'Backup & disaster recovery planning', 'Cloud migration and optimization', 'Email and domain setup', 'Performance monitoring and management'],
      cta: ['Upgrade Your Hosting', 'Get Cloud Consultation']
    },
    {
      id: 8,
      icon: '🛍',
      title: 'E-Commerce Development',
      shortDesc: 'Build and grow your online store with seamless shopping experiences.',
      fullDesc: 'We design and develop e-commerce platforms that combine style, speed, and security. From product listing to payment gateways, our solutions help you sell efficiently while delivering a smooth shopping experience to customers.',
      includes: ['Product and order management systems', 'Secure checkout and payment integration', 'Admin dashboard with sales analytics', 'SEO-friendly and mobile-optimized store design', 'Custom coupon and loyalty systems'],
      cta: ['Launch Your Store', 'Get Free Store Audit']
    },
    {
      id: 9,
      icon: '🚀',
      title: 'Digital Marketing & Branding',
      shortDesc: 'Expand your digital reach and attract quality leads with proven strategies.',
      fullDesc: 'We help you grow your brand online through smart digital marketing campaigns that generate measurable results. From SEO and social media to targeted ads, our strategies ensure your business gets noticed by the right audience.',
      includes: ['SEO optimization and content marketing', 'Social media management and campaigns', 'Google Ads, Meta Ads, and influencer marketing', 'Brand awareness and positioning strategy', 'Monthly growth reports and analytics'],
      cta: ['Get Free Marketing Audit', 'Boost Your Online Presence']
    },
    {
      id: 10,
      icon: '🛠',
      title: 'Maintenance & Support',
      shortDesc: 'We keep your digital assets secure, updated, and running perfectly.',
      fullDesc: 'Our maintenance and support plans ensure your websites, apps, and software remain fast, secure, and updated. We handle regular updates, backups, and security monitoring so you can focus on your business, worry-free.',
      includes: ['Security updates and monitoring', 'Bug fixing and issue resolution', 'Regular backups and performance optimization', 'Version upgrades and content updates', 'Priority technical support'],
      cta: ['Subscribe for Maintenance Plan', 'Get 24/7 Support']
    },
    {
      id: 11,
      icon: '🤖',
      title: 'AI & Automation Solutions',
      shortDesc: 'Future-ready AI systems that make your business smarter and faster.',
      fullDesc: 'We develop AI and automation systems that help businesses save time, reduce manual work, and make smarter decisions. Our goal is to empower your business with intelligent tools that optimize operations and unlock new opportunities.',
      includes: ['AI chatbots and customer assistants', 'Smart workflow and data automation', 'Predictive analytics and insights', 'Process optimization tools', 'AI-based business forecasting'],
      cta: ['Request AI Demo', 'Automate Your Business Today']
    }
  ];

  const handleInternshipApply = () => {
    setShowInternshipOptions(true);
  };

  const handlePaidInternship = () => {
    setInternshipType('paid');
  };

  const handleUnpaidInternship = () => {
    setInternshipType('unpaid');
  };

  const handleGetStarted = () => {
    setShowGrowTogether(true);
    scrollToSection('grow-together');
  };

  const handleGrowTogetherType = (type) => {
    setGrowTogetherType(type);
  };

  const handleLetterDownload = () => {
    setShowLetterDownload(true);
    scrollToSection('letter-download');
  };

  const handleLetterAuth = (e) => {
    e.preventDefault();
    // Verify authentication logic here
    alert('Authentication verified! Download functionality will be implemented.');
  };

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className={`home-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">
              <img src="/Growmore1.jpg" alt="Growmore IT" className="logo-img" />
            </div>
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }} className="nav-link">Home</button>
            <button onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }} className="nav-link">About</button>
            <button onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }} className="nav-link">Services</button>
            <button onClick={() => { scrollToSection('internship'); setMobileMenuOpen(false); }} className="nav-link">Internship</button>
            <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} className="nav-link">Contact</button>
            <button className="nav-link" onClick={() => { setShowLoginSelection(true); setMobileMenuOpen(false); }}>Login</button>
            <button onClick={() => { handleGetStarted(); setMobileMenuOpen(false); }} className="nav-link btn-get-started">Get Started</button>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background"  style={{
    backgroundImage: "url('/Growmore.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(2px) brightness(0.7)",
    zIndex: -1,
  }}>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Empowering Growth Through Technology</h1>
          <p className="hero-subtitle">
            Comprehensive IT solutions designed to elevate your business and drive sustainable growth.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('services')} className="btn btn-primary">
              Explore Services
            </button>
            <button onClick={handleGetStarted} className="btn btn-secondary">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Welcome to Growmore IT Services</h3>
              <p>
                We are a leading IT solutions provider dedicated to helping businesses grow through innovative technology.
                Our team of experts combines creativity, technical expertise, and strategic thinking to deliver solutions
                that drive real results.
              </p>
              <p>
                With years of experience in the industry, we understand the challenges businesses face in today's digital
                landscape. We work closely with our clients to understand their unique needs and deliver customized solutions
                that exceed expectations.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                <div className="image-icon">🏢</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions designed to elevate your business and drive sustainable growth.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${activeService === service.id ? 'expanded' : ''}`}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="service-card-front">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDesc}</p>
                  <div className="service-cta">Click to learn more →</div>
                </div>
                {activeService === service.id && (
                  <div className="service-card-back">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-full-desc">{service.fullDesc}</p>
                    <div className="service-includes">
                      <h4>Includes:</h4>
                      <ul>
                        {service.includes.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-cta-buttons">
                      <button className="btn-cta">{service.cta[0]}</button>
                      <button className="btn-cta">{service.cta[1]}</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="internship-section">
        <div className="container">
          <h2 className="section-title">Internship Program</h2>
          <p className="section-subtitle">
            Join our internship program and kickstart your career in IT
          </p>
          {!showInternshipOptions ? (
            <div className="internship-intro">
              <button onClick={handleInternshipApply} className="btn btn-primary btn-large">
                Apply for Internship
              </button>
            </div>
          ) : (
            <div className="internship-options">
              <div className="internship-box" onClick={handlePaidInternship}>
                <h3>Paid Internship</h3>
                <p>Get hands-on experience with financial support</p>
              </div>
              <div className="internship-box" onClick={handleUnpaidInternship}>
                <h3>Unpaid Internship</h3>
                <p>Gain valuable experience and skills</p>
              </div>
            </div>
          )}

          {internshipType === 'paid' && (
            <div className="paid-internship-form">
              <div className="instant-notice">
                <strong>Instant Internship – Get your login ID and password within 2 minutes!</strong>
              </div>
              <form className="internship-form">
                <div className="form-group">
                  <label>Select Duration:</label>
                  <select className="form-control">
                    <option>1 Month – ₹200</option>
                    <option>3 Months – ₹500</option>
                    <option>6 Months – ₹1000</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Contact Number:</label>
                  <input type="tel" className="form-control" placeholder="Enter your contact number" />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Resume Upload:</label>
                  <input type="file" className="form-control" accept=".pdf,.doc,.docx" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit & Proceed to Payment
                </button>
              </form>
            </div>
          )}

          {internshipType === 'unpaid' && (
            <div className="unpaid-internship-message">
              <p>If the company has any openings, they'll contact the candidate directly.</p>
              <p className="thank-you">Thanks for applying!</p>
            </div>
          )}
          <div className="letter-download-link">
            <button onClick={() => scrollToSection('letter-download')} className="btn btn-secondary">
              Download Offer Letter / Completion Letter
            </button>
          </div>
        </div>
      </section>

      {/* Let's Grow Together Section */}
      <section id="grow-together" className="grow-together-section">
        <div className="container">
          <h2 className="section-title">LET'S GROW TOGETHER</h2>
          <div className="grow-together-content">
            <div className="grow-together-left">
              <div className="grow-box" onClick={() => handleGrowTogetherType('inquiry')}>
                <h3>1️⃣ Inquiry</h3>
                <p>Have questions? Get in touch with us</p>
              </div>
              <div className="grow-box" onClick={() => handleGrowTogetherType('job')}>
                <h3>2️⃣ Apply for Job</h3>
                <p>Join our team and grow with us</p>
              </div>
            </div>
            <div className="grow-together-right">
              <div className="grow-image-placeholder">
                <div className="image-icon">🚀</div>
              </div>
            </div>
          </div>

          {growTogetherType === 'inquiry' && (
            <div className="inquiry-form-container">
              <h3>Inquiry Form</h3>
              <form className="inquiry-form">
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Contact Number:</label>
                  <input type="tel" className="form-control" placeholder="Enter your contact number" />
                </div>
                <div className="form-group">
                  <label>Type of Enquiry:</label>
                  <select className="form-control">
                    <option>General Inquiry</option>
                    <option>Service Inquiry</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <textarea className="form-control" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Inquiry</button>
              </form>
            </div>
          )}

          {growTogetherType === 'job' && (
            <div className="job-form-container">
              <h3>Job Application Form</h3>
              <form className="job-form">
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Contact Number:</label>
                  <input type="tel" className="form-control" placeholder="Enter your contact number" />
                </div>
                <div className="form-group">
                  <label>Position Applied For:</label>
                  <input type="text" className="form-control" placeholder="Enter position" />
                </div>
                <div className="form-group">
                  <label>Resume Upload:</label>
                  <input type="file" className="form-control" accept=".pdf,.doc,.docx" />
                </div>
                <div className="form-group">
                  <label>Cover Letter:</label>
                  <textarea className="form-control" rows="4" placeholder="Enter your cover letter"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Letter Download Section */}
      <section id="letter-download" className="letter-download-section">
        <div className="container">
          <h2 className="section-title">Offer Letter / Completion Letter Download</h2>
          <div className="letter-download-content">
            <form onSubmit={handleLetterAuth} className="letter-auth-form">
              <h3>Authentication Required</h3>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  value={letterAuth.dob}
                  onChange={(e) => setLetterAuth({ ...letterAuth, dob: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Registered Email ID:</label>
                <input
                  type="email"
                  className="form-control"
                  value={letterAuth.email}
                  onChange={(e) => setLetterAuth({ ...letterAuth, email: e.target.value })}
                  placeholder="Enter your registered email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Verify & Download</button>
            </form>
          </div>
        </div>
      </section>

      {/* Our Owners Section */}
      <section id="owners" className="owners-section">
        <div className="container">
          <h2 className="section-title">Our Owners</h2>
          <div className="owners-grid">
            <div className="owner-card">
              <div className="owner-image">
                <div className="owner-placeholder">👤</div>
              </div>
              <h3 className="owner-name">Mahendra Singh Dhoni</h3>
              <p className="owner-title">Owner</p>
            </div>
            <div className="owner-card">
              <div className="owner-image">
                <div className="owner-placeholder">👤</div>
              </div>
              <h3 className="owner-name">M.S. Dhoni</h3>
              <p className="owner-title">Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> info@growmoreit.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +91 1234567890
              </div>
              <div className="contact-item">
                <strong>Address:</strong> Your Company Address Here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <button onClick={() => setShowLoginModal(true)} className="footer-login-link">
            Intern / Employee Login
          </button>
          <p>&copy; 2025 Growmore IT Services. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Selection Modal */}
      {showLoginSelection && (
        <div className="modal-overlay" onClick={() => setShowLoginSelection(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLoginSelection(false)}>×</button>
            <h2>Choose Login Type</h2>
            <div className="login-selection">
              <button
                className="login-option"
                onClick={() => {
                  setShowLoginSelection(false);
                  navigate('/admin/login');
                }}
              >
                <span className="emoji">1️⃣</span>
                <span className="title">Admin Login</span>
                <span className="description">For administrators and management</span>
              </button>
              
              <button
                className="login-option"
                onClick={() => {
                  setShowLoginSelection(false);
                  setShowLoginModal(true);
                }}
              >
                <span className="emoji">2️⃣</span>
                <span className="title">Intern / Employee Login</span>
                <span className="description">For interns and company employees</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Intern/Employee Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLoginModal(false)}>×</button>
            <h2>Login</h2>
            <div className="login-type-selector">
              <button
                className={loginType === 'intern' ? 'active' : ''}
                onClick={() => setLoginType('intern')}
              >
                Intern
              </button>
              <button
                className={loginType === 'employee' ? 'active' : ''}
                onClick={() => setLoginType('employee')}
              >
                Employee
              </button>
            </div>
            <form className="login-form" onSubmit={(e) => {
              e.preventDefault();
              setShowLoginModal(false);
              if (loginType === 'intern') {
                navigate('/intern/login');
              } else {
                navigate('/employee/login');
              }
            }}>
              <div className="form-group">
                <label>Login ID:</label>
                <input type="text" className="form-control" placeholder="Enter your login ID" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
