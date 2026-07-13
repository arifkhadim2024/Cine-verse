import { Router, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabase } from "../config/supabase.js";
import { authMiddleware, AuthRequest } from "../middleware/auth.js";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "dev_jwt_secret_key_1234567890_cineverse";

// @route   POST api/auth/register
// @desc    Register user
router.post("/register", async (req, res): Promise<Response | void> => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    // Check if user already exists in Supabase
    const { data: existingUser, error: fetchError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email.toLowerCase())
      .maybeSingle();

    if (fetchError) {
      console.error("Supabase user fetch error:", fetchError);
      return res.status(500).json({ message: "Database query error" });
    }

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in Supabase
    const { data: newUser, error: insertError } = await supabase
      .from("users")
      .insert({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        watchlist: [],
        favorites: [],
      })
      .select()
      .single();

    if (insertError) {
      console.error("Supabase user insert error:", insertError);
      return res.status(500).json({ message: "Database insert error" });
    }

    // Create JWT
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: "7d" });

    return res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        watchlist: newUser.watchlist || [],
        favorites: newUser.favorites || [],
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
router.post("/login", async (req, res): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    // Find user in Supabase
    const { data: user, error: fetchError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email.toLowerCase())
      .maybeSingle();

    if (fetchError) {
      console.error("Supabase login fetch error:", fetchError);
      return res.status(500).json({ message: "Database query error" });
    }

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        watchlist: user.watchlist || [],
        favorites: user.favorites || [],
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   GET api/auth/me
// @desc    Get user data
router.get(
  "/me",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<Response | void> => {
    try {
      const { data: user, error } = await supabase
        .from("users")
        .select("id, name, email, watchlist, favorites, created_at")
        .eq("id", req.userId)
        .maybeSingle();

      if (error || !user) {
        console.error("Supabase auth/me error:", error);
        return res.status(404).json({ message: "User not found" });
      }

      // Format response keys to match mongoose output format
      const formattedUser = {
        _id: user.id,
        id: user.id,
        name: user.name,
        email: user.email,
        watchlist: user.watchlist || [],
        favorites: user.favorites || [],
      };

      return res.json(formattedUser);
    } catch (error) {
      console.error("Auth me error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

export default router;
