///////////////////////////////////////
/////// IF YOU WANT TO SEED THAN //////
/////// CHANGE THE ADDRESS OF DATABSE //////
/////// IN TO THE STRING AND IN //////
/////// PACKAGE.JSON FILE INSERT  //////
/////////// "path":"module" //////////

const Room = require("../models/roomModel");

const dbConnect = require("../config/dbConnect.js");

const rooms = require("../data/rooms.js");

dbConnect();

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log(`Rooms are deleted.`);
    await Room.insertMany(rooms);
    console.log(`All Rooms are inserted into database.`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

seedRooms();
