import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-accent text-portfolio-dark py-20 px-6 sm:px-10 h-screen flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-4 font-bold uppercase text-lg">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:hello@example.com" className="hover:text-white transition-colors">Mail</a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 group hover:text-white transition-colors uppercase font-bold"
        >
          <span className="text-xl group-hover:-translate-y-2 transition-transform duration-300">↑</span>
          Back to top
        </button>
      </div>

      <div className="mt-auto">
        <h2 className="text-[12vw] leading-none text-portfolio-dark break-words">
          LET'S TALK
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
