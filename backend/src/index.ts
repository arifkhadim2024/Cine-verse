import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import moviesRouter from "./routes/movies.js";
import watchlistRouter from "./routes/watchlist.js";
import aiRouter from "./routes/ai.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables relative to backend root
dotenv.config({ path: path.resolve(__dirname, "../.env"), override: true });

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

// Run server only when launched directly/standalone, or outside Vercel in production
const isStandalone =
  process.env.BACKEND_STANDALONE === "true" ||
  (process.env.NODE_ENV === "production" && !process.env.VERCEL);

if (isStandalone) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
