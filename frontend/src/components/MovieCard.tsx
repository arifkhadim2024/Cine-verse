import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Plus, Star } from "lucide-react";
import type { Movie } from "@/data/movies";

export function MovieCard({ movie, index = 0 }: { movie: Movie; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className="group"
    >
      <Link to="/movie/$id" params={{ id: movie.id }} className="block">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-red group-hover:scale-[1.04] group-hover:-translate-y-1">
          {movie.posterUrl ? (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: movie.posterGradient }} />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
          <div className="absolute inset-0 flex flex-col justify-between p-3">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">
                {movie.genres[0]}
              </span>
              <span className="flex items-center gap-1 text-xs glass px-2 py-1 rounded-full">
                <Star className="w-3 h-3 fill-primary text-primary" />
                {movie.imdb}
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl leading-tight drop-shadow-lg">{movie.title}</h3>
              <p className="text-xs text-white/70 mt-0.5">
                {movie.year} · {movie.duration}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md gradient-red text-primary-foreground text-xs font-semibold py-2">
              <Play className="w-3.5 h-3.5 fill-current" /> Play
            </span>
            <span className="w-9 h-9 grid place-items-center rounded-md glass-strong">
              <Plus className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
