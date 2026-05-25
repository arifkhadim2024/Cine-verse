import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Settings, Bookmark, Heart, Clock, LogOut } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

function ProfilePage() {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const navigate = useNavigate();

  // Fetch real favorites (works for logged out user using local storage)
  const { data: favorites = [], isLoading: loadingFavorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: api.favorites.get,
  });

  // Fetch real watchlist (works for logged out user using local storage)
  const { data: watchlist = [], isLoading: loadingWatchlist } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.watchlist.get,
  });

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
      </Layout>
    );
  }

  const currentUser = user || { name: "Guest User", email: "guest@cineverse.com" };

  const stats = [
    { label: "Watchlist", value: watchlist.length, icon: Bookmark },
    { label: "Favorites", value: favorites.length, icon: Heart },
  ];

  return (
    <Layout>
      {/* Banner */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <div className="absolute inset-0 gradient-red opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 gradient-hero" />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-24 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl gradient-red shadow-red grid place-items-center font-display text-6xl text-primary-foreground border-4 border-background select-none">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="font-display text-5xl sm:text-6xl">{currentUser.name}</h1>
            <p className="text-muted-foreground mt-1">
              {isAuthenticated ? `@${currentUser.email.split("@")[0]} · CineVerse member` : "Temporary profile · List stored locally"}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-md glass-strong px-4 py-2 text-sm hover:bg-accent cursor-pointer">
              <Settings className="w-4 h-4" /> Settings
            </button>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red cursor-pointer"
              >
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-md gradient-red px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-red"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass-strong rounded-2xl p-5 text-center sm:text-left">
              <s.icon className="w-5 h-5 text-primary mx-auto sm:mx-0" />
              <div className="font-display text-4xl mt-2">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="font-display text-3xl mb-5">Favorites ({favorites.length})</h2>
          {loadingFavorites ? (
            <div className="flex justify-center p-10">
              <div className="w-8 h-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
            </div>
          ) : favorites.length === 0 ? (
            <div className="glass rounded-xl p-8 text-center text-muted-foreground text-sm">
              Your favorite movies will appear here. Like a movie to add it!
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {favorites.map((m, i) => (
                <MovieCard key={m.id} movie={m} index={i} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl mb-5">Watchlist Queue ({watchlist.length})</h2>
          {loadingWatchlist ? (
            <div className="flex justify-center p-10">
              <div className="w-8 h-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
            </div>
          ) : watchlist.length === 0 ? (
            <div className="glass rounded-xl p-8 text-center text-muted-foreground text-sm">
              Your watchlist is empty. Discover and save some movies!
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {watchlist.map((m, i) => (
                <MovieCard key={m.id} movie={m} index={i} />
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
