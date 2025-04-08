import * as React from "react";
import "../../Pages/home/HeroSection.css";
import HeroImage from "../../assets/Media//HeroSectionImg.png";
import Container from "@mui/material/Container";
import Tab from "../home/HomePgeTab";
import SelectField from "./SelectField";
//import AppStoreIcon from "../../assets/Media/download-on-the-app-store-apple-logo.svg";
//import PlayStorIcon from "../../assets/Media/google-play-badge-logo.svg";

export default function SimpleContainer() {
  return (
    <div id="home-page-wrapper">
      <div id="hero-section">
        <Container>
          <div className="hero-section-content">
            <h2>
              Put your diet on <br></br>
              <span>autopilot.</span>
            </h2>

            <p>
              Eat This Much creates personalized meal plans based on your food
              <br />
              preferences, budget, and schedule. Reach your diet and
              <br />
              nutritional goals with our calorie calculator, weekly meal
              <br />
              plans, grocery lists and more.
            </p>
          </div>

          <div className="hero-sec-image">
            <img src={HeroImage} />
          </div>
        </Container>
      </div>

      <div className="create-meal-plan-div">
        <h2>Create your meal plan right here in seconds</h2>

        <div id="call-plan-div">
          <h4>Preferred Diet</h4>
          <Tab />
          <SelectField />
        </div>
      </div>

      {/*<div className="download-app-section-wrapper">
        <h2>Available on Web, iOS, and Android</h2>
        <div className="app-play-div">
          <div>
            <img src={AppStoreIcon} />
          </div>
          <div>
            <img src={PlayStorIcon} />
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
