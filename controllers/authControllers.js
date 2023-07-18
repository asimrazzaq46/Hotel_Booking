import User from "../models/userModel";
import catchAsyncError from "../middlewares/catchAsyncError";

import cloudinary from "cloudinary";

// SETTING UP CLOUDINARY CONFIG

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//////////////////////////////////////////////
// POST register the user   => get  /api/auth/register
//////////////////////////////////////////////

const registerUser = catchAsyncError(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "bookIt/avatars",
    width: "150",
    crop: "scale",
  });

  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "Account register successfully.",
  });
});

//////////////////////////////////////////////
// POST current user   => get  /api/me
//////////////////////////////////////////////

const currentUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export { registerUser, currentUserProfile };
