// ThemeContext.js
'use client'

interface Props{
  children : string,
}
type Theme = {
  theme : string,
  setTheme : (value : string)=>void
}
import React, { createContext, useState } from 'react';

const ThemeContext = createContext<Theme|null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light');  // Default theme is 'light'
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
