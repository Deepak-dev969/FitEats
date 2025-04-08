import * as React from "react";
import {
  CssBaseline,
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./bmicalculator.css";

export default function BMICalculator() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [bmi, setBMI] = React.useState(null);
  const [category, setCategory] = React.useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      const heightInMeters = h / 100;
      const bmiValue = (w / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 24.9) setCategory("Normal weight");
      else if (bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    } else {
      alert("Please enter positive numbers for weight and height.");
    }
  };

  const handleWeightChange = (e) => {
    const val = e.target.value;
    if (parseFloat(val) >= 0 || val === "") setWeight(val);
  };

  const handleHeightChange = (e) => {
    const val = e.target.value;
    if (parseFloat(val) >= 0 || val === "") setHeight(val);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Underweight":
        return <SentimentDissatisfiedIcon sx={{ color: "#ff9800", ml: 1 }} />;
      case "Normal weight":
        return <EmojiEmotionsIcon sx={{ color: "#4caf50", ml: 1 }} />;
      case "Overweight":
        return <FitnessCenterIcon sx={{ color: "#f44336", ml: 1 }} />;
      case "Obese":
        return (
          <SentimentVeryDissatisfiedIcon sx={{ color: "#d32f2f", ml: 1 }} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bmi-wrapper">
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper elevation={12} className="bmi-card">
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            fontWeight="bold"
          >
            <MonitorWeightIcon
              fontSize="large"
              sx={{ color: "#48A6A7", mr: 1 }}
            />
            BMI Calculator
          </Typography>

          <TextField
            label="Weight (kg)"
            fullWidth
            type="number"
            margin="normal"
            variant="outlined"
            value={weight}
            onChange={handleWeightChange}
            inputProps={{ min: 0 }}
          />
          <TextField
            label="Height (cm)"
            fullWidth
            type="number"
            margin="normal"
            variant="outlined"
            value={height}
            onChange={handleHeightChange}
            inputProps={{ min: 0 }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={calculateBMI}
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1rem",
              bgcolor: "#48A6A7",
              borderRadius: "25px",
              "&:hover": { bgcolor: "#3d9596" },
            }}
          >
            Calculate
          </Button>

          {bmi && (
            <Box mt={4} textAlign="center">
              <Typography variant="h6">Your BMI: {bmi}</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 1,
                  fontWeight: "medium",
                  color: categoryColor(category),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Category: {category}
                {getCategoryIcon(category)}
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </div>
  );
}

const categoryColor = (category) => {
  switch (category) {
    case "Underweight":
      return "#ff9800";
    case "Normal weight":
      return "#4caf50";
    case "Overweight":
      return "#f44336";
    case "Obese":
      return "#d32f2f";
    default:
      return "#000";
  }
};
