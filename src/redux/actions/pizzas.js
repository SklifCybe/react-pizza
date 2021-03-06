import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));

  axios.get(`http://localhost:3001/pizzas?${category === 0 ? '' : `category=${category}`}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((res) => dispatch(setPizzas(res.data)));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});
