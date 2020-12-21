import handleError from './errorHandler';
import requestInstance from './requestInstance';

export const getFeaturedPropertiesAPI = async (type = null) => {
  try {
    const result = await requestInstance.get(
      `/api/vst/params/getFeaturedProperty?type=${type}`,
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

export const searchPropertiesAPI = async (data) => {
  const { transaction_type } = data;

  try {
    const result = await requestInstance.get(
      `/api/vst/params/searchProperties?transaction_type=${transaction_type}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const filterPropertiesAPI = async (data) => {
  const {
    transaction_type,
    per_page,
    no_bedroom,
    max_price,
    min_price,
    no_bathroom,
  } = data;

  try {
    const result = await requestInstance.get(
      `/api/vst/params/filterProperties?transaction_type=${transaction_type}&per_page=${per_page}&min_price=${min_price}&max_price=${max_price}&no_bedroom=${no_bedroom}&no_bathroom=${no_bathroom}`,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};

export const addPropertyAPI = async (data) => {
  try {
    const result = await requestInstance.post(
      `/api/vst/profile/submitListing`,
      data,
    );
    return result.data;
  } catch (err) {
    return handleError(err);
  }
};
