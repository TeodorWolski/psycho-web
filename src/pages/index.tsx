import React from 'react';
import { HeroSection } from 'components/sections/HeroSection';
import { ServicesSection } from 'components/sections/ServicesSection';
import { Navbar } from 'components/organisms/Navbar';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </main>
  );
};

export default Home;
