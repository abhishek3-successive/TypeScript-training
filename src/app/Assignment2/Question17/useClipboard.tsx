'use client';
import { useState } from 'react';

const useClipboard = (text: string) => {
  const [success, setSuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text); 
      setSuccess(true); 
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setSuccess(false); 
    }
  };

  return { success, copyToClipboard }; 
};

export default useClipboard;
