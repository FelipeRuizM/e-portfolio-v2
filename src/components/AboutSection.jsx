import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // FULLSTACK goes right to left
  const xTransformFullstack = useTransform(scrollYProgress, [0, 1], ["67%", "-80%"]);
  // DEVELOPER goes left to right
  const xTransformDeveloper = useTransform(scrollYProgress, [0, 1], ["-45%", "67%"]);

  // Head Spin (Spins dynamically based on overall scroll velocity)
  const rotateHead = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-portfolio-dark">
      
      {/* Top Parallax Typography Section */}
      <section className="w-full pt-[43vh] pb-[15vh] flex flex-col gap-6 z-0 select-none overflow-hidden">
        <motion.h2 
          style={{ x: xTransformFullstack }}
          className="text-[22vw] leading-[0.8] text-portfolio-light tracking-normal whitespace-nowrap mix-blend-difference"
        >
          FULLSTACK
        </motion.h2>
        <motion.h2 
          style={{ x: xTransformDeveloper }}
          className="text-[22vw] leading-[0.8] text-portfolio-accent tracking-normal whitespace-nowrap mix-blend-difference"
        >
          DEVELOPER
        </motion.h2>
      </section>

      {/* Story Section */}
      <section className="relative w-full px-6 sm:px-10 pb-40 flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-24 z-10 max-w-7xl mx-auto">
        
        {/* Text Content (Left) */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-portfolio-light font-body text-xl md:text-3xl leading-relaxed font-bold pl-6 md:pl-10">
          <p>
            Hi, my name is Felipe Ruiz and I'm a Full-Stack Developer. My love for programming started back in 2019 when I watched some Python tutorials on YouTube, and I immediately became obsessed with all the possibilities available. It was so much fun solving problems by not only completing them but also trying to do it in the cleverest way possible, striving for excellence.
          </p>
          <p>
            This passion for coding has not only shaped my career but has also become my personal ikigai. I look forward to pushing the boundaries of what's possible in software development, collaborating with like-minded individuals, and contributing to innovative projects that make a difference in the world. Whether it's crafting elegant algorithms, building user-friendly interfaces, or architecting robust backend systems, I am committed to giving my best in every aspect of my work.
          </p>
          <p>
            Lately, I've been involved with a handful of technologies:
          </p>
          {/* <p>
            In iaculis mauris sed elit pellentesque, eget fermentum tortor condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <p>
            Duis sagittis nisi mi, eget mattis sem semper quis. Integer lobortis nisi diam, quis commodo nisi gravida pellentesque. Praesent maximus justo massa, ut pretium felis varius pretium.
          </p> */}
        </div>

        {/* 3D Head Container (Right - Sticky) */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <motion.div 
            style={{ rotate: rotateHead }}
            className="sticky top-[30vh] w-full max-w-xs mx-auto aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {/* Minimal Head Placeholder without glassmorphism overlay */}
            <div className="absolute inset-0 bg-portfolio-accent/5 rounded-full blur-2xl"></div>
            <p className="text-portfolio-accent text-lg font-bold uppercase tracking-widest text-center select-none z-10 border border-portfolio-accent/40 p-12 rounded-full">
              [ Spinning<br/>3D Head ]
            </p>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default AboutSection;
