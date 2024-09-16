import { GET_DATES_WHERE_USER_REGISTERED } from "../action/actionTypes";
import asyncReducer from "./reducerUtils";

const initialState = {
  datesWhereUserRegistered: [],
  tableIds: [],
  loading: false,
  error: null,
};

export default function userRegistrationsReducer(state = initialState, action) {
  const asyncActionHandlers = [
    { types: GET_DATES_WHERE_USER_REGISTERED, key: "userRegistrations" },
  ];

  for (const { types, key } of asyncActionHandlers) {
    const newState = asyncReducer(state, action, types, key);
    if (newState !== state) return newState;
  }

  return state;
}
