const INIT_STATE = {
  count: 0
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case "DECREMENT":
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
};
