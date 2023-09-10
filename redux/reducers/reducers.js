import { combineReducers } from "redux";
import { allRoomReducers, roomDetailReducers } from "./roomReducers";

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadUserReducer,
} from "./userReducers";

const reducers = combineReducers({
  allRooms: allRoomReducers,
  roomDetails: roomDetailReducers,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  loadedUser: loadUserReducer,
});

export default reducers;
