import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info, Search, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-cinema.jpg";
import { Layout } from "@/components/Layout";
import { MovieRow } from "@/components/MovieRow";
import { continueWatching, genres } from "@/data/movies";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { RowSkeleton } from "@/components/SkeletonLoader";
import { GenreSidebar } from "@/components/GenreSidebar";

export const Route = createFileRoute("/")({ component: HomePage });

const genreColors: Record<string, string> = {
  Horror: "from-red-900 to-black",
  Comedy: "from-pink-700 to-red-900",
  Action: "from-red-700 to-orange-900",
  Thriller: "from-purple-900 to-red-950",
  Romance: "from-pink-600 to-rose-900",
  "Sci-Fi": "from-indigo-900 to-red-900",
  Anime: "from-blue-900 to-red-900",
  Adventure: "from-amber-800 to-red-900",
};

const genreImages: Record<string, string> = {
  Horror: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop",
  Comedy: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=600&auto=format&fit=crop",
  Action: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop",
  Thriller: "https://images.unsplash.com/photo-1505635339363-3193273f8a49?q=80&w=600&auto=format&fit=crop",
  Romance: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop",
  "Sci-Fi": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  Anime: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop",
  Adventure: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
};

function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: trendingMovies = [], isLoading: loadingTrending } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => api.movies.getTrending(),
  });

  const { data: topRatedMovies = [], isLoading: loadingTopRated } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => api.movies.getTopRated(),
  });

  const { data: upcomingMovies = [], isLoading: loadingUpcoming } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: () => api.movies.getUpcoming(),
  });

  const { data: bollywoodMovies = [], isLoading: loadingBollywood } = useQuery({
    queryKey: ["bollywoodMovies"],
    queryFn: () => api.movies.getBollywood(),
  });

  const { data: koreanMovies = [], isLoading: loadingKorean } = useQuery({
    queryKey: ["koreanMovies"],
    queryFn: () => api.movies.getKorean(),
  });

  const { data: animeMovies = [], isLoading: loadingAnime } = useQuery({
    queryKey: ["animeMovies"],
    queryFn: () => api.movies.getAnime(),
  });

  const { data: actionMovies = [], isLoading: loadingAction } = useQuery({
    queryKey: ["actionMovies"],
    queryFn: () => api.movies.getByGenre(28),
  });

  const { data: comedyMovies = [], isLoading: loadingComedy } = useQuery({
    queryKey: ["comedyMovies"],
    queryFn: () => api.movies.getByGenre(35),
  });

  const { data: horrorMovies = [], isLoading: loadingHorror } = useQuery({
    queryKey: ["horrorMovies"],
    queryFn: () => api.movies.getByGenre(27),
  });

  const { data: romanceMovies = [], isLoading: loadingRomance } = useQuery({
    queryKey: ["romanceMovies"],
    queryFn: () => api.movies.getByGenre(10749),
  });

  const { data: sciFiMovies = [], isLoading: loadingSciFi } = useQuery({
    queryKey: ["sciFiMovies"],
    queryFn: () => api.movies.getByGenre(878),
  });

  const hero = trendingMovies[heroIndex] || continueWatching[0];

  const { data: heroDetails } = useQuery({
    queryKey: ["movieDetails", hero?.id],
    queryFn: () => api.movies.getDetails(hero.id),
    enabled: !!hero?.id,
  });

  useEffect(() => {
    if (trendingMovies.length === 0) return;
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % trendingMovies.length), 6000);
    return () => clearInterval(t);
  }, [trendingMovies.length]);

  return (
    <Layout>
      <GenreSidebar />
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={hero.backdropUrl || heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={hero.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ background: hero.backdropGradient }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 flex flex-col justify-end pb-20 sm:pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                  ◆ Featured
                </span>
                <span className="text-xs text-muted-foreground">
                  #{heroIndex + 1} Trending today
                </span>
              </div>
              {heroDetails?.logoUrl ? (
                <div className="relative mb-4">
                  <img
                    src={heroDetails.logoUrl}
                    alt={hero.title}
                    className="h-20 sm:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] max-w-[90%] select-none pointer-events-none"
                  />
                </div>
              ) : (
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none drop-shadow-2xl mb-4">
                  {hero.title}
                </h1>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold text-primary">★ {hero.imdb} IMDb</span>
                <span className="text-muted-foreground">{hero.year}</span>
                <span className="text-muted-foreground">{hero.duration}</span>
                <div className="flex gap-1.5">
                  {hero.genres.map((g) => (
                    <span key={g} className="px-2 py-0.5 rounded-full glass text-xs">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
                {hero.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/movie/$id"
                  params={{ id: hero.id }}
                  className="inline-flex items-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform"
                >
                  <Play className="w-5 h-5 fill-current" /> Watch Trailer
                </Link>
                <Link
                  to="/movie/$id"
                  params={{ id: hero.id }}
                  className="inline-flex items-center gap-2 rounded-md glass-strong px-6 py-3 font-semibold hover:bg-accent transition-colors"
                >
                  <Info className="w-5 h-5" /> More Info
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-4 sm:right-6 bottom-20 sm:bottom-28 hidden md:flex flex-col gap-2">
            {trendingMovies.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`h-10 w-1 rounded-full transition-all ${
                  i === heroIndex ? "bg-primary shadow-red" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="relative -mt-12 sm:-mt-16 mx-auto max-w-3xl px-4 sm:px-6 z-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/search", search: { q: query } as never });
          }}
          className="glass-strong rounded-2xl p-2 flex items-center gap-2 shadow-red"
        >
          <Search className="w-5 h-5 ml-3 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search films, actors, moods… try 'mind bending'"
            className="flex-1 bg-transparent outline-none text-base py-3 placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="rounded-xl gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform"
          >
            Search
          </button>
        </form>
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
          {["sad", "funny", "mind bending", "dark", "feel-good"].map((m) => (
            <Link
              key={m}
              to="/search"
              search={{ q: m } as never}
              className="px-3 py-1.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              #{m}
            </Link>
          ))}
        </div>
      </section>

      {/* GENRES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-display text-3xl sm:text-4xl">Browse by Genre</h2>
          <Link to="/genres" className="text-sm text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {genres.map((g, i) => (
            <motion.div
              key={g}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to="/search"
                search={{ q: g } as never}
                className="group relative block aspect-[16/10] rounded-xl overflow-hidden shadow-card hover:shadow-red transition-all hover:scale-[1.03]"
              >
                {genreImages[g] ? (
                  <img
                    src={genreImages[g]}
                    alt={g}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${genreColors[g]}`} />
                )}
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="font-display text-2xl sm:text-3xl drop-shadow-lg text-white">{g}</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Promo */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <Link
          to="/ai"
          className="relative block overflow-hidden rounded-2xl glass-strong p-6 sm:p-10 group hover:shadow-red transition-shadow"
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full gradient-red opacity-30 blur-3xl group-hover:opacity-50 transition-opacity" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl gradient-red grid place-items-center shadow-red shrink-0">
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl sm:text-3xl">Meet your AI Cinematographer</h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                "Suggest a mind-bending thriller like Inception." Get instant, curated picks.
              </p>
            </div>
            <span className="rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red whitespace-nowrap">
              Open Assistant →
            </span>
          </div>
        </Link>
      </section>

      {loadingTrending ? (
        <RowSkeleton count={6} />
      ) : (
        <MovieRow
          title="Trending Now"
          subtitle="What everyone's watching this week"
          movies={trendingMovies}
        />
      )}

      {loadingTopRated ? (
        <RowSkeleton count={6} />
      ) : (
        <MovieRow
          title="Top Rated"
          subtitle="Critically acclaimed masterpieces"
          movies={topRatedMovies}
        />
      )}

      {loadingUpcoming ? (
        <RowSkeleton count={6} />
      ) : (
        <MovieRow
          title="Upcoming Releases"
          subtitle="Anticipated blockbusters coming soon"
          movies={upcomingMovies}
        />
      )}

      <MovieRow
        title="Continue Watching"
        subtitle="Pick up where you left off"
        movies={continueWatching}
      />

      {loadingBollywood ? (
        <RowSkeleton count={6} />
      ) : (
        bollywoodMovies.length > 0 && (
          <MovieRow
            title="Bollywood Hits"
            subtitle="Epic Hindi drama and musical blockbusters"
            movies={bollywoodMovies}
          />
        )
      )}

      {loadingKorean ? (
        <RowSkeleton count={6} />
      ) : (
        koreanMovies.length > 0 && (
          <MovieRow
            title="Korean Cinema"
            subtitle="K-Drama, action thrillers, and award winners"
            movies={koreanMovies}
          />
        )
      )}

      {loadingAnime ? (
        <RowSkeleton count={6} />
      ) : (
        animeMovies.length > 0 && (
          <MovieRow
            title="Anime Movies"
            subtitle="Stunning hand-drawn Japanese animation classics"
            movies={animeMovies}
          />
        )
      )}

      {loadingAction ? (
        <RowSkeleton count={6} />
      ) : (
        actionMovies.length > 0 && (
          <MovieRow
            title="Action Blockbusters"
            subtitle="High-octane explosions and thrilling stunts"
            movies={actionMovies}
          />
        )
      )}

      {loadingComedy ? (
        <RowSkeleton count={6} />
      ) : (
        comedyMovies.length > 0 && (
          <MovieRow
            title="Laughter & Comedy"
            subtitle="Lighthearted laughs and hilarious scenarios"
            movies={comedyMovies}
          />
        )
      )}

      {loadingHorror ? (
        <RowSkeleton count={6} />
      ) : (
        horrorMovies.length > 0 && (
          <MovieRow
            title="Midnight Horrors"
            subtitle="Creepy tales, jump scares, and supernatural fears"
            movies={horrorMovies}
          />
        )
      )}

      {loadingRomance ? (
        <RowSkeleton count={6} />
      ) : (
        romanceMovies.length > 0 && (
          <MovieRow
            title="Romantic Stories"
            subtitle="Heartfelt romance, passionate love stories, and dramas"
            movies={romanceMovies}
          />
        )
      )}

      {loadingSciFi ? (
        <RowSkeleton count={6} />
      ) : (
        sciFiMovies.length > 0 && (
          <MovieRow
            title="Sci-Fi & Fantasy"
            subtitle="Futuristic adventures, alien worlds, and tech dystopias"
            movies={sciFiMovies}
          />
        )
      )}
    </Layout>
  );
}
