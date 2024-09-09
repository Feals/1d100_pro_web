const asyncReducer = (state, action, baseState) => {
  switch (action.type) {
    case baseState.REQUEST:
      return { ...state, loading: true, error: null };
    case baseState.SUCCESS:
      return { ...state, loading: false, data: action.data, error: null };
    case baseState.FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return null;
  }
};

export default asyncReducer;
