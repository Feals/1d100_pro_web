import {
  ADD_RPG,
  GET_ALL_RPGS,
  UPDATE_RPG,
  GET_RPG_BY_ID,
} from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = { rpgs: [], rpg: null, loading: false, error: null };

export default function rpgReducer(state = initialState, action) {
  const asyncActionHandlers = [
    { types: GET_ALL_RPGS, key: "rpgs" },
    { types: ADD_RPG, key: "rpgs" },
    { types: UPDATE_RPG, key: "rpg" },
    { types: GET_RPG_BY_ID, key: "rpg" },
  ];

  for (const { types, key } of asyncActionHandlers) {
    const newState = asyncReducer(state, action, types, key);
    if (newState !== state) return newState;
  }

  return state;
}
