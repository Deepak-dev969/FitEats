import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();

        if (data.meals?.length > 0) {
          const meal = data.meals[0];
          const ingredients = [];

          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient?.trim()) {
              ingredients.push(`${measure} ${ingredient}`);
            }
          }

          setRecipe({
            title: meal.strMeal,
            image: meal.strMealThumb,
            instructions: meal.strInstructions,
            ingredients,
          });
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f5f5f5"
      >
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  if (!recipe) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f5f5f5"
      >
        <Typography variant="h6" color="text.secondary">
          Oops! Recipe not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box bgcolor="#eaefee" minHeight="100vh" py={6}>
      <Container maxWidth="md">
        <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
          <CardMedia
            component="img"
            height={isMobile ? 200 : 400}
            image={recipe.image}
            alt={recipe.title}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {recipe.title}
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={600}
              mt={4}
              gutterBottom
            >
              Ingredients
            </Typography>
            <List dense disablePadding>
              {recipe.ingredients.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={600}
              mt={4}
              gutterBottom
            >
              Instructions
            </Typography>
            <Typography
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.8,
                color: "text.primary",
              }}
            >
              {recipe.instructions || "No instructions available."}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
