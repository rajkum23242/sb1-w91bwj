import React from 'react';

function PaginationButton({ onClick, disabled, active, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-lg border
        ${active ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  );
}

export default PaginationButton;