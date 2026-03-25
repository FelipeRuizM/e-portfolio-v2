import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-32 px-6 sm:px-10 relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 overflow-hidden">
      
      {/* 3D Head Placeholder */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 max-w-xl aspect-square border-2 border-portfolio-light/10 rounded-full flex items-center justify-center relative overflow-hidden group cursor-grab active:cursor-grabbing"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        <p className="text-portfolio-accent/50 text-xs font-bold uppercase tracking-[0.2em] text-center px-10 select-none">
          [ 3D Head Sequence / Photos Placeholder ]<br/><br/>
          (Drag to spin)
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <h2 className="text-[10vw] md:text-[8vw] leading-none mb-12 text-portfolio-light uppercase mix-blend-difference tracking-tighter">
          Develop
        </h2>
        <div className="font-body text-lg md:text-2xl text-portfolio-light/70 space-y-8 max-w-2xl leading-relaxed">
          <p>
            I'm a fullstack developer with a passion for building highly interactive, experimental web experiences that leave a lasting impression.
          </p>
          <p>
            I merge creative design with robust engineering, utilizing modern tools to push the boundaries of what's possible in the browser.
          </p>
        </div>
        
        <button className="mt-16 text-left text-portfolio-accent font-bold uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-6 group w-max border-none outline-none">
          <div className="w-16 h-[2px] bg-portfolio-accent group-hover:bg-white group-hover:w-24 transition-all duration-300"></div>
          Read my full story
        </button>
      </motion.div>

    </section>
  );
};

export default AboutSection;
