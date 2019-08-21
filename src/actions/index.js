import * as types from '../constants/ActionTypes';

export const requestLogin = creds => {
  return {
    type: types.REQUEST_LOGIN,
    payload: {},
  };
};
