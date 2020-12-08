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

export const resetPasswordByEmailAPI = async (payload) => {
  try {
    const result = await requestInstance.post(
      '/api/vst/password/resetByEmail',
      payload,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const passwordResetCommitAPI = async ({ email, token }) => {
  try {
    const result = await requestInstance.get(
      `/api/vst/account/passwordReset?email=${email}&token=${token}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const changePasswordAPI = async (payload) => {
  try {
    const result = await requestInstance.post(
      '/api/vst/resetPassword',
      payload,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
