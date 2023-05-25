const initialState = {
  value: 0,
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.amount };
    case "DECREMENT":
      return { ...state, value: state.value - action.amount };
    default:
      return state;
  }
}

export default addReducer;
