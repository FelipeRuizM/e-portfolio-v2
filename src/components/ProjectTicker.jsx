import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScroll, useVelocity, useSpring, useMotionValueEvent } from 'framer-motion';

const ProjectTicker = ({ title = "WESTJET", className = "bg-portfolio-light text-portfolio-dark", textClassName = "", direction = -1, duration = 30 }) => {
  const tickerContainerRef = useRef(null);
  const tickerTextRef = useRef(null);
  const tlRef = useRef(null);

  // Extract global window scroll velocity dynamically
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  useEffect(() => {
    // Map initial offsets mathematically so reversing the GSAP slide remains infinitely perfectly bounded over the cloned array length natively
    if (direction === 1) {
      gsap.set(tickerTextRef.current, { xPercent: -50 });
      tlRef.current = gsap.to(tickerTextRef.current, {
        xPercent: 0,
        ease: 'none',
        duration: duration,
        repeat: -1,
      });
    } else {
      gsap.set(tickerTextRef.current, { xPercent: 0 });
      tlRef.current = gsap.to(tickerTextRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: duration,
        repeat: -1,
      });
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [title, direction, duration]);

  // Fluidly mutate the GSAP timeScale multiplier relative to absolute scroll speed natively
  useMotionValueEvent(smoothVelocity, "change", (latest) => {
    if (tlRef.current) {
      // Baseline speed is 1x. Ramp up proportionally to scroll velocity, maxing out at a 5x speed ceiling to prevent visual tearing
      const speedModifier = 1 + Math.min(Math.abs(latest) / 500, 5);
      tlRef.current.timeScale(speedModifier);
    }
  });

  return (
    <div 
      className={`w-full overflow-hidden py-4 flex select-none ${className}`}
      ref={tickerContainerRef}
    >
      <div ref={tickerTextRef} className="flex whitespace-nowrap text-6xl md:text-[10vw] font-heading tracking-tighter uppercase shrink-0 transform-gpu leading-[0.8]">
        {/* We double the content natively via Javascript mapping to allow exactly -50% translation back to original coordinates flawlessly */}
        <div className="flex shrink-0">
          {[...Array(10)].map((_, i) => (
             <span key={`ticker-1-${i}`} className={`pr-12 md:pr-24 ${textClassName}`}>{title}</span>
          ))}
        </div>
        <div className="flex shrink-0 block">
          {[...Array(10)].map((_, i) => (
             <span key={`ticker-2-${i}`} className={`pr-12 md:pr-24 ${textClassName}`}>{title}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTicker;
