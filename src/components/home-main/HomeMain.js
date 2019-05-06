import React, { Component } from "react";
import { getGenres } from "../../store/actions/movieActions";
import { connect } from "react-redux";

import WOW from "wowjs";

import "./HomeMain.css";
import TopicHeader from "./TopicHeader";
import UpcomingCarousel from "../upcoming-carousel/UpcomingCarousel";
import PopularCarousel from "../popular-carousel/PopularCarousel";
import NowPlayingCarousel from "../now-playing-carousel/NowPlayingCarousel";
import TopRatedCarousel from "../top-rated-carousel/TopRatedCarousel";

class HomeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    this.props.getGenres();
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
        <NowPlayingCarousel />

        <hr className="home-main-divider wow fadeIn" />
        <TopicHeader name={"Top-Rated"} />
        <TopRatedCarousel />
        <hr className="home-main-divider wow fadeIn" />
      </div>
    );
  }
}

export default connect(
  null,
  { getGenres }
)(HomeMain);
