import { GET_STATES_SUCCESS, GET_STATES_FAILED } from '../types';

const initialState = {
  states: [],
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STATES_SUCCESS:
      return {
        ...state,
        states: action.payload,
        errors: {},
      };
    case GET_STATES_FAILED:
      return {
        ...state,
        errors: true,
      };
  }

  return state;
}
