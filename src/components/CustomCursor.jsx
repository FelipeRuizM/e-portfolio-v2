import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the main liquid blob (heavy and smooth)
  const springConfigMain = { damping: 20, stiffness: 100, mass: 1 };
  const cursorXSpring = useSpring(cursorX, springConfigMain);
  const cursorYSpring = useSpring(cursorY, springConfigMain);



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
      {/* Singular Massive Liquid Blob Lens */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] bg-portfolio-accent mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          borderRadius: [blobShape1, blobShape2, blobShape3, blobShape1],
          rotate: [0, 180, 360],
          width: isHovering ? 300 : 150,
          height: isHovering ? 300 : 150,
          marginLeft: isHovering ? -150 : -75,
          marginTop: isHovering ? -150 : -75,
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 8, ease: "linear" },
          borderRadius: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          width: { duration: 0.4 },
          height: { duration: 0.4 },
          marginLeft: { duration: 0.4 },
          marginTop: { duration: 0.4 }
        }}
      />
    </>
  );
};

export default CustomCursor;
