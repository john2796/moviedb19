import React, { Component } from "react";
import "./HomeMain.css";
import WOW from "wowjs";

class TopicCarousel extends Component {
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
      <div className="home-main-topic-container wow fadeIn">
        <h2 className="home-main-h2">{this.props.name}</h2>
      </div>
    );
  }
}

export default TopicCarousel;
