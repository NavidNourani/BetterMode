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
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 active:bg-secondary-400',
    tertiary: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    gray: 'bg-gray-500 dark:bg-gray-700 text-white hover:bg-gray-600 dark:hover:bg-gray-800 active:bg-gray-400',
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
