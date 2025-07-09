'use client';

import { useState } from 'react';
import axios from 'axios';

interface Api {
id : number,
name : string,
email : string
}
export default function RetryFetch() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Api[]>();
  const [error, setError] = useState(null);

  const handleRetry = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (err:any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Retrying...</p>;

  if (users) {
    return (
      <div>
        <h2>Fetched Successfully 🎉</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Retry failed: {error}</p>}
      <button onClick={handleRetry} style={{ padding: '0.5rem 1rem' }}>
        Retry
      </button>
    </div>
  );
}
