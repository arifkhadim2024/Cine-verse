import type { Movie } from "@/data/movies";
import { tmdb, type RichMovie } from "@/services/tmdb";

export const API_BASE_URL =
  typeof window !== "undefined"
    ? import.meta.env.VITE_API_URL || "http://localhost:5001/api"
    : process.env.VITE_API_URL || "http://localhost:5001/api";

const isClient = typeof window !== "undefined";

// Helper to retrieve token from localStorage (safe for SSR check)
function getAuthHeader(): Record<string, string> {
  if (!isClient) return {};
  const token = localStorage.getItem("cineverse_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const customHeaders: Record<string, string> = {};
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
    ...(options.headers || {}),
  } as Record<string, string>;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// Local Storage Fallback helpers for guest users
function getLocalWatchlist(): Movie[] {
  if (!isClient) return [];
  return JSON.parse(localStorage.getItem("cineverse_watchlist") || "[]");
}

function saveLocalWatchlist(list: Movie[]) {
  if (!isClient) return;
  localStorage.setItem("cineverse_watchlist", JSON.stringify(list));
}

function getLocalFavorites(): Movie[] {
  if (!isClient) return [];
  return JSON.parse(localStorage.getItem("cineverse_favorites") || "[]");
}

function saveLocalFavorites(list: Movie[]) {
  if (!isClient) return;
  localStorage.setItem("cineverse_favorites", JSON.stringify(list));
}

export const api = {
  // Authentication
  auth: {
    register: (data: Record<string, string>) =>
      request<{
        token: string;
        user: { id: string; name: string; email: string; watchlist: Movie[]; favorites: Movie[] };
      }>("/auth/register", { method: "POST", body: JSON.stringify(data) }),
    login: (data: Record<string, string>) =>
      request<{
        token: string;
        user: { id: string; name: string; email: string; watchlist: Movie[]; favorites: Movie[] };
      }>("/auth/login", { method: "POST", body: JSON.stringify(data) }),
    me: () =>
      request<{
        _id?: string;
        id?: string;
        name: string;
        email: string;
        watchlist: Movie[];
        favorites: Movie[];
      }>("/auth/me"),
  },

  // Movies (Client side TMDB API or Express backend routing)
  movies: {
    getTrending: (page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getTrending(page)
        : request<Movie[]>("/movies/trending").catch(() => tmdb.getTrending(page)),
    getTopRated: (page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getTopRated(page)
        : request<Movie[]>("/movies/top-rated").catch(() => tmdb.getTopRated(page)),
    getUpcoming: (page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getUpcoming(page)
        : request<Movie[]>("/movies/upcoming").catch(() => tmdb.getUpcoming(page)),
    search: (query: string, page?: number) =>
      tmdb.isConfigured()
        ? tmdb.search(query, page)
        : request<Movie[]>(`/movies/search?q=${encodeURIComponent(query)}&page=${page || 1}`).catch(
            () => tmdb.search(query, page),
          ),
    getDetails: (id: string): Promise<RichMovie> =>
      tmdb.isConfigured()
        ? tmdb.getDetails(id)
        : request<RichMovie>(`/movies/${id}`).catch(() => tmdb.getDetails(id)),
    getSimilar: (id: string) =>
      tmdb.isConfigured()
        ? tmdb.getSimilar(id)
        : request<Movie[]>(`/movies/${id}/similar`).catch(() => tmdb.getSimilar(id)),
    getRecommendations: (id: string) =>
      tmdb.isConfigured()
        ? tmdb.getRecommendations(id)
        : request<Movie[]>(`/movies/${id}/recommendations`).catch(() =>
            tmdb.getRecommendations(id),
          ),
    getByGenre: (genreId: number, page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getByGenre(genreId, page)
        : request<Movie[]>(`/movies/genre/${genreId}?page=${page || 1}`).catch(() =>
            tmdb.getByGenre(genreId, page),
          ),
    getBollywood: (page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getBollywood(page)
        : request<Movie[]>(`/movies/bollywood?page=${page || 1}`).catch(() =>
            tmdb.getBollywood(page),
          ),
    getKorean: (page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getKorean(page)
        : request<Movie[]>(`/movies/korean?page=${page || 1}`).catch(() => tmdb.getKorean(page)),
    getAnime: (page?: number) =>
      tmdb.isConfigured()
        ? tmdb.getAnime(page)
        : request<Movie[]>(`/movies/anime?page=${page || 1}`).catch(() => tmdb.getAnime(page)),
  },

  // Watchlist & Favorites (syncs to MongoDB when logged in, or falls back to LocalStorage when guest)
  watchlist: {
    get: async () => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) return getLocalWatchlist();
      return request<Movie[]>("/watchlist").catch(() => getLocalWatchlist());
    },
    add: async (movie: Movie) => {
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
      return request<Movie[]>("/watchlist", { method: "POST", body: JSON.stringify(movie) });
    },
    remove: async (id: string) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        let list = getLocalWatchlist();
        list = list.filter((m) => String(m.id) !== String(id));
        saveLocalWatchlist(list);
        return list;
      }
      return request<Movie[]>(`/watchlist/${id}`, { method: "DELETE" });
    },
  },
  favorites: {
    get: async () => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) return getLocalFavorites();
      return request<Movie[]>("/favorites").catch(() => getLocalFavorites());
    },
    add: async (movie: Movie) => {
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
      return request<Movie[]>("/favorites", { method: "POST", body: JSON.stringify(movie) });
    },
    remove: async (id: string) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        let list = getLocalFavorites();
        list = list.filter((m) => String(m.id) !== String(id));
        saveLocalFavorites(list);
        return list;
      }
      return request<Movie[]>(`/favorites/${id}`, { method: "DELETE" });
    },
  },

  // AI Assistant
  ai: {
    recommend: (prompt: string) =>
      request<{ message: string; recommendations: Movie[] }>("/ai/recommend", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      }),
  },
};
