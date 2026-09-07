import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Plus, Heart, Share2, Star, Clock, Calendar, ArrowLeft, Tv, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { MoviePlayerModal } from "@/components/MoviePlayerModal";
import { CinemaPlayer } from "@/components/CinemaPlayer";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import { DetailSkeleton } from "@/components/SkeletonLoader";

export const Route = createFileRoute("/movie/$id")({
  component: MovieDetailsPage,
  notFoundComponent: () => (
    <Layout>
      <div className="pt-32 text-center">
        <h1 className="font-display text-4xl">Movie not found</h1>
        <Link to="/" className="text-primary mt-4 inline-block">
          Back home
        </Link>
      </div>
    </Layout>
  ),
});

function MovieDetailsPage() {
  const { id } = Route.useParams();
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const [showTrailer, setShowTrailer] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  // Fetch movie details
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => api.movies.getDetails(id),
  });

  // Fetch similar movies
  const { data: similar = [] } = useQuery({
    queryKey: ["movieSimilar", id],
    queryFn: () => api.movies.getSimilar(id),
    enabled: !!movie,
  });

  // Fetch recommendations
  const { data: recommendations = [] } = useQuery({
    queryKey: ["movieRecommendations", id],
    queryFn: () => api.movies.getRecommendations(id),
    enabled: !!movie,
  });

  // Fetch user's watchlist
  const { data: watchlist = [] } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.watchlist.get,
    enabled: isAuthenticated,
  });

  // Fetch user's favorites
  const { data: favorites = [] } = useQuery({
    queryKey: ["favorites"],
    queryFn: api.favorites.get,
    enabled: isAuthenticated,
  });

  const isSaved = watchlist.some((item) => String(item.id) === String(id));
  const isLiked = favorites.some((item) => String(item.id) === String(id));

  // Toggle watchlist item
  const toggleWatchlistMutation = useMutation({
    mutationFn: () => {
      if (isSaved) {
        return api.watchlist.remove(id);
      } else {
        return api.watchlist.add(movie!);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
      toast.success(isSaved ? "Removed from watchlist" : "Added to watchlist");
    },
    onError: (err) => {
      const error = err as Error;
      toast.error(error.message || "Failed to update watchlist");
    },
  });

  // Toggle favorite item
  const toggleFavoriteMutation = useMutation({
    mutationFn: () => {
      if (isLiked) {
        return api.favorites.remove(id);
      } else {
        return api.favorites.add(movie!);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      toast.success(isLiked ? "Removed from favorites" : "Added to favorites");
    },
    onError: (err) => {
      const error = err as Error;
      toast.error(error.message || "Failed to update favorites");
    },
  });

  const handleWatchlistClick = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to save movies to your watchlist.");
      return;
    }
    toggleWatchlistMutation.mutate();
  };

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add movies to your favorites.");
      return;
    }
    toggleFavoriteMutation.mutate();
  };

  if (isLoading) {
    return (
      <Layout>
        <DetailSkeleton />
      </Layout>
    );
  }

  if (error || !movie) {
    throw notFound();
  }

  return (
    <Layout>
      {/* Backdrop */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        {movie.backdropUrl ? (
          <img
            src={movie.backdropUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-1000"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: movie.backdropGradient }} />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-24 left-4 sm:left-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-64 sm:-mt-72 relative z-10">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-[2/3] rounded-2xl overflow-hidden shadow-red relative bg-zinc-900 border border-white/10"
          >
            {movie.posterUrl ? (
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop";
                }}
              />
            ) : (
              <div className="absolute inset-0" style={{ background: movie.posterGradient }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/60 text-white/90 backdrop-blur-sm self-start border border-white/10">
                {movie.genres?.[0] || "Featured"}
              </span>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl leading-tight drop-shadow-lg text-white font-semibold">
                  {movie.title}
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {movie.genres?.map((g) => (
                <span key={g} className="px-2.5 py-0.5 rounded-full glass text-xs font-medium">
                  {g}
                </span>
              ))}
            </div>
            {movie.logoUrl ? (
              <div className="relative mb-4 mt-2">
                <img
                  src={movie.logoUrl}
                  alt={movie.title}
                  className="h-20 sm:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] max-w-[90%] select-none pointer-events-none"
                />
              </div>
            ) : (
              <h1 className="font-display text-4xl sm:text-6xl font-bold leading-none mb-4 text-white">
                {movie.title}
              </h1>
            )}

            {movie.tagline && (
              <p className="text-lg sm:text-xl italic text-primary/95 mt-3 font-light leading-relaxed">
                "{movie.tagline}"
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 rounded-md bg-yellow-500 text-black font-bold grid place-items-center text-xs">
                  IMDb
                </div>
                <span className="font-bold text-lg">{movie.imdb}</span>
                <span className="text-muted-foreground">/10</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 rounded-md gradient-red text-primary-foreground font-bold grid place-items-center text-[10px]">
                  RT
                </div>
                <span className="font-bold text-lg">{movie.rt}%</span>
              </div>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {movie.year}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4" />
                {movie.duration}
              </span>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-3xl">
              {movie.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPlayer(true)}
                className="inline-flex items-center gap-2 rounded-md gradient-red px-7 py-3.5 font-bold text-primary-foreground shadow-red hover:scale-105 hover:brightness-110 transition-all cursor-pointer text-base"
              >
                <Play className="w-5 h-5 fill-current" /> Watch Movie
              </button>

              <button
                onClick={() => {
                  if (movie.trailerId) {
                    setShowTrailer(true);
                  } else {
                    toast.error("Trailer not available for this movie.");
                  }
                }}
                className="inline-flex items-center gap-2 rounded-md glass-strong px-5 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4" /> Watch Trailer
              </button>

              <a
                href={
                  movie.netflixUrl ||
                  `https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}`
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 px-5 py-3.5 font-semibold text-white shadow-red transition-all cursor-pointer"
              >
                <Tv className="w-4 h-4" /> Watch on Netflix
              </a>

              <button
                onClick={handleWatchlistClick}
                disabled={toggleWatchlistMutation.isPending}
                className={`inline-flex items-center gap-2 rounded-md px-5 py-3.5 font-semibold transition-colors cursor-pointer ${
                  isSaved
                    ? "gradient-red text-primary-foreground shadow-red"
                    : "glass-strong hover:bg-accent"
                }`}
              >
                <Plus className="w-5 h-5" /> {isSaved ? "In Watchlist" : "Add to Watchlist"}
              </button>

              <button
                onClick={handleFavoriteClick}
                disabled={toggleFavoriteMutation.isPending}
                className={`w-12 h-12 grid place-items-center rounded-md glass-strong hover:bg-accent transition-colors cursor-pointer ${isLiked ? "text-primary" : ""}`}
                aria-label="Like"
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </button>

              <button
                className="w-12 h-12 grid place-items-center rounded-md glass-strong hover:bg-accent cursor-pointer"
                aria-label="Share"
                onClick={() =>
                  navigator
                    .share?.({ title: movie.title, url: window.location.href })
                    .catch(() => {})
                }
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {movie.director && movie.director !== "Unknown" && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Director
                  </div>
                  <p className="font-semibold text-sm">{movie.director}</p>
                </div>
              )}
              {movie.releaseDate && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Release Date
                  </div>
                  <p className="font-semibold text-sm">{movie.releaseDate}</p>
                </div>
              )}
              {movie.popularity && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Popularity Rank
                  </div>
                  <p className="font-semibold text-sm">{Math.round(movie.popularity)}</p>
                </div>
              )}
              {movie.spokenLanguages && movie.spokenLanguages.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Languages
                  </div>
                  <p className="font-semibold text-sm">{movie.spokenLanguages.join(", ")}</p>
                </div>
              )}
              {movie.productionCompanies && movie.productionCompanies.length > 0 && (
                <div className="sm:col-span-2">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Production
                  </div>
                  <p className="font-semibold text-sm text-white/80">
                    {movie.productionCompanies.join(", ")}
                  </p>
                </div>
              )}
              {movie.watchProviders && movie.watchProviders.providers && movie.watchProviders.providers.length > 0 ? (
                <div className="col-span-full mt-2 p-4 rounded-xl glass-strong border border-white/5 shadow-inner">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                    Where to Watch (Click to Stream)
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {movie.watchProviders.providers.map((p: any) => (
                      <a
                        key={p.id}
                        href={movie.watchProviders.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-primary/20 border border-white/5 hover:border-primary/45 transition-all hover:scale-[1.03] active:scale-95 group shadow-sm"
                        title={`Stream ${movie.title} on ${p.name}`}
                      >
                        {p.logo ? (
                          <img
                            src={p.logo}
                            alt={p.name}
                            className="w-5 h-5 rounded object-cover border border-white/10"
                            loading="lazy"
                          />
                        ) : null}
                        <span className="font-semibold text-xs text-white/90 group-hover:text-primary transition-colors">
                          {p.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : movie.streaming && movie.streaming.length > 0 ? (
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Streaming on
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {movie.streaming.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 rounded glass text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>

        {/* Inline Cinema Theatre Stream Section */}
        <section id="cinema-player-section" className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-wrap items-center justify-between mb-5 gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-red" />
              <h2 className="font-display text-2xl sm:text-4xl text-white font-bold">
                {movie.type === "TV Show" ? "Watch Web Series Episodes" : "Stream Full Movie"}
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">
              4K Ultra HD • Switch Servers & Audio Below
            </span>
          </div>
          <CinemaPlayer movie={movie} autoPlay={false} />
        </section>

        {/* Cast profile cards */}
        {movie.castDetails && movie.castDetails.length > 0 ? (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-display text-3xl mb-6">Cast & Crew</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {movie.castDetails.map((actor, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-border shadow bg-accent mb-2">
                    {actor.profileUrl ? (
                      <img
                        src={actor.profileUrl}
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-display text-xl bg-gradient-red text-white uppercase">
                        {actor.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-semibold line-clamp-1">{actor.name}</span>
                  <span className="text-[10px] text-muted-foreground line-clamp-1">
                    {actor.character}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ) : movie.cast && movie.cast.length > 0 ? (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-display text-3xl mb-4">Cast & Crew</h2>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full glass text-sm">
                  {c}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        {/* Trailer Iframe Modal */}
        {showTrailer && movie.trailerId && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl grid place-items-center p-4 sm:p-10"
            onClick={() => setShowTrailer(false)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-red bg-black border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1`}
                title={`${movie.title} Trailer`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setShowTrailer(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white grid place-items-center hover:bg-black font-semibold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="mt-20 border-t border-white/10 pt-10">
            <h2 className="font-display text-3xl sm:text-4xl mb-5">Recommended for You</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {recommendations.map((m, i) => (
                <MovieCard key={m.id} movie={m} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Similar */}
        {similar.length > 0 && (
          <section className="mt-20 border-t border-white/10 pt-10">
            <h2 className="font-display text-3xl sm:text-4xl mb-5">You might also love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {similar.map((m, i) => (
                <MovieCard key={m.id} movie={m} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Full Cinema Player Modal */}
        <MoviePlayerModal
          movie={movie}
          isOpen={showPlayer}
          onClose={() => setShowPlayer(false)}
        />
      </div>
    </Layout>
  );
}
