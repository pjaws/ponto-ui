import HttpClient from './HttpClient';
import config from './config';

export const login = async credentials => {
  const response = await HttpClient(
    `${config.apiBaseUrl}/authentication`,
    'POST',
    credentials,
  );

  return response;
};

export const signup = async credentials => {
  const response = await HttpClient(
    `${config.apiBaseUrl}/authentication`,
    'POST',
    credentials,
  );

  return response;
};

export default {
  login,
  signup,
};
