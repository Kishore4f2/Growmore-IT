import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Home.css';
import services from '../data/services.json';
import ServiceCarousel from '../components/ServiceCarousel';
import ParticleField from '../components/Background/ParticleField';
import Blobs from '../components/Background/Blobs';
import Reveal from '../components/Section/Reveal';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.slug === slug);
  if (!service) {
    return (
      <div className="home-container dark" style={{ padding: 40 }}>
        <p>Service not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>← <span className="btn-text">Back to Home</span></button>
      </div>
    );
  }

  const themeColor = service.theme || '#6366F1';

  return (
    <div className="home-container dark">
      <section className="hero-section with-blur-bg" style={{ minHeight: '40vh', marginTop: 16 }}>
        <div className="hero-background" style={{ backgroundImage: `url('${service.images?.[0]}')` }} />
        <Blobs />
        <ParticleField density={36} />
        <div className="container">
          <Reveal>
            <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <h1 className="hero-title" style={{ margin: 0 }}>{service.title}</h1>
              <button className="btn btn-secondary" onClick={() => navigate('/')} aria-label="Back to Home">
                <ArrowLeft size={18} style={{ marginRight: 8 }} /> <span className="btn-text">Back</span>
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="hero-subtitle" style={{ maxWidth: 820 }}>{service.longDescription || service.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="services-section with-blur-bg" style={{ marginTop: 12 }}>
        <div className="container">
          <Reveal>
            <ServiceCarousel images={service.images || []} height={320} ariaLabel={`${service.title} gallery`} />
          </Reveal>

          <div className="inquiry-form-container" style={{ marginTop: 24, borderTop: `3px solid ${themeColor}22` }}>
            <Reveal>
              <h3>Key Features</h3>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
              {(service.features || []).map((f, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                    borderRadius: 12, padding: 14, boxShadow: '0 8px 20px var(--shadow)'
                  }}>
                    <CheckCircle2 color={themeColor} size={18} style={{ marginTop: 2 }} aria-hidden="true" />
                    <span style={{ color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h3>Request More Details</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
                Tell us a few details and our team will reach out shortly.
              </p>
            </Reveal>
            <form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); alert('We will contact you shortly.'); }}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" placeholder="Enter your name" required aria-label="Your name" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" placeholder="Enter your email" required aria-label="Your email" />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea className="form-control" rows="4" placeholder="Tell us about your needs" aria-label="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Request Details</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;


