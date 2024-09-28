import {
  SIGNUP,
  SIGNIN,
  GET_ALL_GENRES,
  ADD_RPG,
  GET_ALL_RPGS,
  UPDATE_RPG,
  GET_RPG_BY_ID,
  ADD_TABLE,
  GET_ALL_TABLES,
  UPDATE_TABLE,
  GET_TABLE_BY_ID,
  ADD_USER_TO_TABLE,
  REMOVED_USER_TO_TABLE,
  GET_DATES_WHERE_USER_REGISTERED,
  DELETE_TABLE,
} from "./actionTypes";

const createAsyncAction = (types) => ({
  request: () => ({ type: types.REQUEST }),
  success: (data) => ({ type: types.SUCCESS, data }),
  failure: (error) => ({ type: types.FAILURE, error }),
});

export const signUpActions = createAsyncAction(SIGNUP);
export const signInActions = createAsyncAction(SIGNIN);
export const getAllGenresActions = createAsyncAction(GET_ALL_GENRES);
export const addRpgActions = createAsyncAction(ADD_RPG);
export const getAllRpgsActions = createAsyncAction(GET_ALL_RPGS);
export const updateRpgActions = createAsyncAction(UPDATE_RPG);
export const getRpgByIdActions = createAsyncAction(GET_RPG_BY_ID);
export const addTableActions = createAsyncAction(ADD_TABLE);
export const getAllTablesActions = createAsyncAction(GET_ALL_TABLES);
export const updateTableActions = createAsyncAction(UPDATE_TABLE);
export const getTableByIdActions = createAsyncAction(GET_TABLE_BY_ID);
export const addUserToTableActions = createAsyncAction(ADD_USER_TO_TABLE);
export const removedUserToTableActions = createAsyncAction(
  REMOVED_USER_TO_TABLE
);
export const getDatesWhereUserRegisteredActions = createAsyncAction(
  GET_DATES_WHERE_USER_REGISTERED
);
export const deleteTableActions = createAsyncAction(DELETE_TABLE);
