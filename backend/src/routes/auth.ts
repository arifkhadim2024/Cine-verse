import { Router, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
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

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Create JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

    return res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        watchlist: user.watchlist,
        favorites: user.favorites,
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

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        watchlist: user.watchlist,
        favorites: user.favorites,
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
      const user = await User.findById(req.userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      console.error("Auth me error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  },
);

export default router;
