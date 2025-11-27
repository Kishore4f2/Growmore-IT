import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';


const Home = () => {
  const [activeService, setActiveService] = useState(null);
  const [showInternshipOptions, setShowInternshipOptions] = useState(false);
  const [showIdeaModal, setShowIdeaModal] = useState(false);
  const [ideaForm, setIdeaForm] = useState({
    idea: '',
    benefit: '',
    stack: []
  });
  const [showLetterDownload, setShowLetterDownload] = useState(false);
  const [letterAuth, setLetterAuth] = useState({ dob: '', email: '' });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginType, setLoginType] = useState('intern');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = () => {
    navigate('/admin/login');
  };

  const services = servicesData;

  const handleInternshipApply = () => {
    setShowInternshipOptions(true);
  };

  const handlePaidInternship = () => {
    navigate('/internship/paid');
  };

  const handleUnpaidInternship = () => {
    navigate('/internship/unpaid');
  };

  const handleGetStarted = () => {
    scrollToSection('products');
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

  const productImages = {
    blood: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    feedback: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    inventory: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
    tender: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
  };

  const serviceImages = {
    1: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
    2: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    3: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
    4: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    5: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    6: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    7: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    8: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop',
    9: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    10:'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    11:'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop'
  };

  const aboutImage = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop';
  const growImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop';
  const owners = [
    { name: 'Owner One', title: 'Owner', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Owner Two', title: 'Owner', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <div className="home-container dark">
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
            <button className="nav-link" onClick={() => { setShowLoginModal(true); setMobileMenuOpen(false); }}>Login</button>
            <button onClick={() => { handleGetStarted(); setMobileMenuOpen(false); }} className="nav-link btn-get-started">Get Started</button>
          </div>
          <div className="nav-actions">
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div
          className="hero-background"
          style={{
            backgroundImage: "url('/Growmore.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            filter: 'none',
            zIndex: -1,
          }}
        />
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
      <section id="about" className="about-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
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
              <div className="about-image-placeholder" style={{ backgroundImage: `url('${aboutImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions designed to elevate your business and drive sustainable growth.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClickCard={() => handleServiceClick(service.id)}
                onVisit={() => navigate(`/services/${service.slug}`, { state: { serviceId: service.id } })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Demo Section - removed as requested */}

      {/* Internship Section */}
      <section id="internship" className="internship-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
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
          <div className="letter-download-link">
            <button onClick={() => scrollToSection('letter-download')} className="btn btn-secondary">
              Download Offer Letter / Completion Letter
            </button>
          </div>
        </div>
      </section>

      {/* Let's Grow Together Section */}
      <section id="grow-together" className="grow-together-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
        <div className="container">
          <h2 className="section-title">LET'S GROW TOGETHER</h2>
          <div className="grow-together-content">
            <div className="grow-together-left">
              <div className="grow-box" onClick={() => navigate('/inquiry')}>
                <h3>1️⃣ Inquiry</h3>
                <p>Have questions? Get in touch with us</p>
              </div>
              <div className="grow-box">
                <h3>🧩 Share Your Project Idea</h3>
                <p>Tell us about your project. We'll contact you within 24 hours.</p>
                <button className="btn btn-primary" aria-label="Share your idea" onClick={()=> setShowIdeaModal(true)} style={{marginTop:8, alignSelf:'flex-start'}}>Share Idea</button>
              </div>
              <div className="grow-box" onClick={() => navigate('/apply-job')}>
                <h3>2️⃣ Apply for Job</h3>
                <p>Join our team and grow with us</p>
              </div>
            </div>
            <div className="grow-together-right">
              {/* simple scroll-snap carousel with 5 demo images */}
              <div className="carousel">
                <div className="carousel-track">
                  {[
                    productImages.blood,
                    productImages.feedback,
                    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop'
                  ].map((src, idx) => (
                    <div className="carousel-slide" key={idx}>
                      <img src={src} alt={`demo-${idx+1}`} />
                    </div>
                  ))}
                </div>
                <div className="carousel-dots">
                  <span className="carousel-dot"></span>
                  <span className="carousel-dot"></span>
                  <span className="carousel-dot"></span>
                  <span className="carousel-dot"></span>
                  <span className="carousel-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Letter Download Section */}
      <section id="letter-download" className="letter-download-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
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
      <section id="owners" className="owners-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
        <div className="container">
          <h2 className="section-title">Our Owners</h2>
          <div className="owners-grid">
            {owners.map((o, idx) => (
              <div key={idx} className="owner-card">
                <div className="owner-image">
                  <img src={o.img} alt={o.name} />
                </div>
                <h3 className="owner-name">{o.name}</h3>
                <p className="owner-title">{o.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section with-blur">
        <span className="blur-decor" aria-hidden="true"></span>
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
        <div className="container" style={{display:'grid', gap:12}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
            <a href="/" aria-label="Home"><img src="/Growmore1.jpg" alt="Growmore IT" style={{height:32}}/></a>
            <div style={{display:'flex', gap:12}}>
            <a className="social-link" href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">⌾</a>
            <a className="social-link" href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
              <a className="social-link" href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">f</a>
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8}}>
            <button onClick={() => setShowLoginModal(true)} className="footer-login-link" aria-label="Open login">Intern / Employee Login</button>
            <div style={{display:'flex', gap:12}}>
              <a href="/" style={{color:'var(--text-secondary)'}}>Privacy</a>
              <a href="/" style={{color:'var(--text-secondary)'}}>Terms</a>
            </div>
          </div>
          <p style={{color:'var(--text-secondary)', margin:0}}>&copy; 2025 Growmore IT Services. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Idea Modal */}
      {showIdeaModal && (
        <div className="modal-overlay" onClick={() => setShowIdeaModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowIdeaModal(false)}>×</button>
            <h2>Submit Your Project Idea</h2>
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('✨ Project idea submitted!');
                setShowIdeaModal(false);
                setIdeaForm({ idea: '', benefit: '', stack: [] });
              }}
            >
              <div className="form-group">
                <label>Project Idea:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="👉 Please describe your project idea in detail."
                  value={ideaForm.idea}
                  onChange={(e) => setIdeaForm({ ...ideaForm, idea: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>How Will This Project Benefit the Company? (Optional)</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="👉 Explain how your project can help improve productivity, revenue, or client experience."
                  value={ideaForm.benefit}
                  onChange={(e) => setIdeaForm({ ...ideaForm, benefit: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Technology Stack:</label>
                <div className="stack-options">
                  {['Flutter','React','Node.js','Python','Java','PHP','MySQL','MongoDB'].map((tech) => (
                    <label key={tech} className={`stack-chip ${ideaForm.stack.includes(tech) ? 'selected' : ''}`}>
                      <input
                        type="checkbox"
                        checked={ideaForm.stack.includes(tech)}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...ideaForm.stack, tech]
                            : ideaForm.stack.filter((t) => t !== tech);
                          setIdeaForm({ ...ideaForm, stack: next });
                        }}
                      />
                      <span>{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">✨ Submit Your Project Idea</button>
            </form>
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
