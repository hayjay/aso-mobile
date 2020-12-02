import {
  GET_FEATURED_PROPERTIES_SUCCESS,
  GET_FEATURED_PROPERTIES_FAILED,
  GET_NEW_SALE_PROPERTIES_SUCCESS,
  GET_NEW_SALE_PROPERTIES_FAILED,
  GET_NEW_RENTS_PROPERTIES_SUCCESS,
  GET_NEW_RENTS_PROPERTIES_FAILED,
} from '../types';

const initialState = {
  featuredProperties: [],
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
