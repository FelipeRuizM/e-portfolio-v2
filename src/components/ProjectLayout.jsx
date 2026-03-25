import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectTicker from './ProjectTicker';
import Footer from './Footer';

const ProjectLayout = ({ project, children }) => {
  // Ensure every case study automatically spawns at the top of the viewport
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="min-h-screen bg-portfolio-dark text-portfolio-light flex items-center justify-center font-heading text-4xl">Project Not Found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-portfolio-dark min-h-screen relative flex flex-col pt-32 w-full overflow-x-hidden"
    >
      {/* Absolute Navbar mapped to global architectural conventions */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between p-6 sm:p-10 pointer-events-auto mix-blend-difference">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-portfolio-light font-heading text-2xl md:text-3xl tracking-widest hover:text-portfolio-accent transition-colors">
            F/R
          </Link>
          <span className="hidden md:block text-portfolio-accent font-bold tracking-tight text-sm uppercase">Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/about" className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max">
            About
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

      {/* Repeating String Layout Ticker */}
      <div className="w-[110vw] -rotate-3 -ml-[5vw] translate-y-20 relative z-0 opacity-80 mix-blend-difference pointer-events-none self-center">
         <ProjectTicker 
            title={project.title} 
            className="bg-transparent" 
            textClassName="text-portfolio-light/20 [-webkit-text-stroke:2px_#EDEDE8]" 
         />
      </div>

      {/* Consistent Native Hero Graphic Structure */}
      <div className="w-full h-[60vh] md:h-[80vh] px-6 md:px-20 relative z-10 mt-10 max-w-[120rem] mx-auto">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale rounded-3xl opacity-90 shadow-2xl"
        />
      </div>

      <div className="py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full z-10 flex flex-col text-left">
         <h1 className="text-5xl md:text-8xl font-heading text-portfolio-light tracking-tighter uppercase">{project.title}</h1>
         <p className="text-portfolio-accent font-bold uppercase tracking-[0.2em] mt-4">{project.category}</p>
         
         {/* EXPLICIT INJECTION BOUNDARY: The individual layout data drops in cleanly here natively granting ultimate unchained UI freedom per-page. */}
         <div className="mt-16 w-full flex flex-col gap-12">
            {children}
         </div>
         
         {/* Return Link Mechanism */}
         <Link to="/" className="mt-24 text-left text-portfolio-accent font-bold uppercase tracking-[0.2em] hover:text-portfolio-light transition-colors flex items-center gap-6 group w-max border-none outline-none">
            <div className="w-16 h-[2px] bg-portfolio-accent group-hover:bg-portfolio-light group-hover:w-24 transition-all duration-300"></div>
            Return to Index
         </Link>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ProjectLayout;
