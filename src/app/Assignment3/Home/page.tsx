'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  username: string;
  [key: string]: any; // optional: allows for any other properties
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }
  }, []);

  return (
    <main style={{ padding: 30 }}>
      <h1>Home Page</h1>
      <p>{user ? `Welcome, ${user.username}!` : "Please log in."}</p>
      <div>
        <button onClick={() => router.push("/Assignment3/About")}>About</button>
        <button onClick={() => router.push("/Assignment3/Dashboard")}>Dashboard</button>
      </div>
    </main>
  );
}
