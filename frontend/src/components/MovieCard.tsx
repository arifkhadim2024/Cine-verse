import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Plus, Star, Film } from "lucide-react";
import type { Movie } from "@/data/movies";

export function MovieCard({ movie, index = 0 }: { movie: Movie; index?: number }) {
  const isNetflix = movie.streaming?.includes("Netflix") || movie.id.startsWith("netflix-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className="group"
    >
      <Link to="/movie/$id" params={{ id: movie.id }} className="block">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-red group-hover:scale-[1.04] group-hover:-translate-y-1 bg-zinc-900 border border-white/5">
          {movie.posterUrl ? (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                // Fallback to stylized cinema poster if URL fails
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop";
              }}
            />
          ) : (
            <div className="absolute inset-0" style={{ background: movie.posterGradient }} />
          )}

          {/* Vignette & Gradients for Crisp Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40" />

          {/* Card Badges & Metadata */}
          <div className="absolute inset-0 flex flex-col justify-between p-3.5 z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                  {movie.genres?.[0] || "Film"}
                </span>
                {isNetflix && (
                  <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-600 text-white shadow-red uppercase">
                    N
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1 text-xs glass px-2 py-0.5 rounded-full font-semibold">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {movie.imdb}
              </span>
            </div>

            <div>
              <h3 className="font-display text-lg sm:text-xl leading-snug drop-shadow-md line-clamp-2 text-white font-semibold">
                {movie.title}
              </h3>
              <p className="text-xs text-white/70 mt-1 flex items-center gap-2">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.duration}</span>
              </p>
            </div>
          </div>

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
            <span className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md gradient-red text-primary-foreground text-xs font-semibold py-2.5 shadow-red hover:brightness-110">
              <Play className="w-3.5 h-3.5 fill-current" /> Watch Movie
            </span>
            <span className="w-9 h-9 grid place-items-center rounded-md glass-strong text-white hover:bg-white/20 transition-colors">
              <Plus className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
