'use client';

import React, { useState, useCallback } from 'react';

interface ChildProps {
  onClick: () => void;
  resetCount: () => void;
  count: number;
}

const Child: React.FC<ChildProps> = React.memo(({ onClick, resetCount, count }) => {
  console.log('Child rendered');
  return (
    <>
      <h2>Child Count: {count}</h2>
      <button onClick={onClick}>Increment Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
});

export default function Parent() {
  const [count, setCount] = useState<number>(0);

  // Increment the count
  // Note: useCallback's dependency does NOT need to include 'count' when using functional update form
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log('Child button clicked!');
  }, []); // empty dependencies, since setCount functional update depends on previous state

  // Reset the count
  const resetCount = useCallback(() => {
    setCount(0);
    console.log('Count reset!');
  }, []);

  return (
    <>
      <Child onClick={handleClick} resetCount={resetCount} count={count} />
    </>
  );
}
