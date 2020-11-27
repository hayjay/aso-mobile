import handleError from './errorHandler';
import requestInstance from './requestInstance';

export const getFeaturedPropertiesAPI = async () => {
  try {
    const result = await requestInstance.get(
      '/api/vst/params/getFeaturedProperty',
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const getNewPropertiesAPI = async (type) => {
  try {
    const result = await requestInstance.get(
      `/api/vst/params/getNewPropertyListing?transactionType=House&type=${type}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
