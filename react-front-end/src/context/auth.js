import { createContext, useContext } from 'react';

export const AuthContext = createContext();

// Hook
export function useAuth() {
  return useContext(AuthContext);
}
