'use client'

import { useState } from "react";
import {
  containerStyle,
  counterBoxStyle,
  headingStyle,
  countStyle,
  addButtonStyle,
  subButtonStyle
} from "./Q1.css";

export default function Counter() {
  // State to store count value
  const [count, setCount] = useState<number>(0);

  // Function to add 1 to count
  const add = () => {
    setCount(count + 1);
  };

  // Function to subtract 1 from count
  const sub = () => {
    setCount(count - 1);
  };

  return (
    <div style={containerStyle}>
      <div style={counterBoxStyle}>
        <h1 style={headingStyle}>Counter </h1>
        <p style={countStyle}>{count}</p>
        
        <button onClick={add} style={addButtonStyle}>
          Add (+1)
        </button>
        
        <button onClick={sub} style={subButtonStyle}>
          Sub (-1)
        </button>
      </div>
    </div>
  );
}