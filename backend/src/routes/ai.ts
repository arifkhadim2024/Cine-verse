import { Router, Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { mockMovies, Movie } from "../data/mockMovies.js";

const router = Router();
const getGeminiKey = (req: Request): string => {
  return (req.headers["x-gemini-key"] as string) || process.env.GEMINI_API_KEY || "";
};
const getTmdbKey = (req: Request): string => {
  return (req.headers["x-tmdb-key"] as string) || process.env.TMDB_API_KEY || "";
};
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Map TMDB genre IDs to our category names
const GENRE_MAP: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Anime",
  35: "Comedy",
  80: "Thriller",
  99: "Drama",
  18: "Drama",
  10751: "Adventure",
  14: "Sci-Fi",
  36: "Drama",
  27: "Horror",
  10402: "Romance",
  9648: "Thriller",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "Thriller",
  53: "Thriller",
  10752: "Action",
  37: "Adventure",
};

function generateGradients(title: string) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 60) % 360;
  return {
    posterGradient: `linear-gradient(135deg, hsl(${h1}, 60%, 8%) 0%, hsl(${h2}, 45%, 15%) 50%, hsl(${h1}, 60%, 8%) 100%)`,
    backdropGradient: `linear-gradient(135deg, #050000 0%, hsl(${h1}, 55%, 10%) 50%, #050000 100%)`,
  };
}

interface TmdbMovie {
  id: number;
  title: string;
  release_date?: string;
  genre_ids?: number[];
  vote_average?: number;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
}

function mapTmdbMovie(m: TmdbMovie): Movie {
  const gradients = generateGradients(m.title);
  const releaseYear = m.release_date ? new Date(m.release_date).getFullYear() : 2024;
  const genres = m.genre_ids
    ? m.genre_ids
        .map((id: number) => GENRE_MAP[id] || "Drama")
        .filter((v: string, i: number, a: string[]) => a.indexOf(v) === i)
    : ["Drama"];

  return {
    id: String(m.id),
    title: m.title,
    year: releaseYear,
    genres: genres.length > 0 ? genres : ["Drama"],
    imdb: m.vote_average ? Math.round(m.vote_average * 10) / 10 : 7.5,
    rt: m.vote_average ? Math.round(m.vote_average * 10) : 75,
    duration: "2h 05m",
    director: "Unknown",
    cast: [],
    description: m.overview || "No description available.",
    mood: ["tense", "stylish"],
    streaming: ["Netflix", "Prime"],
    posterGradient: gradients.posterGradient,
    backdropGradient: gradients.backdropGradient,
    posterUrl: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : undefined,
    backdropUrl: m.backdrop_path ? `https://image.tmdb.org/t/p/w1280${m.backdrop_path}` : undefined,
  };
}

// Search TMDB for a specific title and return mapped movie if found
async function searchTmdbMovieByTitle(title: string, apiKey: string): Promise<Movie | null> {
  try {
    if (!apiKey) {
      // search in mock movies
      const match = mockMovies.find((m) => m.title.toLowerCase().includes(title.toLowerCase()));
      return match || null;
    }
    const res = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: { api_key: apiKey, query: title },
    });

    if (res.data.results && res.data.results.length > 0) {
      return mapTmdbMovie(res.data.results[0]);
    }
    return null;
  } catch (error) {
    console.error(`Error searching title ${title} on TMDB:`, error);
    return null;
  }
}

// Fallback rule-based recommender when Gemini API Key is missing
function localAIRecommender(input: string): { text: string; recs: Movie[] } {
  const q = input.toLowerCase();
  let recs: Movie[] = [];
  let intent = "Here are some hand-picked recommendations for you:";

  if (q.includes("horror") || q.includes("scary") || q.includes("conjuring")) {
    recs = mockMovies
      .filter((m) => m.genres.includes("Horror") || m.mood.includes("dark"))
      .slice(0, 4);
    intent = "If you loved The Conjuring, these atmospheric chillers will keep you up:";
  } else if (q.includes("comedy") || q.includes("funny") || q.includes("family")) {
    recs = mockMovies
      .filter(
        (m) =>
          m.genres.includes("Comedy") || m.mood.includes("funny") || m.mood.includes("feel-good"),
      )
      .slice(0, 4);
    intent = "Perfect for a light evening — laughs guaranteed:";
  } else if (
    q.includes("mind") ||
    q.includes("bend") ||
    q.includes("inception") ||
    q.includes("cerebral")
  ) {
    recs = mockMovies
      .filter((m) => m.mood.includes("mind bending") || m.mood.includes("cerebral"))
      .slice(0, 4);
    intent = "Brain-melting puzzles that reward re-watching:";
  } else if (q.includes("sad") || q.includes("cry") || q.includes("emotional")) {
    recs = mockMovies
      .filter((m) => m.mood.includes("sad") || m.mood.includes("melancholic"))
      .slice(0, 4);
    intent = "Bring tissues — these will move you:";
  } else if (q.includes("action") || q.includes("intense")) {
    recs = mockMovies.filter((m) => m.genres.includes("Action")).slice(0, 4);
    intent = "Pure adrenaline. Strap in:";
  } else if (q.includes("romance") || q.includes("love")) {
    recs = mockMovies.filter((m) => m.genres.includes("Romance")).slice(0, 4);
    intent = "Pour the wine — here are some swoon-worthy picks:";
  } else if (q.includes("anime")) {
    recs = mockMovies.filter((m) => m.genres.includes("Anime")).slice(0, 4);
    intent = "Hand-drawn brilliance from across the spectrum:";
  } else {
    recs = mockMovies.slice(0, 4);
  }

  return { text: intent, recs };
}

// @route   POST api/ai/recommend
router.post("/recommend", async (req: Request, res: Response): Promise<Response | void> => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  const geminiKey = getGeminiKey(req);
  const tmdbKey = getTmdbKey(req);

  if (!geminiKey) {
    console.log("Gemini API Key missing. Using local rule-based AI.");
    const fallback = localAIRecommender(prompt);
    return res.json({
      message: fallback.text,
      recommendations: fallback.recs,
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(geminiKey);
    // Use gemini-1.5-flash for speed and reliability
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are CineVerse AI, an expert movie recommender. Analyze the user's prompt: "${prompt}".
Based on their input, suggest up to 4 movies.
You MUST output your response in JSON format matching the schema below:
{
  "message": "Write a friendly, paragraph-long conversational response recommending the movies, matching the user's requested vibe/mood.",
  "titles": ["List of suggested movie titles", "Maximum of 4 titles"]
}
Do not write anything other than the raw JSON response.`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const responseText = result.response.text();
    const parsedData = JSON.parse(responseText);

    const message = parsedData.message || "Here are some recommendations based on your request:";
    const titles = parsedData.titles || [];

    // Convert titles to TMDB movie entities
    const recsPromises = titles.map((title: string) => searchTmdbMovieByTitle(title, tmdbKey));
    const recsResults = await Promise.all(recsPromises);
    const filteredRecs = recsResults.filter((m): m is Movie => m !== null);

    return res.json({
      message,
      recommendations: filteredRecs,
    });
  } catch (error) {
    console.error("Gemini Recommender Error:", error);
    // Graceful fallback
    const fallback = localAIRecommender(prompt);
    return res.json({
      message:
        "Our AI brain is currently rebooting, but here are some curated picks for you: " +
        fallback.text,
      recommendations: fallback.recs,
    });
  }
});

export default router;
