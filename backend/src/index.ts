import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.js";
import moviesRouter from "./routes/movies.js";
import watchlistRouter from "./routes/watchlist.js";
import aiRouter from "./routes/ai.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: "*", // Adjust in production to frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-tmdb-key", "x-gemini-key"],
  }),
);

// Body parser middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/movies", moviesRouter);
app.use("/api", watchlistRouter);
app.use("/api/ai", aiRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date() });
});

// Start DB connection and listen
async function startServer() {
  // Check if mongo URI is default localhost and warn, but don't fail
  const mongoUri = process.env.MONGO_URI || "";
  if (!mongoUri || mongoUri.includes("localhost")) {
    console.warn(
      "WARNING: Running with local/empty MongoDB. Watchlist/Favorites features will require a running MongoDB instance.",
    );
  }

  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
