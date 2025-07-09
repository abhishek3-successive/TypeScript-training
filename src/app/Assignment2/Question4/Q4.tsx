'use client'
// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React, { useState } from "react";
import {
  containerStyle,
  cardStyle,
  headingStyle,
  numberDisplayStyle,
  placeholderStyle,
  buttonStyle
} from "./Q4.css";

function RandomNumberGenerator() {
  // State to store the random number (starts with null)
  const [randomNumber, setRandomNumber] = useState<number>(0);


  // Function to generate a new random number between 1 and 100
  const generateRandomNumber = () =>{

    const randomNum= Math.floor(Math.random() * 100) + 1;
       setRandomNumber(randomNum);
    };
 
  

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Random Number Generator</h2>
        
        <div style={numberDisplayStyle}>
          {randomNumber ? ( randomNumber ) : ( <span style={placeholderStyle}>Click to generate!</span>)}
        </div>
        
        <button onClick={generateRandomNumber} style={buttonStyle}>
          Generate New Number
        </button>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;