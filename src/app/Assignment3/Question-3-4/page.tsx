'use client';
import { useRouter } from 'next/navigation';

export default function Assignment3Home() {
  const router = useRouter();

  return (
    <main style={{ padding: 30 }}>
     

      <button onClick={() => router.push('/Assignment3/Login')} style={{ margin: '10px' }}>
        Login Page
      </button>

    </main>
  );
}
