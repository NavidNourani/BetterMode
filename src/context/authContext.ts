import { createContext } from 'react';

interface AuthContextType {
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<{ success: boolean; message: string }>;
}
export const authContext = createContext<AuthContextType | null>(null);

export default authContext;
