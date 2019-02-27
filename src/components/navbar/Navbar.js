import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "./navbar.css";
import MobileNav from "../mobile-drawer-nav/MobileNav";
const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#ffff",
    height: "39px",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#EB4E7A",
    height: " 40px",
    width: " 80px",
    marginLeft: "-2px",
    borderRadius: " 20px",
    right: -20
  },
  inputRoot: {
    color: "black",
    width: "100%",

    lineHeight: 1.5
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    borderRadius: "10%",
    [theme.breakpoints.up("sm")]: {
      width: 200,
      "&:focus": {
        width: 250
      }
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
            <div className="nav-item search">
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </div>

            <div className="nav-item right-icons">
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                <i className="fas fa-home" />
              </Typography>{" "}
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                <i className="fas fa-user-circle" />
              </Typography>{" "}
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                <i className="fas fa-compass" />
              </Typography>
            </div>
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
