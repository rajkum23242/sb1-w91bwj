import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <nav className="container mx-auto px-4 py-3">
      <ol className="flex items-center space-x-2 text-gray-600">
        {items.map((item, index) => (
          <React.Fragment key={`${item.path}-${index}`}>
            {index > 0 && <span className="text-gray-400">/</span>}
            <li>
              {item.path ? (
                <Link 
                  to={item.path}
                  className="hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;