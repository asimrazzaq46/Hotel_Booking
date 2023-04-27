import { combineReducers } from "redux";
import { allRoomReducers, roomDetailReducers } from "./roomReducers";

const reducers = combineReducers({
  allRooms: allRoomReducers,
  roomDetails: roomDetailReducers,
});

export default reducers;
