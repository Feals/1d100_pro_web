const asyncReducer = (state, action, actionTypes, key) => {
  const { REQUEST, SUCCESS, FAILURE } = actionTypes;

  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true, error: null };
    case SUCCESS:
      return { ...state, loading: false, [key]: action.data, error: null };
    case FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default asyncReducer;
