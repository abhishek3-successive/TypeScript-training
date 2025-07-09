'use client';
import React, { ChangeEvent } from 'react';
import useLocalStorage from './useLocalStorage';

function UserPreferences() {
  // Using the hook to manage user preferences
  const [name, setName, removeName] = useLocalStorage('userName', '');
  const [theme, setTheme, removeTheme] = useLocalStorage('userTheme', 'light');
  const [fontSize, setFontSize, removeFontSize] = useLocalStorage('fontSize', 16);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleFontSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(e.target.value));
  };

  const clearAllPreferences = () => {
    removeName();
    removeTheme();
    removeFontSize();
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        fontSize: fontSize + 'px',
      }}
    >
      <h2>User Preferences</h2>

      {/* Name Input */}
      <div style={{ marginBottom: '15px' }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            style={{
              marginLeft: '10px',
              padding: '5px',
              fontSize: fontSize + 'px',
            }}
          />
        </label>
      </div>

      {/* Theme Selection */}
      <div style={{ marginBottom: '15px' }}>
        <label>
          Theme:
          <select
            value={theme}
            onChange={handleThemeChange}
            style={{
              marginLeft: '10px',
              padding: '5px',
              fontSize: fontSize + 'px',
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      {/* Font Size */}
      <div style={{ marginBottom: '15px' }}>
        <label>
          Font Size:
          <input
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={handleFontSizeChange}
            style={{ marginLeft: '10px' }}
          />
          <span style={{ marginLeft: '10px' }}>{fontSize}px</span>
        </label>
      </div>

      {/* Display Current Preferences */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <h3>Current Preferences:</h3>
        <p>
          <strong>Name:</strong> {name || 'Not set'}
        </p>
        <p>
          <strong>Theme:</strong> {theme}
        </p>
        <p>
          <strong>Font Size:</strong> {fontSize}px
        </p>
      </div>

      {/* Clear All Button */}
      <button
        onClick={clearAllPreferences}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: fontSize + 'px',
        }}
      >
        Clear All Preferences
      </button>
    </div>
  );
}

export default UserPreferences;
