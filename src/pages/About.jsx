import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <main className="relative">
      <div className="absolute top-10 left-6 sm:left-10 z-50">
        <Link to="/" className="text-portfolio-accent font-bold tracking-[0.2em] relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max uppercase">
          ← Back Home
        </Link>
      </div>
      <AboutSection />
    </main>
  );
};

export default About;
