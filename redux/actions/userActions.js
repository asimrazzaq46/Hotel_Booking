import axios from "axios";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants.js";

////////////// REGISTER USER ///////////////

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const link = `/api/auth/register`;

    const { data } = await axios.post(link, userData, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};


/////////////// CLEAR ERRORS ////////////

export const clearAllErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
