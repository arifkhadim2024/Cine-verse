import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuth } from "../context/AuthContext";

export const Route = createFileRoute("/watchlist")({ component: WatchlistPage });

function WatchlistPage() {
  const { isAuthenticated } = useAuth();

  // Fetch real watchlist from Express backend or localStorage
  const { data: items = [], isLoading } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.watchlist.get,
  });

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Bookmark className="w-3.5 h-3.5" /> Your collection
          </div>
          <h1 className="font-display text-5xl sm:text-7xl mt-3">My Watchlist</h1>
          <p className="text-muted-foreground mt-2">{items.length} films saved for later</p>
        </div>

        {!isAuthenticated && items.length > 0 && (
          <div className="mt-6 glass p-4 rounded-xl flex items-center justify-between flex-wrap gap-3 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              You are currently viewing a <strong>local watchlist</strong>. Sign in to back up and sync your list.
            </p>
            <Link
              to="/login"
              className="rounded-md gradient-red px-4 py-2 text-xs font-semibold text-primary-foreground shadow-red"
            >
              Sign In
            </Link>
          </div>
        )}

        {isLoading ? (
          <div className="mt-20 flex justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          </div>
        ) : items.length === 0 ? (
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
            {items.map((m, i) => (
              <MovieCard key={m.id} movie={m} index={i} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
