import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  accessToken: window.localStorage.getItem('feathers-jwt') || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SERVICES_AUTHENTICATE_AUTHENTICATION_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case types.SERVICES_AUTHENTICATE_AUTHENTICATION_REJECTED:
    case types.SERVICES_AUTHENTICATE_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
