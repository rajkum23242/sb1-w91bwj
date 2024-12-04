import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      <div className="container mx-auto px-4 py-20 flex items-center min-h-[600px]">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience Excellence with ENinja Power
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            Unlock incredible deals on the latest electric vehicles and take charge of your dream ride today with ENinja Power. Step into the future of driving!
          </p>
          <Link
            to="/deals"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Go to New Page
          </Link>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/hero-car.png"
            alt="Electric Vehicle"
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;