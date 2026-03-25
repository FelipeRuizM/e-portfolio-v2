import React from 'react';
import { motion } from 'framer-motion';
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
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 left-0 flex flex-row gap-6 z-20"
        >
          <a href="#about" className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max">
            About
          </a>
          <a href="#projects" className="text-portfolio-accent font-bold font-body text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-portfolio-accent after:transition-all after:duration-300 w-max">
            Projects
          </a>
        </motion.div>

        {/* Info Block accurately pinned to the right edge of 'Z' */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 right-0 flex flex-col items-start z-20"
        >
          <span className="text-portfolio-accent font-bold text-lg md:text-xl tracking-tight">Full Stack Developer</span>
          <span className="text-portfolio-light font-bold text-lg md:text-xl tracking-tight self-end">Vancouver, Canada</span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator (Penguin) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
      >
        <img
          src={penguinGif}
          alt="Penguin waving hello"
          className="w-24 md:w-32 h-auto object-contain mix-blend-difference"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute top-[100%] mt-2 flex justify-center pointer-events-none"
        >
          <span className="text-portfolio-light font-bold text-3xl rotate-90 block">
            {'>'}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
