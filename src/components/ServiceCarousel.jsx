import React, { useEffect, useRef, useState } from 'react';
import './ServiceCarousel.css';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const ServiceCarousel = ({ images = [], height = 220, ariaLabel = 'Service screenshots' }) => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const dx = useRef(0);

  const goto = (i) => setIndex(prev => clamp(i, 0, images.length - 1));

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.setProperty('--idx', index);
  }, [index]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    dx.current = 0;
  };
  const onTouchMove = (e) => {
    dx.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    if (dx.current > 40) goto(index - 1);
    else if (dx.current < -40) goto(index + 1);
    dx.current = 0;
  };

  return (
    <div className="svc-wrap" style={{ height }}>
      <button className="svc-nav prev" aria-label="Previous slide" onClick={() => goto(index - 1)}>‹</button>
      <div
        className="svc-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label={ariaLabel}
        role="region"
      >
        <div className="svc-track" ref={trackRef} style={{ '--len': images.length }}>
          {images.map((src, i) => (
            <div className="svc-slide" key={i} aria-hidden={i !== index}>
              <img src={src} loading="lazy" alt={`Screenshot ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="svc-nav next" aria-label="Next slide" onClick={() => goto(index + 1)}>›</button>
      <div className="svc-dots" role="tablist" aria-label="Carousel Pagination">
        {images.map((_, i) => (
          <button
            key={i}
            className={`svc-dot ${i === index ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            onClick={() => goto(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;


