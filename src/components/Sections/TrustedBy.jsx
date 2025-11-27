import React from 'react';
import './TrustedBy.css';

const logos = new Array(6).fill(0);

const TrustedBy = () => {
  return (
    <section className="tb-wrap">
      <div className="tb-title">TRUSTED BY</div>
      <div className="tb-logos">
        {logos.map((_, i) => (
          <div key={i} className="tb-logo-skel" />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;


