import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../DietPlansPage/DietPlan.style.css";
import OrangeApple from "../../assets/Media/orange-teach.DNsGp0B4.png";
import Button from "@mui/material/Button";
import GrainIcon from "../../assets/Media/GrainIcon.png";
import SandwichIcon from "../../assets/Media/Sandwich.png";
import BlueberriesIcon from "../../assets/Media/BlueberriesIcon.png";
import ChickenLeg from "../../assets/Media/ChickenLeg.png";
import VeganIcon from "../../assets/Media/VeganIcon.png";
import BrocolliIcon from "../../assets/Media/Brocolli.png";
import AvacadoIcon from "../../assets/Media/AvacadoIcon.png";
import MeatSteak from "../../assets/Media/Meat-Stick.png";
import Mattar from "../../assets/Media/Mattar.png";
import { Link, useNavigate } from "react-router-dom";
import Leaf from "../../assets/Media/Leaf.png";

export default function FixedContainer() {
  return (
    <div id="diet-plan-wrapper">
      <React.Fragment>
        <CssBaseline />
        <Container>
          <div className="Diet-Plan-content">
            <h1>The Types of Diets We Support</h1>
            <div className="hero-section-para">
              <p>
                Eat This Much supports almost any type of diet you can think of.
                Our goal is to help you eat the way you want, and in the right
                amounts, NOT to tell you the "right" way to eat.
                <br />
                <br /> We support a handful of preset diet types to configure
                the settings for you and make it quicker to get started. Here,
                we break down some basics about each diet type, but don't let
                these limit your imagination.
                <br />
                <br />
                <b>
                  Not looking to read a wall of text? Just jump right in with
                  the generator.
                </b>
              </p>
              <div className="hero-section-imgdiv">
                <img src={OrangeApple} />
              </div>
            </div>

            <div className="Diet-Plan-Section">
              <h3>Which type of diet should you follow?</h3>
              <p>
                <b>The best diet is the one you will stick to.</b> You will
                almost always lose weight if you eat fewer calories than you
                burn, and gain weight if you do the opposite. Different eating
                styles, however, can make it easier to reach your goals. Low
                carb eating styles such as Keto and Paleo can make it much
                easier to feel full, and thus eat fewer calories. But if you're
                good about controlling your portioning, it's less necessary to
                restrict your food choices, and you may have an easier time
                sticking to your plan.
                <br />
                <br /> Everyone is different, so the best thing you can do is
                experiment and see what works for you. Eat This Much is a tool
                to make the process easy.
              </p>
              <div className="BtndDiv">
                <Link to="/contactPage">
                  {" "}
                  <Button id="Learn-More-Btn">Learn More</Button>
                </Link>
                <Link to="/Signup">
                  <Button id="Start-Free-Btn">Start A free Account</Button>
                </Link>
              </div>
            </div>

            <div className="Diet-Plan-Section">
              <h3>Features of Eat This Much</h3>
              <ul>
                <li>
                  Follow any eating style or create your own. You can customize
                  popular eating styles like vegan and paleo to match your needs
                  and preferences.
                  <li>
                    Detailed nutrition information for each ingredient, recipe,
                    and meal. Easily track vitamins, minerals, and
                    macronutrients as you follow your plan, and add your own
                    foods to track your intake as you follow along.
                  </li>
                  <li>
                    Take the anxiety out of picking what to eat. With a meal
                    plan, you make the important decisions ahead of time and on
                    your own schedule. Then there's nothing to worry about when
                    it's meal time.
                  </li>
                </li>
              </ul>
            </div>

            <div className="Diet-Plan-Section">
              <div className="heading">Types Of Diets </div>

              <div className="container">
                <div className="grid">
                  <div className="diet-card">
                    <img src={GrainIcon} alt="Keto" />
                    <div className="diet-info">
                      <h3>Keto</h3>
                      <p>
                        Low-carb, high-fat diet focusing on ketosis for energy
                        and weight management.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={VeganIcon} alt="Vegan" />
                    <div className="diet-info">
                      <h3>Vegan</h3>
                      <p>
                        Excludes all animal products, emphasizing plant-based
                        foods for health and ethics.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={BrocolliIcon} alt="Vegetarian" />
                    <div className="diet-info">
                      <h3>Vegetarian</h3>
                      <p>
                        Plant-based diet including dairy and eggs, avoiding meat
                        for health and ethics.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={ChickenLeg} alt="Paleo" />
                    <div className="diet-info">
                      <h3>Paleo</h3>
                      <p>
                        Emulates ancient diet with whole foods, free of
                        processed items and grains.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={BlueberriesIcon} alt="Mediterranean" />
                    <div className="diet-info">
                      <h3>Mediterranean</h3>
                      <p>
                        Rich in fruits, vegetables, fish, and olive oil for a
                        balanced, heart-healthy diet.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={AvacadoIcon} alt="Low Carb" />
                    <div className="diet-info">
                      <h3>Low Carb</h3>
                      <p>
                        Reduces carbohydrate intake, focusing on proteins and
                        fats for energy.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={Mattar} alt="Low Fat" />
                    <div className="diet-info">
                      <h3>Low Fat</h3>
                      <p>
                        Limits fat consumption, emphasizing lean proteins,
                        grains, and vegetables.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={MeatSteak} alt="High Protein" />
                    <div className="diet-info">
                      <h3>High Protein</h3>
                      <p>
                        Prioritizes protein intake for muscle growth and repair,
                        with balanced nutrients.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={Leaf} alt="Gluten Free" />
                    <div className="diet-info">
                      <h3>Gluten Free</h3>
                      <p>
                        Avoids gluten, suitable for celiac or gluten
                        sensitivity, focusing on alternative grains.
                      </p>
                    </div>
                  </div>

                  <div className="diet-card">
                    <img src={SandwichIcon} alt="Other" />
                    <div className="diet-info">
                      <h3>Other</h3>
                      <p>
                        Includes Whole30, Low FODMAP, Pescatarian, and more diet
                        plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}
