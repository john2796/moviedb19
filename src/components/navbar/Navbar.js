import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import WOW from "wowjs";
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

class Navbar extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root} id="navbar-desktop">
          <AppBar position="fixed" className="navbar">
            <Toolbar className="toolbar">
              <div
                className="nav-item mobile-item wow fadeInLeft"
                data-wow-delay=".6s"
              >
                <NavLogo />
              </div>
              <div
                className="nav-item search mobile-item wow bounceIn"
                data-wow-delay=".8s"
              >
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
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
