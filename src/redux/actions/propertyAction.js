import {
  getFeaturedPropertiesAPI,
  getNewPropertiesAPI,
} from '../../api/property';
import { RENTS, SALES } from '../../utils/constants';
import {
  GET_FEATURED_PROPERTIES_FAILED,
  GET_FEATURED_PROPERTIES_SUCCESS,
  GET_NEW_SALE_PROPERTIES_SUCCESS,
  GET_NEW_SALE_PROPERTIES_FAILED,
  GET_NEW_RENTS_PROPERTIES_FAILED,
  GET_NEW_RENTS_PROPERTIES_SUCCESS,
} from '../types';

export const getFeaturedProperties = () => async (dispatch) => {
  const result = await getFeaturedPropertiesAPI();

  if (result.error) {
    dispatch({
      type: GET_FEATURED_PROPERTIES_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_FEATURED_PROPERTIES_SUCCESS,
    payload: result,
  });
};

export const getNewSaleProperties = () => async (dispatch) => {
  const result = await getNewPropertiesAPI(SALES);

  if (result.error) {
    dispatch({
      type: GET_NEW_SALE_PROPERTIES_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_NEW_SALE_PROPERTIES_SUCCESS,
    payload: result,
  });
};

export const getNewRentsProperties = () => async (dispatch) => {
  const result = await getNewPropertiesAPI(RENTS);

  if (result.error) {
    dispatch({
      type: GET_NEW_RENTS_PROPERTIES_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_NEW_RENTS_PROPERTIES_SUCCESS,
    payload: result,
  });
};
