import React, { Component } from "react";
import TopicCarousel from "./TopicCarousel";
import "./HomeMain.css";
import WOW from "wowjs";

class HomeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className="home-main-container">
        <TopicCarousel name={"Upcoming"} />
        <hr className="home-main-divider wow fadeIn" />
        <TopicCarousel name={"Popular"} />
        <hr className="home-main-divider wow fadeIn" />
        <TopicCarousel name={"Now Playing"} />
        <hr className="home-main-divider wow fadeIn" />
        <TopicCarousel name={"Top-Rated"} />
        <hr className="home-main-divider wow fadeIn" />
      </div>
    );
  }
}

export default HomeMain;
