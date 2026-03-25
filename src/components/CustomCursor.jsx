import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the main liquid blob (heavy and smooth)
  const springConfigMain = { damping: 20, stiffness: 100, mass: 1 };
  const cursorXSpring = useSpring(cursorX, springConfigMain);
  const cursorYSpring = useSpring(cursorY, springConfigMain);

  // Spring config for a trailing drop
  const springConfigTrail = { damping: 15, stiffness: 50, mass: 1.5 };
  const trailXSpring = useSpring(cursorX, springConfigTrail);
  const trailYSpring = useSpring(cursorY, springConfigTrail);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Liquid morphing paths for border-radius
  // These create an organic dripping/wobbling liquid shape
  const blobShape1 = "60% 40% 30% 70% / 60% 30% 70% 40%";
  const blobShape2 = "30% 70% 70% 30% / 30% 30% 70% 70%";
  const blobShape3 = "50% 50% 20% 80% / 25% 80% 20% 75%";

  return (
    <>
      {/* Main Liquid Blob */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] bg-portfolio-accent/30 backdrop-blur-md border-[0.5px] border-portfolio-accent/40 shadow-[0_0_40px_rgba(255,0,255,0.4)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          borderRadius: [blobShape1, blobShape2, blobShape3, blobShape1],
          rotate: [0, 180, 360],
          width: isHovering ? 120 : 64,
          height: isHovering ? 120 : 64,
          marginLeft: isHovering ? -60 : -32,
          marginTop: isHovering ? -60 : -32,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 8, ease: "linear" },
          borderRadius: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          marginLeft: { duration: 0.3 },
          marginTop: { duration: 0.3 }
        }}
      />

      {/* Trailing Liquid Drop */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] bg-portfolio-accent/50 backdrop-blur-lg shadow-[0_0_20px_rgba(255,0,255,0.2)]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
        animate={{
          borderRadius: [blobShape2, blobShape3, blobShape1, blobShape2],
          rotate: [360, 180, 0],
          width: isHovering ? 0 : 32,
          height: isHovering ? 0 : 32,
          marginLeft: isHovering ? 0 : -16,
          marginTop: isHovering ? 0 : -16,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 6, ease: "linear" },
          borderRadius: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          marginLeft: { duration: 0.3 },
          marginTop: { duration: 0.3 }
        }}
      />
    </>
  );
};

export default CustomCursor;
