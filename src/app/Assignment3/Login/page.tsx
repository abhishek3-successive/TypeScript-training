"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (username === "GGGOKU" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ username }));
      router.push("/Assignment3/Home");
      
      
      

    } else {
      setMsg("Invalid Details");
    }
  }

  return (
    <main style={{ padding: 30 }}>
      <h1> Login</h1>
      <form onSubmit={handleLogin}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{msg}</p>
    </main>
  );
}
