import React from 'react';

function SearchBar() {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search articles, EV tips, or news..."
        className="w-full p-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition-colors">
        <SearchIcon />
      </button>
    </div>
  );
}

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export default SearchBar;