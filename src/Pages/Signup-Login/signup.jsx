import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  Container,
  Typography,
  Paper,
  FormControlLabel,
  Link,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../Signup-Login/signup.style.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribe: false,
  });

  const [errors, setErrors] = useState({});
  const [openTermsDialog, setOpenTermsDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    const updatedErrors = { ...errors };

    if (name === "password") {
      const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

      if (!value) {
        updatedErrors.password = "Password is required";
      } else if (!passwordRegex.test(value)) {
        updatedErrors.password =
          "Password must be 8+ characters and include uppercase, lowercase, number, and special character";
      } else {
        delete updatedErrors.password;
      }
    } else {
      delete updatedErrors[name];
    }

    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };

  const validateForm = () => {
    const {
      username,
      email,
      password,
      confirmPassword,
      agreeToTerms,
      subscribe,
    } = formData;
    const newErrors = {};
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 8+ characters and include uppercase, lowercase, number, and special character";
    }
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the Terms of Service";
    if (!subscribe)
      newErrors.subscribe = "Please opt-in to receive weekly emails";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { username, email, password } = formData;
    const userData = { username, email, password };
    localStorage.setItem("userCreds", JSON.stringify(userData));
    alert("Account created successfully!");

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      subscribe: false,
    });
    setErrors({});
  };

  const isFormValid = () => {
    const {
      username,
      email,
      password,
      confirmPassword,
      agreeToTerms,
      subscribe,
    } = formData;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return (
      username.trim() &&
      email.trim() &&
      passwordRegex.test(password) &&
      password === confirmPassword &&
      agreeToTerms &&
      subscribe
    );
  };

  return (
    <div className="signup-wrapper">
      <Container
        maxWidth="sm"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={6}
          sx={{
            borderRadius: 4,
            p: 4,
            width: "100%",
            background: "transparent",
            border: "1px solid #ccc",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Create Your Account
          </Typography>
          <Typography
            variant="body2"
            align="center"
            mb={3}
            sx={{ color: "#fff" }}
          >
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Log In
            </Link>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={0}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username || " "}
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                    color: "#fff",
                    "& input": {
                      backgroundColor: "transparent !important",
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
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email || " "}
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: 2,
                  "& fieldset": { border: "1px solid #fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      backgroundColor: "transparent",
                      borderColor: "#fff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                    color: "#fff",
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
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password || " "}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        sx={{ color: `#fff` }}
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
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword || " "}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        edge="end"
                        sx={{ color: `#fff` }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: 2,
                  "& fieldset": { border: "1px solid #fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      backgroundColor: "transparent",
                      borderColor: "#fff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "#fff" }}>
                    I agree to the{" "}
                    <Link
                      href="#"
                      underline="hover"
                      sx={{ color: "#1976d2f" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTermsDialog(true);
                      }}
                    >
                      Terms of Service
                    </Link>
                  </Typography>
                }
              />
              <div style={{ minHeight: "20px" }}>
                {errors.agreeToTerms && (
                  <Typography variant="caption" color="error" sx={{ ml: 1 }}>
                    {errors.agreeToTerms}
                  </Typography>
                )}
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "#fff" }}>
                    Send me a once-a-week email with meal ideas
                  </Typography>
                }
              />
              <div style={{ minHeight: "20px" }}>
                {errors.subscribe && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ ml: 1, color: "#fff" }}
                  >
                    {errors.subscribe}
                  </Typography>
                )}
              </div>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                id="Learn-More-Btn"
                disabled={!isFormValid()}
                sx={{
                  borderRadius: "15px",
                  background:
                    "linear-gradient(90deg, #ff5ca4, #5af3ff, #5f5eff)",
                  py: 1.2,
                  color: "#fff",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #5f5eff, #ff5ca4, #5af3ff)",
                    opacity: 0.9,
                  },
                }}
              >
                Create Account
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>

      <Dialog
        open={openTermsDialog}
        onClose={() => setOpenTermsDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent dividers>
          <ol style={{ paddingLeft: "1rem" }}>
            <li>You must be 18 years or older to use this service.</li>
            <li>Your account must be used for lawful purposes only.</li>
            <li>
              You are responsible for maintaining the confidentiality of your
              password.
            </li>
            <li>Do not share your account credentials with others.</li>
            <li>
              We reserve the right to terminate accounts for policy violations.
            </li>
            <li>
              Your data may be used to improve our services as outlined in our
              privacy policy.
            </li>
            <li>
              By registering, you agree to receive occasional communications
              from us.
            </li>
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTermsDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Signup;
