import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MovieCard } from "@/components/MovieCard";
import { GENRE_MAP } from "@/services/tmdb";
import { ArrowLeft, Film } from "lucide-react";
import { api } from "@/lib/api";
import { GridSkeleton } from "@/components/SkeletonLoader";
import type { Movie } from "@/data/movies";

export const Route = createFileRoute("/genre/$id")({
  component: GenrePage,
});

function GenrePage() {
  const { id } = Route.useParams();
  const genreId = Number(id);
  const genreName = GENRE_MAP[genreId] || "Genre";

  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  // Reset page and results when genre changes
  useEffect(() => {
    setMoviesList([]);
    setPage(1);
  }, [genreId]);

  const {
    data: resultsData,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["genreMovies", genreId, page],
    queryFn: () => api.movies.getByGenre(genreId, page),
  });

  // Append new pages to results array while filtering duplicates
  useEffect(() => {
    if (resultsData) {
      setMoviesList((prev) => {
        const existingIds = new Set(prev.map((m) => String(m.id)));
        const newMovies = resultsData.filter((m) => !existingIds.has(String(m.id)));
        return [...prev, ...newMovies];
      });
    }
  }, [resultsData]);

  const loadMore = () => {
    setPage((p) => p + 1);
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Film className="w-3.5 h-3.5" /> Genre Collection
          </div>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl mb-2">
          {genreName} <span className="text-gradient-red">Movies</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Discover the top-rated and trending {genreName.toLowerCase()} titles.
        </p>

        {isLoading && page === 1 ? (
          <GridSkeleton count={10} />
        ) : error || moviesList.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center mt-6">
            <Film className="w-12 h-12 mx-auto text-muted-foreground" />
            <h2 className="font-display text-3xl mt-4">No movies found</h2>
            <p className="text-muted-foreground mt-2">
              We couldn't retrieve any movies for this genre. Please try another category.
            </p>
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
    </Layout>
  );
}
