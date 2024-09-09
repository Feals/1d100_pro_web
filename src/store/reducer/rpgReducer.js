import {
  ADD_RPG,
  GET_ALL_RPGS,
  UPDATE_RPG,
  GET_RPG_BY_ID,
} from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = { rpgs: [], rpg: null, loading: false, error: null };

export default function rpgReducer(state = initialState, action) {
  return (
    asyncReducer(state, action, ADD_RPG) ||
    asyncReducer(state, action, GET_ALL_RPGS) ||
    asyncReducer(state, action, UPDATE_RPG) ||
    asyncReducer(state, action, GET_RPG_BY_ID) ||
    state
  );
}
