import { Router, Response } from "express";
import { User } from "../models/User.js";
import { authMiddleware, AuthRequest } from "../middleware/auth.js";

const router = Router();

// ==========================================
// WATCHLIST ENDPOINTS
// ==========================================

// @route   GET api/watchlist
// @desc    Get user's watchlist
router.get(
  "/watchlist",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: "User not found" });
      return res.json(user.watchlist);
    } catch (error) {
      console.error("Fetch watchlist error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

// @route   POST api/watchlist
// @desc    Add movie to watchlist
router.post(
  "/watchlist",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    const movie = req.body;
    if (!movie || !movie.id) {
      return res.status(400).json({ message: "Invalid movie data" });
    }

    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      // Check if movie already exists in watchlist
      const exists = user.watchlist.some((item) => item.id === String(movie.id));
      if (exists) {
        return res.status(400).json({ message: "Movie already in watchlist" });
      }

      user.watchlist.push(movie);
      await user.save();
      return res.status(201).json(user.watchlist);
    } catch (error) {
      console.error("Add watchlist error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

// @route   DELETE api/watchlist/:id
// @desc    Remove movie from watchlist
router.delete(
  "/watchlist/:id",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    const { id } = req.params;

    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      user.watchlist = user.watchlist.filter(
        (item) => item.id !== id,
      ) as unknown as typeof user.watchlist;
      await user.save();
      return res.json(user.watchlist);
    } catch (error) {
      console.error("Remove watchlist error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

// ==========================================
// FAVORITES ENDPOINTS
// ==========================================

// @route   GET api/favorites
// @desc    Get user's favorites
router.get(
  "/favorites",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: "User not found" });
      return res.json(user.favorites);
    } catch (error) {
      console.error("Fetch favorites error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

// @route   POST api/favorites
// @desc    Add movie to favorites
router.post(
  "/favorites",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    const movie = req.body;
    if (!movie || !movie.id) {
      return res.status(400).json({ message: "Invalid movie data" });
    }

    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      // Check if movie already exists in favorites
      const exists = user.favorites.some((item) => item.id === String(movie.id));
      if (exists) {
        return res.status(400).json({ message: "Movie already in favorites" });
      }

      user.favorites.push(movie);
      await user.save();
      return res.status(201).json(user.favorites);
    } catch (error) {
      console.error("Add favorite error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

// @route   DELETE api/favorites/:id
// @desc    Remove movie from favorites
router.delete(
  "/favorites/:id",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    const { id } = req.params;

    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: "User not found" });

      user.favorites = user.favorites.filter(
        (item) => item.id !== id,
      ) as unknown as typeof user.favorites;
      await user.save();
      return res.json(user.favorites);
    } catch (error) {
      console.error("Remove favorite error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

export default router;
