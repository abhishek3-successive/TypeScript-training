'use client'
// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

// import
import { useState } from "react";
import {
  containerStyle,
  headingStyle,
  formGroupStyle,
  labelStyle,
  inputStyle,
  displaySectionStyle,
  displayHeadingStyle,
  displayTextStyle
} from "./Q2.css";

// export
export default function PersonForm() {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Person Form</h2>
      
      {/* First Name Input */}
      <div style={formGroupStyle}>
        <label style={labelStyle}>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle}
          placeholder="Enter your first name"
        />
      </div>

      {/* Last Name Input */}
      <div style={formGroupStyle}>
        <label style={labelStyle}>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
          placeholder="Enter your last name"
        />
      </div>

      {/* Age Input */}
      <div style={formGroupStyle}>
        <label style={labelStyle}>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
          placeholder="Enter your age"
        />
      </div>

      {/* Display Section */}
      <div style={displaySectionStyle}>
        <h3 style={displayHeadingStyle}>Entered Information</h3>
        <p style={displayTextStyle}>
          <strong>First Name:</strong> {firstName || 'Not entered'}
        </p>
        <p style={displayTextStyle}>
          <strong>Last Name:</strong> {lastName || 'Not entered'}
        </p>
        <p style={displayTextStyle}>
          <strong>Age:</strong> {age || 'Not entered'}
        </p>
      </div>
    </div>
  );
}