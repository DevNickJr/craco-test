import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IUser {
  name: string;
  accessToken: string;
}
interface AuthContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (data: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthPovider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{
    name: string;
    accessToken: string;
  } | null>(null);

  const login = (data: IUser) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthPovider');
  }
  return context;
};
