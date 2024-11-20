import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setSignUpSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(value) || "Please enter a valid email address";
  };

  const validateMobile = (value) => {
    const mobilePattern = /^[0-9]{10}$/; // Allow only 10 digits
    return mobilePattern.test(value) || "Please enter a valid 10-digit mobile number";
  };

  const validatePassword = (value) => {
    return value.length >= 8 || "Password must be at least 8 characters";
  };

  const validateConfirmPassword = (value) => {
    const password = watch("password");
    return value === password || "Passwords do not match";
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f4f4f9" }}>
      <Paper elevation={4} sx={{ padding: 4, width: 400, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold", color: "#3f51b5" }}>
          Sign Up
        </Typography>
        {!signUpSuccess ? (
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  {...register("email", {
                    required: "Email is required",
                    validate: validateEmail
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  sx={{ input: { fontSize: "16px" } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Mobile Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  {...register("mobile", {
                    required: "Mobile number is required",
                    validate: validateMobile
                  })}
                  error={Boolean(errors.mobile)}
                  helperText={errors.mobile?.message}
                  sx={{ input: { fontSize: "16px" } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  {...register("password", {
                    required: "Password is required",
                    validate: validatePassword
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  sx={{ input: { fontSize: "16px" } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: validateConfirmPassword
                  })}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword?.message}
                  sx={{ input: { fontSize: "16px" } }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    fontSize: "16px",
                    padding: "12px",
                    backgroundColor: "#3f51b5",
                    "&:hover": {
                      backgroundColor: "#303f9f"
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Box textAlign="center">
            <Typography variant="h6" color="primary" gutterBottom>
              Sign Up Successfully!
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/home"
              sx={{
                fontSize: "16px",
                padding: "8px 16px",
                borderColor: "#3f51b5",
                color: "#3f51b5",
                "&:hover": {
                  borderColor: "#303f9f",
                  color: "#303f9f"
                }
              }}
            >
              Back to Home
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default SignUpPage;
