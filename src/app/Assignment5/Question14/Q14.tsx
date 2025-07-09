// 14. Create a higher-order component (HOC) named withAuth that restricts access to a component only to authenticated users.
//  Implement this HOC on a sample component and demonstrate how it protects routes or pages in a Next.js application.
'use client';

import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const isUserAuthenticated = true; 

function withAuth(Component:FC) {
  return function ProtectedComponent() {
    const router = useRouter();

    useEffect(() => {
      if (!isUserAuthenticated) {
        router.replace('/login'); 
      }
    }, [router]);

    return <Component  />;
  };
}

function Dashboard() {
  return <h1>Welcome to your Dashboard! You are logged in.</h1>;
}

const ProtectedDashboard = withAuth(Dashboard);

export default function Page() {
  return <ProtectedDashboard />;
}
