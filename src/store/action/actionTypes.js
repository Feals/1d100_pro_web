const createActionTypes = (base) => ({
  REQUEST: `${base}_REQUEST`,
  SUCCESS: `${base}_SUCCESS`,
  FAILURE: `${base}_FAILURE`,
});

export const SIGNUP = createActionTypes("SIGNUP");
export const SIGNIN = createActionTypes("SIGNIN");
export const GET_ALL_GENRES = createActionTypes("GET_ALL_GENRES");
export const ADD_RPG = createActionTypes("ADD_RPG");
export const GET_ALL_RPGS = createActionTypes("GET_ALL_RPGS");
export const UPDATE_RPG = createActionTypes("UPDATE_RPG");
export const GET_RPG_BY_ID = createActionTypes("GET_RPG_BY_ID");
