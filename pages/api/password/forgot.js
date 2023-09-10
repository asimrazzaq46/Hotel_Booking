import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { forgotPassword } from "../../../controllers/authControllers";

///// ERROR MIDDLEWARE /////

import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.post(forgotPassword);

export default handler;
