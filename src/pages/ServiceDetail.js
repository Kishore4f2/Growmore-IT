import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Home.css';
import services from '../data/services.json';
import ServiceCarousel from '../components/ServiceCarousel';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.slug === slug);
  if (!service) {
    return (
      <div className="home-container dark" style={{ padding: 40 }}>
        <p>Service not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="home-container dark">
      <section className="services-section" style={{ marginTop: 24 }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <h2 className="section-title" style={{ marginBottom: 8 }}>{service.title}</h2>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back to Home</button>
          </div>

          <div style={{ marginTop: 16 }}>
            <ServiceCarousel images={service.images || []} height={260} ariaLabel={`${service.title} gallery`} />
          </div>

          <div className="inquiry-form-container" style={{ marginTop: 24 }}>
            <h3>Interested in {service.title}?</h3>
            <div style={{ marginBottom: 16 }}>
              <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              {service.features && service.features.length > 0 && (
                <ul style={{ paddingLeft: 18 }}>
                  {service.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
              )}
            </div>
            <form className="inquiry-form" onSubmit={(e)=>{e.preventDefault(); alert('We will contact you shortly.');}}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea className="form-control" rows="4" placeholder="Tell us about your needs"></textarea>
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


