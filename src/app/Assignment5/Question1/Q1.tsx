interface Api{
  id : number,
  title : string,
  body : string
}

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts:Api[] = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Posts
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
