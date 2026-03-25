import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectTicker = ({ title = "WESTJET", className = "bg-portfolio-light text-portfolio-dark", textClassName = "" }) => {
  const tickerContainerRef = useRef(null);
  const tickerTextRef = useRef(null);

  useEffect(() => {
    // Clones the text so we have a seamless loop
    const tl = gsap.to(tickerTextRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 15,
      repeat: -1,
    });

    return () => tl.kill();
  }, [title]);

  // Repeat the text computationally natively avoiding massive static HTML chunks natively
  const repeatedText = Array(10).fill(title).join(' • ');

  return (
    <div 
      className={`w-full overflow-hidden py-4 flex select-none ${className}`}
      ref={tickerContainerRef}
    >
      <div ref={tickerTextRef} className="flex whitespace-nowrap text-6xl md:text-[10vw] font-heading tracking-tighter uppercase shrink-0 transform-gpu leading-[0.8]">
        {/* We double the content natively via Javascript strings to allow exactly -50% translation back to original coordinates flawlessly */}
        <div className="flex shrink-0">
           <span className={`px-4 ${textClassName}`}>{repeatedText}</span>
        </div>
        <div className="flex shrink-0 block">
           <span className={`px-4 ${textClassName}`}>{repeatedText}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectTicker;
