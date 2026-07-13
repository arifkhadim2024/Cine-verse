import { motion } from "framer-motion";

export function CardSkeleton() {
  return (
    <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-accent/20 animate-pulse border border-white/5 flex flex-col justify-between p-3">
      <div className="flex justify-between items-start">
        <div className="w-12 h-4 rounded bg-accent/30" />
        <div className="w-8 h-6 rounded-full bg-accent/30" />
      </div>
      <div className="space-y-2">
        <div className="w-3/4 h-5 rounded bg-accent/30" />
        <div className="w-1/2 h-3 rounded bg-accent/30" />
      </div>
    </div>
  );
}

export function RowSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-14">
      <div className="mb-4">
        <div className="w-48 h-8 rounded bg-accent/20 animate-pulse mb-2" />
        <div className="w-72 h-4 rounded bg-accent/15 animate-pulse" />
      </div>
      <div className="flex gap-4 overflow-x-hidden pb-2">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="shrink-0 w-[160px] sm:w-[200px] md:w-[220px]">
            <CardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Banner backdrop skeleton */}
      <div className="h-[70vh] min-h-[500px] bg-accent/10 animate-pulse relative" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-64 sm:-mt-72 relative z-10">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Poster placeholder */}
          <div className="aspect-[2/3] rounded-2xl bg-accent/20 animate-pulse border border-white/5 shadow-lg" />

          {/* Info placeholder */}
          <div className="space-y-6">
            <div className="flex gap-2">
              <div className="w-16 h-6 rounded-full bg-accent/20 animate-pulse" />
              <div className="w-16 h-6 rounded-full bg-accent/20 animate-pulse" />
            </div>
            <div className="w-2/3 h-16 rounded bg-accent/20 animate-pulse" />

            <div className="flex gap-4">
              <div className="w-24 h-10 rounded bg-accent/20 animate-pulse" />
              <div className="w-24 h-10 rounded bg-accent/20 animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="w-full h-4 rounded bg-accent/25 animate-pulse" />
              <div className="w-full h-4 rounded bg-accent/25 animate-pulse" />
              <div className="w-4/5 h-4 rounded bg-accent/25 animate-pulse" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="w-32 h-10 rounded bg-accent/15 animate-pulse" />
              <div className="w-32 h-10 rounded bg-accent/15 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
