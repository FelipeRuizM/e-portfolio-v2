import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Map the scroll progress from the container (0 to 1) 
  // to an X-axis CSS translation
  const xTransform = useTransform(scrollYProgress, [0, 1], ["-10%", "67%"]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-portfolio-accent text-portfolio-dark py-10 px-6 sm:px-10 h-[60vh] flex flex-col justify-between overflow-hidden">
      <div className="flex items-start justify-between relative z-10 w-full">
        <div className="flex flex-col gap-4 font-bold text-lg">
          <a href="https://www.linkedin.com/in/felipe-ruiz0011/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/FelipeRuizM" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:felipe.ruiz0011@gmail.com" className="hover:text-white transition-colors">Mail</a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 group hover:text-white transition-colors uppercase font-bold"
        >
          <span className="text-xl group-hover:-translate-y-2 transition-transform duration-300">↑</span>
          Back to top
        </button>
      </div>

      {/* The animated moving text block */}
      <div className="mt-auto -mx-10 flex cursor-default select-none pointer-events-none">
        <motion.h2 
          style={{ x: xTransform }}
          className="text-[15vw] leading-[0.8] text-portfolio-dark tracking-normal whitespace-nowrap"
        >
          LET'S TALK
        </motion.h2>
      </div>
    </footer>
  );
};

export default Footer;
