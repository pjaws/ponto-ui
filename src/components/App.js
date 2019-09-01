import React from 'react';
import { Grommet } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../store';
import Welcome from './Welcome';
import Products from '../containers/Products';
import Product from '../containers/Product';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  .main {
    min-height: 100vh;
  }
  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }
`;

const App = ({ children }) => {
  return (
    <Grommet theme={theme} className='main'>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Route exact path='/' component={Welcome} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/products' component={Products} />
        <Route path='/products/:productId' component={Product} />
      </ConnectedRouter>
    </Grommet>
  );
};

export default App;
