import * as React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "../Header/Header.css";
import BrandImg from "../../assets/Media/FitEatsLogo2.png";
import { Link, useNavigate } from "react-router-dom";

export default function SimpleContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div id="Header">
      <CssBaseline />
      <Container
        maxWidth="sw"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="BrandImgdiv">
          <Link to="/">
            <img src={BrandImg} alt="FitEatsLogo" />
          </Link>
        </div>

        <div className="MenuOptions">
          <Stack spacing={2} direction="row">
            <Button id="NavLinks" variant="text">
              <Link to="/Bmicalculator">BMI Calculator</Link>
            </Button>
            <Button id="NavLinks" variant="text">
              <Link to="/BrowseFoods">Browse Foods</Link>
            </Button>
            <Button id="NavLinks" variant="text">
              <Link to="/DietPlans">Diet Plans</Link>
            </Button>
            <Button id="NavLinks" variant="text">
              <Link to="/contactPage">Contactus</Link>
            </Button>
          </Stack>
        </div>

        <div id="ContactBtnDiv">
          {!isLoggedIn ? (
            <>
              <Link to="/Signup">
                <Button id="SignUpBtn">Sign Up</Button>
              </Link>
              <Link to="/login">
                <Button id="SignInBtn">Already a member? Sign in</Button>
              </Link>
            </>
          ) : (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: "#48A6A7" }}>
                {localStorage.getItem("userCreds") &&
                  JSON.parse(
                    localStorage.getItem("userCreds")
                  ).email[0].toUpperCase()}
              </Avatar>
              <Button
                variant="outlined"
                color="error"
                onClick={handleLogout}
                sx={{ borderRadius: "20px" }}
              >
                Logout
              </Button>
            </Stack>
          )}
        </div>
      </Container>
    </div>
  );
}
