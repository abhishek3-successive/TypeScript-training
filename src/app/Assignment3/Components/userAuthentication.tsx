'use client';

import { useContext } from 'react';
import { contextProvider } from '../UserAuthentication/page';

// Define the expected shape of your context
interface AuthContextType {
  isLoggedIn: boolean;
  username: string;
  login: () => void;
}

// Component
export default function Child() {
  const context = useContext(contextProvider);

  if (!context) {
    return <div>Error: contextProvider is not available</div>;
  }

  const { isLoggedIn, username, login } = context as AuthContextType;

  return (
    <main>
      {isLoggedIn ? (
        <h2>Welcome {username}!</h2>
      ) : (
        <>
          <h3>Please Login</h3>
          <button onClick={login}>Log In</button>
        </>
      )}
    </main>
  );
}
