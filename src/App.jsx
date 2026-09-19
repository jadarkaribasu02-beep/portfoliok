import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-main-wrapper">
      {/* Custom Animated Pointer/Cursor */}
      <CustomCursor />

      {/* Interactive HTML5 Canvas Particles */}
      <ParticleCanvas theme={theme} />

      {/* Ambient Radial Background Glows */}
      <div className="bg-ambient-light">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
      </div>

      {/* Navigation Header */}
      <Navbar 
        activeTheme={theme} 
        setTheme={setTheme} 
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
        />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
