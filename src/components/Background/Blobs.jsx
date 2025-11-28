import React from 'react';

const Blob = ({ colorFrom, colorTo, top, left, size = 420, blur = 60, opacity = 0.28, delay = 0 }) => {
  const style = {
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    borderRadius: '50%',
    filter: `blur(${blur}px)`,
    opacity,
    background: `radial-gradient(closest-side, ${colorFrom}, ${colorTo})`,
    animation: `gm-blob 24s ease-in-out ${delay}s infinite alternate`
  };
  return <div style={style} aria-hidden="true" />;
};

const Blobs = () => {
  return (
    <div style={{ position: 'absolute', inset: -100, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      <Blob colorFrom="rgba(99,102,241,.55)" colorTo="rgba(99,102,241,0)" top="-60px" left="-80px" size={520} blur={72} opacity={0.35} />
      <Blob colorFrom="rgba(34,197,94,.5)" colorTo="rgba(34,197,94,0)" top="30%" left="70%" size={460} blur={68} opacity={0.26} delay={4} />
      <Blob colorFrom="rgba(59,130,246,.45)" colorTo="rgba(59,130,246,0)" top="65%" left="5%" size={380} blur={64} opacity={0.22} delay={8} />
      <style>
        {`
          @keyframes gm-blob {
            0%   { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(40px, -30px, 0) scale(1.08); }
          }
        `}
      </style>
    </div>
  );
};

export default Blobs;


