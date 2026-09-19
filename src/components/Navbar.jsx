import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { InstagramIcon } from './Icons';
import { 
  Phone, 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react';

export const Navbar = ({ activeTheme, setTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const cycleTheme = () => {
    const themes = ['dark', 'emerald', 'light'];
    const currentIndex = themes.indexOf(activeTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Sleek Interactive Animated Spark Logo */}
        <a href="#" className="navbar-logo" title="Karibasu Jadar">
          <div className="logo-icon-box">
            <Zap size={20} className="logo-spark-icon" />
          </div>
          <span className="logo-text">
            {portfolioConfig.shortName} <span className="logo-dot">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls / Quick Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button 
            className="action-icon-btn" 
            onClick={cycleTheme}
            title={`Current Theme: ${activeTheme}. Click to switch.`}
          >
            {activeTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Direct Phone Call Button */}
          <a 
            href={`tel:${portfolioConfig.contact.phone}`} 
            className="action-icon-btn phone-btn-nav"
            title={`Call ${portfolioConfig.contact.formattedPhone}`}
          >
            <Phone size={18} />
          </a>

          {/* Direct Instagram Link */}
          <a 
            href={portfolioConfig.contact.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-icon-btn insta-btn-nav"
            title={`Instagram @${portfolioConfig.contact.instagram}`}
          >
            <InstagramIcon size={18} />
          </a>

          {/* Resume Trigger */}
          <button onClick={onOpenResume} className="btn btn-primary nav-cv-btn">
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu glass-card">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-actions-row">
              <button 
                onClick={() => { onOpenResume(); setMobileMenuOpen(false); }} 
                className="btn btn-primary w-full"
              >
                <FileText size={16} /> Resume Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 0.75rem 0;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--text-primary);
        }

        .logo-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid var(--border-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          transition: all 0.3s ease;
        }

        .logo-spark-icon {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .navbar-logo:hover .logo-icon-box {
          background: rgba(236, 72, 153, 0.2);
          border-color: #ec4899;
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
        }

        .navbar-logo:hover .logo-spark-icon {
          transform: scale(1.25) rotate(15deg);
          color: #ec4899;
        }

        .logo-dot {
          color: var(--accent-primary);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .action-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .action-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .phone-btn-nav:hover {
          color: #10b981;
          border-color: #10b981;
        }

        .insta-btn-nav:hover {
          color: #ec4899;
          border-color: #ec4899;
        }

        .nav-cv-btn {
          padding: 0.6rem 1.25rem;
          font-size: 0.85rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-nav-menu {
          position: absolute;
          top: 100%;
          left: 1.5rem;
          right: 1.5rem;
          margin-top: 0.5rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .mobile-actions-row {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .nav-cv-btn {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
