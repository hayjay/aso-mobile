import { getStates } from '../../api/states';
import { NIGERIA_COUNTRY_CODE } from '../../utils/constants';
import { GET_STATES_FAILED, GET_STATES_SUCCESS } from '../types';

export const getNigeriaStates = () => async (dispatch) => {
  const result = await getStates(NIGERIA_COUNTRY_CODE);

  if (result.error) {
    dispatch({
      type: GET_STATES_FAILED,
    });
    return result;
  }

  dispatch({
    type: GET_STATES_SUCCESS,
    payload: result,
  });

  return result;
};
