import React from 'react';
import { HeroSection } from 'components/sections/HeroSection';
import { Navbar } from 'components/organisms/Navbar';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Home;
