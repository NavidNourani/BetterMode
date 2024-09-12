export type SnackbarType = 'success' | 'error' | 'info' | 'warning';

export interface SnackbarMessage {
  message: string;
  type: SnackbarType;
}
