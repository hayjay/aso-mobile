import { SUCCESS_RESPONSE_STATUS } from '../../utils/constants';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../types';

const API_URL = 'http://159.65.233.192:3030';

export const registerUser = (registerData) => {
  const { fullName, email, password, phoneNumber } = registerData;
  return async (dispatch) => {
    // logic to make a post to REGISTER the user
    const result = await fetch(`${API_URL}/api/vst/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fullName,
        email,
        password,
        phoneNumber,
      }),
    });

    const resultData = await result.json();

    if (resultData.ResponseStatus === SUCCESS_RESPONSE_STATUS) {
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: resultData,
      });
    } else {
      dispatch({
        type: REGISTER_USER_FAILED,
      });
    }

    return resultData;
  };
};

export const loginUser = (authData) => {
  const { email, password } = authData;
  return async (dispatch) => {
    // logic to login user
    const result = await fetch(`${API_URL}/api/vst/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resultData = await result.json();

    if (resultData.token) {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: resultData,
      });
    } else {
      dispatch({
        type: LOGIN_USER_FAILED,
      });
    }

    return resultData;
  };
};
