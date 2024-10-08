import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
