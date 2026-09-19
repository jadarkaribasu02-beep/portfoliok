import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { 
  User, 
  Terminal, 
  Copy, 
  Check, 
  Phone, 
  FileText, 
  Award, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export const About = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(portfolioConfig.aboutCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <User size={14} /> About Me
          </span>
          <h2 className="section-title">
            Passionate Developer Driven By <span className="gradient-text">Clean Code</span>
          </h2>
          <p className="section-subtitle">
            Get to know Karibasu Jadar — engineering robust software solutions, mastering algorithms, and creating responsive web applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Code Terminal */}
          <div className="terminal-card glass-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">karibasu.config.ts</span>
              <button 
                onClick={handleCopyCode} 
                className="copy-code-btn"
                title="Copy code snippet"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="terminal-code">
              <pre>
                <code>{portfolioConfig.aboutCodeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Right Column: Key Philosophy & Direct Links */}
          <div className="about-text-column">
            <div className="about-card glass-card">
              <h3 className="card-heading">
                <Sparkles size={20} className="icon-accent" />
                Problem Solving & Engineering Mindset
              </h3>
              <p className="about-paragraph">
                I specialize in designing and building full-stack web applications and solving complex algorithmic challenges. With a high focus on performance and code readability, I enjoy transforming ideas into functional, beautiful digital products.
              </p>

              <div className="highlight-points">
                <div className="point-item">
                  <Layers size={18} className="icon-point" />
                  <div>
                    <h4>Full-Stack Mastery</h4>
                    <p>React.js, Modern JavaScript, Node.js & Database Systems</p>
                  </div>
                </div>
                <div className="point-item">
                  <Award size={18} className="icon-point" />
                  <div>
                    <h4>Java & DSA Focused</h4>
                    <p>100+ solved algorithmic problems & data structure patterns</p>
                  </div>
                </div>
              </div>

              {/* Direct Reach Buttons */}
              <div className="about-actions">
                <button onClick={onOpenResume} className="btn btn-primary">
                  <FileText size={16} /> View CV / Resume
                </button>
                <a href={`tel:${portfolioConfig.contact.phone}`} className="btn btn-secondary">
                  <Phone size={16} /> Call Karibasu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big Stats Row */}
        <div className="stats-row grid-stats-4">
          {portfolioConfig.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <span className="stat-number gradient-text">{stat.value}</span>
              <span className="stat-title">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Terminal Component */
        .terminal-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          background: #0d1117;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .copy-code-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 0.3rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-code-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
        }

        .terminal-code {
          padding: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: #e6edf3;
          overflow-x: auto;
          line-height: 1.6;
        }

        .terminal-code code {
          color: #a5d6ff;
        }

        /* About Text Column */
        .about-card {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .icon-accent {
          color: var(--accent-primary);
        }

        .about-paragraph {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .highlight-points {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .point-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .icon-point {
          color: var(--accent-primary);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .point-item h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .point-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Grid Stats 4 */
        .grid-stats-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .grid-stats-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-card {
          padding: 1.75rem 1.25rem;
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-title {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
