'use client';
import { useContext } from 'react';
import { AuthContext } from './authContext';
import { ThemeContext } from './themeContext';

export default function ChildComponent() {
  const auth =  useContext(AuthContext);
  if(!auth) return null 

  const theme1 = useContext(ThemeContext);
  if(!theme1) return null
  
  const { isLoggedIn, login, username } = auth
  const { theme, toggleTheme } = theme1

  

  return (
    <div style={{backgroundColor: theme === "light" ? "#f9f9f9" : "#333",}}>
      <h2>{isLoggedIn ? `Welcome, ${username}!` : "Please log in."}</h2>

      {!isLoggedIn && (
        <button onClick={login} style={{ margin: "10px" }}>
          Login
        </button>
      )}

      <button onClick={toggleTheme}>
        Toggle Theme 
      </button>
    </div>
  );
}
