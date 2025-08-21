import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Content() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Typography variant="h3" gutterBottom>
        Welcome Back!
      </Typography>
      <Typography variant="body1">
        Sign in to access your dashboard, tools, and insights.
      </Typography>
    </Box>
  );
}
