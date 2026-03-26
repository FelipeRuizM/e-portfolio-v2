import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import penguinGif from '../assets/images/penguin-hello.gif';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Wrapper to align children to the text's exact bounding box */}
      <div className="relative w-max h-full mx-auto flex flex-col justify-center">

        {/* Name Text */}
        <motion.h1
          initial={{ opacity: 0, y: 100, scaleX: 0.9, scaleY: 0.9 }}
          animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1.8 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ WebkitTextStroke: '0.4vw currentColor' }}
          className="text-[18vw] leading-[0.9] mb-[24vh] text-portfolio-light z-10 whitespace-nowrap pointer-events-none mix-blend-difference selection:bg-transparent tracking-wider"
        >
          FELIPE RUIZ
        </motion.h1>

        {/* Navigation Links accurately pinned to the left edge of 'F' */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-20 left-0 flex flex-col md:flex-row gap-2 md:gap-6 z-20"
        >
          <Link to="/about" className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-1 md:after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max">
            About
          </Link>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-1 md:after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max">
            Projects
          </button>
        </motion.div>

        {/* Info Block accurately pinned to the right edge of 'Z' */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-20 right-0 flex flex-col items-end z-20 text-right gap-0.5 md:gap-0"
        >
          <span className="text-portfolio-accent font-bold text-lg md:text-xl tracking-tight">
            <span className="md:hidden">Full Stack Dev</span>
            <span className="hidden md:inline">Full Stack Developer</span>
          </span>
          <span className="text-portfolio-light font-bold text-lg md:text-xl tracking-tight">
            <span className="md:hidden">Vancouver, CA</span>
            <span className="hidden md:inline">Vancouver, Canada</span>
          </span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator (Penguin) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-64 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
      >
        <img
          src={penguinGif}
          alt="Penguin waving hello"
          className="w-32 md:w-32 h-auto object-contain mix-blend-difference relative z-[10000]"
        />
        <motion.button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute top-[100%] mt-2 flex justify-center pointer-events-auto cursor-pointer p-4"
        >
          <span className="text-portfolio-light font-bold text-3xl rotate-90 block">
            {'>'}
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
