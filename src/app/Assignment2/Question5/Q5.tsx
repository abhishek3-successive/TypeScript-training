'use client'
// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import { useState } from "react";
import {
  containerStyle,
  cardStyle,
  headingStyle,
  countDisplayStyle,
  inputSectionStyle,
  labelStyle,
  inputStyle,
  buttonContainerStyle,
  incrementButtonStyle,
  decrementButtonStyle
} from "./Q4.css";

export default function CounterWithStep() {
  // State to store the count value
  const [count, setCount] = useState(0);
  // State to store the step value
  const [step, setStep] = useState(1);

  // Function to handle step input changes
  const handleStep = (e:any) => {
    const val = e.target.value;
    // Only update if it's a valid number
    if (val === '' || !isNaN(val)) {
      setStep(val === '' ? 0 : parseInt(val, 10));
    }
  };

  // Function to increment count by step
  const increment = () => {
    setCount(count + step);
  };

  // Function to decrement count by step
  const decrement = () => {
    setCount(count - step);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Counter with Step</h1>
        
        <p style={countDisplayStyle}>{count}</p>
        
        <div style={inputSectionStyle}>
          <label style={labelStyle}>Step Value:</label>
          <input 
            type="number" 
            value={step} 
            onChange={handleStep}
            style={inputStyle}
            placeholder="Enter step"
          />
        </div>
        
        <div style={buttonContainerStyle}>
          <button onClick={increment} style={incrementButtonStyle}>
            Increment (+{step})
          </button>
          <button onClick={decrement} style={decrementButtonStyle}>
            Decrement (-{step})
          </button>
        </div>
      </div>
    </div>
  );
}