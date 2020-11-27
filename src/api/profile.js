import handleError from './errorHandler';
import requestInstance from './requestInstance';

export const getMyProfileAPI = async (userID) => {
  try {
    const result = await requestInstance.get(
      `/api/vst/profile/getInfo?userID=${userID}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const getMyPropertiesAPI = async (userID) => {
  try {
    const result = await requestInstance.get(
      `/api/vst/profile/myProperties?userID=${userID}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
