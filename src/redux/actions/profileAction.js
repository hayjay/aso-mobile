import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  changeNotificationsAPI,
  editProfileAPI,
  getMyProfileAPI,
  getMyPropertiesAPI,
  getMyWishlistAPI,
} from '../../api/profile';
import {
  CHANGE_NOTIFICATIONS_FAILED,
  CHANGE_NOTIFICATIONS_SUCCESS,
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE_SUCCESS,
  GET_MY_PROPERTIES_FAILED,
  GET_MY_PROPERTIES_SUCCESS,
  GET_MY_WISHLIST_FAILED,
  GET_MY_WISHLIST_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
} from '../types';

export const getUserID = async () => {
  const result = await AsyncStorage.getItem('user_info');
  return JSON.parse(result).userID;
};

export const getMyProfile = () => async (dispatch) => {
  const result = await getMyProfileAPI(getUserID());

  if (result.error) {
    dispatch({
      type: GET_PROFILE_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_PROFILE_SUCCESS,
    payload: result,
  });
};

export const getMyProperties = () => async (dispatch) => {
  const result = await getMyPropertiesAPI(getUserID());

  if (result.error) {
    dispatch({
      type: GET_MY_PROPERTIES_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_MY_PROPERTIES_SUCCESS,
    payload: result,
  });
};

export const getMyWishlist = () => async (dispatch) => {
  const result = await getMyWishlistAPI(getUserID);

  if (result.error) {
    dispatch({
      type: GET_MY_WISHLIST_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_MY_WISHLIST_SUCCESS,
    payload: result,
  });
};

export const editProfile = (profileData) => async (dispatch) => {
  const { fullName, phoneNumber } = profileData;
  console.log('getUserID()', getUserID());

  const result = await editProfileAPI({
    userID: await getUserID(),
    first_name: fullName.split(' ')[0],
    last_name: fullName.split(' ')[1],
    address: 'address',
    phoneNumber,
  });

  if (result.error) {
    dispatch({
      type: EDIT_PROFILE_FAILED,
    });
    return result;
  }

  dispatch({
    type: EDIT_PROFILE_SUCCESS,
    payload: result,
  });

  return result;
};

export const changeNotifications = (notificationData) => async (dispatch) => {
  const { promoSubActive, selectedListing } = notificationData;

  const result = await changeNotificationsAPI({
    userID: await getUserID(),
    in_real_time: selectedListing === 'In Realtime' ? 1 : 0,
    once_a_day: selectedListing === 'Once a day' ? 1 : 0,
    send_promo_info: promoSubActive ? 1 : 0,
  });

  if (result.error) {
    dispatch({
      type: CHANGE_NOTIFICATIONS_FAILED,
    });
    return result;
  }

  dispatch({
    type: CHANGE_NOTIFICATIONS_SUCCESS,
    payload: result,
  });

  return result;
};
