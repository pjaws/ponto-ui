import feathers, { feathersServices } from '../feathers';
import { push } from 'connected-react-router';
import axios from 'axios';
import * as types from '../constants/ActionTypes';

const authSuccess = response => ({
  type: types.SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED,
  payload: response,
});

const authFailure = error => ({
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
    dispatch(authSuccess(response));
    dispatch(push('/app/products'));
  } catch (err) {
    console.log(err);
    dispatch(authFailure(err));
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
    type: types.SERVICES_AUTHENTICATE_LOGOUT,
  };
};

export const reAuth = () => dispatch => {
  dispatch({ type: types.SERVICES_AUTHENTICATE_AUTHENTICATION_PENDING });
  return feathers
    .reAuthenticate({ strategy: 'jwt' })
    .then(result => {
      console.log(`ReAuthenticate`, result);
      dispatch({
        type: types.SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED,
        payload: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
      dispatch(push('/app/products'));
    })
    .catch(err => {
      console.log(`Error ReAuthenticating`, err);
      dispatch(logout());
      dispatch(push('/'));
    });
};
