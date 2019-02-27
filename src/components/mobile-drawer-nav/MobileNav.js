import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";

import "./mobileNav.css";
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class MobileNav extends React.Component {
  state = {
    bottom: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const bottomList = (
      <div className={classes.fullList}>
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <div
          color="inherit"
          aria-label="Open drawer"
          onClick={this.toggleDrawer("bottom", true)}
          id="mobile_hamburger"
        >
          {this.state.bottom ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </div>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("bottom", false)}
            onKeyDown={this.toggleDrawer("bottom", false)}
          >
            {bottomList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MobileNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileNav);
