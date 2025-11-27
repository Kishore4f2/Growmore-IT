import React from 'react';
import './WorldMarquee.css';

const countries = ['UAE','SINGAPORE','TURKEY','ARGENTINA','VIETNAM','UNITED STATES','SAUDI ARABIA','MALAYSIA','NETHERLANDS','HONG KONG','INDONESIA','SOUTH KOREA','SOUTH AFRICA','SWITZERLAND','PHILIPPINES','VENEZUELA','UKRAINE','CANADA','SLOVENIA'];

const WorldMarquee = () => {
  const list = [...countries, ...countries];
  return (
    <div className="wm-wrap">
      <div className="wm-track">
        {list.map((c, i) => (
          <span key={i} className="wm-item">{c}</span>
        ))}
      </div>
    </div>
  );
};

export default WorldMarquee;


