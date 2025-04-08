import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import "../Header/bread-crumb.style.css";

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [recipeTitle, setRecipeTitle] = useState(null);

  const isRecipeDetailsPage =
    pathnames.length === 2 && pathnames[0].toLowerCase() === "meal";

  useEffect(() => {
    const fetchRecipeName = async () => {
      if (isRecipeDetailsPage) {
        const id = pathnames[1];
        try {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await res.json();
          if (data.meals && data.meals.length > 0) {
            setRecipeTitle(data.meals[0].strMeal);
          }
        } catch (err) {
          console.error("Error fetching recipe title", err);
        }
      }
    };

    fetchRecipeName();
  }, [location.pathname]);

  if (!isRecipeDetailsPage) return null;

  return (
    <div className="p-4" id="bread-crumbdiv">
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Link
          component={RouterLink}
          underline="hover"
          color="inherit"
          to="/BrowseFoods"
        >
          BrowseFoods
        </Link>
        <Typography color="text.primary">
          {recipeTitle || "Loading..."}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
