import React from 'react';

type CardProps<T extends React.ElementType = 'div'> = {
  children: React.ReactNode;
  title?: string;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'title'>;

const Card = <T extends React.ElementType = 'div'>({
  children,
  title,
  className,
  as,
  ...props
}: CardProps<T>) => {
  const Component = as || 'div';

  return (
    <Component
      className={`bg-background-light-100 dark:bg-background-dark-800 shadow-md rounded-md overflow-hidden ${
        className || ''
      }`}
      {...props}
    >
      {title && (
        <div className="px-4 py-3 bg-primary-50 dark:bg-primary-900 border-b border-primary-200 dark:border-primary-700">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">{title}</h3>
        </div>
      )}
      <div className="p-4 text-text-light dark:text-text-dark">{children}</div>
    </Component>
  );
};

export default Card;
