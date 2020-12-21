import handleError from './errorHandler';
import requestInstance from './requestInstance';

export const makePaymentAPI = async (data) => {
  try {
    const result = await requestInstance.post(
      '/api/vst/payments/propertyPayment',
      data,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
