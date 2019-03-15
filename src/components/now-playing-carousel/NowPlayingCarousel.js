import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteCarousel from "../infinite-carousel/InfiniteCarousel";
import { getNowPlaying } from "../../store/actions/movieActions";

class NowPlayingCarousel extends Component {
  componentDidMount() {
    this.props.getNowPlaying();
  }
  render() {
    const { nowPlaying } = this.props;

    return (
      <div className="upcoming-wrapper">
        <InfiniteCarousel filterTopics={nowPlaying} tabs='nowPlaying' />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.movieReducer.nowPlaying
});

export default connect(
  mapStateToProps,
  { getNowPlaying }
)(NowPlayingCarousel);
