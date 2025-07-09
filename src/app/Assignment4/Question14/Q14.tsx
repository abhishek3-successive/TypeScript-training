'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  List,
  ListItem,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function ValidationSummaryForm() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setSubmitted(false);
      alert(JSON.stringify(values, null, 2));
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const showErrors = submitted && !formik.isValid;

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        formik.handleSubmit();
      }}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 5,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Signup Form
      </Typography>

      {showErrors && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="subtitle2">Please fix the following errors:</Typography>
          <List dense>
            {Object.values(formik.errors).map((error, i) => (
              <ListItem key={i} sx={{ pl: 2 }}>
                • {error}
              </ListItem>
            ))}
          </List>
        </Alert>
      )}

      <TextField
        label="Username"
        name="username"
        fullWidth
        margin="normal"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />

      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={formik.isSubmitting}
      >
        Submit
      </Button>
    </Box>
  );
}
