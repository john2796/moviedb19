import React, { Component } from "react";
import "./MovieTvSwitch.css";
import WOW from "wowjs";

class MovieTvSwitch extends Component {
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
      <div className="movie-tv-switch-container">
        <div className="movie-tv-buttons-container">
          <button class="switch-button wow fadeInDown" data-wow-delay="0.5s">
            Movies
          </button>
          <button class="switch-button wow fadeInDown" data-wow-delay="0.5s">
            TV Shows
          </button>
        </div>
      </div>
    );
  }
}

export default MovieTvSwitch;
