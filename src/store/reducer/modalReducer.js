import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_DATA } from "../action/modalAction";

const initialState = {
  isOpen: false,
  data: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case SET_MODAL_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
