import React, { useMemo } from 'react';

// Lightweight CSS particle field (no external deps)
const ParticleField = ({ density = 40 }) => {
  const particles = useMemo(() => {
    const count = Math.max(10, Math.min(120, density));
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 2 + 1.2;
      const duration = 18 + Math.random() * 18;
      const hue = [220, 260, 155, 45][i % 4];
      const alpha = 0.22 + Math.random() * 0.2;
      return { id: i, left, top, size, duration, hue, alpha, delay: Math.random() * 10 };
    });
  }, [density]);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: `hsla(${p.hue} 90% 60% / ${p.alpha})`,
            borderRadius: '50%',
            boxShadow: `0 0 ${p.size * 6}px hsla(${p.hue} 90% 60% / ${p.alpha})`,
            transform: 'translateZ(0)',
            animation: `gm-float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes gm-float {
            0%   { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(8px, -12px, 0); }
          }
        `}
      </style>
    </div>
  );
};

export default ParticleField;


