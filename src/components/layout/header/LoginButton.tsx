import React from 'react';
import Button from '../../shared/Button';

interface LoginButtonProps {
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ className = '' }) => (
  <Button className={className}>
    Login
  </Button>
);

export default LoginButton;