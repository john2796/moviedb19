import React, { Component } from "react";
import { connect } from "react-redux";
import UpcomingInfiniteCarousel from "./UpcomingInfiniteCarousel";
import { getUpcoming } from "../../store/actions/movieActions";
import "./upcomingCarousel.css";
class TopicCarousel extends Component {
  componentDidMount() {
    this.props.getUpcoming();
  }
  render() {
    const { upcoming } = this.props;

    return (
      <div className="upcoming-wrapper">
        <UpcomingInfiniteCarousel upcoming={upcoming} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  upcoming: state.movieReducer.upcoming
});

export default connect(
  mapStateToProps,
  { getUpcoming }
)(TopicCarousel);
