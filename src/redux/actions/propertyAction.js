import {
  filterPropertiesAPI,
  getFeaturedPropertiesAPI,
  getNewPropertiesAPI,
  searchPropertiesAPI,
} from '../../api/property';
import { RENTS, SALES } from '../../utils/constants';
import {
  GET_FEATURED_PROPERTIES_FAILED,
  GET_FEATURED_PROPERTIES_SUCCESS,
  GET_NEW_SALE_PROPERTIES_SUCCESS,
  GET_NEW_SALE_PROPERTIES_FAILED,
  GET_NEW_RENTS_PROPERTIES_FAILED,
  GET_NEW_RENTS_PROPERTIES_SUCCESS,
  GET_FEATURED_PROPERTIES_SALES_SUCCESS,
  GET_FEATURED_PROPERTIES_SALES_FAILED,
  GET_FEATURED_PROPERTIES_RENTS_SUCCESS,
  GET_FEATURED_PROPERTIES_RENTS_FAILED,
  SEARCH_RESULTS_FAILED,
  SEARCH_RESULTS_SUCCESS,
  FILTER_RESULTS_FAILED,
  FILTER_RESULTS_SUCCESS,
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

export const getFeaturedPropertiesSales = () => async (dispatch) => {
  const result = await getFeaturedPropertiesAPI(SALES);

  if (result.error) {
    dispatch({
      type: GET_FEATURED_PROPERTIES_SALES_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_FEATURED_PROPERTIES_SALES_SUCCESS,
    payload: result,
  });
};

export const getFeaturedPropertiesRents = () => async (dispatch) => {
  const result = await getFeaturedPropertiesAPI(RENTS);

  if (result.error) {
    dispatch({
      type: GET_FEATURED_PROPERTIES_RENTS_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_FEATURED_PROPERTIES_RENTS_SUCCESS,
    payload: result,
  });
};

export const getNewSalesProperties = () => async (dispatch) => {
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

export const searchProperties = (searchData) => async (dispatch) => {
  const result = await searchPropertiesAPI(searchData);

  if (result.error) {
    dispatch({
      type: SEARCH_RESULTS_FAILED,
    });
    return result;
  }

  dispatch({
    type: SEARCH_RESULTS_SUCCESS,
    payload: result,
  });

  return result;
};

export const filterProperties = (filterData) => async (dispatch) => {
  const result = await filterPropertiesAPI(filterData);

  if (result.error) {
    dispatch({
      type: FILTER_RESULTS_FAILED,
    });
    return result;
  }

  dispatch({
    type: FILTER_RESULTS_SUCCESS,
    payload: result,
  });

  return result;
};
