// Marketing.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import './Marketing.css';

function Marketing() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom align="center">
        Project Overview
      </Typography>

      <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
      A revolutionary text analysis software that deciphers the emotions and intentions behind client communications.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <InsightsIcon sx={{ fontSize: 50, color: '#3f51b5' }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                Actionable Insights
              </Typography>
              <Typography variant="body2" color="textSecondary">
                DeepPurple provides AI-powered emotional analysis, helping businesses understand client intentions on a deeper level.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 50, color: '#ff5722' }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                Boost Productivity
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Save time by automating text analysis and increase productivity by 30% with faster decision-making.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <TimelapseIcon sx={{ fontSize: 50, color: '#4caf50' }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                Save Time
              </Typography>
              <Typography variant="body2" color="textSecondary">
                DeepPurple reduces time spent on manual analysis, allowing businesses to focus on what matters most.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
}

export default Marketing;
