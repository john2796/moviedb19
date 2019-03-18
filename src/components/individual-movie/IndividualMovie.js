import React, { Component } from 'react';
import './individualMovie.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUpcoming, getPopular, getNowPlaying, getTopRated, getGenres } from '../../store/actions/movieActions';
import SummaryInfo from './SummaryInfo';


class IndividualMovie extends Component {
  componentDidMount() {
    const { tab, getPopular, getUpcoming, getNowPlaying, getTopRated, getGenres } = this.props
    getGenres()
    if (tab === 'upcoming') {
      return getUpcoming();
    } else if (tab === 'popular') {
      return getPopular()
    } else if (tab === 'nowPlaying') {
      return getNowPlaying()
    } else if (tab === 'topRated') {
      return getTopRated()
    }
  }



  render() {
    const { match, upcoming, popular, nowPlaying, topRated, genres, history } = this.props
    const arr = [upcoming, popular, nowPlaying, topRated].filter(x => x.length > 0).flat(1)
    const id = parseInt(match.params.id)
    const movie = arr.find((item) => item.id === id);
    const genreOne = movie && movie.genre_ids
    let genre = movie && genres.filter((x) => genreOne.includes(x.id)).map(y => y.name)
    let secondGenre = genre && genre[0] && genre && genre[2]


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
                <span>
                  <i className="fas fa-chevron-left"
                    onClick={() => history.goBack()}
                  ></i>
                </span>
                <span>
                  <i className="fas fa-share"></i>
                </span>

              </div>
              <div className="movie-info-main">
                <img src={`https://image.tmdb.org/t/p/w1280/${movie && movie.poster_path}`} alt="poster_path" />
                <div className="movie-info-main-right">
                  <h1>{movie && movie.title}</h1>

                  {/* ------------------------- avg rate & fav  -------------------------- */}
                  <div className="avg-rate-fav">
                    <span>{movie && movie.vote_average}</span>
                    <span><i className="fas fa-heart"></i></span>
                  </div>
                  <p className="release-en" >Released | EN</p>
                  {/* ---------------------------- genre section -------------------------- */}
                  <p className="movie-banner-genres">
                    {genre && genre[1]} | {secondGenre}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* ---------------------------- summary section -------------------------- */}
        <SummaryInfo movie={movie} />
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
