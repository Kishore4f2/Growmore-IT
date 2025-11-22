import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

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
            <button onClick={() => { scrollToSection('products'); setMobileMenuOpen(false); }} className="nav-link">Products</button>
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
            filter: 'none', /* show clear, unblurred image for impact */
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
              <div className="about-image-placeholder" style={{ backgroundImage: `url('${aboutImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
                  <div className="service-banner" style={{ backgroundImage: `url('${serviceImages[service.id]}')` }} />
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

      {/* Products Demo Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2 className="section-title">Product Demos</h2>
          <p className="section-subtitle">Interactive, future-ready solutions with rich animations and elegant UI.</p>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-visual blood" style={{ backgroundImage: `url('${productImages.blood}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="emoji">🩸</span></div>
              <h3 className="product-title">Bloodbank Management Software</h3>
              <p className="product-desc">Inventory, billing, and an advanced dashboard built for healthcare.</p>
              <div className="product-meta">Inventory Management • Billing • Advance Dashboard</div>
            </div>
            <div className="product-card">
              <div className="product-visual feedback" style={{ backgroundImage: `url('${productImages.feedback}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="emoji">🗳️</span></div>
              <h3 className="product-title">Advance Feedback Portal</h3>
              <p className="product-desc">Collect, analyze, and act on feedback with real-time insights.</p>
              <div className="product-meta">Analytics • Sentiment • Custom Workflows</div>
            </div>
            <div className="product-card">
              <div className="product-visual inventory" style={{ backgroundImage: `url('${productImages.inventory}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="emoji">📦</span></div>
              <h3 className="product-title">Inventory Management (Web/App)</h3>
              <p className="product-desc">Multi-platform stock, orders, suppliers, and smart alerts.</p>
              <div className="product-meta">Web • Android • iOS</div>
            </div>
            <div className="product-card">
              <div className="product-visual tender" style={{ backgroundImage: `url('${productImages.tender}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}><span className="emoji">🏛️</span></div>
              <h3 className="product-title">Government Tender</h3>
              <p className="product-desc">Discover, manage, and apply with compliant documentation.</p>
              <div className="product-meta">Discovery • Docs • Tracking</div>
            </div>
          </div>

          <div className="product-cta">
            <button className="btn btn-primary" onClick={() => setShowIdeaModal(true)}>✨ Add Your Project Idea</button>
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
              <div className="grow-box" onClick={() => navigate('/inquiry')}>
                <h3>1️⃣ Inquiry</h3>
                <p>Have questions? Get in touch with us</p>
              </div>
              <div className="grow-box" onClick={() => navigate('/apply-job')}>
                <h3>2️⃣ Apply for Job</h3>
                <p>Join our team and grow with us</p>
              </div>
            </div>
            <div className="grow-together-right">
              <div className="grow-image-placeholder" style={{ backgroundImage: `url('${growImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          </div>
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
