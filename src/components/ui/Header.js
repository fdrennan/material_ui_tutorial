// Using Tabs
// https://stackoverflow.com/questions/37843495/material-ui-adding-link-component-from-react-router
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

// Personal addins
import logo from "../../assets/logo.svg";

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": { backgroundColor: "transparent" },
  },

  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  // console.log(window.location.pathname);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/services":
        setValue(1);
        break;
      case "/revolution":
        setValue(2);
        break;
      case "/about":
        setValue(3);
        break;
      case "/contact":
        setValue(4);
        break;
      case "/estimate":
        setValue(5);
        break;
      default:
        setValue(0);
    }
  }, [value]);

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true}>
            <Button
              disableRipple={true}
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                label="Home"
                to="/"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="Services"
                to="/services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="The Revolution"
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="About Us"
                to="about"
              />
              <Tab
                className={classes.tab}
                component={Link}
                label="Contact Us"
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
