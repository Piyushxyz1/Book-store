import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.mongo_db,
      { dbName: "jsobwebtokenusers" }
    );

    console.log("Connected successfully");

  } catch (error) {
    console.log("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;