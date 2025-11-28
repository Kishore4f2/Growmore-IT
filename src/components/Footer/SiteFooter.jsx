import React from 'react';
import './SiteFooter.css';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

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
        <div className="sf-col">
          <a href="/" aria-label="Home" className="sf-logo">
            <img src="/Growmore1.jpg" alt="Growmore IT" />
          </a>
          <p className="sf-tagline">Enterprise-grade solutions for web, mobile, cloud and AI.</p>
        </div>
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
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="sf-social"><Instagram size={16} /></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="sf-social"><Linkedin size={16} /></a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="sf-social"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
      <div className="sf-divider" />
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


