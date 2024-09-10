import { GET_ALL_GENRES } from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

export default function genreReducer(state = initialState, action) {
  const asyncActionHandlers = [{ types: GET_ALL_GENRES, key: "genres" }];

  for (const { types, key } of asyncActionHandlers) {
    const newState = asyncReducer(state, action, types, key);
    if (newState !== state) return newState;
  }

  return state;
}
