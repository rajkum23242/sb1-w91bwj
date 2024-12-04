import React from 'react';

function FilterBar() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select className="p-2 border rounded-lg bg-white min-w-[120px]">
        <option>Cars</option>
      </select>
      
      <select className="p-2 border rounded-lg bg-white min-w-[160px]">
        <option>Select City / Region</option>
      </select>
      
      <div className="flex items-center gap-2">
        <span className="text-gray-700">Price Range:</span>
        <select className="p-2 border rounded-lg bg-white min-w-[120px]">
          <option>All Prices</option>
        </select>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-gray-700">Color:</span>
        <select className="p-2 border rounded-lg bg-white min-w-[120px]">
          <option>Select color</option>
        </select>
      </div>
      
      <label className="flex items-center gap-2 text-gray-700">
        <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
        <span>Expiring Soon</span>
      </label>
      
      <select className="p-2 border rounded-lg bg-white min-w-[120px]">
        <option>Newest First</option>
      </select>
    </div>
  );
}

export default FilterBar;