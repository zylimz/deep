import React, { useState } from 'react';
import AWS from 'aws-sdk';
import './Admin.css';
import { 
  Box, Button, TextField, Select, MenuItem, Typography, Container, 
  List, ListItem, ListItemIcon, ListItemText, Divider 
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Admin() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState('meeting-minutes');
  const [uploadedFiles, setUploadedFiles] = useState({
    'meeting-minutes': [],
    'project-schedules': [],
    'diaries': [],
  });

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_REGION,
  });

  const s3 = new AWS.S3({ params: { Bucket: process.env.REACT_APP_BUCKET_NAME } });

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleUpload = () => {
    if (!selectedFile) return alert('Please select a file to upload.');

    const params = {
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      Key: `${category}/${selectedFile.name}`,
      Body: selectedFile,
    };

    s3.upload(params, (err, data) => {
      if (err) console.error('Error uploading file:', err);
      else {
        alert('File uploaded successfully!');
        setUploadedFiles((prevFiles) => ({
          ...prevFiles,
          [category]: [...prevFiles[category], data.Location],
        }));
      }
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Administrative Updates</Typography>

      <Box sx={{ mb: 3 }}>
        <Select
          value={category}
          onChange={handleCategoryChange}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        >
          <MenuItem value="meeting-minutes">Meeting Minutes</MenuItem>
          <MenuItem value="project-schedules">Project Schedule</MenuItem>
          <MenuItem value="diaries">Individual Reflective Diaries</MenuItem>
        </Select>

        <TextField
          type="file"
          onChange={handleFileChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          fullWidth
          startIcon={<UploadFileIcon />}
        >
          Upload
        </Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>Uploaded Files</Typography>

      <List>
        {['meeting-minutes', 'project-schedules', 'diaries'].map((cat) => (
          <Box key={cat} sx={{ mb: 2 }}>
            <Typography variant="h6">{cat.replace('-', ' ')}</Typography>
            {uploadedFiles[cat].length > 0 ? (
              uploadedFiles[cat].map((fileUrl, index) => (
                <ListItem key={index} button component="a" href={fileUrl} target="_blank">
                  <ListItemIcon>
                    <UploadFileIcon />
                  </ListItemIcon>
                  <ListItemText primary={fileUrl.split('/').pop()} />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No files uploaded yet.
              </Typography>
            )}
          </Box>
        ))}
      </List>
    </Container>
  );
}

export default Admin;
