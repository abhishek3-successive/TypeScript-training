'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push('/Assignment3/Login');
  }, [router]);

  return (
    <main style={{ padding: 30 }}>
      <h1>Protected About Page</h1>
      <p>Only visible if you are logged in.</p>
    </main>
  );
}