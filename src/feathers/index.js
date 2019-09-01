import feathers from '@feathersjs/client';
import reduxifyServices from 'feathers-redux';
import feathersReduxifyAuthentication from 'feathers-reduxify-authentication';
import axios from 'axios';
import config from '../utils/config';

const app = feathers()
  .configure(feathers.rest(config.apiBaseUrl).axios(axios))
  .configure(
    feathers.authentication({
      storage: window.localStorage,
      strategies: ['local', 'jwt'],
    }),
  );

export const feathersServices = reduxifyServices(app, ['users', 'products']);

export const feathersAuth = feathersReduxifyAuthentication(app, {
  token: 'accessToken',
  user: 'user',
  isUserAuthorized: user => console.log(user),
});

export default app;
