import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../types';

const initialState = {
  user: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        errors: {},
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        errors: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errors: {},
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        errors: true,
      };
  }

  return state;
}
