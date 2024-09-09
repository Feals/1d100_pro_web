import { GET_ALL_GENRES } from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

export default function rpgReducer(state = initialState, action) {
  return asyncReducer(state, action, GET_ALL_GENRES) || state;
}
