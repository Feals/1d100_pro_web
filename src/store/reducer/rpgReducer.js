import {
  ADD_RPG_SUCCESS,
  ADD_RPG_REQUEST,
  ADD_RPG_FAILURE,
} from "../action/actionTypes";

const initialState = {
  data: null,
};

export default function rpgReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RPG_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_RPG_SUCCESS:
      return { ...state, loading: false, data: action.data, error: null };
    case ADD_RPG_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}
