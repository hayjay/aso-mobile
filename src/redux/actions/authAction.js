import { REGISTER_USER, LOGIN_USER } from '../types';

export const registerUser = () => {
  return async (dispatch) => {
    // logic to register user

    dispatch({
      type: REGISTER_USER,
      payload: {},
    });
  };
};

export const loginUser = () => {
  return async (dispatch) => {
    // logic to login user

    dispatch({
      type: LOGIN_USER,
      payload: {},
    });
  };
};
