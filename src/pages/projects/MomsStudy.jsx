import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';
import { projects } from '../../data/projects';

const data = projects.find(p => p.id === 'moms-study');

const MomsStudy = () => {
  return (
    <ProjectLayout project={data}>
      <div className="max-w-3xl text-portfolio-light/70 font-body text-xl md:text-2xl leading-relaxed gap-6 flex flex-col">
         <p>This is a technical deep dive dedicated strictly to outlining the architectural decisions natively bound to deploying the Frontend Experience ecosystem.</p>
         <p>I heavily iterated over wireframes mapping specific backend logic specifically scaled entirely inside of strict front-end performance tolerances. Every component is specifically optimized around continuous user momentum.</p>
      </div>
    </ProjectLayout>
  );
};

export default MomsStudy;
