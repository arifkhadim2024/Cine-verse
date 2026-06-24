import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Film, Compass } from "lucide-react";
import { GENRE_IDS } from "@/services/tmdb";

export function GenreSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-4 top-28 z-40 hidden xl:flex items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-strong rounded-2xl p-4 w-52 shadow-red flex flex-col gap-1 border border-white/5 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 px-2 pb-2 mb-2 border-b border-white/10">
              <Compass className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase opacity-80 text-white">
                Explore Genres
              </span>
            </div>

            {Object.entries(GENRE_IDS).map(([name, id]) => (
              <Link
                key={id}
                to="/genre/$id"
                params={{ id: String(id) }}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
                  {name}
                </span>
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full glass border border-white/10 hover:border-primary/50 text-white grid place-items-center ml-2 hover:scale-105 transition-all shadow-red"
        aria-label="Toggle Genre Sidebar"
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5" />
        ) : (
          <Compass className="w-5 h-5 text-primary animate-pulse" />
        )}
      </button>
    </div>
  );
}
