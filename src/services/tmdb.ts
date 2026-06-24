import { movies as mockMovies, Movie } from "@/data/movies";

const TMDB_API_KEY =
  typeof window !== "undefined"
    ? localStorage.getItem("cineverse_tmdb_key") || import.meta.env.VITE_TMDB_API_KEY || ""
    : import.meta.env.VITE_TMDB_API_KEY || "";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Map TMDB genre IDs to our category names
export const GENRE_MAP: Record<number, string> = {
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

// Map of names to TMDB IDs for filter sections
export const GENRE_IDS: Record<string, number> = {
  Action: 28,
  Horror: 27,
  Comedy: 35,
  Romance: 10749,
  Thriller: 53,
  "Sci-Fi": 878,
  Anime: 16,
};

// Re-declare Movie type with rich details to keep it fully typed
export interface RichMovie extends Movie {
  castDetails?: { name: string; profileUrl?: string; character?: string }[];
  tagline?: string;
  releaseDate?: string;
  popularity?: number;
  productionCompanies?: string[];
  spokenLanguages?: string[];
}

export interface TmdbMovie {
  id: number;
  title: string;
  release_date?: string;
  genre_ids?: number[];
  vote_average?: number;
  runtime?: number;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  tagline?: string;
  popularity?: number;
  production_companies?: { name: string }[];
  spoken_languages?: { english_name: string }[];
  genres?: { name: string }[];
}

export interface TmdbCastMember {
  name: string;
  character: string;
  profile_path?: string;
}

export interface TmdbCrewMember {
  job: string;
  name: string;
}

export interface TmdbCredits {
  cast: TmdbCastMember[];
  crew: TmdbCrewMember[];
}

export interface TmdbVideo {
  type: string;
  site: string;
  name?: string;
  key: string;
}

export interface TmdbVideosResponse {
  results: TmdbVideo[];
}

export interface TmdbPageResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

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

function mapTmdbMovie(m: TmdbMovie): RichMovie {
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

async function fetchFromTmdb<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params,
  }).toString();

  const response = await fetch(`${TMDB_BASE_URL}${path}?${queryParams}`);
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

// 1. Search movies (paginated)
export async function searchMovies(query: string, page: number = 1): Promise<RichMovie[]> {
  if (!query) return getPopularMovies(page);
  if (!TMDB_API_KEY) {
    const lower = query.toLowerCase().trim();
    return mockMovies.filter(
      (m) =>
        m.title.toLowerCase().includes(lower) ||
        m.genres.some((g) => g.toLowerCase().includes(lower)) ||
        m.cast.some((c) => c.toLowerCase().includes(lower)) ||
        m.description.toLowerCase().includes(lower),
    );
  }
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/search/movie", {
      query,
      page: String(page),
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error searchMovies:", error);
    return [];
  }
}

// 2. Get trending movies
export async function getTrendingMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) return mockMovies.slice(0, 6);
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/trending/movie/week", {
      page: String(page),
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getTrendingMovies:", error);
    return mockMovies.slice(0, 6);
  }
}

// 3. Get movie details (IMDb rich details)
export async function getMovieDetails(id: string): Promise<RichMovie> {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  }

  try {
    const details = await fetchFromTmdb<TmdbMovie>(`/movie/${id}`);
    const credits = await fetchFromTmdb<TmdbCredits>(`/movie/${id}/credits`);
    const trailerKey = await getMovieVideos(id);

    let logoUrl: string | undefined;
    try {
      const images = await fetchFromTmdb<{ logos?: { file_path: string }[] }>(`/movie/${id}/images`, {
        include_image_language: "en,null",
      });
      const logoObj = images.logos?.find((l) => l.file_path);
      if (logoObj) {
        logoUrl = `https://image.tmdb.org/t/p/w500${logoObj.file_path}`;
      }
    } catch (e) {
      console.warn("Failed to fetch movie logo", e);
    }

    const mapped = mapTmdbMovie(details);
    mapped.logoUrl = logoUrl;

    // Populate cast & director details
    const crew = credits.crew || [];
    const cast = credits.cast || [];
    const directorObj = crew.find((member) => member.job === "Director");
    mapped.director = directorObj ? directorObj.name : "Unknown";

    // Map cast details (with profile URLs)
    mapped.cast = cast.slice(0, 5).map((member) => member.name);
    mapped.castDetails = cast.slice(0, 12).map((c) => ({
      name: c.name,
      character: c.character,
      profileUrl: c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : undefined,
    }));

    // Rich properties
    mapped.tagline = details.tagline || "";
    mapped.releaseDate = details.release_date
      ? new Date(details.release_date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : undefined;
    mapped.popularity = details.popularity;

    if (details.production_companies) {
      mapped.productionCompanies = details.production_companies.map((c) => c.name);
    }

    if (details.spoken_languages) {
      mapped.spokenLanguages = details.spoken_languages.map((l) => l.english_name);
    }

    if (details.genres) {
      mapped.genres = details.genres.map((g) => g.name);
    }

    // Attach trailer key
    mapped.trailerId = trailerKey;

    return mapped;
  } catch (error) {
    console.error("Error getMovieDetails:", error);
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  }
}

// 4. Get movie videos (extract youtube key, auto select official trailer or teaser)
export async function getMovieVideos(id: string): Promise<string | undefined> {
  if (!TMDB_API_KEY) {
    const movie = mockMovies.find((m) => m.id === id);
    return movie?.trailerId;
  }
  try {
    const data = await fetchFromTmdb<TmdbVideosResponse>(`/movie/${id}/videos`);
    const results = data.results || [];

    // Try to find official youtube trailer
    const officialTrailer = results.find(
      (v) =>
        v.type === "Trailer" && v.site === "YouTube" && v.name?.toLowerCase().includes("official"),
    );
    if (officialTrailer) return officialTrailer.key;

    // Fall back to any youtube trailer
    const generalTrailer = results.find((v) => v.type === "Trailer" && v.site === "YouTube");
    if (generalTrailer) return generalTrailer.key;

    // Fall back to teaser or clip on youtube
    const teaserOrClip = results.find(
      (v) => (v.type === "Teaser" || v.type === "Clip") && v.site === "YouTube",
    );
    if (teaserOrClip) return teaserOrClip.key;

    // Fall back to first youtube video
    const firstYoutube = results.find((v) => v.site === "YouTube");
    return firstYoutube?.key;
  } catch (error) {
    console.error("Error getMovieVideos:", error);
    return undefined;
  }
}

// 5. Get movies by genre
export async function getMoviesByGenre(genreId: number, page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) {
    const genreName = GENRE_MAP[genreId];
    if (!genreName) return mockMovies;
    return mockMovies.filter((m) => m.genres.includes(genreName));
  }
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/discover/movie", {
      with_genres: String(genreId),
      sort_by: "popularity.desc",
      page: String(page),
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getMoviesByGenre:", error);
    const genreName = GENRE_MAP[genreId];
    return mockMovies.filter((m) => m.genres.includes(genreName || ""));
  }
}

// 6. Regional Movie Discovery
// Hindi / Bollywood Movies
export async function getBollywoodMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) return mockMovies.slice(0, 5);
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/discover/movie", {
      with_original_language: "hi",
      sort_by: "popularity.desc",
      page: String(page),
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getBollywoodMovies:", error);
    return mockMovies.slice(0, 5);
  }
}

// Korean Cinema
export async function getKoreanMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) return mockMovies.slice(3, 8);
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/discover/movie", {
      with_original_language: "ko",
      sort_by: "popularity.desc",
      page: String(page),
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getKoreanMovies:", error);
    return mockMovies.slice(3, 8);
  }
}

// Anime (Japanese Animation)
export async function getAnimeMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) return mockMovies.filter((m) => m.genres.includes("Anime"));
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/discover/movie", {
      with_genres: "16",
      with_original_language: "ja",
      sort_by: "popularity.desc",
      page: String(page),
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getAnimeMovies:", error);
    return mockMovies.filter((m) => m.genres.includes("Anime"));
  }
}

// Additional helpers
export async function getPopularMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) return mockMovies.slice(4, 10);
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/movie/popular", {
      page: String(page),
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getPopularMovies:", error);
    return mockMovies.slice(4, 10);
  }
}

export async function getTopRatedMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY)
    return mockMovies
      .slice()
      .sort((a, b) => b.imdb - a.imdb)
      .slice(0, 8);
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/movie/top_rated", {
      page: String(page),
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getTopRatedMovies:", error);
    return mockMovies
      .slice()
      .sort((a, b) => b.imdb - a.imdb)
      .slice(0, 8);
  }
}

export async function getUpcomingMovies(page: number = 1): Promise<RichMovie[]> {
  if (!TMDB_API_KEY) return mockMovies.slice(2, 8);
  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>("/movie/upcoming", {
      page: String(page),
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getUpcomingMovies:", error);
    return mockMovies.slice(2, 8);
  }
}

export async function getSimilarMovies(id: string): Promise<RichMovie[]> {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    const movie = mockMovies.find((m) => m.id === id);
    if (!movie) return [];
    return mockMovies
      .filter((x) => x.id !== id && x.genres.some((g) => movie.genres.includes(g)))
      .slice(0, 6);
  }

  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>(`/movie/${id}/similar`);
    return data.results.slice(0, 6).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getSimilarMovies:", error);
    return [];
  }
}

export async function getMovieRecommendations(id: string): Promise<RichMovie[]> {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    return getSimilarMovies(id);
  }

  try {
    const data = await fetchFromTmdb<TmdbPageResponse<TmdbMovie>>(`/movie/${id}/recommendations`);
    return data.results.slice(0, 6).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getMovieRecommendations:", error);
    return [];
  }
}

// Keep tmdb legacy wrapper structure for compatibility
export const tmdb = {
  isConfigured: () => !!TMDB_API_KEY,
  getTrending: getTrendingMovies,
  getPopular: getPopularMovies,
  getTopRated: getTopRatedMovies,
  getUpcoming: getUpcomingMovies,
  getByGenre: getMoviesByGenre,
  getBollywood: getBollywoodMovies,
  getKorean: getKoreanMovies,
  getAnime: getAnimeMovies,
  search: searchMovies,
  getDetails: getMovieDetails,
  getSimilar: getSimilarMovies,
  getRecommendations: getMovieRecommendations,
};
