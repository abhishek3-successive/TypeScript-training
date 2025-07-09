// App.jsx or index.js
import React from 'react';
import { ThemeProvider } from './theme';
import Theme from './Q9'; // Your Q9 component

function App() {
  return (
    <ThemeProvider>
      <Theme/>
    </ThemeProvider>
  );
}

export default App;
