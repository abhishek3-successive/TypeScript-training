// app/UsersPage.tsx
import UsersList from "./Q3client"; 
export interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  let users: User[] = [];
  let hasError = false;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Fetch failed");

    users = await res.json();
  } catch (err) {
    hasError = true;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Users
      </h1>
      <UsersList users={users} hasError={hasError} />
    </main>
  );
}
