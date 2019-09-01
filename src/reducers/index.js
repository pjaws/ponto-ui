import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { feathersServices } from '../feathers';
import authReducer from './auth';
// import user from './user';
// import products from './products';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    users: feathersServices.users.reducer,
    products: feathersServices.products.reducer,
    auth: authReducer,
  });

export default createRootReducer;
