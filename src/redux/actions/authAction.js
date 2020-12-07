import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  login,
  passwordResetCommitAPI,
  register,
  resetPasswordByEmailAPI,
} from '../../api/auth';
import { setAuthToken } from '../../api/requestInstance';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  RESET_PASSWORD_REQUEST_FAILED,
  RESET_PASSWORD_REQUEST_SUCCESS,
  RESET_PASSWORD_COMMIT_FAILED,
  RESET_PASSWORD_COMMIT_SUCCESS,
} from '../types';

export const registerUser = (registerData) => async (dispatch) => {
  const { fullName, email, password, phoneNumber } = registerData;
  const result = await register({
    name: fullName,
    email,
    password,
    phoneNumber,
  });

  if (result.error) {
    if (result.error.message === 'Input error') {
      dispatch({
        type: REGISTER_USER_FAILED,
      });
    }
    return {
      error: {
        ...result.error,
        message: 'This email has already been taken.',
      },
    };
  }

  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: result,
  });
  return result;
};

export const loginUser = (authData) => async (dispatch) => {
  const { email, password } = authData;
  const result = await login({
    email,
    password,
  });
  if (result.error) {
    dispatch({
      type: LOGIN_USER_FAILED,
    });
    return result;
  }
  setAuthToken(result.token.access_token);
  await AsyncStorage.setItem('access_token', result.token.access_token);
  await AsyncStorage.setItem('user_info', JSON.stringify(result.userInfo));
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: result,
  });

  return result;
};

export const resetPasswordByEmail = (email) => async (dispatch) => {
  return await resetPasswordByEmailAPI({ email, source: 'mobile' });
};

export const resetPasswordCommit = (email, token) => async (dispatch) => {
  return await passwordResetCommitAPI({ email, token });
};
