import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

const NavListRight = ({ classes }) => {
  return (
    <React.Fragment>
      <Typography
        className={`${classes.title} wow fadeInRight`}
        data-wow-delay=".6s"
        variant="h6"
        color="inherit"
        noWrap
      >
        <i className="fas fa-home" />
      </Typography>{" "}
      <Typography
        className={`${classes.title} wow fadeInRight`}
        data-wow-delay=".7s"
        variant="h6"
        color="inherit"
        noWrap
      >
        <i className="fas fa-user-circle" />
      </Typography>{" "}
      <Typography
        className={`${classes.title} wow fadeInRight`}
        data-wow-delay=".8s"
        variant="h6"
        color="inherit"
        noWrap
      >
        <i className="fas fa-compass" />
      </Typography>
    </React.Fragment>
  );
};

export default withStyles(styles)(NavListRight);
