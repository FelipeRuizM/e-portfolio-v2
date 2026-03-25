import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

// Duplicate projects to create the "endless" illusion without trapping
const infiniteProjects = [...projects];

const ProjectShowcase = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Moves the inner track horizontally mapped exactly to the user's vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // -75% securely traverses the duplicated array width natively

  return (
    // The container height determines how long the pinning lasts. 
    // 400vh gives the user a generous native scroll distance to scrub through the horizontal cards.
    <section ref={containerRef} id="projects" className="relative h-[400vh] bg-portfolio-dark z-10">

      {/* Sticky boundary that locks to the screen while the user scrolls through the 400vh track */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* The horizontal moving track mapped to ScrollYProgress */}
        <motion.div style={{ x }} className="flex flex-nowrap gap-10 md:gap-20 px-10 md:px-32 h-max">

          {/* Introductory Title Block as the very first item in the row */}
          <div className="w-[80vw] md:w-[40vw] flex flex-col justify-center shrink-0">
            <h2 className="text-[15vw] md:text-[10vw] leading-[0.9] text-portfolio-light tracking-tight mix-blend-difference mb-6">
              SELECTED<br />WORK
            </h2>
            <p className="text-portfolio-light/70 font-body text-xl md:text-2xl max-w-sm font-bold">
              Keep scrolling downwards to explore the project archive.
            </p>
          </div>

          {/* Project Cards Map logically wrapped inside Route Navigation */}
          {infiniteProjects.map((project, idx) => (
            <Link
              to={`/project/${project.id}`}
              key={idx}
              className="relative w-[90vw] md:w-[85vw] h-[60vh] md:h-[70vh] shrink-0 group cursor-pointer overflow-hidden rounded-2xl border border-portfolio-light/10 block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-[0.69]"
              />

              {/* Dark Content Overlay triggered on mouse over */}
              <div className="absolute inset-0 bg-portfolio-dark/60 flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none text-left">
                <span className="text-portfolio-accent font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-4xl md:text-6xl text-portfolio-light font-heading tracking-normal uppercase m-0">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}

        </motion.div>
      </div>

    </section>
  );
};

export default ProjectShowcase;
