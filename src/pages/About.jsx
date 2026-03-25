import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <main className="relative">
        <Navbar 
          rightLinks={
            <>
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
            </>
          }
        />

        {/* Core Content */}
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
