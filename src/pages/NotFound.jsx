import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-portfolio-accent overflow-hidden relative z-50">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[40vw] leading-none tracking-tighter text-portfolio-dark select-none"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl md:text-3xl font-bold tracking-[0.05em] text-portfolio-dark mb-10"
      >
        Where are you trying to go?
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/" className="text-portfolio-dark font-bold text-lg md:text-xl tracking-tight relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-portfolio-dark after:transition-all after:duration-300 w-max">
          Return to Base
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
