import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>Welcome to DeepPurple project website</Typography>
      <Typography variant="h6" gutterBottom>
      Welcome to the DeepPurple Project
      This website serves as a central hub for our project updates and documentation regarding DeepPurple, our innovative text analysis software. As we develop this revolutionary tool, our focus is on understanding the emotions and intentions behind client communications.

      Here, you will find:

      Team Information: Meet our team members and learn about their roles and responsibilities.
      Administrative Updates: Access our meeting minutes, project schedules, and individual reflective diaries to stay informed on our progress.
      Project Overview: An overview of our project and the link to our product website. 
      This site is designed to keep our stakeholders updated as we work towards creating a powerful solution for businesses to enhance client understanding and engagement.

      Thank you for following our journey!
      </Typography>
    </Container>
  );
}

export default Home;
