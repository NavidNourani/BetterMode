import SnackbarContext from '@/context/snackbarContext';
import { SnackbarMessage, SnackbarType } from '@/types/snackbar';
import React, { useCallback, useState } from 'react';

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<SnackbarMessage | null>(null);

  const showSnackbar = useCallback((message: string, type: SnackbarType) => {
    setSnackbar({ message, type });
  }, []);

  const hideSnackbar = useCallback(() => {
    setSnackbar(null);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar, snackbar, hideSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};
