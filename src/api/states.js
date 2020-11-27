import { NIGERIA_COUNTRY_CODE } from '../utils/constants';
import handleError from './errorHandler';
import requestInstance from './requestInstance';

export const getStates = async (countryID) => {
  try {
    const result = await requestInstance.get(
      `/params/getState?countryID=${countryID}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
