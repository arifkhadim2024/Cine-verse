import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Plus, Heart, Share2, Star, Clock, Calendar, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { getMovie, similarMovies } from "@/data/movies";

export const Route = createFileRoute("/movie/$id")({
  component: MovieDetailsPage,
  notFoundComponent: () => (
    <Layout>
      <div className="pt-32 text-center">
        <h1 className="font-display text-4xl">Movie not found</h1>
        <Link to="/" className="text-primary mt-4 inline-block">Back home</Link>
      </div>
    </Layout>
  ),
});

function MovieDetailsPage() {
  const { id } = Route.useParams();
  const movie = getMovie(id);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) throw notFound();
  const similar = similarMovies(id);

  return (
    <Layout>
      {/* Backdrop */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0" style={{ background: movie.backdropGradient }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-24 left-4 sm:left-6">
          <Link to="/" className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-64 sm:-mt-72 relative z-10">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="aspect-[2/3] rounded-2xl overflow-hidden shadow-red relative"
          >
            <div className="absolute inset-0" style={{ background: movie.posterGradient }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">
                {movie.genres[0]}
              </span>
              <h2 className="font-display text-3xl leading-tight drop-shadow-lg">{movie.title}</h2>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex flex-wrap gap-2 mb-3">
              {movie.genres.map((g) => (
                <span key={g} className="px-2.5 py-0.5 rounded-full glass text-xs">{g}</span>
              ))}
            </div>
            <h1 className="font-display text-5xl sm:text-7xl leading-none">{movie.title}</h1>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 rounded-md bg-yellow-500 text-black font-bold grid place-items-center text-xs">IMDb</div>
                <span className="font-bold text-lg">{movie.imdb}</span>
                <span className="text-muted-foreground">/10</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 rounded-md gradient-red text-primary-foreground font-bold grid place-items-center text-[10px]">RT</div>
                <span className="font-bold text-lg">{movie.rt}%</span>
              </div>
              <span className="flex items-center gap-1.5 text-muted-foreground"><Calendar className="w-4 h-4" />{movie.year}</span>
              <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4" />{movie.duration}</span>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-3xl">
              {movie.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => setShowTrailer(true)}
                className="inline-flex items-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform"
              >
                <Play className="w-5 h-5 fill-current" /> Watch Trailer
              </button>
              <button
                onClick={() => setSaved((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors ${
                  saved ? "gradient-red text-primary-foreground shadow-red" : "glass-strong hover:bg-accent"
                }`}
              >
                <Plus className="w-5 h-5" /> {saved ? "In Watchlist" : "Add to Watchlist"}
              </button>
              <button
                onClick={() => setLiked((v) => !v)}
                className={`w-12 h-12 grid place-items-center rounded-md glass-strong hover:bg-accent transition-colors ${liked ? "text-primary" : ""}`}
                aria-label="Like"
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
              </button>
              <button
                className="w-12 h-12 grid place-items-center rounded-md glass-strong hover:bg-accent"
                aria-label="Share"
                onClick={() => navigator.share?.({ title: movie.title, url: window.location.href }).catch(() => {})}
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Director</div>
                <p className="font-semibold">{movie.director}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Streaming on</div>
                <div className="flex flex-wrap gap-2">
                  {movie.streaming.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-md glass text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Cast</div>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((c) => (
                    <span key={c} className="px-3 py-1.5 rounded-full glass text-sm">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trailer */}
        {showTrailer && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg grid place-items-center p-4"
            onClick={() => setShowTrailer(false)}
          >
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-red">
              <div className="absolute inset-0" style={{ background: movie.backdropGradient }} />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-red grid place-items-center mx-auto shadow-red">
                    <Play className="w-10 h-10 text-primary-foreground fill-current" />
                  </div>
                  <p className="font-display text-2xl mt-4">{movie.title} — Trailer</p>
                  <p className="text-sm text-muted-foreground mt-1">Click anywhere to close</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Similar */}
        {similar.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-3xl sm:text-4xl mb-5">You might also love</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {similar.map((m, i) => <MovieCard key={m.id} movie={m} index={i} />)}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
