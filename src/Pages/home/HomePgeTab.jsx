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
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<img src={GrainIcon} alt="KETO" width="54" height="54" />}
            label="KETO"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <img src={SandwichIcon} alt="Anything" width="54" height="54" />
            }
            label="Anything"
            {...a11yProps(1)}
          />
          <Tab
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
            icon={<img src={ChickenLeg} alt="Paleo" width="54" height="54" />}
            label="Paleo"
            {...a11yProps(3)}
          />
          <Tab
            icon={<img src={VeganIcon} alt="Vegan" width="54" height="54" />}
            label="Vegan"
            {...a11yProps(4)}
          />
          <Tab
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
        Content for Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Content for Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Content for Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Content for Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Content for Item Five
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Content for Item Six
      </CustomTabPanel>
    </Box>
  );
}
