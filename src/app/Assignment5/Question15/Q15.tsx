// 15. Build a higher-order component (HOC) named withLogger that logs component lifecycle events like mounting, unmounting, and updating. 
// Apply this HOC to a component and ensure the logs appear in the browser console.
'use client'
import React, { FC, useEffect } from 'react';

const withLogger=(WrappedComponent:FC) =>() =>{
    useEffect(() => {
      console.log(`🟢 [${WrappedComponent.name}] mounted`);

      return () => {
        console.log(`🔴 [${WrappedComponent.name}] will unmount`);
      };
    }, []);

    useEffect(() => {
      console.log(`🔄 [${WrappedComponent.name}] updated`);
    });

    return <WrappedComponent />;
  };
// Example component
function MyComponent() {
  return <h1>Hello from MyComponent</h1>;
}

// Wrap with logger
const MyComponentWithLogger = withLogger(MyComponent);

export default function App() {
  return (
    <div>
      <MyComponentWithLogger />
      <h2>Welcome to the App</h2>
    </div>
  );
}
