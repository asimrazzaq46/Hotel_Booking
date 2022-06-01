import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { allRooms, createNewRoom } from "../../../controllers/roomControllers";

///// ERROR MIDDLEWARE /////

import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(allRooms);
handler.post(createNewRoom);

export default handler;
