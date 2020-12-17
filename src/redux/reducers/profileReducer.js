import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  GET_MY_PROPERTIES_SUCCESS,
  GET_MY_PROPERTIES_FAILED,
  GET_MY_WISHLIST_SUCCESS,
  GET_MY_WISHLIST_FAILED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  CHANGE_NOTIFICATIONS_SUCCESS,
  CHANGE_NOTIFICATIONS_FAILED,
} from '../types';

const initialState = {
  myProfile: {},
  myProperties: [],
  myWishlist: [],
  editProfile: {},
  notificationsSetting: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        myProfile: action.payload,
        errors: {},
      };
    case GET_PROFILE_FAILED:
      return {
        ...state,
        errors: true,
      };

    case GET_MY_PROPERTIES_SUCCESS:
      return {
        ...state,
        myProperties: action.payload,
        errors: {},
      };
    case GET_MY_PROPERTIES_FAILED:
      return {
        ...state,
        errors: true,
      };

    case GET_MY_WISHLIST_SUCCESS:
      return {
        ...state,
        myWishlist: action.payload,
        error: {},
      };
    case GET_MY_WISHLIST_FAILED:
      return {
        ...state,
        error: true,
      };

    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: action.payload,
        error: {},
      };
    case EDIT_PROFILE_FAILED:
      return {
        ...state,
        error: true,
      };

    case CHANGE_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notificationsSetting: action.payload,
        error: {},
      };
    case CHANGE_NOTIFICATIONS_FAILED:
      return {
        ...state,
        error: true,
      };
  }

  return state;
}
