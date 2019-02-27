import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});
const NavLogo = ({ classes }) => {
  return (
    <>
      <Typography className={classes.title} variant="h6" color="inherit" noWrap>
        <img
          className="navbar-logo"
          src="https://www.shareicon.net/download/2016/11/03/849428_movie_512x512.png"
          alt="logo"
        />
      </Typography>
    </>
  );
};

export default withStyles(styles)(NavLogo);
