import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState(false); // For email validation error

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError(true); // Show error for invalid email
      return;
    }

    setEmailError(false); // Clear email error if valid

    if (email && password) {
      setSuccessMessage(true); // Show success message
      console.log('Login button clicked!');

      // Delay navigation to home page by 5 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      console.log('Please fill in all fields');
    }
  };

  const handleSignIn = () => {
    navigate('/signin'); // Navigate to the Sign In page
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked!');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(false);
  };

  return (
    <React.Fragment>
       
    <Container maxWidth="xs" style={{ marginTop: '110px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 4,
          padding: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h5" component="h1" sx={{ marginBottom: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError} // Show red outline on error
            helperText={emailError ? 'Please enter a valid email address' : ''} // Error message
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>

        {/* Actions Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 2,
          }}
        >
          <Button variant="text" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button variant="text" onClick={handleForgotPassword}>
            Forgot Password
          </Button>
          <Button variant="text" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </Box>
      </Box>

      {/* Snackbar for Success Message */}
      <Snackbar
        open={successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioned at the top-center
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Login saved successfully! 
        </Alert>
      </Snackbar>
    </Container>
    </React.Fragment>
  );
};

export default Login;
