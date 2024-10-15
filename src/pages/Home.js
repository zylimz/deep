import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>Welcome to DeepPurple</Typography>
      <Typography variant="h6" gutterBottom>
        A revolutionary text analysis software that deciphers the emotions and intentions behind client communications.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button
          component={Link}
          to="/admin"
          variant="contained"
          color="primary"
          size="large"
        >
          Go to Admin Updates
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
