import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import './Admin.css';
import { 
  Box, Button, TextField, Select, MenuItem, Typography, Container, 
  List, ListItem, ListItemIcon, ListItemText, Divider, CircularProgress 
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
const region = process.env.REACT_APP_REGION;
const bucketName = process.env.REACT_APP_BUCKET_NAME;

function Admin() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState('meeting-minutes');
  const [uploadedFiles, setUploadedFiles] = useState({
    'meeting-minutes': [],
    'project-schedules': [],
    'diaries': [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  AWS.config.update({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  });

  const s3 = new AWS.S3();

  // Function to fetch files from S3 for a specific category
  const fetchFiles = (category) => {
    setLoading(true); // Set loading state
    const params = {
      Bucket: bucketName,
      Prefix: `${category}/`,
    };

    s3.listObjectsV2(params, (err, data) => {
      setLoading(false); // Reset loading state
      if (err) {
        setError(err.message); // Set error message
        console.error('Error fetching files:', err);
      } else {
        const fileUrls = data.Contents.map((file) => `https://${bucketName}.s3.${region}.amazonaws.com/${file.Key}`);
        setUploadedFiles((prevFiles) => ({
          ...prevFiles,
          [category]: fileUrls,
        }));
      }
    });
  };

  // Fetch files when the component loads
  useEffect(() => {
    ['meeting-minutes', 'project-schedules', 'diaries'].forEach((cat) => fetchFiles(cat));
  }, []);

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleUpload = () => {
    if (!selectedFile) return alert('Please select a file to upload.');

    const params = {
      Bucket: bucketName,
      Key: `${category}/${selectedFile.name}`,
      Body: selectedFile,
    };

    setLoading(true); // Set loading state
    s3.upload(params, (err, data) => {
      setLoading(false); // Reset loading state
      if (err) {
        setError(err.message); // Set error message
        console.error('Error uploading file:', err);
      } else {
        alert('File uploaded successfully!');
        fetchFiles(category); // Refresh the file list after upload
      }
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Administrative Updates</Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      
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
          disabled={loading} // Disable button while loading
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
                <ListItemText primary={fileUrl.split('/').pop()} className="uploaded-file-text" /> {/* Apply the new class */}
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
