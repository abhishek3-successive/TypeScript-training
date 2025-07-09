// 4.Build a registration form with two password fields. 
// Implement controlled components for both password inputs. 
// Add a validation rule to ensure that the two passwords match before allowing the form submission.
'use client'
import { useState } from "react";

export default function ControlledRegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');

  // Handle the password verification logic
  const handleSubmit = () => {
    if (password !== verifyPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      alert(`Hello ${username}, registration successful!`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Verify your password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button disabled={password !== verifyPassword }>
        Submit
      </button>
    </form>
  );
}
