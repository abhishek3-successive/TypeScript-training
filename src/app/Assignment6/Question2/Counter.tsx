'use client'
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count-value">Count: {count}</p>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
