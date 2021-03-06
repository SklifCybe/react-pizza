const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload]
      };
      const pizzas = [].concat.apply([], Object.values(newItems));
      return {
        ...state,
        items: newItems,
        totalCount: pizzas.length,
        totalPrice: pizzas.reduce((sum, obj) => obj.price + sum, 0)
      };
      default:
        return state;
  }
}

export default cartReducer;