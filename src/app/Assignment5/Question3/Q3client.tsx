'use client';
import { useState } from 'react';
import {
  Button,
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

interface Data{
  initialUser : string,
  hasError : boolean,
  users : []
}
interface Api{
  id : number,
  name : string,
  email : string
}

export default function UsersList({ users: initialUsers, hasError }:Data) {
  const [users, setUsers] = useState<Api[]>(initialUsers);
  const [error, setError] = useState(hasError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Fetch failed');

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <CircularProgress />
        <Typography mt={2}>Loading users...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={4} textAlign="center">
        <Typography color="error">Failed to load users. Please try again.</Typography>
        <Button onClick={retryFetch} variant="contained" color="primary" sx={{ mt: 2 }}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} divider>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}
