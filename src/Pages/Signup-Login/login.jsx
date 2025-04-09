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
        <Paper
          elevation={12}
          className="login-card"
          sx={{ background: "transparent" }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
            sx={{ ml: 1, color: "#fff" }}
          >
            Welcome Back 👋
          </Typography>
          <Typography
            variant="body2"
            align="center"
            mb={3}
            sx={{ ml: 1, color: "#fff" }}
          >
            New here?{" "}
            <Link href="/Signup" underline="hover" color="#1976d2">
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
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                    color: "#fff",
                    "& input": {
                      backgroundColor: "transparent",
                      color: "#fff",
                    },
                    "& fieldset": {
                      borderColor: "#fff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
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
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                        sx={{ color: "#fff" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                    color: "#fff",
                    "& input": {
                      backgroundColor: "transparent",
                      color: "#fff",
                    },
                    "& fieldset": {
                      borderColor: "#fff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />

              <Button
                id="Learn-More-Btn"
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
                  transition: "background 0.9s ease",
                  background:
                    "linear-gradient(90deg, #ff5ca4, #5af3ff, #5f5eff)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg,#5f5eff, #ff5ca4, #5af3ff)",
                    opacity: 0.9,
                  },
                }}
              >
                Log In
              </Button>

              <Box textAlign="center">
                <Link href="#" underline="hover" color="#fff">
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
            color="#fff"
          >
            By logging in, you agree to our{" "}
            <Link href="#" underline="hover" color="#1976d2">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" color="#1976d2">
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
