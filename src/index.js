import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Grommet } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import theme from './utils/theme';
import reducer from './reducers';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk, logger];
const store = createStore(reducer, applyMiddleware(...middleware));

const GlobalStyle = createGlobalStyle`
  .main {
    min-height: 100vh;
  }
  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }
`;

render(
  <Provider store={store}>
    <Grommet theme={theme} className='main'>
      <GlobalStyle />
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
