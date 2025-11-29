import React, { useState, useEffect } from 'react';
import './MegaMenu.css';
import { Search, Sun, Moon, User, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
                    { label: 'Healthcare Dashboard', to: '/insights#case-studies' },
                    { label: 'Retail Analytics', to: '/insights#case-studies' }
                ]
            },
            {
                heading: 'Products',
                links: [
                    { label: 'Feedback Portal', to: '/insights#products' },
                    { label: 'Inventory Suite', to: '/insights#products' }
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
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');
    const [mobileExpanded, setMobileExpanded] = useState({});

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            // Add a class to the body so CSS can react if needed
            document.body.classList.add('mm-mobile-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('mm-mobile-open');
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileOpen]);

    const handleItemEnter = (id) => {
        if (window.innerWidth > 968) setOpenPanel(id);
    };

    const handleLeave = () => {
        if (window.innerWidth > 968) setOpenPanel(null);
    };

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

    const toggleMobileSection = (id) => {
        setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <header className="mm-header" onMouseLeave={handleLeave}>
            <div className="mm-bar">
                <button className="mm-logo" onClick={onLogoClick} aria-label="Home">
                    <img src="/Growmore1.jpg" alt="Growmore IT" />
                </button>

                {/* Desktop Nav */}
                <nav className="mm-nav-desktop">
                    {NAV_ITEMS.map(item => (
                        <div
                            key={item.id}
                            className={`mm-item ${openPanel === item.id ? 'active' : ''}`}
                            onMouseEnter={() => handleItemEnter(item.id)}
                        >
                            <button
                                className="mm-link"
                                onClick={() => setOpenPanel(openPanel === item.id ? null : item.id)}
                            >
                                {item.label} <ChevronDown size={14} className={`mm-chevron ${openPanel === item.id ? 'rotate' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openPanel === item.id && (
                                    <motion.div
                                        className="mm-panel"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
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
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                <div className="mm-actions">
                    <button className="mm-action" onClick={onToggleTheme} title="Toggle theme">
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    {!showSearch && (
                        <button className="mm-action" onClick={() => { setShowSearch(true); onToggleSearch && onToggleSearch(); }} title="Search">
                            <Search size={18} />
                        </button>
                    )}
                    <button className="mm-action" onClick={() => onLogin && onLogin()} title="Login">
                        <User size={18} />
                    </button>
                    <button className="mm-burger" onClick={() => setMobileOpen(true)} aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>

                {/* Desktop Search Bar */}
                <AnimatePresence>
                    {showSearch && (
                        <motion.form
                            initial={{ opacity: 0, width: 0, x: 20 }}
                            animate={{ opacity: 1, width: 300, x: 0 }}
                            exit={{ opacity: 0, width: 0, x: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onSubmit={(e) => { e.preventDefault(); setShowSearch(false); onNavigate && onNavigate('/insights'); }}
                            className="mm-search-bar"
                        >
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search..."
                                autoFocus
                            />
                            <button type="button" onClick={() => setShowSearch(false)} className="mm-search-close">
                                <X size={14} />
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="mm-mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            className="mm-mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="mm-mobile-header">
                                <span className="mm-mobile-title">Menu</span>
                                <button className="mm-mobile-close" onClick={() => setMobileOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="mm-mobile-content">
                                {NAV_ITEMS.map(item => (
                                    <div key={item.id} className="mm-mobile-group">
                                        <button
                                            className="mm-mobile-group-btn"
                                            onClick={() => toggleMobileSection(item.id)}
                                        >
                                            {item.label}
                                            <ChevronRight size={16} className={`mm-chevron ${mobileExpanded[item.id] ? 'rotate-90' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {mobileExpanded[item.id] && (
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.18 }}
                                                    className="mm-mobile-sub"
                                                >
                                                    {item.columns.map((col, idx) => (
                                                        <div key={idx} className="mm-mobile-col">
                                                            <h5>{col.heading}</h5>
                                                            {col.links.map((l, i) => (
                                                                <button key={i} className="mm-mobile-link" onClick={() => onLink(l.to)}>
                                                                    {l.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default MegaMenu;
