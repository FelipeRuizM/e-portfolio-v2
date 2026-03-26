import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
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
      {/* Standardized Abstracted Navbar Layout */}
      <Navbar 
        rightLinks={
          <>
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
          </>
        }
      />

      {/* Repeating Dual Ticker Layout */}
      <div className="absolute top-10 left-0 w-[120vw] h-[60vh] -ml-[10vw] flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none">
         
         {/* Background Ticker (Outline, Tilted Down-Right, Moving Right) */}
         <div className="w-full rotate-[4deg] absolute opacity-50 z-0">
           <ProjectTicker 
              title={project.title} 
              className="bg-transparent" 
              textClassName="text-transparent [-webkit-text-stroke:1px_#EDEDE8] md:[-webkit-text-stroke:1px_#EDEDE8]"
              direction={1}
              duration={70}
           />
         </div>

         {/* Foreground Ticker (Solid, Tilted Up-Right, Moving Left) */}
         <div className="w-full -rotate-[4deg] absolute mt-10 z-10">
           <ProjectTicker 
              title={project.title} 
              className="bg-transparent" 
              textClassName="text-portfolio-light"
              direction={-1}
              duration={70}
           />
         </div>

      </div>

      {/* Consistent Native Hero Graphic Structure */}
      <div className="w-full h-[60vh] md:h-[80vh] relative z-[10000] mt-[40vh] md:mt-[50vh]">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover shadow-2xl relative z-[10000]"
        />
        {/* 20% Black Filter Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-[10001]"></div>
      </div>

      <div className="py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full z-10 flex flex-col text-left">
         <h1 className="text-5xl md:text-8xl font-heading text-portfolio-light tracking-tighter uppercase">{project.title}</h1>
         <p className="text-portfolio-accent font-bold uppercase tracking-[0.2em] mt-4">{project.category}</p>
         
         {/* EXPLICIT INJECTION BOUNDARY: The individual layout data drops in cleanly here natively granting ultimate unchained UI freedom per-page. */}
         <div className="mt-16 w-full flex flex-col gap-12">
            {children}
         </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ProjectLayout;
