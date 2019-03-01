import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteCarousel from "../infinite-carousel/InfiniteCarousel";
import { getPopular } from "../../store/actions/movieActions";
class TopicCarousel extends Component {
  componentDidMount() {
    this.props.getPopular();
  }
  render() {
    const { popular } = this.props;

    return (
      <div className="upcoming-wrapper">
        <InfiniteCarousel filterTopics={popular} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  popular: state.movieReducer.popular
});

export default connect(
  mapStateToProps,
  { getPopular }
)(TopicCarousel);
