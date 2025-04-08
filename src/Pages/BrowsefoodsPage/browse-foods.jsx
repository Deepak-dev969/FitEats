import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
} from "@mui/material";
import "../BrowsefoodsPage/browse-food.style.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function BrowseFoods() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [category, setCategory] = useState("All Meals");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.meals) {
          const items = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory || "Uncategorized",
            area: meal.strArea || "Unknown",
            instructions: meal.strInstructions || "No instructions available.",
          }));

          setMeals(items);
          setFilteredMeals(items);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching meals:", err);
        setLoading(false);
      }
    }

    fetchMeals();
  }, []);

  useEffect(() => {
    let filtered = meals;

    if (search) {
      filtered = filtered.filter((meal) =>
        meal.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All Meals") {
      filtered = filtered.filter((meal) => meal.category === category);
    }

    setFilteredMeals(filtered);
  }, [search, category, meals]);

  return (
    <div id="Browse-Foods-Wrapper">
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: "2rem",
          flexDirection: "column",
        }}
      >
        <div className="Heading-Browse-foods">
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Browse Meals
          </Typography>

          {/* Filters */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            mb={4}
          >
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ minWidth: 150, color: "#fff", borderColor: "#fff" }}
            >
              <MenuItem value="All Meals">All Meals</MenuItem>
              {[...new Set(meals.map((m) => m.category))].map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>

            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
        </div>

        {/* Loader */}
        {loading ? (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            height="50vh"
          >
            <CircularProgress size={60} thickness={5} />
          </Box>
        ) : (
          <div className="cards-container">
            {filteredMeals.map((meal) => (
              <Card
                sx={{
                  bgcolor: "transparent",
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                }}
                className="single-card"
                onClick={() => navigate(`/meal/${meal.id}`)}
              >
                <CardMedia
                  component="img"
                  image={meal.image}
                  alt={meal.name}
                  height="180"
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    noWrap
                    sx={{ color: "#fff" }}
                  >
                    {meal.name}
                  </Typography>
                  <Chip
                    label={meal.category}
                    size="small"
                    sx={{
                      mb: 1,
                      background:
                        "linear-gradient(90deg, #ff5ca4, #5af3ff, #5f5eff)",
                      color: "#fff",
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#fff" }}
                  >
                    <strong>Area:</strong> {meal.area}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      color: "#fff",
                    }}
                  >
                    {meal.instructions}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
