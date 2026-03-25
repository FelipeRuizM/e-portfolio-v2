import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ rightLinks }) => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between p-6 sm:p-10 pointer-events-auto mix-blend-difference">
      
      {/* Universal Geometric Logo Container (Left) */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-portfolio-light font-heading text-2xl md:text-3xl tracking-widest hover:text-portfolio-accent transition-colors">
          F/R
        </Link>
        <span className="hidden md:block text-portfolio-accent font-bold tracking-tight text-sm uppercase">
          Full Stack Developer
        </span>
      </div>
      
      {/* Parameterized Navigation Targets (Right) */}
      <div className="flex items-center gap-6 md:gap-10">
        {rightLinks}
      </div>
      
    </nav>
  );
};

export default Navbar;
