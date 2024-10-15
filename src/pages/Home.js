import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
<Typography variant="h3" gutterBottom>
  Welcome to the DeepPurple Project Website
</Typography>
<Typography variant="h6" gutterBottom>
  This website serves as a central hub for our project updates and documentation regarding DeepPurple, our innovative text analysis software. As we develop this revolutionary tool, our focus is on understanding the emotions and intentions behind client communications.
  <br /><br />
  Here, you will find:
  <ul>
    <li><strong>Team Information:</strong> Meet our team members and learn about their roles and responsibilities.</li>
    <li><strong>Administrative Updates:</strong> Access our meeting minutes, project schedules, and individual reflective diaries to stay informed on our progress.</li>
    <li><strong>Project Overview:</strong> An overview of our project and a link to our product website.</li>
  </ul>
  <br />
  This site is designed to keep our stakeholders updated as we work towards creating a powerful solution for businesses to enhance client understanding and engagement.
  <br /><br />
  Thank you for following our journey!
</Typography>

    </Container>
  );
}

export default Home;
