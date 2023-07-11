import { combineReducers } from "redux";
import { allRoomReducers, roomDetailReducers } from "./roomReducers";

import { authReducer } from "./userReducers";

const reducers = combineReducers({
  allRooms: allRoomReducers,
  roomDetails: roomDetailReducers,
  auth: authReducer,
});

export default reducers;
