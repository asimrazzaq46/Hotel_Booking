import nc from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { resetPassword } from "../../../../controllers/authControllers";

///// ERROR MIDDLEWARE /////

import onError from "../../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.put(resetPassword);

export default handler;
