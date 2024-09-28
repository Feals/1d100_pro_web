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
export const ADD_TABLE = createActionTypes("ADD_TABLE");
export const GET_ALL_TABLES = createActionTypes("GET_ALL_TABLESS");
export const UPDATE_TABLE = createActionTypes("UPDATE_TABLE");
export const GET_TABLE_BY_ID = createActionTypes("GET_TABLE_BY_ID");
export const ADD_USER_TO_TABLE = createActionTypes("ADD_USER_TO_TABLE");
export const REMOVED_USER_TO_TABLE = createActionTypes("REMOVED_USER_TO_TABLE");
export const GET_DATES_WHERE_USER_REGISTERED = createActionTypes(
  "GET_DATES_WHERE_USER_REGISTERED"
);
export const DELETE_TABLE = createActionTypes("DELETE_TABLE");
