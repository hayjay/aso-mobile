import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMyProfileAPI, getMyPropertiesAPI } from '../../api/profile';
import {
  GET_MY_PROPERTIES_FAILED,
  GET_MY_PROPERTIES_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
} from '../types';

const getUserID = async () => {
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

  return result;
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

  return result;
};
