import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { isAuthenticated } from "../../../middlewares/auth";
import { updateUserProfile } from "../../../controllers/authControllers";

///// ERROR MIDDLEWARE /////

import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticated).put(updateUserProfile);

export default handler;
