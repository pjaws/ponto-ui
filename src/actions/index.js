import feathers, { feathersServices } from '../feathers';
import { push } from 'connected-react-router';
import * as types from '../constants/ActionTypes';

const loginSuccess = response => ({
  type: types.SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED,
  payload: response,
});

const loginFailure = error => ({
  type: types.SERVICES_AUTHENTICATE_AUTHENTICATION_REJECTED,
  payload: error,
  error: true,
});

export const login = creds => async dispatch => {
  dispatch({ type: types.SERVICES_AUTHENTICATE_AUTHENTICATION_PENDING });
  try {
    const response = await feathers.authenticate({
      strategy: 'local',
      ...creds,
    });
    dispatch(loginSuccess(response));
    dispatch(push('/app/products'));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure(err));
  }
};

export const signup = creds => async dispatch => {
  try {
    const result = await dispatch(feathersServices.users.create(creds));
    dispatch(login(creds));
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  feathers.logout();
  return {
    types: types.SERVICES_AUTHENTICATE_LOGOUT,
  };
};
