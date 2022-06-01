import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  singleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";

///// ERROR MIDDLEWARE /////

import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(singleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
