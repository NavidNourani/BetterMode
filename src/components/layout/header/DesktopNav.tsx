import React from 'react';

const DesktopNav: React.FC = () => (
  <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
    <ul className="flex space-x-4">
      {/* <li><Link to="/" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">Home</Link></li>
      <li><Link to="/posts" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">Posts</Link></li> */}
    </ul>
  </div>
);

export default DesktopNav;