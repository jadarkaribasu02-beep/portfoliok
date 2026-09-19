import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  Code2, 
  Sparkles 
} from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Java', 'Full Stack', 'Web Apps', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? portfolioConfig.projects 
    : portfolioConfig.projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> Portfolio & Code
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore Karibasu's real repositories, Java problem-solving suites, and full-stack web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-category-badge">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary btn-sm"
                    >
                      <GithubIcon size={16} /> Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos Teaser */}
        <div className="github-teaser-box glass-card">
          <div className="teaser-content">
            <GithubIcon size={32} className="text-accent" />
            <div>
              <h3>Explore More Repositories on GitHub</h3>
              <p>Check out @jadarkaribasu02-beep for full source code history, stars, and algorithmic commits.</p>
            </div>
          </div>
          <a 
            href={portfolioConfig.contact.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .filter-pills {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .filter-btn.active {
          background: var(--accent-primary);
          color: #ffffff;
          border-color: var(--accent-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.25rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.06);
        }

        .project-category-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(99, 102, 241, 0.9);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          backdrop-filter: blur(8px);
        }

        .project-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-actions {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .btn-sm {
          padding: 0.55rem 1.15rem;
          font-size: 0.85rem;
        }

        .github-teaser-box {
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .teaser-content {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .text-accent {
          color: var(--accent-primary);
        }

        .teaser-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .teaser-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};
