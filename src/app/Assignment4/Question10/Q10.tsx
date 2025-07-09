'use client';

import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styles } from './Q10.css'; // Assuming styles is an object; fix import if needed

// Define types for form data and errors
type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function MUIForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = 'Phone must be 10 digits';
    if (form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Handle submission logic here
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="form-container"
      sx={styles.formContainer}
    >
      <TextField
        className="form-field"
        name="firstName"
        label="First Name"
        value={form.firstName}
        onChange={handleChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
        required
        sx={styles.formField}
      />
      <TextField
        className="form-field"
        name="lastName"
        label="Last Name"
        value={form.lastName}
        onChange={handleChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
        required
        sx={styles.formField}
      />
      <TextField
        className="form-field"
        name="phone"
        label="Phone Number"
        value={form.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        type="tel"
        required
        sx={styles.formField}
      />
      <TextField
        className="form-field"
        name="password"
        label="Password"
        value={form.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        type="password"
        required
        sx={styles.formField}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
