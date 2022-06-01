import mongoose from "mongoose";

const dbConnect = () => {
  console.log(`mongodb file`);
  if (mongoose.connection.readyState >= 1) return;

  mongoose
    .connect(process.env.DB_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log(`connected to local database.`));
};

export default dbConnect;
