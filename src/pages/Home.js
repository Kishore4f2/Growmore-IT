import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';
import BootstrapHero from '../components/Hero/BootstrapHero';
import MegaMenu from '../components/Header/MegaMenu';
import ParticleField from '../components/Background/ParticleField';
import Blobs from '../components/Background/Blobs';
import Reveal from '../components/Section/Reveal';
import SiteFooter from '../components/Footer/SiteFooter';
import ServiceCarousel from '../components/ServiceCarousel';


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
  const [theme, setTheme] = useState('dark');
  const [showSearch, setShowSearch] = useState(false);
  const [infoTab, setInfoTab] = useState('owners');
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

  const fallbackServices = [
    {
      id: 101,
      slug: 'web-development',
      icon: '💻',
      title: 'Web Development',
      shortDesc: 'Modern, responsive, growth‑focused websites.',
      images: ['https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop']
    },
    {
      id: 102,
      slug: 'mobile-app-development',
      icon: '📱',
      title: 'Mobile App Development',
      shortDesc: 'High‑performance Android & iOS applications.',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop']
    },
    {
      id: 103,
      slug: 'it-consulting',
      icon: '🧠',
      title: 'IT Consulting',
      shortDesc: 'Strategy, roadmaps, and architecture.',
      images: ['https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop']
    },
    {
      id: 104,
      slug: 'digital-solutions',
      icon: '💡',
      title: 'Digital Solutions',
      shortDesc: 'Tailored systems for operations & growth.',
      images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop']
    }
  ];
  const services = Array.isArray(servicesData) && servicesData.length ? servicesData : fallbackServices;

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
    10: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    11: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop'
  };

  const aboutImage = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop';
  const growImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop';
  const growGallery = [
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
  ];
  const owners = [
    { name: 'Owner One', title: 'Owner', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Owner Two', title: 'Owner', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' }
  ];
  const growLeftRef = React.useRef(null);
  const [growH, setGrowH] = React.useState(360);
  React.useEffect(() => {
    const calc = () => {
      if (growLeftRef.current) {
        const h = growLeftRef.current.scrollHeight || growLeftRef.current.offsetHeight || 360;
        setGrowH(Math.max(360, Math.round(h)));
      }
    };
    requestAnimationFrame(calc);
    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(calc);
      if (growLeftRef.current) ro.observe(growLeftRef.current);
    }
    window.addEventListener('resize', calc);
    window.addEventListener('load', calc);
    return () => {
      window.removeEventListener('resize', calc);
      window.removeEventListener('load', calc);
      if (ro) ro.disconnect();
    };
  }, []);

  // Contact form state and handlers
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'General',
    consent: true
  });
  const [contactErrors, setContactErrors] = useState({});

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValidPhone = (v) => v.trim() === '' || /^[0-9+\-\s()]{7,}$/.test(v);

  const validateContact = (draft = contactForm) => {
    const errs = {};
    if (!draft.name.trim()) errs.name = 'Please enter your name';
    if (!isValidEmail(draft.email)) errs.email = 'Enter a valid email';
    if (!isValidPhone(draft.phone)) errs.phone = 'Enter a valid phone number';
    if (!draft.subject.trim()) errs.subject = 'Please add a subject';
    if (!draft.message.trim() || draft.message.trim().length < 10) errs.message = 'Message should be at least 10 characters';
    if (!draft.consent) errs.consent = 'Please accept to be contacted';
    return errs;
  };

  const onContactChange = (field, value) => {
    const next = { ...contactForm, [field]: value };
    setContactForm(next);
    setContactErrors(validateContact(next));
  };

  const onContactSubmit = (e) => {
    e.preventDefault();
    const errs = validateContact();
    setContactErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Working mailto fallback (no backend needed)
    const to = 'info@growmoreit.com';
    const subject = encodeURIComponent(`[${contactForm.category}] ${contactForm.subject}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nPhone: ${contactForm.phone}\nCategory: ${contactForm.category}\n\n${contactForm.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    alert('Thanks! Your mail app will open with your message. We will get back to you.');
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '', category: 'General', consent: true });
  };

  return (
    <div className={`home-container ${theme}`}>
      {/* Premium Header */}
      <MegaMenu
        onLogoClick={() => navigate('/admin/login')}
        onToggleSearch={undefined}
        onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
        onLogin={() => setShowLoginModal(true)}
        theme={theme}
        onNavigate={(to) => navigate(to)}
      />

      {/* Premium Bootstrap Hero Carousel */}
      <section id="home" className="hero-section" style={{ minHeight: '80vh', margin: 0, padding: 0 }}>
        <BootstrapHero />
      </section>

      {/* About Section - compact, premium blend background with reveal */}
      <section id="about" className="about-section with-blur-bg">
        <div className="container">
          <Reveal><h2 className="section-title">About Us</h2></Reveal>
          <div className="about-content">
            <Reveal>
              <div className="about-text">
                <h3>Welcome to Growmore IT Services</h3>
                <p>
                  We are a leading IT solutions provider dedicated to helping businesses grow through innovative technology.
                  Our team of experts combines creativity, technical expertise, and strategic thinking to deliver solutions
                  that drive real results.
                </p>
                <p>
                  With years of experience in the industry, we understand the challenges businesses face in today's digital
                  landscape. We work closely with our clients to deliver customized solutions that exceed expectations.
                </p>
                <div className="about-stats">
                  <div className="stat-card">
                    <div className="stat-number">
                      <CountUp end={500} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                    </div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">
                      <CountUp end={200} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                    </div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">
                      <CountUp end={50} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                    </div>
                    <div className="stat-label">Team Members</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="about-image">
                <div className="about-image-placeholder" style={{ backgroundImage: `url('${aboutImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section - premium glass cards with glow and hover animation */}
      <section id="services" className="services-section with-blur-bg" style={{ position: 'relative', zIndex: 3 }}>
        <div className="container">
          <Reveal><h2 className="section-title">Our Services</h2></Reveal>
          <Reveal delay={0.05}>
            <p className="section-subtitle">
              Comprehensive IT solutions designed to elevate your business and drive sustainable growth.
            </p>
          </Reveal>
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

      {/* Let's Grow Together Section - glass cards with subtle background animation */}
      <section id="grow-together" className="grow-together-section with-blur-bg">
        <Blobs />
        <div className="container">
          <Reveal><h2 className="section-title">LET'S GROW TOGETHER</h2></Reveal>
          <div className="grow-together-content">
            <div className="grow-together-left" ref={growLeftRef}>
              <Reveal><div className="grow-box" onClick={() => navigate('/inquiry')}>
                <h3>1️⃣ Inquiry</h3>
                <p>Have questions? Get in touch with us</p>
              </div></Reveal>
              <Reveal delay={0.05}><div className="grow-box" onClick={() => setShowIdeaModal(true)}>
                <h3>🧩 Share Your Project Idea</h3>
                <p>Tell us what you want to build</p>
              </div></Reveal>
              <Reveal delay={0.1}><div className="grow-box" onClick={() => navigate('/apply-job')}>
                <h3>2️⃣ Apply for Job</h3>
                <p>Join our team and grow with us</p>
              </div></Reveal>
            </div>
            <div className="grow-together-right" style={{ position: 'relative' }}>
              <aside style={{ position: 'sticky', top: 24, alignSelf: 'start', height: growH }} aria-label="Grow gallery">
                <div id="growCarousel" className="carousel slide" data-bs-ride="carousel" style={{ height: '100%', borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 24px var(--shadow)' }}>
                  <div className="carousel-indicators">
                    {growGallery.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        data-bs-target="#growCarousel"
                        data-bs-slide-to={i}
                        className={i === 0 ? 'active' : ''}
                        aria-current={i === 0 ? 'true' : undefined}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="carousel-inner" style={{ height: '100%' }}>
                    {growGallery.map((src, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} style={{ height: '100%' }}>
                        <img src={src} className="d-block w-100" alt={`Grow visual ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#growCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#growCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Letters - Combined Tabs */}
      <section id="team-letters" className="owners-section with-blur-bg">
        <div className="container">
          <h2 className="section-title">Team & Letters</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <button
              className="btn btn-secondary"
              onClick={() => setInfoTab('owners')}
              aria-controls="owners-panel"
            >
              Our Owners
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setInfoTab('letters')}
              aria-controls="letters-panel"
            >
              Offer/Completion Letter
            </button>
          </div>
          {/* Owners Panel */}
          <div id="owners-panel" style={{ display: infoTab === 'letters' ? 'none' : 'block' }}>
            <div id="owners" />
            <div className="owners-grid">
              {owners.map((o, idx) => (
                <div key={idx} className="owner-card">
                  <div className="owner-image">
                    <img src={o.img} alt={o.name} loading="lazy" />
                  </div>
                  <h3 className="owner-name">{o.name}</h3>
                  <p className="owner-title">{o.title}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Letters Panel */}
          <div id="letters-panel" style={{ display: infoTab === 'letters' ? 'block' : 'none' }}>
            <div id="letter-download" />
            <div className="letter-download-content" style={{ maxWidth: 600, margin: '24px auto 0' }}>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="inquiry-form-container">
              <h3>Send us a message</h3>
              <form className="inquiry-form" onSubmit={onContactSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={contactForm.name}
                      onChange={(e) => onContactChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                    {contactErrors.name && <small style={{ color: '#ef4444' }}>{contactErrors.name}</small>}
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={contactForm.email}
                      onChange={(e) => onContactChange('email', e.target.value)}
                      placeholder="you@company.com"
                      required
                    />
                    {contactErrors.email && <small style={{ color: '#ef4444' }}>{contactErrors.email}</small>}
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={contactForm.phone}
                      onChange={(e) => onContactChange('phone', e.target.value)}
                      placeholder="+91 12345 67890"
                    />
                    {contactErrors.phone && <small style={{ color: '#ef4444' }}>{contactErrors.phone}</small>}
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="form-control"
                      value={contactForm.category}
                      onChange={(e) => onContactChange('category', e.target.value)}
                    >
                      <option>General</option>
                      <option>Services</option>
                      <option>Sales</option>
                      <option>Support</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className="form-group form-full-width">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      value={contactForm.subject}
                      onChange={(e) => onContactChange('subject', e.target.value)}
                      placeholder="How can we help?"
                      required
                    />
                    {contactErrors.subject && <small style={{ color: '#ef4444' }}>{contactErrors.subject}</small>}
                  </div>
                  <div className="form-group form-full-width">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      value={contactForm.message}
                      onChange={(e) => onContactChange('message', e.target.value)}
                      placeholder="Tell us about your project or question"
                      required
                    />
                    {contactErrors.message && <small style={{ color: '#ef4444' }}>{contactErrors.message}</small>}
                  </div>
                  <div className="form-group form-full-width" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input
                      id="contact-consent"
                      type="checkbox"
                      checked={contactForm.consent}
                      onChange={(e) => onContactChange('consent', e.target.checked)}
                    />
                    <label htmlFor="contact-consent" style={{ margin: 0 }}>I agree to be contacted by Growmore IT Services</label>
                    {contactErrors.consent && <small style={{ color: '#ef4444' }}>{contactErrors.consent}</small>}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Inline navbar search is handled inside MegaMenu */}

      {/* Premium Footer */}
      <SiteFooter />

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
                  {['Flutter', 'React', 'Node.js', 'Python', 'Java', 'PHP', 'MySQL', 'MongoDB'].map((tech) => (
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
