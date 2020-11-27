import { getMyProfileAPI, getMyPropertiesAPI } from '../../api/profile';
import {
  GET_MY_PROPERTIES_FAILED,
  GET_MY_PROPERTIES_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
} from '../types';

const DUMMY_USER_ID = 11;

export const getMyProfile = () => async (dispatch) => {
  const result = await getMyProfileAPI(DUMMY_USER_ID);

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
  const result = await getMyPropertiesAPI(DUMMY_USER_ID);

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
