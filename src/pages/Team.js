// Team.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import './Team.css';

// Sample data for team members
const teamMembers = [
  { name: 'Ong Yu Yang', role: 'Project Manager' },
  { name: 'Pang Thong Yi Justin', role: 'Team Member' },
  { name: 'Lim Zhi Yew', role: 'Team Member' },
  { name: 'Hau Bin Hui', role: 'Team Member' },
  { name: 'Lim Wei Hao', role: 'Team Member' },
];

function Team() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom align="center">
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: 'center', borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: deepPurple[500], width: 64, height: 64 }}>
                    {member.name[0]}
                  </Avatar>
                </Box>
                <Typography variant="h5" component="div" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;
