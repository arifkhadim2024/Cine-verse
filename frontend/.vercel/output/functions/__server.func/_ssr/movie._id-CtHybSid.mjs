import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as notFound } from "../_libs/tanstack__router-core.mjs";
import { L as Layout } from "./Layout-CTklu0JT.mjs";
import { M as MovieCard } from "./MovieCard-BjYvX2GX.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { b as Route$1, u as useAuth, a as api } from "./router-TtzNJHZG.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { D as DetailSkeleton } from "./SkeletonLoader-czYsnFCo.mjs";
import { A as ArrowLeft, m as Calendar, n as Clock, P as Play, d as Plus, H as Heart, o as Share2 } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function MovieDetailsPage() {
  const {
    id
  } = Route$1.useParams();
  const {
    isAuthenticated
  } = useAuth();
  const queryClient = useQueryClient();
  const [showTrailer, setShowTrailer] = reactExports.useState(false);
  const {
    data: movie,
    isLoading,
    error
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => api.movies.getDetails(id)
  });
  const {
    data: similar = []
  } = useQuery({
    queryKey: ["movieSimilar", id],
    queryFn: () => api.movies.getSimilar(id),
    enabled: !!movie
  });
  const {
    data: recommendations = []
  } = useQuery({
    queryKey: ["movieRecommendations", id],
    queryFn: () => api.movies.getRecommendations(id),
    enabled: !!movie
  });
  const {
    data: watchlist = []
  } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.watchlist.get,
    enabled: isAuthenticated
  });
  const {
    data: favorites = []
  } = useQuery({
    queryKey: ["favorites"],
    queryFn: api.favorites.get,
    enabled: isAuthenticated
  });
  const isSaved = watchlist.some((item) => String(item.id) === String(id));
  const isLiked = favorites.some((item) => String(item.id) === String(id));
  const toggleWatchlistMutation = useMutation({
    mutationFn: () => {
      if (isSaved) {
        return api.watchlist.remove(id);
      } else {
        return api.watchlist.add(movie);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["watchlist"]
      });
      toast.success(isSaved ? "Removed from watchlist" : "Added to watchlist");
    },
    onError: (err) => {
      const error2 = err;
      toast.error(error2.message || "Failed to update watchlist");
    }
  });
  const toggleFavoriteMutation = useMutation({
    mutationFn: () => {
      if (isLiked) {
        return api.favorites.remove(id);
      } else {
        return api.favorites.add(movie);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"]
      });
      toast.success(isLiked ? "Removed from favorites" : "Added to favorites");
    },
    onError: (err) => {
      const error2 = err;
      toast.error(error2.message || "Failed to update favorites");
    }
  });
  const handleWatchlistClick = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to save movies to your watchlist.");
      return;
    }
    toggleWatchlistMutation.mutate();
  };
  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add movies to your favorites.");
      return;
    }
    toggleFavoriteMutation.mutate();
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailSkeleton, {}) });
  }
  if (error || !movie) {
    throw notFound();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[70vh] min-h-[500px] w-full overflow-hidden", children: [
      movie.backdropUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: movie.backdropUrl, alt: "", className: "absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-1000" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: movie.backdropGradient
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-24 left-4 sm:left-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 -mt-64 sm:-mt-72 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[280px_1fr] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "aspect-[2/3] rounded-2xl overflow-hidden shadow-red relative bg-background", children: [
          movie.posterUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: movie.posterUrl, alt: movie.title, className: "absolute inset-0 w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
            background: movie.posterGradient
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold tracking-widest uppercase opacity-80", children: movie.genres?.[0] || "Featured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl leading-tight drop-shadow-lg", children: movie.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: movie.genres?.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full glass text-xs", children: g }, g)) }),
          movie.logoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: movie.logoUrl, alt: movie.title, className: "h-20 sm:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] max-w-[90%] select-none pointer-events-none" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-7xl leading-none mb-4", children: movie.title }),
          movie.tagline && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-xl italic text-primary/95 mt-3 font-light leading-relaxed", children: [
            '"',
            movie.tagline,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-md bg-yellow-500 text-black font-bold grid place-items-center text-xs", children: "IMDb" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: movie.imdb }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/10" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-md gradient-red text-primary-foreground font-bold grid place-items-center text-[10px]", children: "RT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-lg", children: [
                movie.rt,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
              movie.year
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
              movie.duration
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-3xl", children: movie.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              if (movie.trailerId) {
                setShowTrailer(true);
              } else {
                toast.error("Trailer not available for this movie.");
              }
            }, className: "inline-flex items-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 fill-current" }),
              " Watch Trailer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleWatchlistClick, disabled: toggleWatchlistMutation.isPending, className: `inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors cursor-pointer ${isSaved ? "gradient-red text-primary-foreground shadow-red" : "glass-strong hover:bg-accent"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }),
              " ",
              isSaved ? "In Watchlist" : "Add to Watchlist"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleFavoriteClick, disabled: toggleFavoriteMutation.isPending, className: `w-12 h-12 grid place-items-center rounded-md glass-strong hover:bg-accent transition-colors cursor-pointer ${isLiked ? "text-primary" : ""}`, "aria-label": "Like", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `w-5 h-5 ${isLiked ? "fill-current" : ""}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-12 h-12 grid place-items-center rounded-md glass-strong hover:bg-accent cursor-pointer", "aria-label": "Share", onClick: () => navigator.share?.({
              title: movie.title,
              url: window.location.href
            }).catch(() => {
            }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-6", children: [
            movie.director && movie.director !== "Unknown" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Director" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: movie.director })
            ] }),
            movie.releaseDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Release Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: movie.releaseDate })
            ] }),
            movie.popularity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Popularity Rank" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: Math.round(movie.popularity) })
            ] }),
            movie.spokenLanguages && movie.spokenLanguages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Languages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: movie.spokenLanguages.join(", ") })
            ] }),
            movie.productionCompanies && movie.productionCompanies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Production" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-white/80", children: movie.productionCompanies.join(", ") })
            ] }),
            movie.streaming && movie.streaming.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Streaming on" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1", children: movie.streaming.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded glass text-xs", children: s }, s)) })
            ] })
          ] })
        ] })
      ] }),
      movie.castDetails && movie.castDetails.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 border-t border-white/10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", children: "Cast & Crew" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4", children: movie.castDetails.map((actor, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-border shadow bg-accent mb-2", children: actor.profileUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: actor.profileUrl, alt: actor.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center font-display text-xl bg-gradient-red text-white uppercase", children: actor.name.charAt(0) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold line-clamp-1", children: actor.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground line-clamp-1", children: actor.character })
        ] }, idx)) })
      ] }) : movie.cast && movie.cast.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 border-t border-white/10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-4", children: "Cast & Crew" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: movie.cast.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full glass text-sm", children: c }, c)) })
      ] }) : null,
      showTrailer && movie.trailerId && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-xl grid place-items-center p-4 sm:p-10", onClick: () => setShowTrailer(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-red bg-black border border-white/10", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: `https://www.youtube.com/embed/${movie.trailerId}?autoplay=1`, title: `${movie.title} Trailer`, className: "absolute inset-0 w-full h-full border-0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowTrailer(false), className: "absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white grid place-items-center hover:bg-black font-semibold text-lg cursor-pointer", children: "✕" })
      ] }) }),
      recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20 border-t border-white/10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl mb-5", children: "Recommended for You" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: recommendations.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, m.id)) })
      ] }),
      similar.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20 border-t border-white/10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl mb-5", children: "You might also love" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: similar.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, m.id)) })
      ] })
    ] })
  ] });
}
export {
  MovieDetailsPage as component
};
