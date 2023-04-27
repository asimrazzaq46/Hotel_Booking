import axios from "axios";
import absoluteUrl from "next-absolute-url";
// this package can get the url of website with it's values so we cannot hardcoded writing everytime

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
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
      payload: error.response.data.message,
    });
  }
};

////////////// GET ROOM DETAILS ///////////////

export const getRoomDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (err) {
    dispatch({ type: ROOM_DETAILS_FAIL, payload: err.response.data.message });
  }
};

/////////////// CLEAR ERRORS ////////////

export const clearAllErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
