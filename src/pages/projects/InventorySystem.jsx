import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';

import agileImg from '../../assets/images/agile.png';
import camosunImg from '../../assets/images/camosun.png';
import diagramImg from '../../assets/images/diagram.png';
import demoVideo from '../../assets/videos/inventory-demo-fast.mp4';

const data = projects.find(p => p.id === 'inventory-system');

const SectionHeader = ({ title, num }) => (
  <div className="flex items-baseline gap-4 mb-8 md:mb-12">
    <span className="text-4xl md:text-5xl font-heading text-portfolio-accent">{num}</span>
    <h3 className="text-4xl md:text-6xl font-heading text-portfolio-light uppercase tracking-tight">{title}</h3>
  </div>
);

const InventorySystem = () => {
  return (
    <ProjectLayout project={data}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-24 md:py-40 flex flex-col gap-32 md:gap-48 relative z-10 mix-blend-difference">

        {/* 1. The TL;DR Wireframe Grid */}
        <section className="flex flex-col gap-12 border-t border-b border-portfolio-light/20 py-16">
          <SectionHeader title="The TL;DR" num="01" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 font-body">
            <div className="md:col-span-3 text-2xl md:text-4xl leading-tight font-bold text-portfolio-light w-full md:w-3/4">
              A full-stack web application built in three months for Camosun College to manage thousands of electronic lab items.
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-portfolio-accent font-bold uppercase tracking-widest text-sm">My Role</span>
              <span className="text-portfolio-light/80 text-lg">Lead Database & API Developer (Team Elex Sapphire).</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-portfolio-accent font-bold uppercase tracking-widest text-sm">The Stack</span>
              <span className="text-portfolio-light/80 text-lg">React, Node.js, Express.js, MySQL, Sequelize.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-portfolio-accent font-bold uppercase tracking-widest text-sm">The Impact</span>
              <span className="text-portfolio-light/80 text-lg">Eliminated wasted trips to the lab for students and streamlined inventory tracking for lab assistants.</span>
            </div>
          </div>
        </section>

        {/* 2 & 3. Problem & Solution Bento Box */}
        <section className="flex flex-col gap-12">
          <SectionHeader title="The Problem & Solution" num="02" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Context Block */}
            <div className="flex flex-col gap-8 text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
              <p>
                <strong className="text-portfolio-light text-2xl font-bold font-heading uppercase tracking-wide block mb-4">The Problem</strong> 
                Camosun College lab assistants faced a massive organizational hurdle: keeping track of thousands of electronic components and equipment. Students had to physically walk to the labs just to ask if a piece of equipment was available. The manual process desperately needed a digital overhaul.
              </p>
              <img src={camosunImg} alt="Camosun College" className="w-full h-auto object-contain mt-4 grayscale hover:grayscale-0 transition-all duration-500 rounded-xl bg-portfolio-light/5" />
            </div>

            {/* Solution Block */}
            <div className="flex flex-col gap-8 text-portfolio-light/80 text-lg md:text-xl leading-relaxed lg:mt-32">
              <p>
                <strong className="text-portfolio-light text-2xl font-bold font-heading uppercase tracking-wide block mb-4">The Solution</strong> 
                Our three-person team built a custom, centralized Inventory System using a React frontend and a Node.js/Express.js API hooked up to MySQL.
              </p>
              <p>
                I took ownership of the backend architecture. To hit our strict three-month deadline, we utilized Agile methodologies heavily (daily stand-ups, bi-weekly syncing). We engineered strict role-based access control, giving students a read-only live view while admins maintained full manual overrides.
              </p>
              <img src={agileImg} alt="Agile Methodology" className="w-full h-auto object-contain mt-4 opacity-80 mix-blend-screen" />
            </div>

          </div>
        </section>

        {/* 4. The Plot Twist (Sequelize) */}
        <section className="relative w-full border border-portfolio-accent p-8 md:p-16 lg:p-24 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-portfolio-accent/5 transition-colors duration-500"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 flex flex-col gap-8">
              <SectionHeader title="The Plot Twist" num="03" />
              <p className="text-portfolio-light text-2xl md:text-3xl leading-snug font-bold font-heading uppercase">
                As development ramped up, it became heavily apparent that writing raw <span className="text-portfolio-accent">SQL queries</span> wasn't going to be geometrically scalable for our timeline.
              </p>
              <p className="text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
                I realized we urgently needed an Object-Relational Mapping (ORM) tool for MySQL—a technology concept I literally had never used before. Instead of panicking, I researched and pivoted the entire backend to <span className="text-portfolio-accent font-bold">Sequelize</span>. I had to learn the entire library from scratch and acquire proficiency in a matter of days. This rapid adaptation saved the roadmap.
              </p>
            </div>
            <div className="w-full lg:w-5/12 shrink-0">
              <img src={diagramImg} alt="Architecture Diagram" className="w-full h-auto object-contain drop-shadow-2xl mix-blend-screen opacity-90" />
            </div>
          </div>
        </section>

        {/* 5. The Results & Video */}
        <section className="flex flex-col gap-16">
          <SectionHeader title="The Results" num="04" />
          
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-portfolio-light/20 relative group bg-black">
            <video 
              src={demoVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
            ></video>
            <div className="absolute top-6 left-6 bg-portfolio-dark/90 px-6 py-3 font-body text-xs tracking-[0.2em] uppercase text-portfolio-accent rounded shadow-2xl backdrop-blur-md border border-portfolio-accent/20">
              Live Demo
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mt-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-3xl font-bold font-heading text-portfolio-light uppercase tracking-tight">Real-Time Inventory</h4>
              <p className="text-portfolio-light/70 text-lg leading-relaxed">Live mathematical updates on item status, precise quantity grids, and spatial locations.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-3xl font-bold font-heading text-portfolio-light uppercase tracking-tight">Sign-Outs & Returns</h4>
              <p className="text-portfolio-light/70 text-lg leading-relaxed">Tracking who borrowed what, expected return dates, and dynamic user interfaces to sign items back locally.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-3xl font-bold font-heading text-portfolio-light uppercase tracking-tight">Course Carts</h4>
              <p className="text-portfolio-light/70 text-lg leading-relaxed">A specialized feature allowing structural items to be checked out simultaneously in bulk mapped to generic labs and courses.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-3xl font-bold font-heading text-portfolio-light uppercase tracking-tight">Audit Trails</h4>
              <p className="text-portfolio-light/70 text-lg leading-relaxed">A complete operational log of previous checkouts for rigorous accountability and tracking.</p>
            </div>
          </div>
        </section>

        {/* Outro / Link */}
        <section className="w-full pt-16 pb-32 flex justify-center">
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-16 py-8 overflow-hidden rounded-full border border-portfolio-accent w-full md:w-auto text-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-portfolio-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"></div>
            <span className="relative z-10 text-portfolio-accent group-hover:text-portfolio-dark font-heading text-2xl md:text-4xl tracking-widest uppercase transition-colors duration-500">
              Review Source Code [↗]
            </span>
          </a>
        </section>

      </div>
    </ProjectLayout>
  );
};

export default InventorySystem;
