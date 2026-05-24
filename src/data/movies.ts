export type Movie = {
  id: string;
  title: string;
  year: number;
  genres: string[];
  imdb: number;
  rt: number;
  duration: string;
  director: string;
  cast: string[];
  description: string;
  mood: string[];
  streaming: string[];
  posterGradient: string;
  backdropGradient: string;
  trailerId?: string;
};

const g = (a: string, b: string, c: string) =>
  `linear-gradient(135deg, ${a} 0%, ${b} 50%, ${c} 100%)`;

export const movies: Movie[] = [
  {
    id: "the-silent-echo",
    title: "The Silent Echo",
    year: 2024,
    genres: ["Horror", "Thriller"],
    imdb: 8.2, rt: 91, duration: "2h 12m",
    director: "Ava Marlow",
    cast: ["Florence Pugh", "Oscar Isaac", "Lupita Nyong'o", "Bill Skarsgård"],
    description: "When a deaf cartographer inherits a remote lighthouse, she begins to hear voices that should not exist. A slow-burn descent into a haunting that listens back.",
    mood: ["dark", "tense", "atmospheric"],
    streaming: ["Netflix", "Prime"],
    posterGradient: g("#1a0a0a", "#5b1414", "#1a0a0a"),
    backdropGradient: g("#000", "#3a0808", "#0a0000"),
    trailerId: "dQw4w9WgXcQ",
  },
  {
    id: "neon-pulse",
    title: "Neon Pulse",
    year: 2025,
    genres: ["Sci-Fi", "Action"],
    imdb: 8.7, rt: 94, duration: "2h 28m",
    director: "Denis Park",
    cast: ["Timothée Chalamet", "Zendaya", "John Boyega"],
    description: "In a vertical city stacked a mile high, a courier discovers her cargo is a memory that can topple governments. A breakneck cyberpunk thriller.",
    mood: ["mind bending", "stylish"],
    streaming: ["HBO Max", "Apple TV+"],
    posterGradient: g("#0a0014", "#7a0030", "#ff1744"),
    backdropGradient: g("#000", "#1a0030", "#3a001a"),
  },
  {
    id: "midnight-laughter",
    title: "Midnight Laughter",
    year: 2024,
    genres: ["Comedy", "Romance"],
    imdb: 7.8, rt: 88, duration: "1h 48m",
    director: "Greta Sun",
    cast: ["Ayo Edebiri", "Paul Mescal", "Steven Yeun"],
    description: "Two insomniac strangers meet at a 24-hour diner and decide to stay awake for one perfect night. Warm, witty, and unexpectedly tender.",
    mood: ["funny", "warm", "feel-good"],
    streaming: ["Netflix"],
    posterGradient: g("#2a0a14", "#c4244a", "#ff6090"),
    backdropGradient: g("#1a0008", "#4a0a1a", "#1a0008"),
  },
  {
    id: "blood-meridian",
    title: "Crimson Meridian",
    year: 2023,
    genres: ["Action", "Thriller"],
    imdb: 8.4, rt: 89, duration: "2h 19m",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Tilda Swinton", "Donnie Yen"],
    description: "A retired assassin is pulled back into a single-night gauntlet across Tokyo's underworld. Pure adrenaline choreography.",
    mood: ["intense", "stylish"],
    streaming: ["Prime"],
    posterGradient: g("#0a0000", "#8a0000", "#ff2a2a"),
    backdropGradient: g("#000", "#2a0000", "#0a0000"),
  },
  {
    id: "where-the-tide-stops",
    title: "Where The Tide Stops",
    year: 2024,
    genres: ["Romance", "Drama"],
    imdb: 7.9, rt: 92, duration: "2h 02m",
    director: "Celine Sciamma",
    cast: ["Saoirse Ronan", "Dev Patel"],
    description: "A marine biologist and a lighthouse keeper share one summer that bends time. Lyrical, aching, unforgettable.",
    mood: ["sad", "romantic", "quiet"],
    streaming: ["Apple TV+"],
    posterGradient: g("#1a1a3a", "#5a2a4a", "#c4506a"),
    backdropGradient: g("#0a0a1a", "#2a1a2a", "#0a0a1a"),
  },
  {
    id: "fold-the-sky",
    title: "Fold The Sky",
    year: 2025,
    genres: ["Sci-Fi", "Thriller"],
    imdb: 8.9, rt: 96, duration: "2h 35m",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Florence Pugh", "Robert Pattinson"],
    description: "A physicist discovers reality is a recursive document — and someone is editing it in real time. A mind-bending puzzle box.",
    mood: ["mind bending", "cerebral", "dark"],
    streaming: ["HBO Max"],
    posterGradient: g("#000", "#3a0a3a", "#a01a4a"),
    backdropGradient: g("#000", "#1a001a", "#000"),
  },
  {
    id: "the-conjuring-house",
    title: "The Hollow Door",
    year: 2024,
    genres: ["Horror"],
    imdb: 7.6, rt: 85, duration: "1h 58m",
    director: "Mike Flanagan",
    cast: ["Vera Farmiga", "Patrick Wilson"],
    description: "A family moves into a Victorian estate where every door opens to a room that wasn't there yesterday.",
    mood: ["dark", "scary"],
    streaming: ["Netflix", "Prime"],
    posterGradient: g("#0a0000", "#4a0a0a", "#1a0000"),
    backdropGradient: g("#000", "#2a0505", "#000"),
  },
  {
    id: "samurai-rain",
    title: "Samurai Rain",
    year: 2023,
    genres: ["Anime", "Action"],
    imdb: 8.6, rt: 93, duration: "1h 52m",
    director: "Makoto Shinkai",
    cast: ["Voice: Hiroshi Abe", "Voice: Mone Kamishiraishi"],
    description: "A masterless swordsman walks across a flooded Edo searching for the rainmaker who killed his sister. Hand-drawn poetry.",
    mood: ["stylish", "melancholic"],
    streaming: ["Crunchyroll", "Netflix"],
    posterGradient: g("#0a1a2a", "#1a4a6a", "#c43030"),
    backdropGradient: g("#000", "#0a1a2a", "#000"),
  },
  {
    id: "summit-of-fire",
    title: "Summit Of Fire",
    year: 2024,
    genres: ["Adventure", "Action"],
    imdb: 7.7, rt: 81, duration: "2h 14m",
    director: "Baltasar Kormákur",
    cast: ["Chris Hemsworth", "Lupita Nyong'o"],
    description: "An expedition to an unmapped volcano in the Andes turns into a fight for survival when the mountain awakens.",
    mood: ["intense", "epic"],
    streaming: ["Disney+"],
    posterGradient: g("#1a0a00", "#a04a0a", "#ff7a1a"),
    backdropGradient: g("#0a0500", "#3a1a05", "#0a0500"),
  },
  {
    id: "office-of-monsters",
    title: "Office Of Monsters",
    year: 2025,
    genres: ["Comedy"],
    imdb: 7.4, rt: 84, duration: "1h 41m",
    director: "Taika Waititi",
    cast: ["Pedro Pascal", "Tessa Thompson"],
    description: "HR at a monster staffing agency tries to mediate between a vampire CEO and a werewolf intern. A workplace comedy with bite.",
    mood: ["funny", "weird"],
    streaming: ["Hulu"],
    posterGradient: g("#1a0a1a", "#6a1a4a", "#e44a8a"),
    backdropGradient: g("#0a000a", "#2a0a2a", "#0a000a"),
  },
  {
    id: "last-light",
    title: "Last Light",
    year: 2023,
    genres: ["Drama", "Thriller"],
    imdb: 8.1, rt: 90, duration: "2h 06m",
    director: "Park Chan-wook",
    cast: ["Song Kang-ho", "Tang Wei"],
    description: "A detective with weeks to live takes one last cold case. Every clue is a memory he's afraid to keep.",
    mood: ["sad", "noir", "dark"],
    streaming: ["Mubi"],
    posterGradient: g("#0a0a14", "#3a1a3a", "#8a3a5a"),
    backdropGradient: g("#000", "#1a0a1a", "#000"),
  },
  {
    id: "starlight-academy",
    title: "Starlight Academy",
    year: 2024,
    genres: ["Anime", "Adventure"],
    imdb: 8.3, rt: 91, duration: "1h 47m",
    director: "Studio Ghibli",
    cast: ["Voice cast"],
    description: "A shy girl discovers her school floats between worlds at midnight. Whimsical, painterly, full of wonder.",
    mood: ["warm", "feel-good", "magical"],
    streaming: ["Netflix"],
    posterGradient: g("#1a2a4a", "#4a6ac4", "#e4c45a"),
    backdropGradient: g("#0a0a1a", "#1a2a4a", "#0a0a1a"),
  },
];

export const genres = [
  "Horror", "Comedy", "Action", "Thriller", "Romance", "Sci-Fi", "Anime", "Adventure",
];

export const trending = movies.slice(0, 6);
export const topRated = [...movies].sort((a, b) => b.imdb - a.imdb).slice(0, 8);
export const continueWatching = movies.slice(2, 7);

export function getMovie(id: string) {
  return movies.find((m) => m.id === id);
}

export function similarMovies(id: string) {
  const m = getMovie(id);
  if (!m) return [];
  return movies
    .filter((x) => x.id !== id && x.genres.some((g) => m.genres.includes(g)))
    .slice(0, 6);
}

export function searchMovies(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return movies;
  return movies.filter((m) =>
    m.title.toLowerCase().includes(q) ||
    m.genres.some((g) => g.toLowerCase().includes(q)) ||
    m.cast.some((c) => c.toLowerCase().includes(q)) ||
    m.director.toLowerCase().includes(q) ||
    m.mood.some((md) => md.toLowerCase().includes(q)) ||
    m.description.toLowerCase().includes(q)
  );
}
