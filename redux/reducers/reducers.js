import { combineReducers } from "redux";
import { allRoomReducers, roomDetailReducers } from "./roomReducers";

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from "./userReducers";

const reducers = combineReducers({
  allRooms: allRoomReducers,
  roomDetails: roomDetailReducers,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

export default reducers;
