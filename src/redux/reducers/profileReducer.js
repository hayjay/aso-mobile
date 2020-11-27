import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  GET_MY_PROPERTIES_SUCCESS,
  GET_MY_PROPERTIES_FAILED,
} from '../types';

const initialState = {
  myProfile: {},
  myProperties: [],
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        myProfile: action.payload,
        errors: {},
      };
    case GET_PROFILE_FAILED:
      return {
        ...state,
        errors: true,
      };
    case GET_MY_PROPERTIES_SUCCESS:
      return {
        ...state,
        myProperties: action.payload,
        errors: {},
      };
    case GET_MY_PROPERTIES_FAILED:
      return {
        ...state,
        errors: true,
      };
  }

  return state;
}
