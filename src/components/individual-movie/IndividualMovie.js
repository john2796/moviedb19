import React, { Component } from 'react';
import './individualMovie.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUpcoming, getPopular, getNowPlaying, getTopRated, getGenres } from '../../store/actions/movieActions';


class IndividualMovie extends Component {
  componentDidMount() {

    const { tab, getPopular, getUpcoming, getNowPlaying, getTopRated, getGenres } = this.props
    if (tab === 'upcoming') {
      getUpcoming();
    } else if (tab === 'popular') {
      getPopular()
    } else if (tab === 'popular') {
      getNowPlaying()
    } else if (tab === 'topRated') {
      getTopRated()
    } else if (tab === 'genres') {
      getGenres()
    }
  }



  render() {
    const { match, upcoming, popular, nowPlaying, topRated, genres } = this.props
    const arr = [upcoming, popular, nowPlaying, topRated, genres].filter(x => x.length > 0).flat(1)
    const id = parseInt(match.params.id)
    const movie = arr.find((item) => item.id === id);

    console.log({ upcoming, popular, nowPlaying, topRated, genres })
    return (
      <div className="individual-movie-parent">
        <h1>{movie && movie.title}</h1>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  upcoming: state.movieReducer.upcoming,
  popular: state.movieReducer.popular,
  nowPlaying: state.movieReducer.nowPlaying,
  topRated: state.movieReducer.topRated,
  genres: state.movieReducer.genres,
});

export default connect(
  mapStateToProps,
  { getUpcoming, getPopular, getNowPlaying, getTopRated, getGenres }
)(withRouter(IndividualMovie));
