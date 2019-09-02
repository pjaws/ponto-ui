import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reAuth from '../middleware/reAuth';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const middleware = [routerMiddleware(history), thunk, promise, reAuth, logger];

const configureStore = initialState => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
