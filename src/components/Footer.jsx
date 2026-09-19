import React from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { InstagramIcon, GithubIcon } from './Icons';
import { Code2, Phone, ArrowUp, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <Code2 size={24} className="text-primary" />
              <span>{portfolioConfig.name}</span>
            </a>
            <p className="footer-tagline">{portfolioConfig.title}</p>
          </div>

          {/* Quick Contact Links */}
          <div className="footer-links-row">
            <a href={`tel:${portfolioConfig.contact.phone}`} className="footer-social-link phone-link">
              <Phone size={18} />
              <span>{portfolioConfig.contact.formattedPhone}</span>
            </a>
            <a 
              href={portfolioConfig.contact.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link insta-link"
            >
              <InstagramIcon size={18} />
              <span>@{portfolioConfig.contact.instagram}</span>
            </a>
            <a 
              href={portfolioConfig.contact.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link github-link"
            >
              <GithubIcon size={18} />
              <span>@{portfolioConfig.contact.github}</span>
            </a>
          </div>

          {/* Back to top */}
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to Top">
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.</p>
          <p className="built-with">
            Built with ❤️
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: rgba(0, 0, 0, 0.4);
          border-top: 1px solid var(--border-color);
          padding: 3.5rem 0 2rem 0;
          margin-top: 4rem;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .footer-tagline {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .footer-links-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .footer-social-link:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .phone-link:hover { color: #10b981; border-color: #10b981; }
        .insta-link:hover { color: #ec4899; border-color: #ec4899; }
        .github-link:hover { color: var(--accent-primary); border-color: var(--accent-primary); }

        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid var(--border-glow);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .scroll-top-btn:hover {
          background: var(--accent-primary);
          color: #ffffff;
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .built-with {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
      `}</style>
    </footer>
  );
};
