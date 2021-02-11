import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RemoteControl from "./components/RemoteControl";
import AppsControl from "./components/AppsControl";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  appBar: {
    marginBottom: "10px"
  }
});

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Remote" {...a11yProps(0)} />
          <Tab label="Apps" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <RemoteControl />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AppsControl />
      </TabPanel>
    </div>
  );
}

export default App;
