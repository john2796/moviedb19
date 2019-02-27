import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { withStyles } from "@material-ui/core/styles";

import "./navbar.css";
import MobileNav from "../mobile-drawer-nav/MobileNav";
import NavListRight from "./NavListRight";
import NavbarSearch from "./NavbarSearch";
import NavLogo from "./NavLogo";
const styles = theme => ({
  root: {
    width: "100%"
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.root} id="navbar-desktop">
        <AppBar position="fixed" className="navbar">
          <Toolbar className="toolbar">
            <div className="nav-item mobile-item">
              <NavLogo />
            </div>
            <div className="nav-item search mobile-item">
              <NavbarSearch />
            </div>
            <div className="nav-item right-icons ">
              <NavListRight />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <MobileNav />
    </>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
