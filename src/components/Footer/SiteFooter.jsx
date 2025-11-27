import React from 'react';
import './SiteFooter.css';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '/apply-job' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Cloud & Hosting', href: '/services/cloud-hosting-solutions' },
      { label: 'AI & Automation', href: '/services/ai-automation-solutions' }
    ]
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', href: '/' },
      { label: 'Case Studies', href: '/' },
      { label: 'News', href: '/' }
    ]
  }
];

const SiteFooter = () => {
  return (
    <footer className="sf-footer">
      <div className="sf-top">
        {columns.map((c, idx) => (
          <div key={idx} className="sf-col">
            <h4>{c.heading}</h4>
            <ul>
              {c.links.map((l, i) => (
                <li key={i}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="sf-col">
          <h4>Follow Us</h4>
          <div className="sf-socials">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="sf-social">📷</a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="sf-social">in</a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="sf-social">f</a>
          </div>
        </div>
      </div>
      <div className="sf-bottom">
        <div className="sf-legal">© 2025 Growmore IT Services. All rights reserved.</div>
        <div className="sf-terms">
          <a href="/">Privacy</a>
          <span>·</span>
          <a href="/">Terms</a>
          <span>·</span>
          <a href="/">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;


