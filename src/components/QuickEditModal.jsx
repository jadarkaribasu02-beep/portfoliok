import React from 'react';
import { X, Edit3, FileCode, CheckCircle, Sparkles } from 'lucide-react';

export const QuickEditModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card edit-guide-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <Edit3 size={20} className="text-emerald" />
            <h2>How to Easily Edit Portfolio Content</h2>
          </div>
          <button onClick={onClose} className="close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="edit-guide-intro">
            <p>
              Hey <strong>Karibasu</strong>! All your text, phone number, Instagram links, projects, skills, and bio are centralized inside 1 clean configuration file:
            </p>
            <div className="file-path-badge">
              <FileCode size={16} /> <code>z:\web\src\data\portfolioConfig.js</code>
            </div>
          </div>

          <div className="guide-steps">
            <div className="guide-step-item">
              <div className="step-num">1</div>
              <div>
                <h4>Edit Personal Details</h4>
                <p>Open <code>portfolioConfig.js</code> and update your phone number, email, bio, or taglines whenever you want.</p>
              </div>
            </div>

            <div className="guide-step-item">
              <div className="step-num">2</div>
              <div>
                <h4>Add or Modify Projects</h4>
                <p>Add new project cards into the <code>projects</code> array with title, GitHub URL, tags, and image preview links.</p>
              </div>
            </div>

            <div className="guide-step-item">
              <div className="step-num">3</div>
              <div>
                <h4>Tweak Skills & Experience</h4>
                <p>Adjust skill percentages in <code>skills</code> (Frontend, Backend, Tools) or update your career timeline in <code>experience</code>.</p>
              </div>
            </div>
          </div>

          <div className="modal-footer-action">
            <button onClick={onClose} className="btn btn-primary w-full">
              <CheckCircle size={16} /> Got it, thanks!
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .edit-guide-modal {
          max-width: 650px;
        }

        .edit-guide-intro {
          margin-bottom: 1.5rem;
        }

        .file-path-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .guide-steps {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .guide-step-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
        }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: #fff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .guide-step-item h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .guide-step-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .text-emerald {
          color: #10b981;
        }
      `}</style>
    </div>
  );
};
