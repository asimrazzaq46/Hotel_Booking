import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
    maxLength: [50, "sorry, your name cannot exceed 50 charecters."],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
    unique: [true, "sorry the email is already taken."],
    validate: [validator.isEmail, "please enter valid email."],
  },
  password: {
    type: String,
    required: [true, "Please enter the password."],
    minLength: [6, "password must contain 6 charecters."],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// ENCRYPTING PASSWORD BEFORE SAVING

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// COMPARE USER PASSWORD
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
};

export default mongoose.models.User || mongoose.model("User", userSchema);
