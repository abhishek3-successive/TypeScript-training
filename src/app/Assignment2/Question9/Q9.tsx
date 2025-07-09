// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.
// Q9.jsx
'use client'
import React, { useContext } from 'react';
import ThemeContext from './theme';

export default function Theme() {
  const theme1=useContext(ThemeContext)
  if(!theme1)return null;
  const { theme, setTheme } = theme1 // Access the current theme

  function handleTheme() {
    if (theme === "black") {
      setTheme("white");
    } else {
      setTheme("black");
    }
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: theme === "black" ? "white" : "black",  // Set text color based on theme
    backgroundColor: theme === "black" ? "#333" : "#fff", // Dark background for black theme
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: theme === "black" ? "#fff" : "#333",  // Inverse button color
    color: theme === "black" ? "#333" : "#fff",  // Inverse button text color
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style ={containerStyle}>
      <p>The current theme is {theme}</p>
      <button style={buttonStyle} onClick={handleTheme}>Toggle Theme</button>
    </div>
  );
}
