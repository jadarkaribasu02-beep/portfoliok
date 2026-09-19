import React from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> Career & Education
          </span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A timeline of academic education, software development projects, and engineering experience.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {portfolioConfig.experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Node Icon */}
              <div className="timeline-node">
                <Briefcase size={18} />
              </div>

              {/* Card Content */}
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-period">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="org-name">{exp.organization}</span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-highlights">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="highlight-item">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 24px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent);
        }

        .timeline-item {
          position: relative;
          padding-left: 65px;
          margin-bottom: 2.5rem;
        }

        .timeline-node {
          position: absolute;
          left: 0;
          top: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
          z-index: 2;
        }

        .timeline-card {
          padding: 1.75rem 2rem;
        }

        .timeline-period {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .role-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .org-name {
          display: block;
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .exp-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .exp-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        @media (max-width: 600px) {
          .timeline-item {
            padding-left: 0;
            padding-top: 60px;
          }
          .timeline-node {
            left: 0;
            top: 0;
          }
          .timeline-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
