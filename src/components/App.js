import React from 'react';
import { Grommet } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../store';
import AppLayout from '../layouts/AppLayout';
import Welcome from './Welcome';
import ShopifyCallback from '../containers/ShopifyCallback';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }
	.main {
    min-height: 100vh;
  }
`;

const App = ({ children }) => {
  return (
    <Grommet theme={theme} className='main'>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Route exact path='/' component={Welcome} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/shopify-callback' component={ShopifyCallback} />
        <Route path='/app' component={AppLayout} />
      </ConnectedRouter>
    </Grommet>
  );
};

export default App;
