import React from 'react';
import { Grommet } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Welcome from '../pages/Welcome';
import ShopifyCallback from './ShopifyCallback';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }
`;

const App = ({ children }) => {
  return (
    <Grommet theme={theme} className="main">
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/shopify-callback" component={ShopifyCallback} />
        <Route path="/app" component={AppLayout} />
      </BrowserRouter>
    </Grommet>
  );
};

export default App;
