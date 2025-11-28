import React, { useState } from 'react';
import './MegaMenu.css';
import { Search, Sun, Moon, User } from 'lucide-react';

const NAV_ITEMS = [
  {
    id: 'services',
    label: 'Services',
    columns: [
      {
        heading: 'Build & Modernize',
        links: [
          { label: 'Web Development', to: '/services/web-development' },
          { label: 'Mobile App Development', to: '/services/mobile-app-development' },
          { label: 'Software Development', to: '/services/software-development' }
        ]
      },
      {
        heading: 'Operate & Run',
        links: [
          { label: 'Cloud & Hosting', to: '/services/cloud-hosting-solutions' },
          { label: 'Maintenance & Support', to: '/services/maintenance-support' }
        ]
      },
      {
        heading: 'Transform',
        links: [
          { label: 'Digital Solutions', to: '/services/digital-solutions' },
          { label: 'AI & Automation', to: '/services/ai-automation-solutions' }
        ]
      }
    ]
  },
  {
    id: 'insights',
    label: 'Insights',
    columns: [
      {
        heading: 'Case Studies',
        links: [
          { label: 'Healthcare Dashboard', to: '/' },
          { label: 'Retail Analytics', to: '/' }
        ]
      },
      {
        heading: 'Products',
        links: [
          { label: 'Feedback Portal', to: '/' },
          { label: 'Inventory Suite', to: '/' }
        ]
      }
    ]
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      { heading: 'About', links: [{ label: 'Who We Are', to: '#about' }] },
      { heading: 'Careers', links: [{ label: 'Apply for Job', to: '/apply-job' }] },
      { heading: 'Contact', links: [{ label: 'Get in touch', to: '#contact' }] }
    ]
  }
];

const MegaMenu = ({ onLogoClick, onToggleSearch, onToggleTheme, onLogin, theme, onNavigate }) => {
  const [openPanel, setOpenPanel] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleItemEnter = (id) => setOpenPanel(id);
  const handleLeave = () => setOpenPanel(null);

  const onLink = (to) => {
    setOpenPanel(null);
    setMobileOpen(false);
    if (to.startsWith('#')) {
      const id = to.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    onNavigate && onNavigate(to);
  };

  return (
    <header className="mm-header" onMouseLeave={handleLeave}>
      <div className="mm-bar">
        <button className="mm-logo" onClick={onLogoClick} aria-label="Home">
          <img src="/Growmore1.jpg" alt="Growmore IT" />
        </button>
        <nav className={`mm-nav ${mobileOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <div
              key={item.id}
              className={`mm-item ${openPanel === item.id ? 'active' : ''}`}
              onMouseEnter={() => handleItemEnter(item.id)}
            >
              <button className="mm-link" onClick={() => setOpenPanel(openPanel === item.id ? null : item.id)}>
                {item.label}
              </button>
              {openPanel === item.id && (
                <div className="mm-panel">
                  {item.columns.map((col, idx) => (
                    <div className="mm-col" key={idx}>
                      <h4>{col.heading}</h4>
                      <ul>
                        {col.links.map((l, i) => (
                          <li key={i}>
                            <button className="mm-panel-link" onClick={() => onLink(l.to)}>{l.label}</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mm-actions">
          <button className="mm-action" onClick={onToggleTheme} title="Toggle theme" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="mm-action" onClick={onToggleSearch} title="Search" aria-label="Search">
            <Search size={16} />
          </button>
          <button className="mm-action" onClick={() => onLogin && onLogin()} title="Login" aria-label="Login">
            <User size={16} />
          </button>
          <button className="mm-burger" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default MegaMenu;


