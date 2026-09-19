import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { InstagramIcon } from './Icons';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Globe
} from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % portfolioConfig.taglines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Text */}
        <div className="hero-content">
          {/* ZERO Badge */}
          <div className="zero-badge">
            <Sparkles size={14} />
            <span>ZERO</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{portfolioConfig.name}</span>
          </h1>

          {/* Dynamic Typing Tagline */}
          <div className="tagline-container">
            <span className="tagline-prefix">Specialized in</span>
            <span className="dynamic-tagline key-fade" key={taglineIndex}>
              {portfolioConfig.taglines[taglineIndex]}
            </span>
          </div>

          {/* Short Bio */}
          <p className="hero-bio">
            {portfolioConfig.bio}
          </p>

          {/* Contact Direct Badges */}
          <div className="direct-contact-badges">
            <a 
              href={`tel:${portfolioConfig.contact.phone}`} 
              className="badge-link phone-badge"
              title="Click to Call Karibasu"
            >
              <Phone size={14} />
              <span>{portfolioConfig.contact.formattedPhone}</span>
            </a>
            <a 
              href={portfolioConfig.contact.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="badge-link insta-badge"
              title="View Instagram Profile"
            >
              <InstagramIcon size={14} />
              <span>@{portfolioConfig.contact.instagram}</span>
            </a>
            <a 
              href={`https://wa.me/${portfolioConfig.contact.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="badge-link wa-badge"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenResume} className="btn btn-secondary">
              <FileText size={18} />
              <span>View Resume</span>
            </button>

            <a 
              href={`tel:${portfolioConfig.contact.phone}`} 
              className="btn btn-phone"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Graphic & Developer Badge */}
        <div className="hero-visual">
          <div className="avatar-card-wrapper glass-card">
            {/* Ambient Orbital Glow */}
            <div className="card-glow-bg"></div>

            <div className="avatar-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">karibasu_developer.js</span>
            </div>

            <div className="avatar-body">
              <div className="profile-badge-circle">
                <Terminal size={48} className="terminal-icon" />
              </div>

              <h3 className="profile-name">{portfolioConfig.name}</h3>
              <p className="profile-title">{portfolioConfig.title}</p>

              <div className="quick-tags">
                <span className="badge-pill"><Code2 size={12}/> Frontend</span>
                <span className="badge-pill"><CheckCircle2 size={12}/> Java DSA</span>
                <span className="badge-pill"><Globe size={12}/> Web Systems</span>
              </div>

              <div className="hero-stats-mini grid-stats">
                {portfolioConfig.stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="stat-box-mini">
                    <span className="stat-val">{stat.value}</span>
                    <span className="stat-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 10rem;
          padding-bottom: 5rem;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 7rem;
            padding-bottom: 3rem;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .zero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.1rem;
          border-radius: 9999px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid var(--border-glow);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .tagline-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          min-height: 2rem;
          flex-wrap: wrap;
        }

        .dynamic-tagline {
          color: var(--accent-primary);
          border-bottom: 2px solid var(--accent-primary);
        }

        .key-fade {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 620px;
        }

        .direct-contact-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.25rem;
        }

        .badge-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          border-radius: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .phone-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .phone-badge:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: translateY(-2px);
        }

        .insta-badge {
          background: rgba(236, 72, 153, 0.1);
          color: #ec4899;
          border: 1px solid rgba(236, 72, 153, 0.3);
        }

        .insta-badge:hover {
          background: rgba(236, 72, 153, 0.2);
          transform: translateY(-2px);
        }

        .wa-badge {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .wa-badge:hover {
          background: rgba(34, 197, 94, 0.2);
          transform: translateY(-2px);
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Avatar Card */
        .avatar-card-wrapper {
          padding: 1.75rem;
          text-align: center;
          position: relative;
        }

        .card-glow-bg {
          position: absolute;
          top: -30%;
          left: -30%;
          width: 160%;
          height: 160%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .avatar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1.5rem;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .window-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .profile-badge-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--gradient-primary);
          margin: 0 auto 1.25rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .profile-name {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .profile-title {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
        }

        .quick-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .grid-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        .stat-box-mini {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 0.75rem 0.5rem;
        }

        .stat-val {
          display: block;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--accent-primary);
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.2;
        }
      `}</style>
    </section>
  );
};
