import React from 'react';
import ProjectLayout from '../../components/ProjectLayout';
import { projects } from '../../data/projects';
import {
    OverviewSection,
    ProblemSolutionSection,
    PlotTwistSection,
    ResultsSection,
    OutroSection,
} from '../../components/project';

import demoVideo from '../../assets/videos/ono-poke-demo.mp4';
import uptownImg from '../../assets/images/ono-poke/uptown.jpg';
import whiteboard from '../../assets/images/ono-poke/whiteboard.jpg';

const data = projects.find(p => p.id === 'ono-poke-app');

const OnoPoke = () => {
    return (
        <ProjectLayout project={data}>
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-24 md:py-40 flex flex-col gap-32 md:gap-48 relative z-10 mix-blend-difference">

                <OverviewSection
                    headline="A complete digital ecosystem built from scratch for Ono Poke in Victoria, BC—featuring a mobile app, backend API, and a custom admin dashboard."
                    details={[
                        { label: 'My Role', value: 'Freelancer (Lead Designer, Developer, & Tester — a true one-person team!).' },
                        { label: 'The Stack', value: 'React Native, Expo Router, TypeScript, Node.js, Express, PostgreSQL.' },
                        { label: 'The Impact', value: 'Eliminated crippling third-party delivery fees and sparked higher customer engagement with a seamless, branded ordering experience.' },
                    ]}
                />

                <ProblemSolutionSection
                    problem={{
                        title: 'The Problem',
                        paragraphs: [
                            "Let's be real: third-party delivery platforms take a giant bite out of local business profits through heavy-handed percentage fees.",
                            "On top of the financial drain, relying on those generic platforms made it impossible for Ono Poke to offer the personalized, tailor-made brand experience that their incredibly loyal customers deserved."
                        ],
                        image: uptownImg,
                        imageAlt: 'Ono Poke Uptown Location',
                    }}
                    solution={{
                        title: 'The Solution',
                        paragraphs: [
                            "I built them their very own digital ecosystem from the ground up! By developing a dedicated React Native customer app, a powerful backend API, and an intuitive admin dashboard, Ono Poke can now operate entirely independently.",
                            "They maintain complete ownership of their data, process orders natively, and treat their customers to a truly bespoke ordering flow that reflects the restaurant's vibe."
                        ],
                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
                        imageAlt: 'Data and business code',
                    }}
                />

                <PlotTwistSection
                    heading={
                        <p className="text-portfolio-light text-2xl md:text-3xl leading-snug font-heading uppercase">
                            The ultimate puzzle: How do we store a million ways to build a <span className="text-portfolio-accent">Custom Poke Bowl?</span>
                        </p>
                    }
                    body={
                        <p className="text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
                            When building the feature to let users create custom bowls, I hit a major architectural crossroads: should the custom ingredients live alongside regular menu items in the database, or get their own separate home? After some serious white-boarding, I decided to <span className="text-portfolio-accent font-bold">completely decouple customization ingredients from the main menu</span>. This "divide and conquer" approach kept the database lightning-fast, made future menu updates a breeze, and heavily simplified the logic behind processing custom orders in the app!
                        </p>
                    }
                    image={whiteboard}
                    imageAlt="Coding database schema"
                />

                <ResultsSection
                    isVertical={true}
                    showColor={true}
                    video={demoVideo}
                    features={[
                        { title: 'Build Your Own Bowl', description: 'A beautiful, interactive multi-step wizard that lets hungry users customize their poke bowls exactly how they want them.' },
                        { title: 'Cart Upselling', description: 'Subtle, strategic add-on recommendations placed right at checkout to help boost the average order value organically.' },
                        { title: 'Rewards System', description: 'A digital "punch-card" style rewards system natively built in to keep the local community continuously coming back.' },
                        { title: 'Documented API', description: 'A rock-solid, well-documented backend architecture ready to power future business expansions with zero friction.' },
                    ]}
                />

                <OutroSection
                    label="Private Project - Source Closed &lt;/&gt;"
                />

            </div>
        </ProjectLayout>
    );
};

export default OnoPoke;
