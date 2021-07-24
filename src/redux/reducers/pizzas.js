const initialState = {
  items: []
};

const pizzasReducer = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state, 
      items: action.payload
    };
  }
  return state;
};

export default pizzasReducer;