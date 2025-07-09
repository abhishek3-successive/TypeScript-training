'use client';
import { createContext, ReactNode, useState } from 'react';
interface child{
  theme : string,
  toggleTheme : ()=> void
}
interface Data{
  children : ReactNode
}

export const ThemeContext = createContext<child|null>(null);


export function ThemeProvider({ children }:Data) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
