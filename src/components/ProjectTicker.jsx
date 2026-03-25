import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectTicker = () => {
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
  }, []);

  return (
    <div 
      className="w-full overflow-hidden bg-portfolio-light text-portfolio-dark py-4 flex select-none"
      ref={tickerContainerRef}
    >
      <div ref={tickerTextRef} className="flex whitespace-nowrap text-6xl md:text-8xl font-heading tracking-tighter uppercase shrink-0 transform-gpu">
        {/* We double the content to allow -50% translation back to 0 */}
        <div className="flex shrink-0">
          {[...Array(6)].map((_, i) => (
            <span key={`ticker-1-${i}`} className="mx-8 font-bold">WESTJET</span>
          ))}
        </div>
        <div className="flex shrink-0 block">
          {[...Array(6)].map((_, i) => (
            <span key={`ticker-2-${i}`} className="mx-8 font-bold">WESTJET</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTicker;
