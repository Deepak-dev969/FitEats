import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  Divider,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../Signup-Login/login.style.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userCreds"));

    if (
      storedUser &&
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/";
    } else {
      alert("Invalid credentials.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-wrapper">
      <Container
        maxWidth="sm"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper elevation={12} className="login-card">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Welcome Back 👋
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            New here?{" "}
            <Link href="/Signup" underline="hover" color="#48A6A7">
              Create an account
            </Link>
          </Typography>

          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<LoginIcon />}
                sx={{
                  py: 1.5,
                  borderRadius: "30px",
                  bgcolor: "#48A6A7",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#3e9596",
                  },
                }}
              >
                Log In
              </Button>

              <Box textAlign="center">
                <Link href="#" underline="hover" color="text.secondary">
                  Forgot your password?
                </Link>
              </Box>
            </Stack>
          </form>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="caption"
            display="block"
            align="center"
            color="text.secondary"
          >
            By logging in, you agree to our{" "}
            <Link href="#" underline="hover" color="text.primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" color="text.primary">
              Privacy Policy
            </Link>
            .
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
