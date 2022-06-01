import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide room name."],
    trim: true,
    maxlength: [100, "Room name connot exceed 100 letters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price."],
    maxlength: [4, "Room price connot exceed 4 digits"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please provide room description."],
  },
  address: {
    type: String,
    required: [true, "Please provide room address."],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please provide room guest capacity."],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter number of beds in room."],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airCondition: {
    type: Boolean,
    default: false,
  },
  pets: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please provide room category."],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category for room.",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
