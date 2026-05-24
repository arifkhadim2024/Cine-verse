import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bookmark, Trash2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { movies } from "@/data/movies";

export const Route = createFileRoute("/watchlist")({ component: WatchlistPage });

function WatchlistPage() {
  // Local mock state
  const [items, setItems] = useState(() => movies.slice(0, 5));

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
              <Bookmark className="w-3.5 h-3.5" /> Your collection
            </div>
            <h1 className="font-display text-5xl sm:text-7xl mt-3">My Watchlist</h1>
            <p className="text-muted-foreground mt-2">{items.length} films saved for later</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={() => setItems([])}
              className="inline-flex items-center gap-2 rounded-md glass-strong px-4 py-2 text-sm hover:bg-accent"
            >
              <Trash2 className="w-4 h-4" /> Clear all
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="mt-12 glass rounded-2xl p-12 text-center">
            <Bookmark className="w-12 h-12 mx-auto text-muted-foreground" />
            <h2 className="font-display text-3xl mt-4">Your watchlist is empty</h2>
            <p className="text-muted-foreground mt-2">Start building your queue of must-watch films.</p>
            <Link
              to="/"
              className="inline-flex items-center justify-center mt-6 rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red"
            >
              Discover movies
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((m, i) => <MovieCard key={m.id} movie={m} index={i} />)}
          </div>
        )}
      </div>
    </Layout>
  );
}
