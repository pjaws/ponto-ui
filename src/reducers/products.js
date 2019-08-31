import * as types from '../constants/ActionTypes';

const products = (state = [], action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return action.payload.products;
    default:
      return state;
  }
};

export default products;
