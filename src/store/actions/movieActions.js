import axios from "axios";
export const GET_UPCOMING_SUCCESS = "GET_UPCOMING_SUCCESS";
export const LOADING = "LOADING";
export const ERRORS = "ERRORS";
export const GET_POPULAR_SUCCESS = "GET_POPULAR_SUCCESS";
export const GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";

const UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1";

const POPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1";

const GENRES =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US";

export const getUpcoming = page => dispatch => {
  dispatch(setLoading());

  axios
    .get(`${UPCOMING}`)
    .then(res =>
      dispatch({
        type: GET_UPCOMING_SUCCESS,
        payload: res.data.results
      })
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: ERRORS,
        payload: err
      });
    });
};

export const getPopular = page => dispatch => {
  dispatch(setLoading());

  axios
    .get(`${POPULAR}`)
    .then(res =>
      dispatch({
        type: GET_POPULAR_SUCCESS,
        payload: res.data.results
      })
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: ERRORS,
        payload: err
      });
    });
};

export const getGenres = page => dispatch => {
  dispatch(setLoading());

  axios
    .get(`${GENRES}`)
    .then(res =>
      dispatch({
        type: GET_GENRES_SUCCESS,
        payload: res.data.genres
      })
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: ERRORS,
        payload: err
      });
    });
};

export const setLoading = param => {
  return {
    type: LOADING
  };
};

/*
Upcoming = https://api.themoviedb.org/3/movie/upcoming?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1


Popular - https://api.themoviedb.org/3/movie/popular?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1


Now Playing =https://api.themoviedb.org/3/movie/now_playing?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1


Top Rated =https://api.themoviedb.org/3/movie/top_rated?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1

//only for fuzzy search
query = https://api.themoviedb.org/3/search/movie?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&query=Upcoming&page=1&include_adult=false
*/
