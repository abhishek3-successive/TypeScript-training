import axios from 'axios';

interface Api{
  id : number,
  name : string,
  email : string,
  website : string
}
export default async function UsersPage() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users:Api[] = res.data;

  return (
    <div>
      <h1>List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
