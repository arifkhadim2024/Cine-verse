import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: Number },
    genres: [{ type: String }],
    imdb: { type: Number },
    rt: { type: Number },
    duration: { type: String },
    posterUrl: { type: String },
    backdropUrl: { type: String },
    posterGradient: { type: String },
    backdropGradient: { type: String },
    description: { type: String },
  },
  { _id: false },
);

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  watchlist: [MovieSchema],
  favorites: [MovieSchema],
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", UserSchema);
