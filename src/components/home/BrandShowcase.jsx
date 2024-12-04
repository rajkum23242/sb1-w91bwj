import React from 'react';

const brands = [
  { name: 'Tesla', logo: '/brands/tesla.svg' },
  { name: 'Rivian', logo: '/brands/rivian.svg' },
  { name: 'Lucid', logo: '/brands/lucid.svg' },
  { name: 'Fisker', logo: '/brands/fisker.svg' },
  { name: 'Bollinger', logo: '/brands/bollinger.svg' },
  { name: 'Lordstown', logo: '/brands/lordstown.svg' },
  { name: 'Faraday', logo: '/brands/faraday.svg' },
];

function BrandShowcase() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-gray-700 font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandShowcase;