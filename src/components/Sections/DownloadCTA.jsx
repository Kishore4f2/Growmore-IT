import React from 'react';
import './DownloadCTA.css';

const DownloadCTA = () => {
  return (
    <section className="dl-wrap">
      <div className="dl-inner reveal">
        <div className="dl-text">
          <h2>Download the App to get started today</h2>
          <p>Join with an invite. Mining is free and secure.</p>
        </div>
        <div className="dl-actions">
          <button className="btn btn-primary">Download on Google Play</button>
          <button className="btn btn-secondary">Download on App Store</button>
          <button className="btn btn-primary">APK</button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;


