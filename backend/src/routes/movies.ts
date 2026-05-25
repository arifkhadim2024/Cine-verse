import { Router, Request, Response } from "express";
import axios from "axios";
import { mockMovies, Movie } from "../data/mockMovies.js";

const router = Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY || "";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Map TMDB genre IDs to our category names
const GENRE_MAP: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Anime", // Map animation to anime for this specific app style
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

// Generate custom gradients based on movie title for a premium look
function generateGradients(title: string) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 60) % 360;
  
  // High quality dark gradients matching Netflix style
  return {
    posterGradient: `linear-gradient(135deg, hsl(${h1}, 60%, 8%) 0%, hsl(${h2}, 45%, 15%) 50%, hsl(${h1}, 60%, 8%) 100%)`,
    backdropGradient: `linear-gradient(135deg, #050000 0%, hsl(${h1}, 55%, 10%) 50%, #050000 100%)`,
  };
}

// Map a TMDB movie object to our frontend Movie type
function mapTmdbMovie(m: any): Movie {
  const gradients = generateGradients(m.title);
  const releaseYear = m.release_date ? new Date(m.release_date).getFullYear() : 2024;
  const genres = m.genre_ids ? m.genre_ids.map((id: number) => GENRE_MAP[id] || "Drama").filter((v: string, i: number, a: string[]) => a.indexOf(v) === i) : ["Drama"];
  
  return {
    id: String(m.id),
    title: m.title,
    year: releaseYear,
    genres: genres.length > 0 ? genres : ["Drama"],
    imdb: m.vote_average ? Math.round(m.vote_average * 10) / 10 : 7.5,
    rt: m.vote_average ? Math.round(m.vote_average * 10) : 75,
    duration: m.runtime ? `${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m` : "2h 05m",
    director: "Unknown", // Fetch credits API to fill this
    cast: [], // Fetch credits API to fill this
    description: m.overview || "No description available.",
    mood: ["tense", "stylish"],
    streaming: ["Netflix", "Prime"], // Default mocking
    posterGradient: gradients.posterGradient,
    backdropGradient: gradients.backdropGradient,
    posterUrl: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : undefined,
    backdropUrl: m.backdrop_path ? `https://image.tmdb.org/t/p/w1280${m.backdrop_path}` : undefined,
  };
}

// Fetch credits (cast & director) for details mapping
async function fetchCredits(movieId: string): Promise<{ director: string; cast: string[] }> {
  try {
    if (!TMDB_API_KEY) return { director: "Unknown", cast: [] };
    const res = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/credits`, {
      params: { api_key: TMDB_API_KEY },
    });
    
    const crew = res.data.crew || [];
    const cast = res.data.cast || [];
    
    const directorObj = crew.find((member: any) => member.job === "Director");
    const director = directorObj ? directorObj.name : "Unknown";
    const castNames = cast.slice(0, 5).map((member: any) => member.name);
    
    return { director, cast: castNames };
  } catch (error) {
    console.error(`Error fetching credits for movie ${movieId}:`, error);
    return { director: "Unknown", cast: [] };
  }
}

// Fetch trailer video ID
async function fetchTrailer(movieId: string): Promise<string | undefined> {
  try {
    if (!TMDB_API_KEY) return undefined;
    const res = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/videos`, {
      params: { api_key: TMDB_API_KEY },
    });
    
    const videos = res.data.results || [];
    // Search for youtube trailers
    const trailer = videos.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );
    
    return trailer ? trailer.key : videos[0]?.key;
  } catch (error) {
    console.error(`Error fetching trailer for movie ${movieId}:`, error);
    return undefined;
  }
}

// @route   GET api/movies/trending
router.get("/trending", async (req: Request, res: Response) => {
  try {
    if (!TMDB_API_KEY) {
      console.log("TMDB API Key missing. Serving mock movies.");
      return res.json(mockMovies.slice(0, 6));
    }
    
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/week`, {
      params: { api_key: TMDB_API_KEY },
    });
    
    const mapped = response.data.results.slice(0, 10).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return res.json(mockMovies.slice(0, 6));
  }
});

// @route   GET api/movies/top-rated
router.get("/top-rated", async (req: Request, res: Response) => {
  try {
    if (!TMDB_API_KEY) {
      return res.json(mockMovies.slice().sort((a, b) => b.imdb - a.imdb).slice(0, 8));
    }
    
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      params: { api_key: TMDB_API_KEY },
    });
    
    const mapped = response.data.results.slice(0, 10).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    return res.json(mockMovies.slice().sort((a, b) => b.imdb - a.imdb).slice(0, 8));
  }
});

// @route   GET api/movies/search
router.get("/search", async (req: Request, res: Response): Promise<any> => {
  const query = req.query.q as string;
  
  try {
    if (!TMDB_API_KEY) {
      if (!query) {
        return res.json(mockMovies);
      }
      const lower = query.toLowerCase().trim();
      const filtered = mockMovies.filter((m) =>
        m.title.toLowerCase().includes(lower) ||
        m.genres.some((g) => g.toLowerCase().includes(lower)) ||
        m.cast.some((c) => c.toLowerCase().includes(lower)) ||
        m.description.toLowerCase().includes(lower)
      );
      return res.json(filtered);
    }
    
    let response;
    if (!query) {
      // If query is empty, get popular movies to show default listings
      response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
        params: { api_key: TMDB_API_KEY },
      });
    } else {
      response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
        params: { api_key: TMDB_API_KEY, query },
      });
    }
    
    const mapped = response.data.results.map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error searching movies:", error);
    return res.status(500).json({ message: "Error searching movies" });
  }
});

// @route   GET api/movies/:id
router.get("/:id", async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  
  // If id is not a number, it's likely a mock movie ID
  const isMockId = isNaN(Number(id));
  
  if (isMockId || !TMDB_API_KEY) {
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    return res.json(movie);
  }
  
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: { api_key: TMDB_API_KEY },
    });
    
    const mapped = mapTmdbMovie(response.data);
    
    const movieId = id as string;
    // Enrich with credits and trailer
    const [credits, trailerKey] = await Promise.all([
      fetchCredits(movieId),
      fetchTrailer(movieId),
    ]);
    
    mapped.director = credits.director;
    mapped.cast = credits.cast;
    mapped.trailerId = trailerKey;
    
    // Add additional properties from full details response
    if (response.data.genres) {
      mapped.genres = response.data.genres.map((g: any) => g.name);
    }
    
    return res.json(mapped);
  } catch (error) {
    console.error(`Error fetching movie details for ${id}:`, error);
    // Try to fall back to mock movies in case TMDB lookup fails
    const mock = mockMovies.find((m) => m.id === id);
    if (mock) return res.json(mock);
    return res.status(404).json({ message: "Movie details not found" });
  }
});

// @route   GET api/movies/:id/similar
router.get("/:id/similar", async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const isMockId = isNaN(Number(id));
  
  if (isMockId || !TMDB_API_KEY) {
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) return res.json([]);
    const similar = mockMovies
      .filter((x) => x.id !== id && x.genres.some((g) => movie.genres.includes(g)))
      .slice(0, 6);
    return res.json(similar);
  }
  
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}/similar`, {
      params: { api_key: TMDB_API_KEY },
    });
    
    const mapped = response.data.results.slice(0, 6).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return res.json([]);
  }
});

export default router;
