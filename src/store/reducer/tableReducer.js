import {
  ADD_TABLE,
  GET_ALL_TABLES,
  UPDATE_TABLE,
  GET_TABLE_BY_ID,
} from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = { rpgs: [], rpg: null, loading: false, error: null };

export default function rpgReducer(state = initialState, action) {
  const asyncActionHandlers = [
    { types: ADD_TABLE, key: "tables" },
    { types: GET_ALL_TABLES, key: "tables" },
    { types: UPDATE_TABLE, key: "table" },
    { types: GET_TABLE_BY_ID, key: "table" },
  ];

  for (const { types, key } of asyncActionHandlers) {
    const newState = asyncReducer(state, action, types, key);
    if (newState !== state) return newState;
  }

  return state;
}
