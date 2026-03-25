import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectShowcase from '../components/ProjectShowcase';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Home;
