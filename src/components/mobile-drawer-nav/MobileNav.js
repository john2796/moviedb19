import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import "./mobileNav.css";
import NavListRight from "../navbar/NavListRight";
import NavLogo from "../navbar/NavLogo";
import NavbarSearch from "../navbar/NavbarSearch";
import WOW from "wowjs";
import { SpinReverse } from "react-burgers";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class MobileNav extends Component {
  state = {
    isOpen: false
  };

  // componentDidMount() {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }

  // toggleDrawer = (side, open) => () => {
  //   this.setState({
  //     [side]: open
  //   });
  //   const wow = new WOW.WOW();
  //   wow.init();
  // };
  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    const wow = new WOW.WOW();
    wow.init();
  };
  render() {
    return (
      <div>
        <div color="inherit" id="mobile_hamburger">
          <SpinReverse
            onClick={this.toggleDrawer}
            active={this.state.isOpen}
            color="#ffff"
          />
        </div>
        <Drawer
          variant="persistent"
          anchor="bottom"
          open={this.state.isOpen}
          onClose={this.toggleDrawer}
        >
          <div
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
            className="drawer-mobile"
          >
            <NavListRight />
          </div>
        </Drawer>
        <Drawer
          variant="persistent"
          anchor="top"
          open={this.state.isOpen}
          onClose={this.toggleDrawer}
        >
          <div role="button" className="drawer-mobile-leftsection">
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
