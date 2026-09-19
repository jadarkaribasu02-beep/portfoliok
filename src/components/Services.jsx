import React from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import { 
  Wrench, 
  Code, 
  Cpu, 
  BookOpen, 
  Database, 
  ArrowUpRight 
} from 'lucide-react';

export const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={28} />;
      case 'Cpu': return <Cpu size={28} />;
      case 'BookOpen': return <BookOpen size={28} />;
      case 'Database': return <Database size={28} />;
      default: return <Wrench size={28} />;
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} /> What I Offer
          </span>
          <h2 className="section-title">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Providing end-to-end software development services from responsive frontend interfaces to Notes Hub curation and database structures.
          </p>
        </div>

        <div className="services-grid">
          {portfolioConfig.services.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-icon-box">
                {getIcon(service.icon)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <a href="#contact" className="service-link">
                <span>Discuss Project</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .service-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 1rem;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid var(--border-glow);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .service-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .service-card:hover .service-link {
          gap: 0.7rem;
        }
      `}</style>
    </section>
  );
};
