import { createContext } from 'react';

interface AuthContextType {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
const authContext = createContext<AuthContextType | null>(null);

export default authContext;
