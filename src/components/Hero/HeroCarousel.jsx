import React, { useEffect, useRef, useState } from 'react';
import './HeroCarousel.css';

const defaultSlides = [
  {
    title: 'Empowering Growth Through Technology',
    subtitle: 'Modern solutions that accelerate your digital transformation',
    image: "url('/Growmore.jpg')"
  },
  {
    title: 'Build Experiences Your Users Love',
    subtitle: 'Web, mobile, and software crafted for performance',
    image: "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop')"
  },
  {
    title: 'Cloud, Data, and AI',
    subtitle: 'Operate securely, scale globally, innovate faster',
    image: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')"
  },
  {
    title: 'Design That Converts',
    subtitle: 'Premium UI/UX that turns visitors into customers',
    image: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop')"
  }
];

const HeroCarousel = ({ slides = defaultSlides, autoInterval = 5000, onPrimary }) => {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex(i => (i + 1) % slides.length), autoInterval);
    return () => clearInterval(timer.current);
  }, [slides.length, autoInterval]);

  const goto = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <section className="hc-hero">
      {slides.map((s, i) => (
        <div key={i} className={`hc-slide ${i === index ? 'active' : ''}`} style={{ backgroundImage: s.image }}>
          <div className="hc-overlay" />
          <div className="hc-content">
            <h1>{s.title}</h1>
            <p>{s.subtitle}</p>
            <div className="hc-cta">
              <button className="btn btn-primary" onClick={onPrimary}>Explore Services</button>
            </div>
          </div>
        </div>
      ))}
      <button className="hc-prev" aria-label="Previous" onClick={() => goto(index - 1)}>‹</button>
      <button className="hc-next" aria-label="Next" onClick={() => goto(index + 1)}>›</button>
      <div className="hc-dots">
        {slides.map((_, i) => (
          <button key={i} className={`hc-dot ${i === index ? 'active' : ''}`} onClick={() => goto(i)} aria-label={`Go to slide ${i+1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;


