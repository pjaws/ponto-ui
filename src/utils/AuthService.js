import HttpClient from './HttpClient';
import config from './config';

export const login = async credentials => {
  const response = HttpClient(
    `${config.apiBaseUrl}/auth/login`,
    'POST',
    credentials,
  );

  return response;
};

export const signup = async credentials => {
  const response = HttpClient(
    `${config.apiBaseUrl}/auth/login`,
    'POST',
    credentials,
  );

  return response;
};

export default {
  login,
  signup,
};
