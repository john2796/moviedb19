import React, { Component } from "react";
import "./HomeMain.css";
import WOW from "wowjs";
import TopicHeader from "./TopicHeader";
import UpcomingCarousel from "../upcoming-carousel/UpcomingCarousel";
import PopularCarousel from "../popular-carousel/PopularCarousel";

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
        {/* upcoming title */}
        <TopicHeader name={"Upcoming"} />
        {/* upcoming carousel */}
        <UpcomingCarousel />

        <hr className="home-main-divider wow fadeIn" />
        <TopicHeader name={"Popular"} />
        <PopularCarousel />

        <hr className="home-main-divider wow fadeIn" />
        <TopicHeader name={"Now Playing"} />
        <hr className="home-main-divider wow fadeIn" />
        <TopicHeader name={"Top-Rated"} />
        <hr className="home-main-divider wow fadeIn" />
      </div>
    );
  }
}

export default HomeMain;
