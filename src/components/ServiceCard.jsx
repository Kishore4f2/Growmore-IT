import React, { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, onClickCard, onVisit }) => {
  const { title, shortDesc, images, icon } = service;
  const [ripples, setRipples] = useState([]);
  const FALLBACK =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop';
  const firstImage = Array.isArray(images) && images.length > 0 ? images[0] : FALLBACK;
  const [imgSrc, setImgSrc] = useState(firstImage);

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
      <div className="svc-wrap" style={{ height: 220 }} aria-label={`${title} image`}>
        <div className="svc-slide">
          <img
            src={imgSrc}
            loading="lazy"
            alt={`${title} visual`}
            onError={() => setImgSrc(FALLBACK)}
          />
        </div>
      </div>
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


