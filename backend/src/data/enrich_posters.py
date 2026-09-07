import os
import json
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY = "058dc0dccb48f1528b5a2fe8abbcce6a"
BACKEND_DATA_DIR = "/Users/arifkhadim/movie-verse/backend/src/data"
FRONTEND_DATA_DIR = "/Users/arifkhadim/movie-verse/frontend/src/data"

GENRE_DEFAULT_POSTERS = {
    "Action": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop",
    "Comedy": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=600&auto=format&fit=crop",
    "Drama": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
    "Horror": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
    "Romance": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
    "Sci-Fi": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    "Anime": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop",
    "Adventure": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    "Thriller": "https://images.unsplash.com/photo-1505635339363-3193273f8a49?q=80&w=600&auto=format&fit=crop"
}

GENRE_DEFAULT_BACKDROPS = {
    "Action": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1280&auto=format&fit=crop",
    "Comedy": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1280&auto=format&fit=crop",
    "Drama": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1280&auto=format&fit=crop",
    "Horror": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1280&auto=format&fit=crop",
    "Romance": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1280&auto=format&fit=crop",
    "Sci-Fi": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&auto=format&fit=crop",
    "Anime": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1280&auto=format&fit=crop",
    "Adventure": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&auto=format&fit=crop",
    "Thriller": "https://images.unsplash.com/photo-1505635339363-3193273f8a49?q=80&w=1280&auto=format&fit=crop"
}

def process_movie(m):
    title = m.get("title", "")
    is_tv = m.get("type") == "TV Show" or "Season" in str(m.get("duration", ""))
    primary_genre = m.get("genres", ["Drama"])[0] if m.get("genres") else "Drama"
    
    poster_url = None
    backdrop_url = None
    trailer_id = None
    
    # Try TMDB
    endpoint = "search/tv" if is_tv else "search/movie"
    url = f"https://api.themoviedb.org/3/{endpoint}?api_key={API_KEY}&query={urllib.parse.quote(title)}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=3) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            results = data.get("results", [])
            if results:
                best = results[0]
                p = best.get("poster_path")
                b = best.get("backdrop_path")
                tmdb_id = best.get("id")
                if p:
                    poster_url = f"https://image.tmdb.org/t/p/w500{p}"
                if b:
                    backdrop_url = f"https://image.tmdb.org/t/p/w1280{b}"
                    
                if tmdb_id:
                    v_endpoint = f"tv/{tmdb_id}/videos" if is_tv else f"movie/{tmdb_id}/videos"
                    v_url = f"https://api.themoviedb.org/3/{v_endpoint}?api_key={API_KEY}"
                    try:
                        v_req = urllib.request.Request(v_url, headers={"User-Agent": "Mozilla/5.0"})
                        with urllib.request.urlopen(v_req, timeout=3) as v_resp:
                            v_data = json.loads(v_resp.read().decode("utf-8"))
                            for v in v_data.get("results", []):
                                if v.get("site") == "YouTube":
                                    trailer_id = v.get("key")
                                    break
                    except Exception:
                        pass
    except Exception:
        pass
        
    if not poster_url:
        poster_url = GENRE_DEFAULT_POSTERS.get(primary_genre, GENRE_DEFAULT_POSTERS["Drama"])
    if not backdrop_url:
        backdrop_url = GENRE_DEFAULT_BACKDROPS.get(primary_genre, GENRE_DEFAULT_BACKDROPS["Drama"])
    if not trailer_id:
        trailer_id = "dQw4w9WgXcQ"
        
    m["posterUrl"] = poster_url
    m["backdropUrl"] = backdrop_url
    m["trailerId"] = trailer_id
    m["netflixUrl"] = f"https://www.netflix.com/search?q={urllib.parse.quote(title)}"
    return m

def main():
    curated_path = os.path.join(BACKEND_DATA_DIR, "curatedMovies.json")
    with open(curated_path, "r", encoding="utf-8") as f:
        movies = json.load(f)
        
    print(f"Enriching {len(movies)} movies multithreaded...")
    enriched = []
    with ThreadPoolExecutor(max_workers=12) as executor:
        futures = {executor.submit(process_movie, m): m for m in movies}
        for future in as_completed(futures):
            enriched.append(future.result())
            
    print(f"Enriched {len(enriched)} movies.")
    
    # Save back to curatedMovies.json
    with open(curated_path, "w", encoding="utf-8") as f:
        json.dump(enriched, f, indent=2)
        
    def generate_ts(movie_list):
        lines = []
        lines.append('export type Movie = {')
        lines.append('  id: string;')
        lines.append('  showId?: string;')
        lines.append('  type?: string;')
        lines.append('  title: string;')
        lines.append('  year: number;')
        lines.append('  genres: string[];')
        lines.append('  imdb: number;')
        lines.append('  rt: number;')
        lines.append('  duration: string;')
        lines.append('  director: string;')
        lines.append('  cast: string[];')
        lines.append('  description: string;')
        lines.append('  mood: string[];')
        lines.append('  streaming: string[];')
        lines.append('  posterGradient: string;')
        lines.append('  backdropGradient: string;')
        lines.append('  trailerId?: string;')
        lines.append('  posterUrl?: string;')
        lines.append('  backdropUrl?: string;')
        lines.append('  logoUrl?: string;')
        lines.append('  watchProviders?: any;')
        lines.append('  country?: string;')
        lines.append('  rating?: string;')
        lines.append('  isBollywood?: boolean;')
        lines.append('  isKorean?: boolean;')
        lines.append('  isAnime?: boolean;')
        lines.append('  netflixUrl?: string;')
        lines.append('  streamUrl?: string;')
        lines.append('};')
        lines.append('')
        lines.append('export const mockMovies: Movie[] = ' + json.dumps(movie_list, indent=2) + ';')
        lines.append('')
        return "\n".join(lines)

    backend_ts_path = os.path.join(BACKEND_DATA_DIR, "mockMovies.ts")
    with open(backend_ts_path, "w", encoding="utf-8") as f:
        f.write(generate_ts(enriched))
    print(f"Updated {backend_ts_path}")

    def generate_frontend_ts(movie_list):
        lines = []
        lines.append('export type Movie = {')
        lines.append('  id: string;')
        lines.append('  showId?: string;')
        lines.append('  type?: string;')
        lines.append('  title: string;')
        lines.append('  year: number;')
        lines.append('  genres: string[];')
        lines.append('  imdb: number;')
        lines.append('  rt: number;')
        lines.append('  duration: string;')
        lines.append('  director: string;')
        lines.append('  cast: string[];')
        lines.append('  description: string;')
        lines.append('  mood: string[];')
        lines.append('  streaming: string[];')
        lines.append('  posterGradient: string;')
        lines.append('  backdropGradient: string;')
        lines.append('  trailerId?: string;')
        lines.append('  posterUrl?: string;')
        lines.append('  backdropUrl?: string;')
        lines.append('  logoUrl?: string;')
        lines.append('  watchProviders?: any;')
        lines.append('  country?: string;')
        lines.append('  rating?: string;')
        lines.append('  isBollywood?: boolean;')
        lines.append('  isKorean?: boolean;')
        lines.append('  isAnime?: boolean;')
        lines.append('  netflixUrl?: string;')
        lines.append('  streamUrl?: string;')
        lines.append('};')
        lines.append('')
        lines.append('export const movies: Movie[] = ' + json.dumps(movie_list, indent=2) + ';')
        lines.append('')
        lines.append('export const genres = [')
        lines.append('  "Horror",')
        lines.append('  "Comedy",')
        lines.append('  "Action",')
        lines.append('  "Thriller",')
        lines.append('  "Romance",')
        lines.append('  "Sci-Fi",')
        lines.append('  "Anime",')
        lines.append('  "Adventure",')
        lines.append('  "Drama",')
        lines.append('];')
        lines.append('')
        lines.append('export const trending = movies.slice(0, 10);')
        lines.append('export const topRated = [...movies].sort((a, b) => b.imdb - a.imdb).slice(0, 10);')
        lines.append('export const continueWatching = movies.slice(2, 8);')
        lines.append('')
        lines.append('export function getMovie(id: string) {')
        lines.append('  return movies.find((m) => m.id === id);')
        lines.append('}')
        lines.append('')
        lines.append('export function similarMovies(id: string) {')
        lines.append('  const m = getMovie(id);')
        lines.append('  if (!m) return [];')
        lines.append('  return movies')
        lines.append('    .filter((x) => x.id !== id && x.genres.some((g) => m.genres.includes(g)))')
        lines.append('    .slice(0, 6);')
        lines.append('}')
        lines.append('')
        lines.append('export function searchMovies(query: string) {')
        lines.append('  const q = query.toLowerCase().trim();')
        lines.append('  if (!q) return movies;')
        lines.append('  return movies.filter(')
        lines.append('    (m) =>')
        lines.append('      m.title.toLowerCase().includes(q) ||')
        lines.append('      m.genres.some((g) => g.toLowerCase().includes(q)) ||')
        lines.append('      m.cast.some((c) => c.toLowerCase().includes(q)) ||')
        lines.append('      m.director.toLowerCase().includes(q) ||')
        lines.append('      m.mood.some((md) => md.toLowerCase().includes(q)) ||')
        lines.append('      m.description.toLowerCase().includes(q),')
        lines.append('  );')
        lines.append('}')
        return "\n".join(lines)

    frontend_ts_path = os.path.join(FRONTEND_DATA_DIR, "movies.ts")
    with open(frontend_ts_path, "w", encoding="utf-8") as f:
        f.write(generate_frontend_ts(enriched))
    print(f"Updated {frontend_ts_path}")
    print("Enrichment complete!")

if __name__ == "__main__":
    main()
