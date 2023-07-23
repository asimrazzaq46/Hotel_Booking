import catchAsyncError from "./catchAsyncError";

import ErrorHandler from "../utils/errorHandler";
import { getSession } from "next-auth/react";

const isAuthenticated = catchAsyncError(async (req, res, next) => {
// console.log(`req: `,req);
  const session = await getSession({ req });
  //  console.log(`session in auth.js: `, session);
  if (!session ) {
    return next(new ErrorHandler("Login first to access the resources.", 401));
  }
  console.log(`i am authenticated`);
  req.user = session.user;
  next();
});

export { isAuthenticated };
