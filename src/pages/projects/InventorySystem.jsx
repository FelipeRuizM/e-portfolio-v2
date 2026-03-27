import ProjectLayout from '../../components/ProjectLayout';
import { projects } from '../../data/projects';
import {
  OverviewSection,
  ProblemSolutionSection,
  PlotTwistSection,
  ResultsSection,
  OutroSection,
} from '../../components/project';

import camosunImg from '../../assets/images/inventory-system/camosun.png';
import diagramImg from '../../assets/images/inventory-system/diagram.png';
import sequelizeImg from '../../assets/images/inventory-system/sequelize.jpg';
import demoVideo from '../../assets/videos/inventory-demo-fast.mp4';

const data = projects.find(p => p.id === 'inventory-system');

const InventorySystem = () => {
  return (
    <ProjectLayout project={data}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-24 md:py-40 flex flex-col gap-32 md:gap-48 relative z-10 mix-blend-difference">

        <OverviewSection
          headline="A full-stack web application built in three months for Camosun College to manage thousands of electronic lab items."
          details={[
            { label: 'My Role', value: 'Lead Database & API Developer (Team Elex Sapphire).' },
            { label: 'The Stack', value: 'React, Node.js, Express.js, MySQL, Sequelize.' },
            { label: 'The Impact', value: 'Eliminated wasted trips to the lab for students and streamlined inventory tracking for lab assistants.' },
          ]}
        />

        <ProblemSolutionSection
          problem={{
            title: 'The Problem',
            paragraphs: [
              'Camosun College lab assistants faced a massive organizational hurdle: keeping track of thousands of electronic components and equipment. Students had to physically walk to the labs just to ask if a piece of equipment was available. The manual process desperately needed a digital overhaul.',
            ],
            image: camosunImg,
            imageAlt: 'Camosun College',
          }}
          solution={{
            title: 'The Solution',
            paragraphs: [
              'Our three-person team built a custom, centralized Inventory System using a React frontend and a Node.js/Express.js API hooked up to MySQL.',
              'I took ownership of the backend architecture. To hit our strict three-month deadline, we utilized Agile methodologies heavily (daily stand-ups, bi-weekly syncing). We engineered strict role-based access control, giving students a read-only live view while admins maintained full manual overrides.',
            ],
            image: diagramImg,
            imageAlt: 'Diagram showing the relation between Node.js, MySQL, and React',
          }}
        />

        <PlotTwistSection
          heading={
            <p className="text-portfolio-light text-2xl md:text-3xl leading-snug font-heading uppercase">
              As development ramped up, it became heavily apparent that writing raw <span className="text-portfolio-accent">SQL queries</span> wasn't going to be geometrically scalable for our timeline.
            </p>
          }
          body={
            <p className="text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
              I realized we urgently needed an Object-Relational Mapping (ORM) tool for MySQL—a technology concept I literally had never used before. Instead of panicking, I researched and pivoted the entire backend to <span className="text-portfolio-accent font-bold">Sequelize</span>. I had to learn the entire library from scratch and acquire proficiency in a matter of days. This rapid adaptation saved the roadmap.
            </p>
          }
          image={sequelizeImg}
          imageAlt="Sequelize Diagram"
        />

        <ResultsSection
          video={demoVideo}
          features={[
            { title: 'Real-Time Inventory', description: 'Live mathematical updates on item status, precise quantity grids, and spatial locations.' },
            { title: 'Sign-Outs & Returns', description: 'Tracking who borrowed what, expected return dates, and dynamic user interfaces to sign items back locally.' },
            { title: 'Course Carts', description: 'A specialized feature allowing structural items to be checked out simultaneously in bulk mapped to generic labs and courses.' },
            { title: 'Audit Trails', description: 'A complete operational log of previous checkouts for rigorous accountability and tracking.' },
          ]}
        />

        <OutroSection
          href="https://github.com/FelipeRuizM/inventory-system"
          label="Review Source Code &lt;/&gt;"
        />

      </div>
    </ProjectLayout>
  );
};

export default InventorySystem;
