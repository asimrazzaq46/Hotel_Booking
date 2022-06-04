import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

////////////// GET ALL THE ROOMS ///////////////

export const getAllRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: error.respose.data.message,
    });
  }
};

/////////////// CLEAR ERRORS ////////////

export const clearAllErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
