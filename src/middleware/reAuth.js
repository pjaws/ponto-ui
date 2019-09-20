import { reAuth } from '../actions';

const reAuthMiddleware = store => next => action => {
  const state = store.getState();
  console.log('action', action);
  if (!action.type.includes('AUTHENTICATE')) {
    // if they refreshed the page and cleared this info out of the store, but are still authenticated
    if (
      window.localStorage.getItem('feathers-jwt') &&
      !state.auth.accessToken &&
      !state.auth.isLoading
    ) {
      store.dispatch(reAuth());
    } else {
      next(action);
    }
  } else {
    next(action);
  }
};

export default reAuthMiddleware;
