import React, { ButtonHTMLAttributes } from 'react';
import LoadingSpinner from './LoadingSpinner';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  loading = false,
  className,
  ...props
}) => {
  const baseStyles =
    'px-4 py-2  rounded-full font-semibold transition-colors duration-200 focus:outline-none relative';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary:
      'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 focus:ring-secondary-500',
    tertiary: 'bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const loadingStyles = 'cursor-wait';

  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${disabled ? disabledStyles : ''}
    ${loading ? loadingStyles : ''}
    ${className || ''}
  `;

  return (
    <button className={buttonStyles} disabled={disabled || loading} {...props}>
      {loading ? (
        <>
          <span className="opacity-0">{children}</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner className="h-5 w-5 text-current" />
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
