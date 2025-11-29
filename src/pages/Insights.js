import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const sections = [
  { id: 'case-studies', title: 'Case Studies', items: [
    { title: 'Healthcare Dashboard', desc: 'Clinical analytics and secure data flows.' },
    { title: 'Retail Analytics', desc: 'Inventory insights and conversion optimization.' }
  ]},
  { id: 'products', title: 'Products', items: [
    { title: 'Feedback Portal', desc: 'NPS/CSAT with actionable insights.' },
    { title: 'Inventory Suite', desc: 'Track stock, trends, and supply-chain health.' }
  ]},
  { id: 'news', title: 'News', items: [
    { title: 'AI Copilot Launch', desc: 'Introducing AI assistants for support teams.' },
    { title: 'Cloud Center of Excellence', desc: 'Blueprint for reliable cloud operations.' }
  ]}
];

const gallery = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop'
];

const Insights = () => {
  const leftRef = useRef(null);
  const [galleryH, setGalleryH] = useState(520);

  useEffect(() => {
    const calc = () => {
      if (leftRef.current) {
        const h = leftRef.current.scrollHeight || leftRef.current.offsetHeight || 520;
        setGalleryH(Math.max(420, Math.round(h)));
      }
    };
    requestAnimationFrame(calc);
    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(calc);
      if (leftRef.current) ro.observe(leftRef.current);
    }
    window.addEventListener('resize', calc);
    window.addEventListener('load', calc);
    return () => {
      window.removeEventListener('resize', calc);
      window.removeEventListener('load', calc);
      if (ro) ro.disconnect();
    };
  }, []);
  return (
    <div className="home-container dark">
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Insights</h2>
          <p className="section-subtitle">Case studies, products, and news from our team.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
            {/* LEFT – TEXT CONTENT */}
            <div ref={leftRef}>
              {sections.map(sec => (
                <div key={sec.id} id={sec.id} style={{ marginBottom: 36 }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: 12 }}>{sec.title}</h3>
                  <div className="services-grid">
                    {sec.items.map((it, i) => (
                      <div key={i} className="service-card">
                        <div className="service-title">{it.title}</div>
                        <div className="service-short-desc">{it.desc}</div>
                        <a href="#" className="service-cta">Read More →</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT – BOOTSTRAP CAROUSEL */}
            <aside style={{ position: 'sticky', top: 24, alignSelf: 'start', height: galleryH }} aria-label="Insights gallery">
              <div id="insightsCarousel" className="carousel slide" data-bs-ride="carousel" style={{ height: '100%', borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 24px var(--shadow)' }}>
                <div className="carousel-indicators">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#insightsCarousel"
                      data-bs-slide-to={i}
                      className={i === 0 ? 'active' : ''}
                      aria-current={i === 0 ? 'true' : undefined}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="carousel-inner" style={{ height: '100%' }}>
                  {gallery.map((src, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} style={{ height: '100%' }}>
                      <img
                        src={src}
                        className="d-block w-100"
                        alt={`Insights visual ${i + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#insightsCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#insightsCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;


