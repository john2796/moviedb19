import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./navbar.css";
import MobileNav from "../mobile-drawer-nav/MobileNav";
import NavListRight from "./NavListRight";
import NavbarSearch from "./NavbarSearch";
const styles = theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.root} id="navbar-desktop">
        <AppBar position="fixed" className="navbar">
          <Toolbar className="toolbar">
            <div className="nav-item">
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                <img
                  className="navbar-logo"
                  src="https://www.shareicon.net/download/2016/11/03/849428_movie_512x512.png"
                  alt="logo"
                />
              </Typography>
            </div>
            {/*============  search start ==============*/}
            <div className="nav-item search">
              <NavbarSearch />
            </div>
            {/*============  search end ==============*/}
            {/*============  navbar right icons start ==============*/}
            <div className="nav-item right-icons ">
              <NavListRight />
            </div>
            {/*============  navbar right icons ends ==============*/}
          </Toolbar>
        </AppBar>
      </div>
      {/*============ Mobile navbar start ==============*/}
      <MobileNav />
      {/*============ Mobile navbar ends ==============*/}
    </>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
