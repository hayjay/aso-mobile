import axios from 'axios';
import config from './config';

export const requestInstance = axios.create({
  baseURL: config.BASE_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    requestInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete requestInstance.defaults.headers.common.Authorization;
  }
};

export default requestInstance;
