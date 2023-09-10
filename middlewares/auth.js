import catchAsyncError from "./catchAsyncError";

import ErrorHandler from "../utils/errorHandler";
import { getToken } from "next-auth/jwt";

const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!session) {
    return next(new ErrorHandler("Login first to access the resources.", 401));
  }
  req.user = session.user;
  next();
});

export { isAuthenticated };
