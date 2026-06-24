import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { genres, movies } from "@/data/movies";

export const Route = createFileRoute("/genres")({ component: GenresPage });

const genreMeta: Record<string, { gradient: string; tagline: string }> = {
  Horror: {
    gradient: "linear-gradient(135deg, #1a0000, #5a0a0a, #000)",
    tagline: "Sleep with the lights on",
  },
  Comedy: {
    gradient: "linear-gradient(135deg, #2a0a14, #c4244a, #ff6090)",
    tagline: "Laughter required",
  },
  Action: {
    gradient: "linear-gradient(135deg, #1a0a00, #8a1a0a, #ff3a1a)",
    tagline: "Pure adrenaline",
  },
  Thriller: {
    gradient: "linear-gradient(135deg, #0a001a, #3a0a4a, #8a1a4a)",
    tagline: "Edge of your seat",
  },
  Romance: {
    gradient: "linear-gradient(135deg, #2a0a1a, #8a1a4a, #e44a8a)",
    tagline: "Heart-stoppers",
  },
  "Sci-Fi": {
    gradient: "linear-gradient(135deg, #000, #1a0a4a, #4a1a8a)",
    tagline: "Beyond the stars",
  },
  Anime: {
    gradient: "linear-gradient(135deg, #0a1a4a, #4a1a8a, #e44a4a)",
    tagline: "Hand-drawn worlds",
  },
  Adventure: {
    gradient: "linear-gradient(135deg, #1a0a00, #a04a0a, #ff9a1a)",
    tagline: "Wander further",
  },
};

function GenresPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10">
        <h1 className="font-display text-5xl sm:text-7xl">Genres</h1>
        <p className="text-muted-foreground mt-2">Pick a flavor. We've got the rest.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {genres.map((g, i) => {
            const meta = genreMeta[g];
            const count = movies.filter((m) => m.genres.includes(g)).length;
            return (
              <motion.div
                key={g}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to="/search"
                  search={{ q: g } as never}
                  className="relative block aspect-[16/9] rounded-2xl overflow-hidden shadow-card hover:shadow-red transition-all hover:scale-[1.02] group"
                >
                  <div className="absolute inset-0" style={{ background: meta.gradient }} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs uppercase tracking-widest text-white/70">
                      {count} films
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl mt-1 drop-shadow-lg">{g}</h2>
                    <p className="text-sm text-white/80 mt-1">{meta.tagline}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
