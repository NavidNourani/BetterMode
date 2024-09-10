import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold focus:ring-1 focus:ring-offset-0';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 !outline-dashed  focus:ring-blue-500'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500';

  return (
    <button onClick={onClick} disabled={disabled} className={`bg-red-700`} {...props}>
      {children}
    </button>
  );
};

export default Button;
