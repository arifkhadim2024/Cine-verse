import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BpQ4WLDl.css";
const g = (a, b, c) => `linear-gradient(135deg, ${a} 0%, ${b} 50%, ${c} 100%)`;
const movies = [
  {
    id: "the-silent-echo",
    title: "The Silent Echo",
    year: 2024,
    genres: ["Horror", "Thriller"],
    imdb: 8.2,
    rt: 91,
    duration: "2h 12m",
    director: "Ava Marlow",
    cast: ["Florence Pugh", "Oscar Isaac", "Lupita Nyong'o", "Bill Skarsgård"],
    description: "When a deaf cartographer inherits a remote lighthouse, she begins to hear voices that should not exist. A slow-burn descent into a haunting that listens back.",
    mood: ["dark", "tense", "atmospheric"],
    streaming: ["Netflix", "Prime"],
    posterGradient: g("#1a0a0a", "#5b1414", "#1a0a0a"),
    backdropGradient: g("#000", "#3a0808", "#0a0000"),
    trailerId: "dQw4w9WgXcQ"
  },
  {
    id: "neon-pulse",
    title: "Neon Pulse",
    year: 2025,
    genres: ["Sci-Fi", "Action"],
    imdb: 8.7,
    rt: 94,
    duration: "2h 28m",
    director: "Denis Park",
    cast: ["Timothée Chalamet", "Zendaya", "John Boyega"],
    description: "In a vertical city stacked a mile high, a courier discovers her cargo is a memory that can topple governments. A breakneck cyberpunk thriller.",
    mood: ["mind bending", "stylish"],
    streaming: ["HBO Max", "Apple TV+"],
    posterGradient: g("#0a0014", "#7a0030", "#ff1744"),
    backdropGradient: g("#000", "#1a0030", "#3a001a")
  },
  {
    id: "midnight-laughter",
    title: "Midnight Laughter",
    year: 2024,
    genres: ["Comedy", "Romance"],
    imdb: 7.8,
    rt: 88,
    duration: "1h 48m",
    director: "Greta Sun",
    cast: ["Ayo Edebiri", "Paul Mescal", "Steven Yeun"],
    description: "Two insomniac strangers meet at a 24-hour diner and decide to stay awake for one perfect night. Warm, witty, and unexpectedly tender.",
    mood: ["funny", "warm", "feel-good"],
    streaming: ["Netflix"],
    posterGradient: g("#2a0a14", "#c4244a", "#ff6090"),
    backdropGradient: g("#1a0008", "#4a0a1a", "#1a0008")
  },
  {
    id: "blood-meridian",
    title: "Crimson Meridian",
    year: 2023,
    genres: ["Action", "Thriller"],
    imdb: 8.4,
    rt: 89,
    duration: "2h 19m",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Tilda Swinton", "Donnie Yen"],
    description: "A retired assassin is pulled back into a single-night gauntlet across Tokyo's underworld. Pure adrenaline choreography.",
    mood: ["intense", "stylish"],
    streaming: ["Prime"],
    posterGradient: g("#0a0000", "#8a0000", "#ff2a2a"),
    backdropGradient: g("#000", "#2a0000", "#0a0000")
  },
  {
    id: "where-the-tide-stops",
    title: "Where The Tide Stops",
    year: 2024,
    genres: ["Romance", "Drama"],
    imdb: 7.9,
    rt: 92,
    duration: "2h 02m",
    director: "Celine Sciamma",
    cast: ["Saoirse Ronan", "Dev Patel"],
    description: "A marine biologist and a lighthouse keeper share one summer that bends time. Lyrical, aching, unforgettable.",
    mood: ["sad", "romantic", "quiet"],
    streaming: ["Apple TV+"],
    posterGradient: g("#1a1a3a", "#5a2a4a", "#c4506a"),
    backdropGradient: g("#0a0a1a", "#2a1a2a", "#0a0a1a")
  },
  {
    id: "fold-the-sky",
    title: "Fold The Sky",
    year: 2025,
    genres: ["Sci-Fi", "Thriller"],
    imdb: 8.9,
    rt: 96,
    duration: "2h 35m",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Florence Pugh", "Robert Pattinson"],
    description: "A physicist discovers reality is a recursive document — and someone is editing it in real time. A mind-bending puzzle box.",
    mood: ["mind bending", "cerebral", "dark"],
    streaming: ["HBO Max"],
    posterGradient: g("#000", "#3a0a3a", "#a01a4a"),
    backdropGradient: g("#000", "#1a001a", "#000")
  },
  {
    id: "the-conjuring-house",
    title: "The Hollow Door",
    year: 2024,
    genres: ["Horror"],
    imdb: 7.6,
    rt: 85,
    duration: "1h 58m",
    director: "Mike Flanagan",
    cast: ["Vera Farmiga", "Patrick Wilson"],
    description: "A family moves into a Victorian estate where every door opens to a room that wasn't there yesterday.",
    mood: ["dark", "scary"],
    streaming: ["Netflix", "Prime"],
    posterGradient: g("#0a0000", "#4a0a0a", "#1a0000"),
    backdropGradient: g("#000", "#2a0505", "#000")
  },
  {
    id: "samurai-rain",
    title: "Samurai Rain",
    year: 2023,
    genres: ["Anime", "Action"],
    imdb: 8.6,
    rt: 93,
    duration: "1h 52m",
    director: "Makoto Shinkai",
    cast: ["Voice: Hiroshi Abe", "Voice: Mone Kamishiraishi"],
    description: "A masterless swordsman walks across a flooded Edo searching for the rainmaker who killed his sister. Hand-drawn poetry.",
    mood: ["stylish", "melancholic"],
    streaming: ["Crunchyroll", "Netflix"],
    posterGradient: g("#0a1a2a", "#1a4a6a", "#c43030"),
    backdropGradient: g("#000", "#0a1a2a", "#000")
  },
  {
    id: "summit-of-fire",
    title: "Summit Of Fire",
    year: 2024,
    genres: ["Adventure", "Action"],
    imdb: 7.7,
    rt: 81,
    duration: "2h 14m",
    director: "Baltasar Kormákur",
    cast: ["Chris Hemsworth", "Lupita Nyong'o"],
    description: "An expedition to an unmapped volcano in the Andes turns into a fight for survival when the mountain awakens.",
    mood: ["intense", "epic"],
    streaming: ["Disney+"],
    posterGradient: g("#1a0a00", "#a04a0a", "#ff7a1a"),
    backdropGradient: g("#0a0500", "#3a1a05", "#0a0500")
  },
  {
    id: "office-of-monsters",
    title: "Office Of Monsters",
    year: 2025,
    genres: ["Comedy"],
    imdb: 7.4,
    rt: 84,
    duration: "1h 41m",
    director: "Taika Waititi",
    cast: ["Pedro Pascal", "Tessa Thompson"],
    description: "HR at a monster staffing agency tries to mediate between a vampire CEO and a werewolf intern. A workplace comedy with bite.",
    mood: ["funny", "weird"],
    streaming: ["Hulu"],
    posterGradient: g("#1a0a1a", "#6a1a4a", "#e44a8a"),
    backdropGradient: g("#0a000a", "#2a0a2a", "#0a000a")
  },
  {
    id: "last-light",
    title: "Last Light",
    year: 2023,
    genres: ["Drama", "Thriller"],
    imdb: 8.1,
    rt: 90,
    duration: "2h 06m",
    director: "Park Chan-wook",
    cast: ["Song Kang-ho", "Tang Wei"],
    description: "A detective with weeks to live takes one last cold case. Every clue is a memory he's afraid to keep.",
    mood: ["sad", "noir", "dark"],
    streaming: ["Mubi"],
    posterGradient: g("#0a0a14", "#3a1a3a", "#8a3a5a"),
    backdropGradient: g("#000", "#1a0a1a", "#000")
  },
  {
    id: "starlight-academy",
    title: "Starlight Academy",
    year: 2024,
    genres: ["Anime", "Adventure"],
    imdb: 8.3,
    rt: 91,
    duration: "1h 47m",
    director: "Studio Ghibli",
    cast: ["Voice cast"],
    description: "A shy girl discovers her school floats between worlds at midnight. Whimsical, painterly, full of wonder.",
    mood: ["warm", "feel-good", "magical"],
    streaming: ["Netflix"],
    posterGradient: g("#1a2a4a", "#4a6ac4", "#e4c45a"),
    backdropGradient: g("#0a0a1a", "#1a2a4a", "#0a0a1a")
  }
];
const genres = [
  "Horror",
  "Comedy",
  "Action",
  "Thriller",
  "Romance",
  "Sci-Fi",
  "Anime",
  "Adventure"
];
movies.slice(0, 6);
[...movies].sort((a, b) => b.imdb - a.imdb).slice(0, 8);
const continueWatching = movies.slice(2, 7);
const TMDB_API_KEY = typeof window !== "undefined" ? localStorage.getItem("cineverse_tmdb_key") || "" || "" : "";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const GENRE_MAP = {
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
  37: "Adventure"
};
const GENRE_IDS = {
  Action: 28,
  Horror: 27,
  Comedy: 35,
  Romance: 10749,
  Thriller: 53,
  "Sci-Fi": 878,
  Anime: 16
};
function generateGradients(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 60) % 360;
  return {
    posterGradient: `linear-gradient(135deg, hsl(${h1}, 60%, 8%) 0%, hsl(${h2}, 45%, 15%) 50%, hsl(${h1}, 60%, 8%) 100%)`,
    backdropGradient: `linear-gradient(135deg, #050000 0%, hsl(${h1}, 55%, 10%) 50%, #050000 100%)`
  };
}
function mapTmdbMovie(m) {
  const gradients = generateGradients(m.title);
  const releaseYear = m.release_date ? new Date(m.release_date).getFullYear() : 2024;
  const genres2 = m.genre_ids ? m.genre_ids.map((id) => GENRE_MAP[id] || "Drama").filter((v, i, a) => a.indexOf(v) === i) : ["Drama"];
  return {
    id: String(m.id),
    title: m.title,
    year: releaseYear,
    genres: genres2.length > 0 ? genres2 : ["Drama"],
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
    posterUrl: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : void 0,
    backdropUrl: m.backdrop_path ? `https://image.tmdb.org/t/p/w1280${m.backdrop_path}` : void 0
  };
}
async function fetchFromTmdb(path, params = {}) {
  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params
  }).toString();
  const response = await fetch(`${TMDB_BASE_URL}${path}?${queryParams}`);
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  return response.json();
}
async function searchMovies(query, page = 1) {
  if (!query) return getPopularMovies(page);
  if (!TMDB_API_KEY) {
    const lower = query.toLowerCase().trim();
    return movies.filter(
      (m) => m.title.toLowerCase().includes(lower) || m.genres.some((g2) => g2.toLowerCase().includes(lower)) || m.cast.some((c) => c.toLowerCase().includes(lower)) || m.description.toLowerCase().includes(lower)
    );
  }
  try {
    const data = await fetchFromTmdb("/search/movie", {
      query,
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error searchMovies:", error);
    return [];
  }
}
async function getTrendingMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(0, 6);
  try {
    const data = await fetchFromTmdb("/trending/movie/week", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getTrendingMovies:", error);
    return movies.slice(0, 6);
  }
}
async function getMovieDetails(id) {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    const movie = movies.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  }
  try {
    const details = await fetchFromTmdb(`/movie/${id}`);
    const credits = await fetchFromTmdb(`/movie/${id}/credits`);
    const trailerKey = await getMovieVideos(id);
    let logoUrl;
    try {
      const images = await fetchFromTmdb(
        `/movie/${id}/images`,
        {
          include_image_language: "en,null"
        }
      );
      const logoObj = images.logos?.find((l) => l.file_path);
      if (logoObj) {
        logoUrl = `https://image.tmdb.org/t/p/w500${logoObj.file_path}`;
      }
    } catch (e) {
      console.warn("Failed to fetch movie logo", e);
    }
    const mapped = mapTmdbMovie(details);
    mapped.logoUrl = logoUrl;
    const crew = credits.crew || [];
    const cast = credits.cast || [];
    const directorObj = crew.find((member) => member.job === "Director");
    mapped.director = directorObj ? directorObj.name : "Unknown";
    mapped.cast = cast.slice(0, 5).map((member) => member.name);
    mapped.castDetails = cast.slice(0, 12).map((c) => ({
      name: c.name,
      character: c.character,
      profileUrl: c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : void 0
    }));
    mapped.tagline = details.tagline || "";
    mapped.releaseDate = details.release_date ? new Date(details.release_date).toLocaleDateString(void 0, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) : void 0;
    mapped.popularity = details.popularity;
    if (details.production_companies) {
      mapped.productionCompanies = details.production_companies.map((c) => c.name);
    }
    if (details.spoken_languages) {
      mapped.spokenLanguages = details.spoken_languages.map((l) => l.english_name);
    }
    if (details.genres) {
      mapped.genres = details.genres.map((g2) => g2.name);
    }
    mapped.trailerId = trailerKey;
    return mapped;
  } catch (error) {
    console.error("Error getMovieDetails:", error);
    const movie = movies.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  }
}
async function getMovieVideos(id) {
  if (!TMDB_API_KEY) {
    const movie = movies.find((m) => m.id === id);
    return movie?.trailerId;
  }
  try {
    const data = await fetchFromTmdb(`/movie/${id}/videos`);
    const results = data.results || [];
    const officialTrailer = results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube" && v.name?.toLowerCase().includes("official")
    );
    if (officialTrailer) return officialTrailer.key;
    const generalTrailer = results.find((v) => v.type === "Trailer" && v.site === "YouTube");
    if (generalTrailer) return generalTrailer.key;
    const teaserOrClip = results.find(
      (v) => (v.type === "Teaser" || v.type === "Clip") && v.site === "YouTube"
    );
    if (teaserOrClip) return teaserOrClip.key;
    const firstYoutube = results.find((v) => v.site === "YouTube");
    return firstYoutube?.key;
  } catch (error) {
    console.error("Error getMovieVideos:", error);
    return void 0;
  }
}
async function getMoviesByGenre(genreId, page = 1) {
  if (!TMDB_API_KEY) {
    const genreName = GENRE_MAP[genreId];
    if (!genreName) return movies;
    return movies.filter((m) => m.genres.includes(genreName));
  }
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_genres: String(genreId),
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getMoviesByGenre:", error);
    const genreName = GENRE_MAP[genreId];
    return movies.filter((m) => m.genres.includes(genreName || ""));
  }
}
async function getBollywoodMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(0, 5);
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_original_language: "hi",
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getBollywoodMovies:", error);
    return movies.slice(0, 5);
  }
}
async function getKoreanMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(3, 8);
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_original_language: "ko",
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getKoreanMovies:", error);
    return movies.slice(3, 8);
  }
}
async function getAnimeMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.filter((m) => m.genres.includes("Anime"));
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_genres: "16",
      with_original_language: "ja",
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getAnimeMovies:", error);
    return movies.filter((m) => m.genres.includes("Anime"));
  }
}
async function getPopularMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(4, 10);
  try {
    const data = await fetchFromTmdb("/movie/popular", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getPopularMovies:", error);
    return movies.slice(4, 10);
  }
}
async function getTopRatedMovies(page = 1) {
  if (!TMDB_API_KEY)
    return movies.slice().sort((a, b) => b.imdb - a.imdb).slice(0, 8);
  try {
    const data = await fetchFromTmdb("/movie/top_rated", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getTopRatedMovies:", error);
    return movies.slice().sort((a, b) => b.imdb - a.imdb).slice(0, 8);
  }
}
async function getUpcomingMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(2, 8);
  try {
    const data = await fetchFromTmdb("/movie/upcoming", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getUpcomingMovies:", error);
    return movies.slice(2, 8);
  }
}
async function getSimilarMovies(id) {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    const movie = movies.find((m) => m.id === id);
    if (!movie) return [];
    return movies.filter((x) => x.id !== id && x.genres.some((g2) => movie.genres.includes(g2))).slice(0, 6);
  }
  try {
    const data = await fetchFromTmdb(`/movie/${id}/similar`);
    return data.results.slice(0, 6).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getSimilarMovies:", error);
    return [];
  }
}
async function getMovieRecommendations(id) {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    return getSimilarMovies(id);
  }
  try {
    const data = await fetchFromTmdb(`/movie/${id}/recommendations`);
    return data.results.slice(0, 6).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getMovieRecommendations:", error);
    return [];
  }
}
const tmdb = {
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
  getRecommendations: getMovieRecommendations
};
const API_BASE_URL = "/api";
const isClient = typeof window !== "undefined";
function getAuthHeader() {
  if (!isClient) return {};
  const token = localStorage.getItem("cineverse_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
async function request(path, options = {}) {
  const customHeaders = {};
  if (isClient) {
    const tmdbKey = localStorage.getItem("cineverse_tmdb_key");
    if (tmdbKey) customHeaders["x-tmdb-key"] = tmdbKey;
    const geminiKey = localStorage.getItem("cineverse_gemini_key");
    if (geminiKey) customHeaders["x-gemini-key"] = geminiKey;
  }
  const headers = {
    "Content-Type": "application/json",
    ...getAuthHeader(),
    ...customHeaders,
    ...options.headers || {}
  };
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed with status ${response.status}`);
  }
  return response.json();
}
function getLocalWatchlist() {
  if (!isClient) return [];
  return JSON.parse(localStorage.getItem("cineverse_watchlist") || "[]");
}
function saveLocalWatchlist(list) {
  if (!isClient) return;
  localStorage.setItem("cineverse_watchlist", JSON.stringify(list));
}
function getLocalFavorites() {
  if (!isClient) return [];
  return JSON.parse(localStorage.getItem("cineverse_favorites") || "[]");
}
function saveLocalFavorites(list) {
  if (!isClient) return;
  localStorage.setItem("cineverse_favorites", JSON.stringify(list));
}
const api = {
  // Authentication
  auth: {
    register: (data) => request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
    login: (data) => request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
    me: () => request("/auth/me")
  },
  // Movies (Client side TMDB API or Express backend routing)
  movies: {
    getTrending: (page) => tmdb.isConfigured() ? tmdb.getTrending(page) : request("/movies/trending").catch(() => tmdb.getTrending(page)),
    getTopRated: (page) => tmdb.isConfigured() ? tmdb.getTopRated(page) : request("/movies/top-rated").catch(() => tmdb.getTopRated(page)),
    getUpcoming: (page) => tmdb.isConfigured() ? tmdb.getUpcoming(page) : request("/movies/upcoming").catch(() => tmdb.getUpcoming(page)),
    search: (query, page) => tmdb.isConfigured() ? tmdb.search(query, page) : request(`/movies/search?q=${encodeURIComponent(query)}&page=${page || 1}`).catch(
      () => tmdb.search(query, page)
    ),
    getDetails: (id) => tmdb.isConfigured() ? tmdb.getDetails(id) : request(`/movies/${id}`).catch(() => tmdb.getDetails(id)),
    getSimilar: (id) => tmdb.isConfigured() ? tmdb.getSimilar(id) : request(`/movies/${id}/similar`).catch(() => tmdb.getSimilar(id)),
    getRecommendations: (id) => tmdb.isConfigured() ? tmdb.getRecommendations(id) : request(`/movies/${id}/recommendations`).catch(
      () => tmdb.getRecommendations(id)
    ),
    getByGenre: (genreId, page) => tmdb.isConfigured() ? tmdb.getByGenre(genreId, page) : request(`/movies/genre/${genreId}?page=${page || 1}`).catch(
      () => tmdb.getByGenre(genreId, page)
    ),
    getBollywood: (page) => tmdb.isConfigured() ? tmdb.getBollywood(page) : request(`/movies/bollywood?page=${page || 1}`).catch(
      () => tmdb.getBollywood(page)
    ),
    getKorean: (page) => tmdb.isConfigured() ? tmdb.getKorean(page) : request(`/movies/korean?page=${page || 1}`).catch(() => tmdb.getKorean(page)),
    getAnime: (page) => tmdb.isConfigured() ? tmdb.getAnime(page) : request(`/movies/anime?page=${page || 1}`).catch(() => tmdb.getAnime(page))
  },
  // Watchlist & Favorites (syncs to MongoDB when logged in, or falls back to LocalStorage when guest)
  watchlist: {
    get: async () => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) return getLocalWatchlist();
      return request("/watchlist").catch(() => getLocalWatchlist());
    },
    add: async (movie) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        const list = getLocalWatchlist();
        if (!list.some((m) => String(m.id) === String(movie.id))) {
          list.push(movie);
          saveLocalWatchlist(list);
        }
        return list;
      }
      return request("/watchlist", { method: "POST", body: JSON.stringify(movie) });
    },
    remove: async (id) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        let list = getLocalWatchlist();
        list = list.filter((m) => String(m.id) !== String(id));
        saveLocalWatchlist(list);
        return list;
      }
      return request(`/watchlist/${id}`, { method: "DELETE" });
    }
  },
  favorites: {
    get: async () => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) return getLocalFavorites();
      return request("/favorites").catch(() => getLocalFavorites());
    },
    add: async (movie) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        const list = getLocalFavorites();
        if (!list.some((m) => String(m.id) === String(movie.id))) {
          list.push(movie);
          saveLocalFavorites(list);
        }
        return list;
      }
      return request("/favorites", { method: "POST", body: JSON.stringify(movie) });
    },
    remove: async (id) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        let list = getLocalFavorites();
        list = list.filter((m) => String(m.id) !== String(id));
        saveLocalFavorites(list);
        return list;
      }
      return request(`/favorites/${id}`, { method: "DELETE" });
    }
  },
  // AI Assistant
  ai: {
    recommend: (prompt) => request("/ai/recommend", {
      method: "POST",
      body: JSON.stringify({ prompt })
    })
  }
};
const AuthContext = reactExports.createContext(void 0);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    async function loadUser() {
      if (typeof window === "undefined") {
        setLoading(false);
        return;
      }
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const userData = await api.auth.me();
        setUser({
          id: userData._id || userData.id || "",
          name: userData.name,
          email: userData.email,
          watchlist: userData.watchlist || [],
          favorites: userData.favorites || []
        });
      } catch (error) {
        console.error("Failed to load user profile:", error);
        localStorage.removeItem("cineverse_token");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.auth.login({ email, password });
      localStorage.setItem("cineverse_token", res.token);
      setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        watchlist: res.user.watchlist || [],
        favorites: res.user.favorites || []
      });
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await api.auth.register({ name, email, password });
      localStorage.setItem("cineverse_token", res.token);
      setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        watchlist: res.user.watchlist || [],
        favorites: res.user.favorites || []
      });
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("cineverse_token");
    setUser(null);
  };
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const context = reactExports.useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-8xl text-gradient-red", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl", children: "Scene not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This reel doesn't exist in our cinematic universe." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red",
        children: "Back to CineVerse"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Cut! Something broke." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try again or head back to the main stage." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-border px-4 py-2 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CineVerse AI — Discover movies that match your mood" },
      {
        name: "description",
        content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant."
      },
      { name: "theme-color", content: "#0a0000" },
      { property: "og:title", content: "CineVerse AI — Discover movies that match your mood" },
      {
        property: "og:description",
        content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CineVerse AI — Discover movies that match your mood" },
      {
        name: "twitter:description",
        content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant."
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
      },
      {
        name: "twitter:image",
        content: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$8 = () => import("./watchlist-C8QRtX-a.mjs");
const Route$8 = createFileRoute("/watchlist")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./search-Czg71uwf.mjs");
const Route$7 = createFileRoute("/search")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  validateSearch: (s) => ({
    q: typeof s.q === "string" ? s.q : void 0
  })
});
const $$splitComponentImporter$6 = () => import("./profile-Hn7UFApb.mjs");
const Route$6 = createFileRoute("/profile")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./login-CK5oTifu.mjs");
const Route$5 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./genres-Au-gTJ_i.mjs");
const Route$4 = createFileRoute("/genres")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./ai-D_ly20AV.mjs");
const Route$3 = createFileRoute("/ai")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-Bu8ZM7-V.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitNotFoundComponentImporter = () => import("./movie._id-B-dBhbLP.mjs");
const $$splitComponentImporter$1 = () => import("./movie._id-B2M-vdLG.mjs");
const Route$1 = createFileRoute("/movie/$id")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter = () => import("./genre._id-C_HYUMln.mjs");
const Route = createFileRoute("/genre/$id")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WatchlistRoute = Route$8.update({
  id: "/watchlist",
  path: "/watchlist",
  getParentRoute: () => Route$9
});
const SearchRoute = Route$7.update({
  id: "/search",
  path: "/search",
  getParentRoute: () => Route$9
});
const ProfileRoute = Route$6.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$9
});
const LoginRoute = Route$5.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$9
});
const GenresRoute = Route$4.update({
  id: "/genres",
  path: "/genres",
  getParentRoute: () => Route$9
});
const AiRoute = Route$3.update({
  id: "/ai",
  path: "/ai",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const MovieIdRoute = Route$1.update({
  id: "/movie/$id",
  path: "/movie/$id",
  getParentRoute: () => Route$9
});
const GenreIdRoute = Route.update({
  id: "/genre/$id",
  path: "/genre/$id",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AiRoute,
  GenresRoute,
  LoginRoute,
  ProfileRoute,
  SearchRoute,
  WatchlistRoute,
  GenreIdRoute,
  MovieIdRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  GENRE_IDS as G,
  Route$7 as R,
  api as a,
  Route$1 as b,
  continueWatching as c,
  Route as d,
  GENRE_MAP as e,
  genres as g,
  movies as m,
  router as r,
  useAuth as u
};
