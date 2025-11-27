import React from 'react';
import './FeatureHighlights.css';

const items = [
  { emoji: '🧩', title: 'Mini-app ecosystem', desc: 'Enjoy everything in one place — no extra downloads needed.' },
  { emoji: '🏆', title: 'Gaming leaderboard', desc: 'Play, compete, earn rewards, and keep the excitement alive.' },
  { emoji: '💸', title: 'Global payment & transfer', desc: 'Pay or shop with one quick scan — fast and secure.' },
  { emoji: '⛏️', title: 'Human-powered mining', desc: 'Grow the network. Every user is a vital node.' },
];

const FeatureHighlights = () => {
  return (
    <section className="fh-wrap">
      <div className="fh-grid">
        {items.map((it, i) => (
          <div className="fh-card" key={i}>
            <div className="fh-icon">{it.emoji}</div>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;


