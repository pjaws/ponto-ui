import * as types from '../constants/ActionTypes';

const user = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload.data,
      };
    default:
      return state;
  }
};

export default user;
