import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 sm:p-10 mix-blend-difference text-portfolio-light">
      <div className="flex items-center gap-8">
        <a href="#about" className="text-sm font-bold tracking-widest hover:text-portfolio-accent transition-colors uppercase">About</a>
        <a href="#projects" className="text-sm font-bold tracking-widest hover:text-portfolio-accent transition-colors uppercase">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
