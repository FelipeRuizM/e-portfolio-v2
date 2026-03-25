import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <main className="relative">
        {/* Custom Absolute Navbar specifically for About Page */}
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between p-6 sm:p-10 pointer-events-auto">
          
          {/* Logo (F/R) */}
          <Link to="/" className="text-portfolio-light font-heading text-2xl md:text-3xl tracking-widest hover:text-portfolio-accent transition-colors mix-blend-difference">
            F/R
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link to="/" className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max">
              Home
            </Link>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max"
            >
              Projects
            </Link>
          </div>

        </nav>

        {/* Core Content */}
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
