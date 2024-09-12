import { SnackbarMessage, SnackbarType } from '@/types/snackbar';
import { createContext } from 'react';

interface SnackbarContextType {
  showSnackbar: (message: string, type: SnackbarType) => void;
  snackbar: SnackbarMessage | null;
  hideSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);
export default SnackbarContext;
