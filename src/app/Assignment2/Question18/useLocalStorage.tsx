'use client';
import { useState, useEffect } from 'react';

// Generic type T allows this hook to work with any value type (string, number, object, etc.)
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void, () => void] {
  const [value, setValue] = useState<T>(initialValue);

  // Load saved value from localStorage on mount
  useEffect(() => {
    try {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        setValue(JSON.parse(savedValue));
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }, [key]);

  // Save to both state and localStorage
  const setStoredValue = (newValue: T) => {
    try {
      setValue(newValue);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  // Remove from localStorage and reset state
  const removeValue = () => {
    try {
      setValue(initialValue);
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  return [value, setStoredValue, removeValue];
}

export default useLocalStorage;
