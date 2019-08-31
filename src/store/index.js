import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

const middleware = [thunk, routerMiddleware, logger];

export const history = createBrowserHistory();

const configureStore = initialState => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
