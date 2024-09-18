import React, { ButtonHTMLAttributes } from 'react';

type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'gray';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: IconButtonVariant;
  hoverZoom?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'gray',
  className,
  hoverZoom = false,
  ...props
}) => {
  const baseStyles = 'w-fit h-fit p-3 aspect-square rounded-full transition-all duration-300';

  const variantStyles = {
    primary:
      'bg-primary-300 dark:bg-primary-600 text-white hover:bg-primary-700 disabled:hover:bg-primary-600 active:bg-primary-800',
    secondary:
      'bg-secondary-200 dark:bg-secondary-600 text-secondary-800 hover:bg-secondary-300 disabled:hover:bg-secondary-200 active:bg-secondary-400',
    tertiary:
      'bg-transparent text-primary-600 hover:bg-primary-50 disabled:hover:bg-transparent active:bg-primary-100',
    gray: 'bg-gray-300 dark:bg-gray-500 dark:bg-gray-700 text-white hover:bg-gray-600 disabled:hover:bg-gray-500 dark:hover:bg-gray-800 dark:disabled:hover:bg-gray-700 active:bg-gray-400',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${
    hoverZoom ? 'hover:text-6xl' : ''
  } ${className || ''}`;

  return (
    <button className={buttonStyles} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
