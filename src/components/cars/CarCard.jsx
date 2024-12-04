import React from 'react';
import { Link } from 'react-router-dom';
import { LocationIcon } from '../icons/Icons';

function CarCard({ car }) {
  const {
    image,
    title,
    price,
    price_formatted,
    mileage,
    year,
    geolocation,
    slug,
    car_models,
    car_types,
    condition
  } = car;

  return (
    <Link to={`/cars/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/640x480.png/00ff22?text=EV+Car';
            }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {condition}
            </span>
            {car_types && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {car_types.name}
              </span>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            {car_models?.make?.logo && (
              <img 
                src={car_models.make.logo} 
                alt={car_models.make.name}
                className="w-6 h-6 object-contain"
              />
            )}
            <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl text-blue-600">{price_formatted}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
            <div>Year: {year}</div>
            <div>Mileage: {mileage}</div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <LocationIcon />
            <span className="line-clamp-1">{geolocation.address}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarCard;