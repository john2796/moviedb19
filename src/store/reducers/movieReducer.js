import {
  LOADING,
  GET_UPCOMING_SUCCESS,
  ERRORS,
  GET_POPULAR_SUCCESS,
  GET_GENRES_SUCCESS,
  GET_NOW_PLAYING_SUCCESS,
  GET_TOP_RATED_SUCCESS,
  GET_CASTS_SUCCESS,
  GET_TRAILER_SUCCESS
} from "../actions/movieActions";

const initialState = {
  upcoming: [],
  popular: [],
  nowPlaying: [],
  topRated: [],
  genres: [],
  casts: [],
  trailers: [],
  loading: false,
  errors: {}
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case GET_UPCOMING_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        upcoming: action.payload
      };
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        popular: action.payload
      };
    case GET_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        nowPlaying: action.payload
      };
    case GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        topRated: action.payload
      };
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        genres: action.payload
      };
    case GET_CASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        casts: action.payload
      };
    case GET_TRAILER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        trailers: action.payload
      };

    default:
      return state;
  }
}
