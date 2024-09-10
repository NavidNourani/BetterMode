import React, { useState } from 'react';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import LoginButton from './header/LoginButton';
import DrawerSidebar from './header/DrawerSidebar';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Logo />

        <DesktopNav />

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center transition-colors duration-200"
        >
          <span className="md:mr-2">{theme === 'light' ? '🌙' : '☀️'}</span>
          <span className="text-sm text-gray-800 dark:text-white max-md:hidden">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
        <LoginButton className="hidden md:block" />
      </div>

      <DrawerSidebar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </nav>
  );
};

export default Header;
