import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactIcon from "../../assets/Media/Contac-Page-Icon.png";
import "../contact-page/contact.style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (dummy alert)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 5,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          borderRadius: "40px",
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#ffffff",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ flex: 1, p: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#3f3d56",
              mb: 1,
              width: "30vw",
              fontFamily: "Segoe UI",
            }}
          >
            Let’s talk
          </Typography>
          <Typography sx={{ color: "#6f6f6f", mb: 4, fontFamily: "Segoe UI" }}>
            Have questions, feedback or just want to say hello? Fill out the
            form below and we’ll get back to you soon.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "30vw" }}>
            <TextField
              fullWidth
              placeholder="Your Name"
              name="name"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              sx={{
                backgroundColor: "#f5f8ff",
                borderRadius: 2,
                "& fieldset": { border: "1px solid #e0e0e0" },
              }}
            />
            <TextField
              fullWidth
              placeholder="Your Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              sx={{
                backgroundColor: "#f5f8ff",
                borderRadius: 2,
                "& fieldset": { border: "1px solid #e0e0e0" },
              }}
            />
            <TextField
              fullWidth
              placeholder="Type your message..."
              name="message"
              multiline
              rows={5}
              variant="outlined"
              margin="normal"
              value={formData.message}
              onChange={handleChange}
              sx={{
                backgroundColor: "#f5f8ff",
                borderRadius: 2,
                "& fieldset": { border: "1px solid #e0e0e0" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "30px",
                background: "linear-gradient(90deg, #ff5ca4, #5af3ff, #5f5eff)",
                boxShadow: "0 6px 25px rgba(106, 17, 203, 0.35)",
                transition: "0.7s",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #ff5ca4, #5af3ff, #5f5eff)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: { xs: 4, md: 6 },
            background: "#fafafa",
          }}
        >
          <img
            src={ContactIcon}
            alt="Contact Illustration"
            style={{
              maxWidth: "100%",
              height: "auto",
              marginBottom: 30,
            }}
          />
          <Typography
            sx={{
              color: "#111",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              gap: 1,
              mb: 1,
              fontFamily: "Segoe UI",
            }}
          >
            <LocationOnIcon /> 114th Floor 9A, Cyber City, DLF Cyber City, DLF
            Phase 2, Sector 24, Gurugram, Haryana
          </Typography>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#111",
              display: "flex",
              textAlign: "left",
              alignItems: "center",
              gap: 1,
              mb: 1,
            }}
          >
            <PhoneIcon /> 0124 456 8900
          </Typography>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#111",
              display: "flex",
              textAlign: "left",
              alignItems: "center",
              gap: 1,
              mb: 3,
            }}
          >
            <EmailIcon /> info@appbulls.com
          </Typography>
          <Box display="flex" flexDirection="row" gap={2}>
            <FacebookIcon sx={{ color: "#3b5998", fontSize: 30 }} />
            <TwitterIcon sx={{ color: "#00acee", fontSize: 30 }} />
            <InstagramIcon sx={{ color: "#C13584", fontSize: 30 }} />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;
