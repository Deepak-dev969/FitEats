import logo from "./logo.svg";
import "./App.css";
import CustomBreadcrumbs from "./components/Header/Breadcrumb";
import Home from "./Pages/home/Home";
import DietPlans from "./Pages/DietPlansPage/DietPlan";
import BmiCalculator from "./Pages/BMICalculatorPage/BMICalculator";
import BrowseFoods from "./Pages/BrowsefoodsPage/browse-foods";
import Header from "./components/Header/Header";
import Signup from "./Pages/Signup-Login/signup";
import Login from "./Pages/Signup-Login/login";
import ContactForm from "./Pages/contact-page/contact-page";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealDetails from "./Pages/RecipeSectionPage/MealDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main id="Main" className="flex-grow mt-16">
          <CustomBreadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BMICalculator" element={<BmiCalculator />} />
            <Route path="/BrowseFoods" element={<BrowseFoods />} />
            <Route path="/DietPlans" element={<DietPlans />} />
            <Route path="/meal/:id" element={<MealDetails />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/contactPage" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
