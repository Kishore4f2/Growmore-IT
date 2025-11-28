import React, { useState } from 'react';
import ServiceCarousel from './ServiceCarousel';
import './ServiceCard.css';

const ServiceCard = ({ service, onClickCard, onVisit }) => {
  const { title, shortDesc, images, icon } = service;
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipples((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() }]);
    // Cleanup after animation
    setTimeout(() => setRipples((prev) => prev.slice(1)), 800);
  };
  return (
    <div
      className="svc-card"
      role="button"
      tabIndex={0}
      onClick={(e) => { addRipple(e); onClickCard(); }}
      onKeyDown={(e) => { if (e.key === 'Enter') onClickCard(); }}
      aria-label={`Open details for ${title}`}
    >
      {ripples.map(r => (
        <span key={r.id} className="svc-ripple" style={{ left: r.x, top: r.y }} />
      ))}
      <ServiceCarousel images={images} ariaLabel={`${title} screenshots`} />
      <div className="svc-body">
        <div className="svc-head">
          <div className="svc-icon" aria-hidden="true">{icon}</div>
          <h3 className="svc-title">{title}</h3>
        </div>
        <p className="svc-excerpt">{shortDesc}</p>
        <button className="svc-cta btn btn-primary" onClick={(e)=>{ e.stopPropagation(); onVisit(); }} aria-label={`Visit ${title} details`}>
          Visit Our Service →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;


