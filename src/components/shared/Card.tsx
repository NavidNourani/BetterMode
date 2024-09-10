import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-background-light-100 dark:bg-background-dark-800 shadow-md rounded-lg overflow-hidden">
      {title && (
        <div className="px-4 py-3 bg-primary-50 dark:bg-primary-900 border-b border-primary-200 dark:border-primary-700">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">{title}</h3>
        </div>
      )}
      <div className="p-4 text-text-light dark:text-text-dark">{children}</div>
    </div>
  );
};

export default Card;
