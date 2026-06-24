import mongoose from "mongoose";

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/cineverse";
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    console.warn(
      "WARNING: Running without database. Authentication and persistent watchlist features will be disabled.",
    );
  }
}
