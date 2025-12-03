import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'bootstrap';

const slides = [
  {
    title: 'Welcome to Growmore IT',
    subtitle: 'A premium technology experience',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' // Optimized for mobile
  },
  {
    title: 'Curated Solutions. Exquisite Delivery.',
    subtitle: 'Crafted with passion and precision',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Modern Ambience. Timeless Excellence.',
    subtitle: 'Build with a partner you can trust',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    mobileImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  }
];

const BootstrapHero = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = new Carousel(carouselRef.current, {
        interval: 2000,
        ride: 'carousel',
        touch: true,
        pause: false
      });
      return () => carousel.dispose();
    }
  }, []);

  // Ensure slides exist and are not empty
  const activeSlides = slides.filter(s => s.image);

  if (!activeSlides.length) return null;

  return (
    <div ref={carouselRef} id="gmHero" className="carousel slide" style={{ width: '100%', height: '100%' }}>
      <div className="carousel-indicators">
        {activeSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#gmHero"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner" style={{ height: '100%' }}>
        {activeSlides.map((s, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} style={{ height: '100%' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }} />

            {/* Mobile Image Support */}
            <picture>
              <source media="(max-width: 768px)" srcSet={s.mobileImage || s.image} />
              <img src={s.image} className="d-block w-100" alt={s.title} style={{ objectFit: 'cover', height: '100%' }} />
            </picture>

            <div className="carousel-caption" style={{
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              zIndex: 2,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 0 // Override default bootstrap padding
            }}>
              <h1 style={{ fontFamily: '\'Playfair Display\', serif', fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>{s.title}</h1>
              <div style={{ fontFamily: '\'Poppins\', sans-serif', fontWeight: 500, fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '2rem', minHeight: '1.5em' }}>
                <TypeAnimation
                  sequence={[
                    s.subtitle,
                    1000,
                    'Excellence in every pixel.',
                    1000,
                    'Innovation at its core.',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <a href="#services" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>Explore Services</a>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#gmHero" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#gmHero" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BootstrapHero;
