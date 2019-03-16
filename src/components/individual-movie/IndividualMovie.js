import React, { Component } from 'react';
import './individualMovie.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUpcoming, getPopular, getNowPlaying, getTopRated, getGenres } from '../../store/actions/movieActions';


class IndividualMovie extends Component {
  componentDidMount() {
    const { tab, getPopular, getUpcoming, getNowPlaying, getTopRated, getGenres } = this.props
    if (tab === 'upcoming') {
      return getUpcoming();
    } else if (tab === 'popular') {
      return getPopular()
    } else if (tab === 'nowPlaying') {
      return getNowPlaying()
    } else if (tab === 'topRated') {
      return getTopRated()
    } else if (tab === 'genres') {
      return getGenres()
    }
  }



  render() {
    const { match, upcoming, popular, nowPlaying, topRated, genres } = this.props
    const arr = [upcoming, popular, nowPlaying, topRated, genres].filter(x => x.length > 0).flat(1)
    const id = parseInt(match.params.id)
    const movie = arr.find((item) => item.id === id);
    console.log(movie)
    console.log({ upcoming, popular, nowPlaying, topRated, genres })
    return (
      <div className="individual-movie-parent"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie && movie.backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: "100vw",
          height: "100vh",
          zIndex: '100',
        }}
      >
        <div className="individual-movie-darken">
          <div className="individual-movie-wrapper">

            <div className="individual-movie-inner">
              <div className="movie-controls-main">
                <p>left</p>
                <p>right</p>
              </div>
              <div className="movie-info-main">
                <img src={`https://image.tmdb.org/t/p/w1280/${movie && movie.poster_path}`} alt="poster_path" />
                <h1>{movie && movie.title}</h1>
              </div>
            </div>

          </div>
        </div>

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
