import { createContext } from 'react';

interface AuthContextType {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
}
const authContext = createContext<AuthContextType | null>(null);

export default authContext;
