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

import demoVideo from '../../assets/videos/inventory-demo-fast.mp4'; 

const data = projects.find(p => p.id === 'gym-visualizer');

const GymVisualizer = () => {
    return (
        <ProjectLayout project={data}>
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-24 md:py-40 flex flex-col gap-32 md:gap-48 relative z-10 mix-blend-difference">

                <OverviewSection
                    headline="A premium, real-time custom analytics dashboard for deep Hevy workout progression tracking."
                    details={[
                        { label: 'My Role', value: 'Fullstack Developer.' },
                        { label: 'The Stack', value: 'React, TypeScript, Vite, Firebase Firestore, Recharts, Custom CSS (Glassmorphism & animations).' },
                        { label: 'The Impact', value: 'Transformed raw static CSV data into a visually stunning, real-time dashboard that automatically visualizes workout volume, muscle group distributions, and exercise frequencies without manual spreadsheet crunching.' },
                    ]}
                />

                <ProblemSolutionSection
                    problem={{
                        title: 'The Problem',
                        paragraphs: [
                            "The Hevy mobile app lacked deep, customizable desktop analytics. Tracking detailed historical volume trends and specific muscle splits required manually exporting and analyzing bulky CSV files, which was tedious and not scalable."
                        ],
                        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop", 
                        imageAlt: 'Manual CSV analysis in spreadsheets',
                    }}
                    solution={{
                        title: 'The Solution',
                        paragraphs: [
                            "I built a bespoke web dashboard designed with a 'Dark Mode First' premium aesthetic. It aggregates workout data, automatically maps exercises to muscle groups, and leverages dynamic filters (e.g., Last 30 Days) to compute and display actionable insights immediately."
                        ],
                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", 
                        imageAlt: 'Dashboard analytics solution',
                    }}
                />

                <PlotTwistSection
                    heading={
                        <p className="text-portfolio-light text-2xl md:text-3xl leading-snug font-heading uppercase">
                            Migrating to a live <span className="text-portfolio-accent">Firebase Firestore</span> backend shattered the original architecture.
                        </p>
                    }
                    body={
                        <p className="text-portfolio-light/80 text-lg md:text-xl leading-relaxed">
                            The project originally relied on parsing local client-side CSV files. Moving to Firebase was tough because the data shape changed from flat CSV rows to heavily <span className="text-portfolio-accent font-bold">nested JSON structures</span>. I engineered a unified custom React hook equipped with adapter logic. It fetches raw Firestore documents and normalizes the nested JSON on-the-fly into a clean, strongly-typed schema. This abstraction ensured seamless data flow, allowing the complex Recharts components to render effortlessly.
                        </p>
                    }
                    image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop" 
                    imageAlt="Firebase JSON coding architecture"
                    imgClassName="mix-blend-normal rounded-xl border-4 border-portfolio-light/20"
                />

                <ResultsSection
                    video={demoVideo}
                    features={[
                        { title: 'Real-Time Firebase Sync', description: 'Live synchronization pushing the latest workout data directly to the client without manual refreshing.' },
                        { title: 'Interactive Recharts', description: 'Deep, dynamic interactions via custom Volume Area Charts and interactive Muscle-group Pie Charts.' },
                        { title: 'Automated Mapping', description: 'Instant mapping, categorization, and normalization across dozens of different exercise variations.' },
                        { title: 'Premium Glassmorphic UI', description: 'A sleek, state-of-the-art dark mode interface loaded with subtle, momentum-driven micro-animations.' },
                    ]}
                />

                <OutroSection
                    label="View Source on GitHub &lt;/&gt;"
                    href="https://github.com/FelipeRuizM/hevy-visualizer"
                />

            </div>
        </ProjectLayout>
    );
};

export default GymVisualizer;
