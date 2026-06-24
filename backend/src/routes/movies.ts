import { Router, Request, Response } from "express";
import axios from "axios";
import { mockMovies, Movie } from "../data/mockMovies.js";

const router = Router();
const getTmdbKey = (req: Request): string => {
  return (req.headers["x-tmdb-key"] as string) || process.env.TMDB_API_KEY || "";
};
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

interface TmdbMovie {
  id: number;
  title: string;
  release_date?: string;
  genre_ids?: number[];
  vote_average?: number;
  runtime?: number;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  genres?: { id: number; name: string }[];
}

interface TmdbCastMember {
  name: string;
  character: string;
  profile_path?: string;
}

interface TmdbCrewMember {
  job: string;
  name: string;
}

interface TmdbVideo {
  type: string;
  site: string;
  key: string;
}

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
async function fetchCredits(movieId: string, apiKey: string): Promise<{ director: string; cast: string[] }> {
  try {
    if (!apiKey) return { director: "Unknown", cast: [] };
    const res = await axios.get<{ crew: TmdbCrewMember[]; cast: TmdbCastMember[] }>(
      `${TMDB_BASE_URL}/movie/${movieId}/credits`,
      {
        params: { api_key: apiKey },
      },
    );

    const crew = res.data.crew || [];
    const cast = res.data.cast || [];

    const directorObj = crew.find((member) => member.job === "Director");
    const director = directorObj ? directorObj.name : "Unknown";
    const castNames = cast.slice(0, 5).map((member) => member.name);

    return { director, cast: castNames };
  } catch (error) {
    console.error(`Error fetching credits for movie ${movieId}:`, error);
    return { director: "Unknown", cast: [] };
  }
}

// Fetch trailer video ID
async function fetchTrailer(movieId: string, apiKey: string): Promise<string | undefined> {
  try {
    if (!apiKey) return undefined;
    const res = await axios.get<{ results: TmdbVideo[] }>(
      `${TMDB_BASE_URL}/movie/${movieId}/videos`,
      {
        params: { api_key: apiKey },
      },
    );

    const videos = res.data.results || [];
    // Search for youtube trailers
    const trailer = videos.find((video) => video.type === "Trailer" && video.site === "YouTube");

    return trailer ? trailer.key : videos[0]?.key;
  } catch (error) {
    console.error(`Error fetching trailer for movie ${movieId}:`, error);
    return undefined;
  }
}

// @route   GET api/movies/trending
router.get("/trending", async (req: Request, res: Response): Promise<Response | void> => {
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      console.log("TMDB API Key missing. Serving mock movies.");
      return res.json(mockMovies.slice(0, 6));
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(
      `${TMDB_BASE_URL}/trending/movie/week`,
      {
        params: { api_key: apiKey },
      },
    );

    const mapped = response.data.results.slice(0, 10).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return res.json(mockMovies.slice(0, 6));
  }
});

// @route   GET api/movies/top-rated
router.get("/top-rated", async (req: Request, res: Response): Promise<Response | void> => {
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      return res.json(
        mockMovies
          .slice()
          .sort((a, b) => b.imdb - a.imdb)
          .slice(0, 8),
      );
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/movie/top_rated`, {
      params: { api_key: apiKey },
    });

    const mapped = response.data.results.slice(0, 10).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    return res.json(
      mockMovies
        .slice()
        .sort((a, b) => b.imdb - a.imdb)
        .slice(0, 8),
    );
  }
});

// @route   GET api/movies/search
router.get("/search", async (req: Request, res: Response): Promise<Response | void> => {
  const query = req.query.q as string;
  const apiKey = getTmdbKey(req);

  try {
    if (!apiKey) {
      if (!query) {
        return res.json(mockMovies);
      }
      const lower = query.toLowerCase().trim();
      const filtered = mockMovies.filter(
        (m) =>
          m.title.toLowerCase().includes(lower) ||
          m.genres.some((g) => g.toLowerCase().includes(lower)) ||
          m.cast.some((c) => c.toLowerCase().includes(lower)) ||
          m.description.toLowerCase().includes(lower),
      );
      return res.json(filtered);
    }

    let response;
    if (!query) {
      // If query is empty, get popular movies to show default listings
      response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/movie/popular`, {
        params: { api_key: apiKey },
      });
    } else {
      response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/search/movie`, {
        params: { api_key: apiKey, query },
      });
    }

    const mapped = response.data.results.map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error searching movies:", error);
    return res.status(500).json({ message: "Error searching movies" });
  }
});

// @route   GET api/movies/upcoming
router.get("/upcoming", async (req: Request, res: Response): Promise<Response | void> => {
  const page = req.query.page as string;
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      return res.json(mockMovies.slice(2, 8));
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/movie/upcoming`, {
      params: { api_key: apiKey, page: page || "1" },
    });

    const mapped = response.data.results.slice(0, 10).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return res.json(mockMovies.slice(2, 8));
  }
});

// @route   GET api/movies/bollywood
router.get("/bollywood", async (req: Request, res: Response): Promise<Response | void> => {
  const page = req.query.page as string;
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      return res.json(mockMovies.slice(0, 5));
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: apiKey,
        with_original_language: "hi",
        sort_by: "popularity.desc",
        page: page || "1",
      },
    });

    const mapped = response.data.results.map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching bollywood movies:", error);
    return res.json(mockMovies.slice(0, 5));
  }
});

// @route   GET api/movies/korean
router.get("/korean", async (req: Request, res: Response): Promise<Response | void> => {
  const page = req.query.page as string;
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      return res.json(mockMovies.slice(3, 8));
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: apiKey,
        with_original_language: "ko",
        sort_by: "popularity.desc",
        page: page || "1",
      },
    });

    const mapped = response.data.results.map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching korean movies:", error);
    return res.json(mockMovies.slice(3, 8));
  }
});

// @route   GET api/movies/anime
router.get("/anime", async (req: Request, res: Response): Promise<Response | void> => {
  const page = req.query.page as string;
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      return res.json(mockMovies.filter((m) => m.genres.includes("Anime")));
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: "16",
        with_original_language: "ja",
        sort_by: "popularity.desc",
        page: page || "1",
      },
    });

    const mapped = response.data.results.map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching anime movies:", error);
    return res.json(mockMovies.filter((m) => m.genres.includes("Anime")));
  }
});

// @route   GET api/movies/genre/:genreId
router.get("/genre/:genreId", async (req: Request, res: Response): Promise<Response | void> => {
  const { genreId } = req.params;
  const page = req.query.page as string;
  const numericGenreId = Number(genreId);
  const apiKey = getTmdbKey(req);
  try {
    if (!apiKey) {
      const genreName = GENRE_MAP[numericGenreId];
      if (!genreName) return res.json(mockMovies);
      return res.json(mockMovies.filter((m) => m.genres.includes(genreName)));
    }

    const response = await axios.get<{ results: TmdbMovie[] }>(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: genreId,
        sort_by: "popularity.desc",
        page: page || "1",
      },
    });

    const mapped = response.data.results.map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    const genreName = GENRE_MAP[numericGenreId];
    return res.json(mockMovies.filter((m) => m.genres.includes(genreName || "")));
  }
});

// @route   GET api/movies/:id
router.get("/:id", async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const apiKey = getTmdbKey(req);

  // If id is not a number, it's likely a mock movie ID
  const isMockId = isNaN(Number(id));

  if (isMockId || !apiKey) {
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    return res.json(movie);
  }

  try {
    const response = await axios.get<TmdbMovie>(`${TMDB_BASE_URL}/movie/${id}`, {
      params: { api_key: apiKey },
    });

    const mapped = mapTmdbMovie(response.data);

    const movieId = id as string;
    // Enrich with credits and trailer
    const [credits, trailerKey] = await Promise.all([
      fetchCredits(movieId, apiKey),
      fetchTrailer(movieId, apiKey),
    ]);

    mapped.director = credits.director;
    mapped.cast = credits.cast;
    mapped.trailerId = trailerKey;

    // Fetch images to get logo
    let logoUrl: string | undefined;
    try {
      const imagesRes = await axios.get<{ logos?: { file_path: string }[] }>(
        `${TMDB_BASE_URL}/movie/${id}/images`,
        {
          params: { api_key: apiKey, include_image_language: "en,null" },
        },
      );
      const logoObj = imagesRes.data.logos?.find((l) => l.file_path);
      if (logoObj) {
        logoUrl = `https://image.tmdb.org/t/p/w500${logoObj.file_path}`;
      }
    } catch (e) {
      console.warn("Failed to fetch movie logo from TMDB:", e);
    }
    mapped.logoUrl = logoUrl;

    // Add additional properties from full details response
    if (response.data.genres) {
      mapped.genres = response.data.genres.map((g: { id: number; name: string }) => g.name);
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
router.get("/:id/similar", async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const isMockId = isNaN(Number(id));
  const apiKey = getTmdbKey(req);

  if (isMockId || !apiKey) {
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) return res.json([]);
    const similar = mockMovies
      .filter((x) => x.id !== id && x.genres.some((g) => movie.genres.includes(g)))
      .slice(0, 6);
    return res.json(similar);
  }

  try {
    const response = await axios.get<{ results: TmdbMovie[] }>(
      `${TMDB_BASE_URL}/movie/${id}/similar`,
      {
        params: { api_key: apiKey },
      },
    );

    const mapped = response.data.results.slice(0, 6).map(mapTmdbMovie);
    return res.json(mapped);
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return res.json([]);
  }
});

// @route   GET api/movies/:id/recommendations
router.get(
  "/:id/recommendations",
  async (req: Request, res: Response): Promise<Response | void> => {
    const { id } = req.params;
    const isMockId = isNaN(Number(id));
    const apiKey = getTmdbKey(req);

    if (isMockId || !apiKey) {
      const movie = mockMovies.find((m) => m.id === id);
      if (!movie) return res.json([]);
      const similar = mockMovies
        .filter((x) => x.id !== id && x.genres.some((g) => movie.genres.includes(g)))
        .slice(0, 6);
      return res.json(similar);
    }

    try {
      const response = await axios.get<{ results: TmdbMovie[] }>(
        `${TMDB_BASE_URL}/movie/${id}/recommendations`,
        {
          params: { api_key: apiKey },
        },
      );

      const mapped = response.data.results.slice(0, 6).map(mapTmdbMovie);
      return res.json(mapped);
    } catch (error) {
      console.error("Error fetching recommended movies:", error);
      return res.json([]);
    }
  },
);

export default router;
