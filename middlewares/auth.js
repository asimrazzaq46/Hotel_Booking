import catchAsyncError from "./catchAsyncError";

import ErrorHandler from "../utils/errorHandler";
import { getSession } from "next-auth/react";

const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return next(new ErrorHandler("Login first to access the resources.", 401));
  }
  req.user = session.user;
  next();
});

export { isAuthenticated };
