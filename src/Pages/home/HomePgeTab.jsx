import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GrainIcon from "../../assets/Media/GrainIcon.png";
import SandwichIcon from "../../assets/Media/Sandwich.png";
import BlueberriesIcon from "../../assets/Media/BlueberriesIcon.png";
import ChickenLeg from "../../assets/Media/ChickenLeg.png";
import VeganIcon from "../../assets/Media/VeganIcon.png";
import BrocolliIcon from "../../assets/Media/Brocolli.png";
import AvacadoIcon from "../../assets/Media/AvacadoIcon.png";
import "../home/hometab.style.css";
import { Padding } from "@mui/icons-material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={{ color: "#fff" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ color: "#fff" }}
            icon={<img src={GrainIcon} alt="KETO" width="54" height="54" />}
            label="KETO"
            {...a11yProps(0)}
          />
          {/* <Tab
            icon={
              <img src={SandwichIcon} alt="Anything" width="54" height="54" />
            }
            label="Anything"
            {...a11yProps(1)}
          />*/}
          <Tab
            sx={{ color: "#fff" }}
            icon={
              <img
                src={BlueberriesIcon}
                alt="Mediterranean"
                width="54"
                height="54"
              />
            }
            label="Mediterranean"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ color: "#fff" }}
            icon={<img src={ChickenLeg} alt="Paleo" width="54" height="54" />}
            label="Paleo"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ color: "#fff" }}
            icon={<img src={VeganIcon} alt="Vegan" width="54" height="54" />}
            label="Vegan"
            {...a11yProps(4)}
          />
          <Tab
            sx={{ color: "#fff" }}
            icon={
              <img
                src={BrocolliIcon}
                alt="BrocolliIcon"
                width="54"
                height="54"
              />
            }
            label="Vegetarian"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h5 className="Tab-content">
          A low-carbohydrate, high-fat diet designed to shift the body into a
          state of ketosis, where fat becomes the primary source of
          energy—commonly used for weight management, improved mental clarity,
          and sustained energy levels.
        </h5>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h5 className="Tab-content">
          A balanced, heart-healthy diet that is rich in a variety of fresh
          fruits, colorful vegetables, nutrient-dense fish, and wholesome olive
          oil helps support overall wellness and reduce the risk of
          cardiovascular diseases.
        </h5>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h5 className="Tab-content">
          Replicates the essence of ancient diets by focusing on whole, natural
          foods—completely free from processed ingredients, refined sugars, and
          grains.
        </h5>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h5 className="Tab-content">
          Excludes all animal products, focusing entirely on plant-based foods
          to promote better health, support environmental sustainability, and
          uphold ethical treatment of animals.
        </h5>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h5 className="Tab-content">
          Following a plant-based diet that includes dairy and eggs, while
          avoiding meat for both health benefits and ethical reasons, promoting
          overall well-being and compassion toward animals.
        </h5>
      </CustomTabPanel>
    </Box>
  );
}
