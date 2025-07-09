'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const navItems = [
  { text: 'Home', icon: <HomeIcon />, href: '/Assignment4/Question9/Home' },
  { text: 'About', icon: <InfoIcon />, href: '/Assignment4/Question9/About' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
      }}
      role="presentation"
    >
      <Toolbar />
      <Divider />
      <List>
        {navItems.map(({ text, icon, href }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <>
      {/* Toggle button for desktop (optional) */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          top: 16,
          left: open ? drawerWidth + 16 : 16,
          zIndex: theme.zIndex.drawer + 2,
          display: { xs: 'none', sm: 'inline-flex' },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
