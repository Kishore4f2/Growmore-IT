import React from 'react';

const InfoBand = ({ eyebrow, title, subtitle, cta, onClick, tone = 'primary' }) => {
  return (
    <section className={`info-band info-band--${tone}`}>
      <div className="info-band__container">
        <div className="info-band__text">
          {eyebrow && <div className="info-band__eyebrow">{eyebrow}</div>}
          <h2 className="info-band__title">{title}</h2>
          {subtitle && <p className="info-band__subtitle">{subtitle}</p>}
        </div>
        {cta && (
          <div className="info-band__cta">
            <button className="btn btn-primary" onClick={onClick}>{cta}</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoBand;


