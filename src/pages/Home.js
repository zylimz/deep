import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>Welcome to DeepPurple</Typography>
      <Typography variant="h6" gutterBottom>
        A revolutionary text analysis software that deciphers the emotions and intentions behind client communications.
      </Typography>
    </Container>
  );
}

export default Home;
