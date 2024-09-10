import { SIGNUP, SIGNIN } from "../action/actionTypes";
import asyncReducer from "./reducerUtils"; // Assure-toi d'importer correctement ton asyncReducer

const initialState = { token: null, user: null, loading: false, error: null };

export default function authReducer(state = initialState, action) {
  const asyncActionHandlers = [
    { types: SIGNUP, key: "token" },
    { types: SIGNIN, key: "token" },
  ];

  for (const { types, key } of asyncActionHandlers) {
    const newState = asyncReducer(state, action, types, key);
    if (newState !== state) return newState;
  }

  switch (action.type) {
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
}
