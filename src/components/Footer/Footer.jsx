import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "../Footer/Footer.css";
import Footerlogo from "../../assets/Media/FitEatsLogo2.png";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <CssBaseline />
      <Container>
        <div className="footer-content">
          <div>
            <Link to="/">
              {" "}
              <img src={Footerlogo} />
            </Link>
          </div>
          <div className="footer-links">
            <Link to="/BMICalculator">
              {" "}
              <Button>Bmi-calculator</Button>
            </Link>
            <br />
            <Link to="/BrowseFoods">
              {" "}
              <Button>Browse Foods</Button>
            </Link>
            <br />
          </div>

          <div className="footer-links">
            <Link to="/DietPlans">
              {" "}
              <Button>Diet Plan</Button>
            </Link>
            <br />
            <Link to="/contactPage">
              <Button>Contact-us</Button>
            </Link>
            <br />
            <Button>©2025 FitEats Inc.</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
