import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Search, Sparkles, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { genres } from "@/data/movies";
import { GridSkeleton } from "@/components/SkeletonLoader";
import type { Movie } from "@/data/movies";

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
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  // Sync state when URL parameter changes
  useEffect(() => {
    setQuery(q ?? "");
  }, [q]);

  const effective = activeFilter ?? query;

  // Reset page and results when search target changes
  useEffect(() => {
    setMoviesList([]);
    setPage(1);
  }, [effective]);

  const { data: resultsData, isLoading, isFetching } = useQuery({
    queryKey: ["movieSearch", effective, page],
    queryFn: () => api.movies.search(effective, page),
  });

  // Append new pages to results array
  useEffect(() => {
    if (resultsData) {
      setMoviesList((prev) => {
        const existingIds = new Set(prev.map((m) => String(m.id)));
        const newMovies = resultsData.filter((m) => !existingIds.has(String(m.id)));
        return [...prev, ...newMovies];
      });
    }
  }, [resultsData]);

  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    const lower = query.toLowerCase();
    const out = new Set<string>();
    [...genres, ...moodTags].forEach((t) => {
      if (t.toLowerCase().includes(lower)) out.add(t);
    });
    return Array.from(out).slice(0, 5);
  }, [query]);

  const loadMore = () => {
    setPage((p) => p + 1);
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10">
        <h1 className="font-display text-4xl sm:text-6xl">Find your next film</h1>
        <p className="text-muted-foreground mt-2">Search by title, actor, director, genre, or mood.</p>

        <div className="mt-6 relative">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong rounded-2xl p-2 flex items-center gap-2 shadow-card"
          >
            <Search className="w-5 h-5 ml-3 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActiveFilter(null); }}
              placeholder="Try 'Pugh', 'Sci-Fi', or 'mind bending'…"
              className="flex-1 bg-transparent outline-none text-base py-3 placeholder:text-muted-foreground text-white"
            />
            {query && (
              <button onClick={() => { setQuery(""); setActiveFilter(null); }} className="w-9 h-9 grid place-items-center rounded-full hover:bg-accent cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            )}
          </form>
          {suggestions.length > 0 && (
            <div className="absolute z-20 left-0 right-0 mt-2 glass-strong rounded-xl p-2">
              <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Smart suggestions
              </div>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => { setQuery(s); setActiveFilter(s); }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm cursor-pointer"
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
                className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
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
                className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
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
            <span className="text-sm text-muted-foreground">{moviesList.length} titles</span>
          </div>

          {isLoading && page === 1 ? (
            <GridSkeleton count={10} />
          ) : moviesList.length === 0 ? (
            <div className="glass rounded-2xl p-10 text-center">
              <p className="text-muted-foreground">No matches. Try a different mood or genre.</p>
              <Link to="/ai" className="inline-flex items-center gap-2 mt-4 rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red">
                <Sparkles className="w-4 h-4" /> Ask the AI Assistant
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {moviesList.map((m, i) => (
                  <MovieCard key={`${m.id}-${i}`} movie={m} index={i} />
                ))}
              </div>
              
              {moviesList.length >= 8 && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={loadMore}
                    disabled={isFetching}
                    className="inline-flex items-center justify-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer min-w-[150px]"
                  >
                    {isFetching ? "Loading more..." : "Load More"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
