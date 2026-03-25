import React from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 sm:px-10 flex flex-col justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[70vh] rounded-2xl overflow-hidden group cursor-pointer"
      >
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" 
          alt="WestJet Project"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-portfolio-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <button className="bg-portfolio-light text-portfolio-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300">
            View Project ↗
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6"
      >
        <div>
          <h2 className="text-5xl md:text-7xl text-portfolio-light tracking-tighter mix-blend-difference">WESTJET</h2>
          <p className="text-portfolio-light/60 mt-4 font-body max-w-lg text-lg">
            A comprehensive redesign and development of the WestJet booking experience, focusing on performance, conversion, and accessibility.
          </p>
        </div>
        <span className="text-portfolio-accent font-bold uppercase tracking-[0.2em] text-sm">Case Study</span>
      </motion.div>
    </section>
  );
};

export default ProjectShowcase;
