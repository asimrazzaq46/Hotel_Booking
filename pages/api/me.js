import nc from "next-connect";
import dbConnect from "../../config/dbConnect";

import { currentUserProfile } from "../../controllers/authControllers";

///// ERROR MIDDLEWARE /////

import onError from "../../middlewares/error";
import { isAuthenticated } from "../../middlewares/auth";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticated).get(currentUserProfile);

export default handler;
