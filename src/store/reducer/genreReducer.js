import {
  GET_ALL_GENRES_REQUEST,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
} from "../action/actionTypes";

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GENRES_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ALL_GENRES_SUCCESS:
      return { ...state, loading: false, genres: action.data, error: null };
    case GET_ALL_GENRES_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}
