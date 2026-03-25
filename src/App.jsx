import React from 'react';

import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectTicker from './components/ProjectTicker';
import TransitionSection from './components/TransitionSection';
import AboutSection from './components/AboutSection';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-portfolio-accent selection:text-portfolio-dark">
      <CustomCursor />
      <div className="grain-overlay"></div>
    
      <main>
        <HeroSection />
        <ProjectShowcase />
        <ProjectTicker />
        <TransitionSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
