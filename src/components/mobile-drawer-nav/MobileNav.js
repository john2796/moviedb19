import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import "./mobileNav.css";
import NavListRight from "../navbar/NavListRight";
import NavLogo from "../navbar/NavLogo";
import NavbarSearch from "../navbar/NavbarSearch";
import WOW from "wowjs";
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

  // componentDidMount() {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
    const wow = new WOW.WOW();
    wow.init();
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
          variant="persistent"
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <div
            // tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("bottom", false)}
            onKeyDown={this.toggleDrawer("bottom", false)}
            className="drawer-mobile"
          >
            {/* {bottomList} */}

            <NavListRight />
          </div>
        </Drawer>
        <Drawer
          variant="persistent"
          anchor="top"
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
        >
          <div
            // tabIndex={0}
            role="button"
            // onClick={this.toggleDrawer("bottom", false)}
            // onKeyDown={this.toggleDrawer("bottom", false)}
            className="drawer-mobile-leftsection"
          >
            {/* {bottomList} */}

            <div
              className="inner-mobile-topnav wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <NavLogo />
              <NavbarSearch />
            </div>
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
