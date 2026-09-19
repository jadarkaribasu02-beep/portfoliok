import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { 
  Cpu, 
  Layout, 
  Server, 
  GitBranch, 
  Terminal, 
  CheckCircle 
} from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend Development', icon: <Layout size={18} /> },
    { id: 'backend', label: 'Backend & Algorithms', icon: <Server size={18} /> },
    { id: 'toolsAndCloud', label: 'Tools & Ecosystem', icon: <GitBranch size={18} /> },
  ];

  const currentSkills = portfolioConfig.skills[activeTab] || [];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} /> Skills & Expertise
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subtitle">
            A breakdown of technologies, frameworks, and core engineering concepts Karibasu works with daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`skill-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {currentSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-info">
                <div className="skill-name-badge">
                  <CheckCircle size={16} className="text-emerald" />
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              {/* Progress Bar Meter */}
              <div className="skill-bar-container">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-tabs-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .skill-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .skill-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }

        .skill-tab-btn.active {
          background: var(--gradient-primary);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .skill-card {
          padding: 1.5rem 1.75rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
        }

        .skill-name-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .skill-name {
          font-weight: 700;
          font-size: 1.05rem;
        }

        .skill-percentage {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .skill-bar-container {
          width: 100%;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 9999px;
          background: var(--gradient-primary);
          transition: width 0.8s ease-in-out;
        }

        .text-emerald {
          color: #10b981;
        }
      `}</style>
    </section>
  );
};
