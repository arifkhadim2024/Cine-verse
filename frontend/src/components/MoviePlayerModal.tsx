import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  Film,
  Sparkles,
  Server,
  Tv,
} from "lucide-react";
import type { Movie } from "@/data/movies";

interface MoviePlayerModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MoviePlayerModal({ movie, isOpen, onClose }: MoviePlayerModalProps) {
  const [selectedServer, setSelectedServer] = useState<"stream" | "trailer" | "embed">("trailer");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !movie) return null;

  const trailerId = movie.trailerId || "dQw4w9WgXcQ";
  const netflixSearchUrl = `https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}`;
  const googlePlayUrl = `https://play.google.com/store/search?q=${encodeURIComponent(movie.title)}&c=movies`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[95vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-red grid place-items-center shadow-red">
                <Film className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-white flex items-center gap-2">
                  {movie.title}
                  <span className="text-[10px] font-sans font-semibold tracking-wider px-2 py-0.5 rounded-full bg-red-600/30 text-red-400 border border-red-500/30">
                    4K ULTRA HD
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {movie.year} • {movie.duration} • {movie.genres?.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* External Provider Links */}
              <a
                href={netflixSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-red transition-all"
              >
                <Tv className="w-3.5 h-3.5" /> Watch on Netflix
              </a>

              <button
                onClick={onClose}
                className="w-9 h-9 grid place-items-center rounded-lg glass-strong text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Screen Area */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
            <iframe
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
              title={`${movie.title} Video Player`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Player Footer Controls & Provider Links */}
          <div className="p-4 bg-zinc-900/60 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1 mr-1">
                <Server className="w-3.5 h-3.5 text-primary" /> Sources:
              </span>
              <button
                onClick={() => setSelectedServer("trailer")}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  selectedServer === "trailer"
                    ? "gradient-red text-white shadow-red"
                    : "glass hover:bg-white/10 text-muted-foreground"
                }`}
              >
                Trailer & Preview (HD)
              </button>
              <a
                href={netflixSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-md text-xs font-semibold bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-600/40 transition-all flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" /> Stream on Netflix
              </a>
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-md text-xs font-semibold glass hover:bg-white/10 text-muted-foreground transition-all flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" /> Google Play
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> IMDb {movie.imdb}/10
              </span>
              <span>•</span>
              <span>{movie.director !== "Unknown" ? `Dir. ${movie.director}` : movie.duration}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
