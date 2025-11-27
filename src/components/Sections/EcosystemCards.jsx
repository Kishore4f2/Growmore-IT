import React from 'react';
import './EcosystemCards.css';

const items = [
  { idx: '01', title: 'Interlink ID', desc: 'Your verified passport to traverse the ecosystem.' },
  { idx: '02', title: 'Interlink App', desc: 'Earn tokens and access decentralized services quickly.' },
  { idx: '03', title: 'Interlink SDK', desc: 'Low‑code kit for identity and AI features.' },
  { idx: '04', title: 'Interlink Chain', desc: 'Proof of Personhood powering a human network.' }
];

const EcosystemCards = () => {
  return (
    <section className="eco-wrap">
      <h2 className="section-title">Four core foundations keeping our ecosystem secure and powerful</h2>
      <div className="eco-grid">
        {items.map((it, i) => (
          <div className="eco-card reveal" key={i}>
            <div className="eco-top">
              <span className="eco-idx">{it.idx}</span>
              <span className="eco-dot">•</span>
              <span className="eco-brand">InterLink</span>
              <span className="eco-copy">Ecosystem</span>
              <span className="eco-year">©2025</span>
            </div>
            <h3 className="eco-title">{it.title}</h3>
            <div className="eco-line eco-line--top" />
            <p className="eco-desc">{it.desc}</p>
            <div className="eco-line eco-line--bottom" />
            <div className="eco-more">See More →</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemCards;


