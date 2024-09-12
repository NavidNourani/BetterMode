import useSnackbar from '@/hooks/useSnackbar';
import React, { useEffect } from 'react';

const Snackbar: React.FC = () => {
  const { snackbar, hideSnackbar } = useSnackbar();

  useEffect(() => {
    if (snackbar) {
      const timer = setTimeout(() => {
        hideSnackbar();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [snackbar, hideSnackbar]);

  if (!snackbar) return null;

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  }[snackbar.type];

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-md shadow-lg`}>
      {snackbar.message}
    </div>
  );
};

export default Snackbar;
