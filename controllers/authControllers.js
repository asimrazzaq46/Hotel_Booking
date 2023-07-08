import User from "../models/userModel";
import catchAsyncError from "../middlewares/catchAsyncError";

//////////////////////////////////////////////
// POST register the user   => get  /api/auth/register
//////////////////////////////////////////////

const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "PUBLIC_ID",
      url: "URL",
    },
  });
  res.status(200).json({
    success: true,
    message: "Account register successfully.",
  });
});

export { registerUser };
