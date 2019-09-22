import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { feathersServices } from '../feathers';
import authReducer from './auth';
// import user from './user';
import productsReducer from './products';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    users: feathersServices.users.reducer,
    products: productsReducer,
    auth: authReducer,
  });

export default createRootReducer;
