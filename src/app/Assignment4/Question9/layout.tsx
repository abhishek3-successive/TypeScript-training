'use client';

import { CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Sidebar from './Components/Sidebar'; // adjust path if needed

const drawerWidth = 240;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          {/* App Bar */}
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Sidebar />
              <Typography variant="h6" noWrap component="div">
                {/* Myapp */}
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Page Content */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              mt: '64px', // offset for AppBar
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
