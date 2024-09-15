import Button from '@/components/shared/Button';
import useAuth from '@/hooks/useAuth';
import React from 'react';

interface DrawerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerSidebar: React.FC<DrawerSidebarProps> = ({ isOpen, onClose }) => {
  const { token } = useAuth();
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-gray-100 dark:bg-gray-800 overflow-auto ease-in-out transition-all duration-300 z-30 md:hidden`}
    >
      <div className="p-4">
        <button className="text-gray-800 dark:text-white mb-4" onClick={onClose}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="space-y-2 mb-4">
          {/* <li><Link to="/" className="block text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">Home</Link></li>
        <li><Link to="/posts" className="block text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">Posts</Link></li> */}
        </ul>
        {token ? (
          <Button className="hidden md:block">Logout</Button>
        ) : (
          <Button className="hidden md:block">Login</Button>
        )}
      </div>
    </div>
  );
};

export default DrawerSidebar;
