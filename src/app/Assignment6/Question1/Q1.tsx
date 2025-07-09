// 1. Create a Next.js app using the App Router with multiple pages.
// Use next/dynamic to lazily load page components and improve initial load time.
// Components should load only when their routes are visited.

"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic import of the HomeContent component with a loading fallback
const HomeContent = dynamic(() => import("./Home/page"), {
  loading: () => <p>Loading Home...</p>,
});

export default function HomePage() {
  const [load, setLoad] = useState(false);

  return (
    <>
      {/* Button to trigger loading HomeContent */}
      <button onClick={() => setLoad(true)}>Load Home Content</button>

      {/* Conditionally render the dynamically imported component */}
      {load && <HomeContent />}
    </>
  );
}
