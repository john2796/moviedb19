import {
  LOADING,
  GET_UPCOMING_SUCCESS,
  ERRORS,
  GET_POPULAR_SUCCESS
} from "../actions/movieActions";

const initialState = {
  upcoming: [],
  popular: [],
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

    default:
      return state;
  }
}
