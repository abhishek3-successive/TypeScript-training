'use client';

import { useState } from 'react';

interface Api{
  id : number,
  name : string,
  email : string
}

interface Data{
  initialUser : string,
  hasError : boolean,
  users : []
}

export default function UsersList({ users: initialUsers, hasError }:Data) {
  const [users, setUsers] = useState<Api[]>(initialUsers);
  const [error, setError] = useState(hasError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Fetch failed');

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div style={{ color: 'red' }}>
        <p>Failed to load users. Please try again.</p>
        <button onClick={retryFetch} style={{ marginTop: '1rem' }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
}
