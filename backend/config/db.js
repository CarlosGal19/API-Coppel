import mongoose from "mongoose";

export default async function connectDB() {
  const url = process.env.MONGODB_URI;

  try {
    await mongoose.connect(url);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log('Database connected');
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
