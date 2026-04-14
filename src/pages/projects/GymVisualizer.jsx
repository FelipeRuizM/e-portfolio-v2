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

import demoVideo from '../../assets/videos/gym-visualizer-demo.mp4'; 
import firebaseImg from '../../assets/images/gym-progress-visualizer/firebase.png'

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
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop", 
                        imageAlt: 'Gym and weights representing the workout data source',
                    }}
                    solution={{
                        title: 'The Solution',
                        paragraphs: [
                            "Why pay for premium subscriptions to visualize data from over 3 months ago, when I can just build my own gym progress visualizer? So that's what I did. This is a free, open-source project that can be used by anyone who wants to see their gym progress."
                        ],
                        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", 
                        imageAlt: 'Modern data dashboard visualization',
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
                    image={firebaseImg} 
                    imageAlt="Cloud Infrastructure representing Firebase integration"
                    imgClassName="mix-blend-normal rounded-xl border-4 border-portfolio-light/20"
                />

                <ResultsSection
                    video={demoVideo}
                    showColor={true}
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
