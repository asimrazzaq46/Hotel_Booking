import User from "../models/userModel";
import catchAsyncError from "../middlewares/catchAsyncError";
// import error handler class we created in utils folder
import ErrorHandler from "../utils/errorHandler";
import sendEmail from "../utils/sendEmail";

import cloudinary from "cloudinary";
import absoluteUrl from "next-absolute-url";
import crypto from 'crypto'


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

//////////////////////////////////////////////
// PUT update user   => get  /api/me/update
//////////////////////////////////////////////

const updateUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
  }

  //update profile user AVATAR

  if (req.body.avatar != "") {
    const image_id = user.avatar.public_id;

    //DELETE USER PREVIOUS IMAGE image/avatar

    await cloudinary.v2.uploader.destroy(image_id);

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "bookIt/avatars",
      width: "150",
      crop: "scale",
    });

    user.avatar = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  await user.save();

  res.status(200).json({
    success: true,
  });
});

////////////////////////////////////////////////////////////////
// POST forgot password user   => POST  /api/password/forgot
////////////////////////////////////////////////////////////////

const forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("user not found with this email", 404));
  }
  /// Get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // get origin (DOMAIN)

  const { origin } = absoluteUrl(req);

  //// create reset password url

  const resetUrl = `${origin}/password/reset/${resetToken}`;

  const message = `your password reset url is as follow \n\n${resetUrl} \n\nif you have not requested this email then ignore it.`;

  try {
    await sendEmail({
      to: user.email,
      subject: "BookIT password recovery",
      text: message,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }

  res.status(200).json({
    success: true,
    message: `Email sent to : ${user.email}`,
  });
});

////////////////////////////////////////////////////////////////
// PUT Reset password user   => PUT  /api/password/reset/:token
////////////////////////////////////////////////////////////////

const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.query;

  // hash URL token

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "sorry, Password reset is invalid or has been expired.",
        400
      )
    );
  }

  /// getting the password and confirm password from the frontend

  const { password, confirmPassword } = req.body;

  // comparing the input password

  if(password !== confirmPassword){
    return next(new ErrorHandler('sorry, the password does not matched',400))
  }

  /// saving the password to the user model
  user.password = password;

  //// the password token and expiry time set to undefined after saving the password
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;


  await user.save()

  res.json({
    success:true,
    message:'Password updateed successfully'
  })


});

export {
  registerUser,
  currentUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword,
};
