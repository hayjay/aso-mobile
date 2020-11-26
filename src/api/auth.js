import handleError from './errorHandler';
import requestInstance from './requestInstance';

export const register = async (payload) => {
  try {
    const result = await requestInstance.post('/api/vst/register', payload);
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const login = async (payload) => {
  try {
    const result = await requestInstance.post('/api/vst/login', payload);
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
