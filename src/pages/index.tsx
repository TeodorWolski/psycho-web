import React from 'react';
import { HeroSection } from 'components/sections/HeroSection';
import { ServicesSection } from 'components/sections/ServicesSection';
import { AboutSection } from 'components/sections/AboutSection';
import { Navbar } from 'components/organisms/Navbar';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </main>
  );
};

export default Home;
