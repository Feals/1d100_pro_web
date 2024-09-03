import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "../action/actionTypes";

const initialState = {
  token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_SESSION":
    case "UPDATE_SESSION":
      return { ...state, token: action.token };
    case "LOGOUT":
      return {
        ...state,
        token: null,
      };
    case SIGNIN_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGNIN_SUCCESS:
      return { ...state, loading: false, token: action.token, error: null };
    case SIGNIN_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}
