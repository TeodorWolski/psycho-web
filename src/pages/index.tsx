import React from 'react';
import { HeroSection } from 'components/sections/HeroSection';
import { ServicesSection } from 'components/sections/ServicesSection';
import { AboutSection } from 'components/sections/AboutSection';
import { Navbar } from 'components/organisms/Navbar';
import { Footer } from 'components/organisms/Footer';
import { RefProvider } from 'context';

const Home = () => {
  return (
    <main>
      <RefProvider>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <Footer />
      </RefProvider>
    </main>
  );
};

export default Home;
