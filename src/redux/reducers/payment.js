import { PAYMENT_SUCCESS, PAYMENT_FAILED } from '../types';

const initialState = {
  paymentResponse: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PAYMENT_SUCCESS:
      return {
        ...state,
        paymentResponse: action.payload,
        errors: {},
      };
    case PAYMENT_FAILED:
      return {
        ...state,
        errors: true,
      };
  }

  return state;
}
