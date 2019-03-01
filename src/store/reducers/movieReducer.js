import { LOADING, GET_UPCOMING_SUCCESS, ERRORS } from "../actions/movieActions";

const initialState = {
  upcoming: [],
  loading: false,
  errors: null
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
        errors: null,
        upcoming: action.payload
      };
    default:
      return state;
  }
}
