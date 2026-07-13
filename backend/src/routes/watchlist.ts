import { Router, Response } from "express";
import { supabase } from "../config/supabase.js";
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
      const { data: user, error } = await supabase
        .from("users")
        .select("watchlist")
        .eq("id", req.userId)
        .maybeSingle();

      if (error || !user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user.watchlist || []);
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
      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("watchlist")
        .eq("id", req.userId)
        .maybeSingle();

      if (fetchError || !user) {
        return res.status(404).json({ message: "User not found" });
      }

      const watchlist = user.watchlist || [];

      // Check if movie already exists in watchlist
      const exists = watchlist.some((item: any) => String(item.id) === String(movie.id));
      if (exists) {
        return res.status(400).json({ message: "Movie already in watchlist" });
      }

      watchlist.push(movie);

      const { error: updateError } = await supabase
        .from("users")
        .update({ watchlist })
        .eq("id", req.userId);

      if (updateError) {
        console.error("Supabase watchlist update error:", updateError);
        return res.status(500).json({ message: "Database update error" });
      }

      return res.status(201).json(watchlist);
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
      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("watchlist")
        .eq("id", req.userId)
        .maybeSingle();

      if (fetchError || !user) {
        return res.status(404).json({ message: "User not found" });
      }

      let watchlist = user.watchlist || [];
      watchlist = watchlist.filter((item: any) => String(item.id) !== id);

      const { error: updateError } = await supabase
        .from("users")
        .update({ watchlist })
        .eq("id", req.userId);

      if (updateError) {
        console.error("Supabase watchlist delete update error:", updateError);
        return res.status(500).json({ message: "Database update error" });
      }

      return res.json(watchlist);
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
      const { data: user, error } = await supabase
        .from("users")
        .select("favorites")
        .eq("id", req.userId)
        .maybeSingle();

      if (error || !user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user.favorites || []);
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
      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("favorites")
        .eq("id", req.userId)
        .maybeSingle();

      if (fetchError || !user) {
        return res.status(404).json({ message: "User not found" });
      }

      const favorites = user.favorites || [];

      // Check if movie already exists in favorites
      const exists = favorites.some((item: any) => String(item.id) === String(movie.id));
      if (exists) {
        return res.status(400).json({ message: "Movie already in favorites" });
      }

      favorites.push(movie);

      const { error: updateError } = await supabase
        .from("users")
        .update({ favorites })
        .eq("id", req.userId);

      if (updateError) {
        console.error("Supabase favorites update error:", updateError);
        return res.status(500).json({ message: "Database update error" });
      }

      return res.status(201).json(favorites);
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
      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("favorites")
        .eq("id", req.userId)
        .maybeSingle();

      if (fetchError || !user) {
        return res.status(404).json({ message: "User not found" });
      }

      let favorites = user.favorites || [];
      favorites = favorites.filter((item: any) => String(item.id) !== id);

      const { error: updateError } = await supabase
        .from("users")
        .update({ favorites })
        .eq("id", req.userId);

      if (updateError) {
        console.error("Supabase favorites delete update error:", updateError);
        return res.status(500).json({ message: "Database update error" });
      }

      return res.json(favorites);
    } catch (error) {
      console.error("Remove favorite error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

export default router;
