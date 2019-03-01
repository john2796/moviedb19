import React, { Component } from "react";
import "./HomeMain.css";
import WOW from "wowjs";
import { connect } from "react-redux";
import { getUpcoming } from "../../store/actions/movieActions";

class TopicCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    this.props.getUpcoming();
  }
  render() {
    return (
      <div className="home-main-topic-container wow fadeIn">
        <h2 className="home-main-h2">{this.props.name}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateName: state.stateName
});

export default connect(
  mapStateToProps,
  { getUpcoming }
)(TopicCarousel);
