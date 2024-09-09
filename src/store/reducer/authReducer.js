import { SIGNUP, SIGNIN } from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = { token: null, loading: false, error: null };

export default function authReducer(state = initialState, action) {
  return (
    asyncReducer(state, action, SIGNUP) ||
    asyncReducer(state, action, SIGNIN) ||
    state
  );
}
