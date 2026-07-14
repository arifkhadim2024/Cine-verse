import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { L as Layout } from "./Layout-CTklu0JT.mjs";
import { M as MovieCard } from "./MovieCard-BjYvX2GX.mjs";
import { d as Route, e as GENRE_MAP, a as api } from "./router-TtzNJHZG.mjs";
import { G as GridSkeleton } from "./SkeletonLoader-czYsnFCo.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft, F as Film } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function GenrePage() {
  const {
    id
  } = Route.useParams();
  const genreId = Number(id);
  const genreName = GENRE_MAP[genreId] || "Genre";
  const [page, setPage] = reactExports.useState(1);
  const [moviesList, setMoviesList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setMoviesList([]);
    setPage(1);
  }, [genreId]);
  const {
    data: resultsData,
    isLoading,
    isFetching,
    error
  } = useQuery({
    queryKey: ["genreMovies", genreId, page],
    queryFn: () => api.movies.getByGenre(genreId, page)
  });
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-3.5 h-3.5" }),
        " Genre Collection"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-7xl mb-2", children: [
      genreName,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "Movies" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8", children: [
      "Discover the top-rated and trending ",
      genreName.toLowerCase(),
      " titles."
    ] }),
    isLoading && page === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(GridSkeleton, { count: 10 }) : error || moviesList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-12 text-center mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-12 h-12 mx-auto text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mt-4", children: "No movies found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "We couldn't retrieve any movies for this genre. Please try another category." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: moviesList.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, `${m.id}-${i}`)) }),
      moviesList.length >= 8 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: loadMore, disabled: isFetching, className: "inline-flex items-center justify-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer min-w-[150px]", children: isFetching ? "Loading more..." : "Load More" }) })
    ] })
  ] }) });
}
export {
  GenrePage as component
};
