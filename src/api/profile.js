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

export const getMyWishlistAPI = async (userID) => {
  try {
    const result = await requestInstance.get(
      `/api/vst/profile/myWishlist?userID=${userID}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const editProfileAPI = async (data) => {
  try {
    const result = await requestInstance.post(
      `/api/vst/profile/modifyInfo`,
      data,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const changeNotificationsAPI = async (data) => {
  try {
    const result = await requestInstance.post(
      `/api/vst/profile/changeNotificationSetting`,
      data,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
