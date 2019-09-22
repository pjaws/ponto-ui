import * as types from '../constants/ActionTypes';
import feathers from '../feathers';

const findProductsRequest = () => ({
  type: types.FIND_PRODUCTS_PENDING,
  payload: {},
});

const findProductsSuccess = data => ({
  type: types.FIND_PRODUCTS_SUCCESS,
  payload: data,
});

const findProductsError = error => ({
  type: types.FIND_PRODUCTS_ERROR,
  payload: error,
  error: true,
});

export const findProducts = (filter = {}) => async dispatch => {
  dispatch(findProductsRequest());
  try {
    const result = await feathers.service('products').find(filter);
    console.log(result);
    dispatch(findProductsSuccess(result));
  } catch (err) {
    console.log(err);
    dispatch(findProductsError(err));
  }
};
