import app from '../feathers';
import { push } from 'connected-react-router';
import { logout } from '../actions';
import {
  SERVICES_AUTHENTICATE_AUTHENTICATION_PENDING,
  SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED,
} from '../constants/ActionTypes';

const reAuth = store => next => action => {
  const state = store.getState();

  // if they refreshed the page and cleared this info out of the store, but are still authenticated
  if (
    window.localStorage.getItem('feathers-jwt') &&
    !state.auth.accessToken &&
    !state.auth.isLoading
  ) {
    // store.dispatch({ type: SERVICES_AUTHENTICATE_AUTHENTICATION_PENDING });
    app
      .reAuthenticate({ strategy: 'jwt' })
      .then(result => {
        console.log(`ReAuthenticate`, result);
        store.dispatch({
          type: SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED,
          payload: {
            user: result.user,
            accessToken: result.accessToken,
          },
        });
        next(action);
      })
      .catch(err => {
        console.log(`Error ReAuthenticating`, err);
        store.dispatch(logout());
        store.dispatch(push('/'));
        next(action);
      });
  } else {
    next(action);
  }
};

export default reAuth;
