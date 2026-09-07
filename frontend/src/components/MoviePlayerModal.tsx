import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Movie } from "@/data/movies";
import { CinemaPlayer } from "./CinemaPlayer";

interface MoviePlayerModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MoviePlayerModal({ movie, isOpen, onClose }: MoviePlayerModalProps) {
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl z-10 flex flex-col max-h-[96vh] overflow-y-auto"
        >
          {/* Close button at top right */}
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/20 text-white hover:bg-red-600 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-lg"
            >
              <X className="w-4 h-4" /> Close Player
            </button>
          </div>

          <CinemaPlayer movie={movie} autoPlay={true} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
