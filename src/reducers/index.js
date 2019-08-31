import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import products from './products';

const createRootReducer = history =>
  combineReducers({ router: connectRouter(history), user, products });

export default createRootReducer;
