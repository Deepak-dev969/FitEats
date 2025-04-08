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
              <svg
                width="200"
                height="60"
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#ff5ca4" />
                    <stop offset="50%" stop-color="#5af3ff" />
                    <stop offset="100%" stop-color="#5f5eff" />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="65"
                  font-family="Arial, sans-serif"
                  font-size="60"
                  font-weight="bold"
                  fill="url(#gradient)"
                >
                  FitEats
                </text>
              </svg>
              {/*
              {" "}
              <img src={Footerlogo} />*/}
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
