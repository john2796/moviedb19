import React, { Component } from "react";
import { connect } from "react-redux";
import { getUpcoming } from "../../store/actions/movieActions";

class TopicCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUpcoming();
  }
  render() {
    return (
      <div className="home-main-topic-container wow fadeIn">upcoming cards</div>
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
