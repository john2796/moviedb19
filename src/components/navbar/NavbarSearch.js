import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  grow: {
    flexGrow: 1
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

const NavbarSearch = ({ classes }) => {
  return (
    <React.Fragment>
      <div className={classes.grow} />
      <div className={classes.search} id="searching">
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
    </React.Fragment>
  );
};

export default withStyles(styles)(NavbarSearch);
