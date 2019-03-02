import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteCarousel from "../infinite-carousel/InfiniteCarousel";
import { getTopRated } from "../../store/actions/movieActions";
class TopicCarousel extends Component {
  componentDidMount() {
    this.props.getTopRated();
  }
  render() {
    const { topRated } = this.props;

    return (
      <div className="upcoming-wrapper">
        <InfiniteCarousel filterTopics={topRated} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topRated: state.movieReducer.topRated
});

export default connect(
  mapStateToProps,
  { getTopRated }
)(TopicCarousel);
