import { makePaymentAPI } from '../../api/payment';
import { PAYMENT_FAILED, PAYMENT_SUCCESS } from '../types';

export const initiatePayWithPayStack = (paymentData) => async (dispatch) => {
  const data = {
    propertyID: paymentData.propertyID,
    amount: paymentData.amount,
    payment_plan_id: 1,
    currency: 'NGN',
    payment_gateway: 'paystack',
  };

  const result = await makePaymentAPI(data);

  if (result.error) {
    dispatch({
      type: PAYMENT_FAILED,
    });
    return result;
  }

  dispatch({
    type: PAYMENT_SUCCESS,
    payload: result,
  });

  return result;
};
