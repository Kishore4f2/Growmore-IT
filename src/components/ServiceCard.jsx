import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import './ServiceCard.css';

const ServiceCard = ({ service, onClickCard, onVisit }) => {
  const { title, shortDesc, images, icon } = service;
  return (
    <div
      className="svc-card"
      role="button"
      tabIndex={0}
      onClick={onClickCard}
      onKeyDown={(e) => { if (e.key === 'Enter') onClickCard(); }}
      aria-label={`Open details for ${title}`}
    >
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


