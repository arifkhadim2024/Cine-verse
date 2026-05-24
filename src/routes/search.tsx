import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, Sparkles, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { searchMovies, genres } from "@/data/movies";

type SearchParams = { q?: string };

export const Route = createFileRoute("/search")({
  component: SearchPage,
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    q: typeof s.q === "string" ? s.q : undefined,
  }),
});

const moodTags = ["sad", "funny", "mind bending", "dark", "feel-good", "stylish", "intense", "romantic"];

function SearchPage() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const effective = activeFilter ?? query;
  const results = useMemo(() => searchMovies(effective), [effective]);

  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    const lower = query.toLowerCase();
    const out = new Set<string>();
    [...genres, ...moodTags].forEach((t) => {
      if (t.toLowerCase().includes(lower)) out.add(t);
    });
    return Array.from(out).slice(0, 5);
  }, [query]);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10">
        <h1 className="font-display text-4xl sm:text-6xl">Find your next film</h1>
        <p className="text-muted-foreground mt-2">Search by title, actor, director, genre, or mood.</p>

        <div className="mt-6 relative">
          <div className="glass-strong rounded-2xl p-2 flex items-center gap-2 shadow-card">
            <Search className="w-5 h-5 ml-3 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveFilter(null); }}
              placeholder="Try 'Pugh', 'Sci-Fi', or 'mind bending'…"
              className="flex-1 bg-transparent outline-none text-base py-3 placeholder:text-muted-foreground"
            />
            {query && (
              <button onClick={() => { setQuery(""); setActiveFilter(null); }} className="w-9 h-9 grid place-items-center rounded-full hover:bg-accent">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {suggestions.length > 0 && (
            <div className="absolute z-20 left-0 right-0 mt-2 glass-strong rounded-xl p-2">
              <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Smart suggestions
              </div>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => { setQuery(s); setActiveFilter(s); }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Genres</div>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => { setQuery(g); setActiveFilter(g); }}
                className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
                  activeFilter === g
                    ? "gradient-red text-primary-foreground border-transparent shadow-red"
                    : "glass border-border hover:bg-accent"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2 mt-5">Moods</div>
          <div className="flex flex-wrap gap-2">
            {moodTags.map((m) => (
              <button
                key={m}
                onClick={() => { setQuery(m); setActiveFilter(m); }}
                className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
                  activeFilter === m
                    ? "gradient-red text-primary-foreground border-transparent shadow-red"
                    : "glass border-border hover:bg-accent"
                }`}
              >
                #{m}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display text-2xl">
              {effective ? `Results for "${effective}"` : "All movies"}
            </h2>
            <span className="text-sm text-muted-foreground">{results.length} titles</span>
          </div>
          {results.length === 0 ? (
            <div className="glass rounded-2xl p-10 text-center">
              <p className="text-muted-foreground">No matches. Try a different mood or genre.</p>
              <Link to="/ai" className="inline-flex items-center gap-2 mt-4 rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red">
                <Sparkles className="w-4 h-4" /> Ask the AI Assistant
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.map((m, i) => <MovieCard key={m.id} movie={m} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
