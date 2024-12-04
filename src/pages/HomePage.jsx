import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import BrandShowcase from '../components/home/BrandShowcase';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <BrandShowcase />
    </div>
  );
}

export default HomePage;