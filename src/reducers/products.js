import * as types from '../constants/ActionTypes';

const products = (
  state = { isLoading: false, error: '', data: [] },
  action,
) => {
  switch (action.type) {
    case types.FIND_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.FIND_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case types.FIND_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default products;
