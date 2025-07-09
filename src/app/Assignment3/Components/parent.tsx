'use client';
import { AuthProvider } from './authContext';
import { ThemeProvider } from './themeContext';
import ChildComponent from './child';

export default function ParentComponent() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ChildComponent />
      </ThemeProvider>
    </AuthProvider>
  );
}