import {
  GET_FEATURED_PROPERTIES_SUCCESS,
  GET_FEATURED_PROPERTIES_FAILED,
  GET_NEW_SALE_PROPERTIES_SUCCESS,
  GET_NEW_SALE_PROPERTIES_FAILED,
  GET_NEW_RENTS_PROPERTIES_SUCCESS,
  GET_NEW_RENTS_PROPERTIES_FAILED,
  GET_FEATURED_PROPERTIES_SALES_SUCCESS,
  GET_FEATURED_PROPERTIES_SALES_FAILED,
  GET_FEATURED_PROPERTIES_RENTS_SUCCESS,
  GET_FEATURED_PROPERTIES_RENTS_FAILED,
} from '../types';

const initialState = {
  featuredProperties: [],
  featuredPropertiesSales: [],
  featuredPropertiesRents: [],
  newSalesProperties: [],
  newRentsProperties: [],
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FEATURED_PROPERTIES_SUCCESS:
      return {
        ...state,
        featuredProperties: action.payload,
        errors: {},
      };
    case GET_FEATURED_PROPERTIES_FAILED:
      return {
        ...state,
        errors: true,
      };
    case GET_FEATURED_PROPERTIES_SALES_SUCCESS:
      return {
        ...state,
        featuredPropertiesSales: action.payload,
        errors: {},
      };
    case GET_FEATURED_PROPERTIES_SALES_FAILED:
      return {
        ...state,
        errors: true,
      };
    case GET_FEATURED_PROPERTIES_RENTS_SUCCESS:
      return {
        ...state,
        featuredPropertiesRents: action.payload,
        errors: {},
      };
    case GET_FEATURED_PROPERTIES_RENTS_FAILED:
      return {
        ...state,
        errors: true,
      };
    case GET_NEW_SALE_PROPERTIES_SUCCESS:
      return {
        ...state,
        newSalesProperties: action.payload,
        errors: {},
      };
    case GET_NEW_SALE_PROPERTIES_FAILED:
      return {
        ...state,
        errors: true,
      };
    case GET_NEW_RENTS_PROPERTIES_SUCCESS:
      return {
        ...state,
        newRentsProperties: action.payload,
        errors: {},
      };
    case GET_NEW_RENTS_PROPERTIES_FAILED:
      return {
        ...state,
        errors: true,
      };
  }

  return state;
}
