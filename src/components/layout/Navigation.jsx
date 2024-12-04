import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-gray-900';
  };

  return (
    <nav>
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cars" className={isActive('/cars')}>
            Cars
          </Link>
        </li>
        <li>
          <Link to="/deals" className={isActive('/deals')}>
            Deals
          </Link>
        </li>
        <li>
          <Link to="/blogs" className={isActive('/blogs')}>
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;