import React from 'react';
import { HeroSection } from 'components/sections/HeroSection';
import { ServicesSection } from 'components/sections/ServicesSection';
import { AboutSection } from 'components/sections/AboutSection';
import { Navbar } from 'components/organisms/Navbar';
import { Footer } from 'components/organisms/Footer';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Home;
