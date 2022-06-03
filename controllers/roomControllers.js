import Room from "../models/roomModel";

// import error handler class we created in utils folder
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";

// SEARCH , FILTER and PAGINATION

import APIFeatures from "../utils/apiFeatures";

//////////////////////////////////////////////
// GET all rooms    => get  /api/rooms
//////////////////////////////////////////////

const allRooms = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 4;
  const roomCounts = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room, req.query).search().filter();

  let rooms = await apiFeatures.query;

  apiFeatures.pagination(resultPerPage);

  rooms = await apiFeatures.query.clone();
  let filteredRoomsCount = rooms.length;

  if (!rooms.length) {
    return next(new ErrorHandler("Rooms not found", 404));
  }

  res.status(200).json({
    success: true,
    roomCounts,
    resultPerPage,
    filteredRoomsCount,
    rooms,
  });
});

//////////////////////////////////////////////
// CREATE new room    => post  /api/rooms
//////////////////////////////////////////////

const createNewRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

//////////////////////////////////////////////
// GET single room    => get  /api/rooms/:id
//////////////////////////////////////////////

const singleRoom = catchAsyncError(async (req, res, next) => {
  const { id } = req.query;

  const room = await Room.findById(id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id!", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

//////////////////////////////////////////////
// UPDATE single room    => put  /api/rooms/:id
//////////////////////////////////////////////

const updateRoom = catchAsyncError(async (req, res, next) => {
  const { id } = req.query;

  let room = await Room.findById(id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this id!", 404));
  }

  room = await Room.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

//////////////////////////////////////////////
// DELETE single room    => delete  /api/rooms
//////////////////////////////////////////////
const deleteRoom = catchAsyncError(async (req, res, next) => {
  const { id } = req.query;

  let room = await Room.findById(id);

  if (!room) {
    return next(new ErrorHandler("Room not exist with this id!", 404));
  }

  room = await Room.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});
export { allRooms, createNewRoom, singleRoom, updateRoom, deleteRoom };
