import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import type { Movie } from "@/data/movies";

export function MovieRow({
  title,
  movies,
  subtitle,
}: {
  title: string;
  movies: Movie[];
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-14">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {movies.map((m, i) => (
          <div key={m.id} className="snap-start shrink-0 w-[160px] sm:w-[200px] md:w-[220px]">
            <MovieCard movie={m} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
