import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Bookmark, Heart, Clock, LogOut } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { movies } from "@/data/movies";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

function ProfilePage() {
  const stats = [
    { label: "Watched", value: 247, icon: Clock },
    { label: "Watchlist", value: 32, icon: Bookmark },
    { label: "Liked", value: 89, icon: Heart },
  ];
  const favorites = movies.slice(0, 5);
  const recent = movies.slice(4, 9);

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
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl gradient-red shadow-red grid place-items-center font-display text-6xl text-primary-foreground border-4 border-background">
            A
          </div>
          <div className="flex-1">
            <h1 className="font-display text-5xl sm:text-6xl">Alex Carter</h1>
            <p className="text-muted-foreground mt-1">@alexc · Cinephile since 2021 · Loves dark thrillers</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-md glass-strong px-4 py-2 text-sm hover:bg-accent">
              <Settings className="w-4 h-4" /> Settings
            </button>
            <Link to="/login" className="inline-flex items-center gap-2 rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red">
              <LogOut className="w-4 h-4" /> Sign out
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass-strong rounded-2xl p-5 text-center sm:text-left">
              <s.icon className="w-5 h-5 text-primary mx-auto sm:mx-0" />
              <div className="font-display text-4xl mt-2">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="font-display text-3xl mb-5">Favorites</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {favorites.map((m, i) => <MovieCard key={m.id} movie={m} index={i} />)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl mb-5">Recently Watched</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {recent.map((m, i) => <MovieCard key={m.id} movie={m} index={i} />)}
          </div>
        </section>
      </div>
    </Layout>
  );
}
