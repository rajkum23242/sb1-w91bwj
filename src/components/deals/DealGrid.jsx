import React from 'react';
import DealCard from './DealCard';

function DealGrid({ deals }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}

export default DealGrid;