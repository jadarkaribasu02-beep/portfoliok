import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioConfig';
import confetti from 'canvas-confetti';
import { InstagramIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

export const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="section-subtitle">
            Reach out directly via Call, Instagram, WhatsApp, or send a quick message below!
          </p>
        </div>

        {/* Quick Action Strip for Instant Direct Contact */}
        <div className="quick-action-strip glass-card">
          <a 
            href={`tel:${portfolioConfig.contact.phone}`} 
            className="action-strip-item phone-strip"
          >
            <Phone size={24} />
            <div>
              <span className="strip-title">Direct Call</span>
              <span className="strip-val">{portfolioConfig.contact.formattedPhone}</span>
            </div>
          </a>

          <a 
            href={portfolioConfig.contact.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-strip-item insta-strip"
          >
            <InstagramIcon size={24} />
            <div>
              <span className="strip-title">Instagram DM</span>
              <span className="strip-val">@{portfolioConfig.contact.instagram}</span>
            </div>
          </a>

          <a 
            href={`https://wa.me/${portfolioConfig.contact.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-strip-item wa-strip"
          >
            <MessageSquare size={24} />
            <div>
              <span className="strip-title">WhatsApp Chat</span>
              <span className="strip-val">+91 7259738091</span>
            </div>
          </a>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards with One-Click Copy */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <h3>Contact Details</h3>
              <p>Feel free to connect for freelance projects, collaborations, or tech discussions.</p>

              <div className="info-list">
                {/* Phone */}
                <div className="info-item">
                  <div className="info-icon phone-icon-box">
                    <Phone size={18} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Phone Number</span>
                    <a href={`tel:${portfolioConfig.contact.phone}`} className="info-value">
                      {portfolioConfig.contact.formattedPhone}
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopy(portfolioConfig.contact.phone, 'phone')} 
                    className="copy-btn"
                    title="Copy Phone"
                  >
                    {copiedItem === 'phone' ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Instagram */}
                <div className="info-item">
                  <div className="info-icon insta-icon-box">
                    <InstagramIcon size={18} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Instagram Handle</span>
                    <a 
                      href={portfolioConfig.contact.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="info-value"
                    >
                      @{portfolioConfig.contact.instagram}
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopy(portfolioConfig.contact.instagram, 'insta')} 
                    className="copy-btn"
                    title="Copy Instagram Username"
                  >
                    {copiedItem === 'insta' ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Email */}
                <div className="info-item">
                  <div className="info-icon email-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Email Address</span>
                    <a href={`mailto:${portfolioConfig.contact.email}`} className="info-value">
                      {portfolioConfig.contact.email}
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopy(portfolioConfig.contact.email, 'email')} 
                    className="copy-btn"
                    title="Copy Email"
                  >
                    {copiedItem === 'email' ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location */}
                <div className="info-item">
                  <div className="info-icon loc-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Location</span>
                    <span className="info-value-static">{portfolioConfig.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <Check size={40} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out, {formState.name}! Karibasu will get back to you shortly.</p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send a Direct Message</h3>

                  <div className="input-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label>Your Email / Phone</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. john@example.com or phone number"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label>Your Message</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Tell me about your project or inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    <span>Send Message Now</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quick-action-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .quick-action-strip {
            grid-template-columns: 1fr;
          }
        }

        .action-strip-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          padding: 1rem 1.25rem;
          border-radius: 0.85rem;
          transition: all 0.25s ease;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
        }

        .phone-strip { color: #10b981; }
        .phone-strip:hover { background: rgba(16, 185, 129, 0.15); border-color: #10b981; }

        .insta-strip { color: #ec4899; }
        .insta-strip:hover { background: rgba(236, 72, 153, 0.15); border-color: #ec4899; }

        .wa-strip { color: #22c55e; }
        .wa-strip:hover { background: rgba(34, 197, 94, 0.15); border-color: #22c55e; }

        .strip-title {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .strip-val {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .info-card, .form-card {
          padding: 2.25rem;
          height: 100%;
        }

        .info-card h3, .form-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .info-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border-radius: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
        }

        .info-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .phone-icon-box { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .insta-icon-box { background: rgba(236, 72, 153, 0.15); color: #ec4899; }
        .email-icon-box { background: rgba(99, 102, 241, 0.15); color: #6366f1; }
        .loc-icon-box { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }

        .info-text {
          flex: 1;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .info-value {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
        }

        .info-value:hover {
          color: var(--accent-primary);
        }

        .info-value-static {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .copy-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.4rem;
          transition: color 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--text-primary);
        }

        /* Form Controls */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .input-group input, .input-group textarea {
          width: 100%;
          padding: 0.85rem 1.15rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .input-group input:focus, .input-group textarea:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
        }

        .form-success-state {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon-box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #10b981;
        }
      `}</style>
    </section>
  );
};
