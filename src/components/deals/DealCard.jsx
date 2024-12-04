import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { HeartIcon, ClockIcon, LocationIcon } from '../icons/Icons';

function DealCard({ deal }) {
  const {
    logo,
    title,
    dealPrice,
    price,
    deal_discount_percentage,
    end_date,
    address,
    deal_type,
    slug
  } = deal;

  const daysUntilExpiry = formatDistance(new Date(end_date), new Date(), { addSuffix: true });

  return (
    <Link to={`/deals/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative">
          <img 
            src={logo} 
            alt={title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/640x480.png/00ff22?text=EV+Deal';
            }}
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              {deal_type.name}
            </span>
          </div>
          <button 
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Add to favorites functionality here
            }}
          >
            <HeartIcon />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl text-green-600">${dealPrice}</span>
            <span className="text-sm text-gray-500">after discount</span>
            <span className="text-sm line-through text-gray-400">${price}</span>
          </div>
          
          <div className="text-red-500 mb-2">
            Save {deal_discount_percentage}%
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <ClockIcon />
            <span>Expires {daysUntilExpiry}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <LocationIcon />
            <span>{address}</span>
          </div>
          
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={(e) => {
              e.preventDefault();
              // Claim deal functionality here
            }}
          >
            Claim Deal
          </button>
        </div>
      </div>
    </Link>
  );
}

export default DealCard;