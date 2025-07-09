'use client';
import { createContext, ReactNode, useState } from 'react';


interface Data{
  isLoggedIn : boolean,
  login : ()=>void,
  username : string
}

interface Data1{
  children : ReactNode
}
export const AuthContext = createContext<Data |null>(null);

export function AuthProvider({ children }:Data1) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("GGGOku");

  const login = () => setIsLoggedIn(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, username }}>
      {children}
    </AuthContext.Provider>
  );
}