import os
import json
import hashlib
import urllib.parse

BACKEND_DATA_DIR = "/Users/arifkhadim/movie-verse/backend/src/data"
FRONTEND_DATA_DIR = "/Users/arifkhadim/movie-verse/frontend/src/data"

# High-resolution, stunning cinematic poster images
HD_POSTERS = {
    "Action": [
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop"
    ],
    "Comedy": [
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop"
    ],
    "Drama": [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop"
    ],
    "Horror": [
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
    ],
    "Romance": [
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop"
    ],
    "Sci-Fi": [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
    ],
    "Anime": [
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
    ],
    "Adventure": [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop"
    ],
    "Thriller": [
        "https://images.unsplash.com/photo-1505635339363-3193273f8a49?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop"
    ]
}

HD_BACKDROPS = {
    "Action": [
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop"
    ],
    "Comedy": [
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop"
    ],
    "Drama": [
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop"
    ],
    "Horror": [
        "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1600&auto=format&fit=crop"
    ],
    "Romance": [
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1600&auto=format&fit=crop"
    ],
    "Sci-Fi": [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop"
    ],
    "Anime": [
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop"
    ],
    "Adventure": [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
    ],
    "Thriller": [
        "https://images.unsplash.com/photo-1505635339363-3193273f8a49?q=80&w=1600&auto=format&fit=crop"
    ]
}

TRAILER_SAMPLES = [
    "dQw4w9WgXcQ", "L6P3nI6VnlY", "YoHD9XEInc0", "8Qn_spdM5Zg", "2QKg5SZ_35I",
    "b9EkMc79ZSU", "Way9Dexny3w", "TcMBFSGVi1c", "d9MyW72ELq0", "ePbKGoIGAXY"
]

def main():
    curated_path = os.path.join(BACKEND_DATA_DIR, "curatedMovies.json")
    with open(curated_path, "r", encoding="utf-8") as f:
        movies = json.load(f)
        
    print(f"Applying high-definition posters and trailers for {len(movies)} movies...")
    
    for idx, m in enumerate(movies):
        title = m.get("title", "")
        h = int(hashlib.md5(title.encode('utf-8')).hexdigest()[:6], 16)
        
        primary_genre = m.get("genres", ["Drama"])[0] if m.get("genres") else "Drama"
        posters = HD_POSTERS.get(primary_genre, HD_POSTERS["Drama"])
        backdrops = HD_BACKDROPS.get(primary_genre, HD_BACKDROPS["Drama"])
        
        m["posterUrl"] = posters[h % len(posters)]
        m["backdropUrl"] = backdrops[h % len(backdrops)]
        m["trailerId"] = TRAILER_SAMPLES[h % len(TRAILER_SAMPLES)]
        m["netflixUrl"] = f"https://www.netflix.com/search?q={urllib.parse.quote(title)}"
        
    with open(curated_path, "w", encoding="utf-8") as f:
        json.dump(movies, f, indent=2)
        
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
        lines.append('};')
        lines.append('')
        lines.append('export const mockMovies: Movie[] = ' + json.dumps(movie_list, indent=2) + ';')
        lines.append('')
        return "\n".join(lines)

    backend_ts_path = os.path.join(BACKEND_DATA_DIR, "mockMovies.ts")
    with open(backend_ts_path, "w", encoding="utf-8") as f:
        f.write(generate_ts(movies))
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
        f.write(generate_frontend_ts(movies))
    print(f"Updated {frontend_ts_path}")
    print("Done!")

if __name__ == "__main__":
    main()
