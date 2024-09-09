import {
  SIGNUP,
  SIGNIN,
  GET_ALL_GENRES,
  ADD_RPG,
  GET_ALL_RPGS,
  UPDATE_RPG,
  GET_RPG_BY_ID,
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
