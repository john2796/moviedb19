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

import "./mobileNav.css";
import NavListRight from "../navbar/NavListRight";
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
    return (
      <div>
        <div color="inherit" id="mobile_hamburger">
          {this.state.bottom ? (
            <i
              className="fas fa-times"
              onClick={this.toggleDrawer("bottom", false)}
            />
          ) : (
            <i
              className="fas fa-bars"
              onClick={this.toggleDrawer("bottom", true)}
            />
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
            className="drawer-mobile"
          >
            {/* {bottomList} */}
            <NavListRight />
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
