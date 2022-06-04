import { combineReducers } from "redux";
import { allRoomReducers } from "./roomReducers";

const reducers = combineReducers({
  allRooms: allRoomReducers,
});

export default reducers;
