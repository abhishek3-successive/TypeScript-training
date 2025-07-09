// 17.Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.
'use client'
import React, { useState } from 'react';
import useClipboard from './useClipboard';

const CopyTextComponent = () => {
  const [text, setText] = useState('Hello, World!'); 
  const { success, copyToClipboard } = useClipboard(text);

  return (
    <div>
      <p>{text}</p> 
      <button onClick={copyToClipboard}>
        {success ? 'Copied!' : 'Copy to Clipboard'} 
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
    </div>
  );
};

export default CopyTextComponent;
