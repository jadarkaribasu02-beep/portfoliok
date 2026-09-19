import React from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { InstagramIcon } from './Icons';
import { X, Download, FileText, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <FileText size={20} className="text-accent" />
            <h2>Karibasu Jadar — Curriculum Vitae</h2>
          </div>
          <div className="modal-actions">
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Download size={16} /> Print / Save PDF
            </button>
            <button onClick={onClose} className="close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body print-area">
          {/* Resume Header */}
          <div className="resume-head">
            <h1 className="resume-name">{portfolioConfig.name}</h1>
            <p className="resume-role">{portfolioConfig.title}</p>
            <div className="resume-contacts">
              <span><Phone size={14}/> {portfolioConfig.contact.formattedPhone}</span>
              <span><InstagramIcon size={14}/> @{portfolioConfig.contact.instagram}</span>
              <span><Mail size={14}/> {portfolioConfig.contact.email}</span>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Executive Summary */}
          <div className="resume-section">
            <h3>Professional Profile</h3>
            <p>{portfolioConfig.bio}</p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3>Technical Capabilities</h3>
            <div className="resume-skills-list">
              <div>
                <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Responsive UI Design
              </div>
              <div>
                <strong>Backend & Algorithms:</strong> Java (Core & OOP), Data Structures, Algorithms, Node.js, SQL Databases
              </div>
              <div>
                <strong>Tools:</strong> Git, GitHub (@jadarkaribasu02-beep), VS Code, Vite, Npm
              </div>
            </div>
          </div>

          {/* Featured Repositories */}
          <div className="resume-section">
            <h3>Key Projects & GitHub Repositories</h3>
            {portfolioConfig.projects.map((proj) => (
              <div key={proj.id} className="resume-project-item">
                <div className="proj-head">
                  <strong>{proj.title}</strong>
                  <span className="proj-cat">{proj.category}</span>
                </div>
                <p className="proj-desc">{proj.description}</p>
                <div className="proj-tags">Tech Stack: {proj.tags.join(', ')}</div>
              </div>
            ))}
          </div>

          {/* Education & Experience */}
          <div className="resume-section">
            <h3>Experience & Background</h3>
            {portfolioConfig.experience.map((exp, idx) => (
              <div key={idx} className="resume-exp-item">
                <div className="exp-head">
                  <strong>{exp.role}</strong> — <span>{exp.organization}</span>
                  <span className="exp-date">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        .modal-container {
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-glow);
          box-shadow: var(--shadow-lg);
          border-radius: 1.25rem;
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
        }

        .modal-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .modal-title-row h2 {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.35rem;
          border-radius: 50%;
          transition: color 0.2s ease;
        }

        .close-btn:hover {
          color: var(--text-primary);
        }

        .modal-body {
          padding: 2rem 2.5rem;
          overflow-y: auto;
          line-height: 1.6;
        }

        .resume-head {
          text-align: center;
          margin-bottom: 1rem;
        }

        .resume-name {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
        }

        .resume-role {
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
        }

        .resume-contacts {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .resume-contacts span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .resume-divider {
          border: none;
          height: 1px;
          background: var(--border-color);
          margin: 1.5rem 0;
        }

        .resume-section {
          margin-bottom: 1.5rem;
        }

        .resume-section h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 0.6rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.3rem;
        }

        .resume-skills-list div {
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }

        .resume-project-item, .resume-exp-item {
          margin-bottom: 1rem;
          padding: 0.85rem 1rem;
          border-radius: 0.6rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .proj-head, .exp-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.3rem;
        }

        .proj-cat, .exp-date {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent-primary);
        }

        .proj-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
        }

        .proj-tags {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
