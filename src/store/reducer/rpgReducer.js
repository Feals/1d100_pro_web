import {
  ADD_RPG_SUCCESS,
  ADD_RPG_REQUEST,
  ADD_RPG_FAILURE,
  GET_ALL_GENRES_REQUEST,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
  GET_ALL_RPGS_REQUEST,
  GET_ALL_RPGS_SUCCESS,
  GET_ALL_RPGS_FAILURE,
  GET_RPG_BY_ID_REQUEST,
  GET_RPG_BY_ID_SUCCESS,
  GET_RPG_BY_ID_FAILURE,
  UPDATE_RPG_REQUEST,
  UPDATE_RPG_SUCCESS,
  UPDATE_RPG_FAILURE,
} from "../action/actionTypes";

const initialState = {
  rpgs: [],
  rpg: null,
  genres: [],
  loading: false,
  error: null,
};

export default function rpgReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RPG_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_RPG_SUCCESS:
      return {
        ...state,
        loading: false,
        rpgs: [...state.rpgs, action.data],
        error: null,
      };
    case ADD_RPG_FAILURE:
      return { ...state, loading: false, error: action.data };

    case UPDATE_RPG_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_RPG_SUCCESS:
      return {
        ...state,
        loading: false,
        rpgs: state.rpgs.map((rpg) =>
          rpg.id === action.data.id ? action.data : rpg
        ),
        error: null,
      };
    case UPDATE_RPG_FAILURE:
      return { ...state, loading: false, error: action.error };

    case GET_ALL_GENRES_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ALL_GENRES_SUCCESS:
      return { ...state, loading: false, genres: action.data, error: null };
    case GET_ALL_GENRES_FAILURE:
      return { ...state, loading: false, error: action.error };

    case GET_ALL_RPGS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ALL_RPGS_SUCCESS:
      return { ...state, loading: false, rpgs: action.data, error: null };
    case GET_ALL_RPGS_FAILURE:
      return { ...state, loading: false, error: action.error };

    case GET_RPG_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_RPG_BY_ID_SUCCESS:
      return { ...state, loading: false, rpg: action.data, error: null };
    case GET_RPG_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}
