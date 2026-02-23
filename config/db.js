import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cmsdb");
    console.log("Database connections created.");
  } catch (err) {
    console.log("Database Error:", err.message);
    process.exit(1);
  }
};
