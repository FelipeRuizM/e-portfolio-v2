import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ppImage from '../assets/images/pp.jpeg';

// Scroll-driven word-by-word reveal component
const RevealParagraph = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"]
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className="flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <RevealWord key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
};

const RevealWord = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
};

// Reusable Bento Grid Cell with liquid fill hover
// size: 'large' (2x2), 'wide' (2-col), or default (1x1)
const BentoCell = ({ name, category, size }) => {
  const sizeClasses = size === 'large'
    ? 'col-span-2 row-span-2 p-8'
    : size === 'wide'
      ? 'col-span-2 p-6'
      : 'p-6';

  const textSize = size === 'large'
    ? 'text-5xl md:text-7xl'
    : size === 'wide'
      ? 'text-3xl md:text-5xl'
      : 'text-3xl md:text-4xl';

  return (
    <div className={`${sizeClasses} group relative border border-portfolio-light/15 rounded-2xl flex flex-col justify-between bg-portfolio-light/[0.02] overflow-hidden`}>
      <div className="absolute inset-0 bg-portfolio-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] rounded-2xl"></div>
      <span className="relative z-10 text-portfolio-accent group-hover:text-portfolio-dark font-bold uppercase tracking-[0.2em] text-xs transition-colors duration-500">{category}</span>
      <span className={`relative z-10 ${textSize} font-heading text-portfolio-light group-hover:text-portfolio-dark tracking-tight transition-colors duration-500`}>{name}</span>
    </div>
  );
};

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
  const rotateHead = useTransform(scrollYProgress, [0, 1], [35, -20]);

  return (
    <div ref={containerRef} className="w-full flex flex-col bg-portfolio-dark">

      {/* Top Parallax Typography Section */}
      <section className="w-full pt-[43vh] pb-[15vh] flex flex-col gap-6 z-0 select-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: '30vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            style={{ x: xTransformFullstack }}
            className="text-[22vw] leading-[0.8] text-portfolio-light tracking-normal whitespace-nowrap mix-blend-difference"
          >
            FULLSTACK
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '-30vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <motion.h2
            style={{ x: xTransformDeveloper }}
            className="text-[22vw] leading-[0.8] text-portfolio-accent tracking-normal whitespace-nowrap mix-blend-difference"
          >
            DEVELOPER
          </motion.h2>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative w-full px-6 sm:px-10 pb-40 flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-24 z-10 max-w-7xl mx-auto">

        {/* Text Content (Left) */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-portfolio-light font-body text-xl md:text-3xl leading-relaxed font-bold pl-6 md:pl-10">
          <RevealParagraph text="Hey, I'm Felipe and this is a glimpse of my journey. My love for developing started back in 2019 when I watched some Python tutorials on YouTube, and I immediately became obsessed with all the possibilities available. It was so much fun solving problems by not only completing them but also trying to do it in the cleverest way possible." />
          <RevealParagraph text="When I'm not coding, I enjoy playing games with my friends, going to the gym, and planes! I've worked at the YYJ airport for almost 2 years and I'm fascinated by the aviation industry." />
        </div>

        {/* 3D Head Container (Right - Sticky) */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <motion.div
            style={{ rotate: rotateHead }}
            className="sticky top-[30vh] w-full max-w-xs mx-auto aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-portfolio-accent/5 rounded-full blur-2xl"></div>
            <img
              src={ppImage}
              alt="Felipe Ruiz"
              className="w-full h-full object-cover rounded-xl relative z-10"
            />
          </motion.div>
        </div>

      </section>

      {/* Tech Stack Bento Grid */}
      <section className="relative w-full px-6 sm:px-10 pb-40 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(140px,1fr)] gap-3 md:gap-4">
          <BentoCell name="Node.js" category="Backend" size="large" />
          <BentoCell name="React" category="Frontend" />
          <BentoCell name="Tailwind CSS" category="Styling" />
          <BentoCell name="Express" category="API" />
          <BentoCell name="MySQL" category="Database" />
          <BentoCell name="Python" category="Backend" size="wide" />
          <BentoCell name="Java" category="Language" />
          <BentoCell name="AWS" category="Cloud" />
        </div>
      </section>

    </div>
  );
};

export default AboutSection;
