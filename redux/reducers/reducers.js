import { combineReducers } from "redux";
import { allRoomReducers, roomDetailReducers } from "./roomReducers";

import { authReducer, userReducer } from "./userReducers";

const reducers = combineReducers({
  allRooms: allRoomReducers,
  roomDetails: roomDetailReducers,
  auth: authReducer,
  user: userReducer,
});

export default reducers;
