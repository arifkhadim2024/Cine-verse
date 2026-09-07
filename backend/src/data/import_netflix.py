import os
import json
import re
import hashlib
import pandas as pd

CSV_PATH = os.path.expanduser("~/.cache/kagglehub/datasets/debayank2024/netflix-movies-and-series/versions/1/netflix_titles.csv")
BACKEND_DATA_DIR = "/Users/arifkhadim/movie-verse/backend/src/data"
FRONTEND_DATA_DIR = "/Users/arifkhadim/movie-verse/frontend/src/data"

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text[:50]

def generate_gradients(title):
    h = int(hashlib.md5(title.encode('utf-8')).hexdigest()[:6], 16)
    h1 = h % 360
    h2 = (h1 + 60) % 360
    poster_grad = f"linear-gradient(135deg, hsl({h1}, 60%, 8%) 0%, hsl({h2}, 45%, 15%) 50%, hsl({h1}, 60%, 8%) 100%)"
    backdrop_grad = f"linear-gradient(135deg, #050000 0%, hsl({h1}, 55%, 10%) 50%, #050000 100%)"
    return poster_grad, backdrop_grad

def format_duration(dur_str, m_type):
    if not isinstance(dur_str, str) or not dur_str.strip():
        return "1h 45m" if m_type == "Movie" else "1 Season"
    dur_str = dur_str.strip()
    if "min" in dur_str:
        try:
            mins = int(dur_str.replace("min", "").strip())
            hours = mins // 60
            rem_mins = mins % 60
            if hours > 0:
                return f"{hours}h {rem_mins}m" if rem_mins > 0 else f"{hours}h"
            return f"{rem_mins}m"
        except:
            return dur_str
    return dur_str

def map_genres(listed_in, country):
    if not isinstance(listed_in, str):
        return ["Drama"]
    
    genres = set()
    raw = [g.strip() for g in listed_in.split(",")]
    
    mapping = {
        "Action & Adventure": "Action",
        "TV Action & Adventure": "Action",
        "Comedies": "Comedy",
        "TV Comedies": "Comedy",
        "Stand-Up Comedy": "Comedy",
        "Stand-Up Comedy & Talk Shows": "Comedy",
        "Dramas": "Drama",
        "TV Dramas": "Drama",
        "Horror Movies": "Horror",
        "TV Horror": "Horror",
        "Sci-Fi & Fantasy": "Sci-Fi",
        "TV Sci-Fi & Fantasy": "Sci-Fi",
        "Thrillers": "Thriller",
        "TV Thrillers": "Thriller",
        "Crime TV Shows": "Thriller",
        "Romantic Movies": "Romance",
        "Romantic TV Shows": "Romance",
        "Anime Series": "Anime",
        "Anime Features": "Anime",
        "Children & Family Movies": "Adventure",
        "Kids' TV": "Adventure",
        "Documentaries": "Drama",
        "Docuseries": "Drama",
        "International Movies": "Drama",
        "International TV Shows": "Drama",
        "Music & Musicals": "Romance",
    }
    
    for r in raw:
        if r in mapping:
            genres.add(mapping[r])
        elif "Anime" in r:
            genres.add("Anime")
        elif "Sci-Fi" in r:
            genres.add("Sci-Fi")
        elif "Horror" in r:
            genres.add("Horror")
        elif "Action" in r:
            genres.add("Action")
        elif "Comedy" in r:
            genres.add("Comedy")
        elif "Drama" in r:
            genres.add("Drama")
        elif "Thriller" in r or "Crime" in r or "Mystery" in r:
            genres.add("Thriller")
        elif "Romance" in r:
            genres.add("Romance")
        elif "Adventure" in r:
            genres.add("Adventure")
            
    if "Japan" in str(country) and ("Anime" in str(listed_in) or "Animation" in str(listed_in)):
        genres.add("Anime")
        
    if not genres:
        genres.add("Drama")
        
    return sorted(list(genres))

def derive_moods(genres, title):
    moods = []
    g_set = set(genres)
    if "Horror" in g_set:
        moods.extend(["dark", "tense", "atmospheric"])
    if "Comedy" in g_set:
        moods.extend(["funny", "feel-good", "warm"])
    if "Action" in g_set or "Adventure" in g_set:
        moods.extend(["intense", "exciting", "stylish"])
    if "Sci-Fi" in g_set:
        moods.extend(["mind bending", "futuristic", "epic"])
    if "Romance" in g_set:
        moods.extend(["romantic", "tender", "heartwarming"])
    if "Thriller" in g_set:
        moods.extend(["tense", "dark", "mysterious"])
    if "Drama" in g_set and not moods:
        moods.extend(["emotional", "thoughtful", "deep"])
    
    seen = set()
    result = []
    for m in moods:
        if m not in seen:
            seen.add(m)
            result.append(m)
        if len(result) >= 3:
            break
    if not result:
        result = ["captivating", "entertaining"]
    return result

def calculate_ratings(title, release_year):
    h = int(hashlib.md5(f"{title}_{release_year}".encode('utf-8')).hexdigest()[:4], 16)
    imdb = round(7.0 + (h % 22) * 0.1, 1)
    rt = int(imdb * 10) + ((h % 9) - 4)
    rt = max(65, min(97, rt))
    return imdb, rt

def main():
    print(f"Reading dataset from {CSV_PATH}...")
    df = pd.read_csv(CSV_PATH)
    
    records = []
    
    for idx, row in df.iterrows():
        title = str(row['title']).strip() if pd.notnull(row['title']) else "Untitled"
        show_id = str(row['show_id']).strip()
        m_type = str(row['type']).strip()
        raw_cast = str(row['cast']).strip() if pd.notnull(row['cast']) else ""
        cast = [c.strip() for c in raw_cast.split(",") if c.strip()][:5]
        director = str(row['director']).strip() if pd.notnull(row['director']) else "Unknown"
        country = str(row['country']).strip() if pd.notnull(row['country']) else "Unknown"
        description = str(row['description']).strip() if pd.notnull(row['description']) else ""
        release_year = int(row['release_year']) if pd.notnull(row['release_year']) else 2020
        rating = str(row['rating']).strip() if pd.notnull(row['rating']) else "TV-14"
        raw_duration = str(row['duration']).strip() if pd.notnull(row['duration']) else ""
        
        genres = map_genres(row['listed_in'], country)
        duration = format_duration(raw_duration, m_type)
        poster_grad, backdrop_grad = generate_gradients(title)
        mood = derive_moods(genres, title)
        imdb, rt = calculate_ratings(title, release_year)
        
        slug = f"netflix-{show_id.lower()}-{slugify(title)}"
        
        is_bollywood = "India" in country
        is_korean = "South Korea" in country
        is_anime = "Anime" in genres or ("Japan" in country and ("Anime" in str(row['listed_in'])))
        
        item = {
            "id": slug,
            "showId": show_id,
            "title": title,
            "type": m_type,
            "year": release_year,
            "genres": genres,
            "imdb": imdb,
            "rt": rt,
            "duration": duration,
            "director": director,
            "cast": cast,
            "description": description,
            "country": country,
            "rating": rating,
            "mood": mood,
            "streaming": ["Netflix"],
            "posterGradient": poster_grad,
            "backdropGradient": backdrop_grad,
            "isBollywood": is_bollywood,
            "isKorean": is_korean,
            "isAnime": is_anime
        }
        records.append(item)
        
    print(f"Processed {len(records)} records.")
    
    # Save full catalog JSON
    full_json_path = os.path.join(BACKEND_DATA_DIR, "netflixCatalog.json")
    with open(full_json_path, "w", encoding="utf-8") as f:
        json.dump(records, f, indent=2)
    print(f"Saved full JSON catalog ({len(records)} items) to {full_json_path}")
    
    # Pick a rich curated subset of ~120 movies
    curated = []
    genres_list = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Anime", "Adventure", "Thriller"]
    
    for g in genres_list:
        genre_matches = [r for r in records if g in r['genres']]
        genre_matches.sort(key=lambda x: (x['imdb'], x['year']), reverse=True)
        curated.extend(genre_matches[:12])
        
    bolly = [r for r in records if r['isBollywood']]
    bolly.sort(key=lambda x: (x['imdb'], x['year']), reverse=True)
    curated.extend(bolly[:15])
    
    korean = [r for r in records if r['isKorean']]
    korean.sort(key=lambda x: (x['imdb'], x['year']), reverse=True)
    curated.extend(korean[:15])
    
    anime = [r for r in records if r['isAnime']]
    anime.sort(key=lambda x: (x['imdb'], x['year']), reverse=True)
    curated.extend(anime[:15])
    
    # Deduplicate while preserving order
    seen = set()
    deduped_curated = []
    for c in curated:
        if c['id'] not in seen:
            seen.add(c['id'])
            deduped_curated.append(c)
            
    print(f"Selected {len(deduped_curated)} curated items.")
    
    # Generate TypeScript files for backend and frontend
    def generate_ts_content(movie_list):
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
        lines.append('};')
        lines.append('')
        lines.append('export const mockMovies: Movie[] = ' + json.dumps(movie_list, indent=2) + ';')
        lines.append('')
        return "\n".join(lines)

    # Write backend mockMovies.ts
    backend_ts_path = os.path.join(BACKEND_DATA_DIR, "mockMovies.ts")
    with open(backend_ts_path, "w", encoding="utf-8") as f:
        f.write(generate_ts_content(deduped_curated))
    print(f"Updated {backend_ts_path}")

    # Generate frontend movies.ts
    def generate_frontend_ts_content(movie_list):
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
        f.write(generate_frontend_ts_content(deduped_curated))
    print(f"Updated {frontend_ts_path}")

if __name__ == "__main__":
    main()
