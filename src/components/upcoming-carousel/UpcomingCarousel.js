import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteCarousel from "../infinite-carousel/InfiniteCarousel";
import { getUpcoming } from "../../store/actions/movieActions";
class TopicCarousel extends Component {
  componentDidMount() {
    this.props.getUpcoming();
  }
  render() {
    const { upcoming } = this.props;

    return (
      <div className="upcoming-wrapper">
        <InfiniteCarousel filterTopics={upcoming} tabs='upcoming' />
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
