import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-DUlbaIBa.mjs";
import { M as MovieCard } from "./MovieCard-BjYvX2GX.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { R as Route$7, g as genres, a as api } from "./router-BNkE9H8C.mjs";
import { G as GridSkeleton } from "./SkeletonLoader-czYsnFCo.mjs";
import "../_libs/sonner.mjs";
import { a as Search, X, S as Sparkles } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
const moodTags = ["sad", "funny", "mind bending", "dark", "feel-good", "stylish", "intense", "romantic"];
function SearchPage() {
  const {
    q
  } = Route$7.useSearch();
  const [query, setQuery] = reactExports.useState(q ?? "");
  const [activeFilter, setActiveFilter] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(1);
  const [moviesList, setMoviesList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setQuery(q ?? "");
  }, [q]);
  const effective = activeFilter ?? query;
  reactExports.useEffect(() => {
    setMoviesList([]);
    setPage(1);
  }, [effective]);
  const {
    data: resultsData,
    isLoading,
    isFetching
  } = useQuery({
    queryKey: ["movieSearch", effective, page],
    queryFn: () => api.movies.search(effective, page)
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
  const suggestions = reactExports.useMemo(() => {
    if (!query || query.length < 2) return [];
    const lower = query.toLowerCase();
    const out = /* @__PURE__ */ new Set();
    [...genres, ...moodTags].forEach((t) => {
      if (t.toLowerCase().includes(lower)) out.add(t);
    });
    return Array.from(out).slice(0, 5);
  }, [query]);
  const loadMore = () => {
    setPage((p) => p + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-6xl", children: "Find your next film" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Search by title, actor, director, genre, or mood." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "glass-strong rounded-2xl p-2 flex items-center gap-2 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 ml-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { autoFocus: true, value: query, onChange: (e) => {
          setQuery(e.target.value);
          setActiveFilter(null);
        }, placeholder: "Try 'Pugh', 'Sci-Fi', or 'mind bending'…", className: "flex-1 bg-transparent outline-none text-base py-3 placeholder:text-muted-foreground text-white" }),
        query && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setQuery("");
          setActiveFilter(null);
        }, className: "w-9 h-9 grid place-items-center rounded-full hover:bg-accent cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }),
      suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-20 left-0 right-0 mt-2 glass-strong rounded-xl p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
          " Smart suggestions"
        ] }),
        suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setQuery(s);
          setActiveFilter(s);
        }, className: "w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm cursor-pointer", children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Genres" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: genres.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setQuery(g);
        setActiveFilter(g);
      }, className: `px-3.5 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${activeFilter === g ? "gradient-red text-primary-foreground border-transparent shadow-red" : "glass border-border hover:bg-accent"}`, children: g }, g)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2 mt-5", children: "Moods" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: moodTags.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setQuery(m);
        setActiveFilter(m);
      }, className: `px-3.5 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${activeFilter === m ? "gradient-red text-primary-foreground border-transparent shadow-red" : "glass border-border hover:bg-accent"}`, children: [
        "#",
        m
      ] }, m)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: effective ? `Results for "${effective}"` : "All movies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          moviesList.length,
          " titles"
        ] })
      ] }),
      isLoading && page === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(GridSkeleton, { count: 10 }) : moviesList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No matches. Try a different mood or genre." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/ai", className: "inline-flex items-center gap-2 mt-4 rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
          " Ask the AI Assistant"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: moviesList.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, `${m.id}-${i}`)) }),
        moviesList.length >= 8 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: loadMore, disabled: isFetching, className: "inline-flex items-center justify-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer min-w-[150px]", children: isFetching ? "Loading more..." : "Load More" }) })
      ] })
    ] })
  ] }) });
}
export {
  SearchPage as component
};
