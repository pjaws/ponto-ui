import * as types from '../constants/ActionTypes';
import AuthService from '../utils/AuthService';
import ProductService from '../utils/ProductService';

export const requestLogin = creds => {
  return {
    type: types.LOGIN_REQUEST,
    payload: creds,
  };
};

export const requestSignup = creds => {
  return {
    type: types.SIGNUP_REQUEST,
    payload: creds,
  };
};

const signupSuccess = user => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: {
      user,
    },
  };
};

const signupFailure = error => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: error,
    error: true,
  };
};

export const signup = creds => async dispatch => {
  dispatch(requestSignup(creds));

  try {
    const user = await AuthService.signup(creds);

    return dispatch(signupSuccess(user));
  } catch (error) {
    return dispatch(signupFailure);
  }
};

const requestGetProducts = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProductsSuccess = products => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  };
};

const getProductsFailure = error => {
  return {
    type: types.GET_PRODUCTS_FAILURE,
    payload: error,
    error: true,
  };
};

export const getAllProducts = () => async dispatch => {
  dispatch(requestGetProducts());

  try {
    const products = await ProductService.getAll();

    return dispatch(getProductsSuccess(products));
  } catch (error) {
    return dispatch(getProductsFailure(error));
  }
};
