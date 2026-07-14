import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-BGcIPhqB.mjs";
import { M as MovieCard } from "./MovieCard-BjYvX2GX.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useAuth, a as api } from "./router-BVezp7my.mjs";
import "../_libs/sonner.mjs";
import { B as Bookmark } from "../_libs/lucide-react.mjs";
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
function WatchlistPage() {
  const {
    isAuthenticated
  } = useAuth();
  const {
    data: items = [],
    isLoading
  } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.watchlist.get
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "w-3.5 h-3.5" }),
        " Your collection"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-7xl mt-3", children: "My Watchlist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-2", children: [
        items.length,
        " films saved for later"
      ] })
    ] }),
    !isAuthenticated && items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 glass p-4 rounded-xl flex items-center justify-between flex-wrap gap-3 border border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "You are currently viewing a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "local watchlist" }),
        ". Sign in to back up and sync your list."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "rounded-md gradient-red px-4 py-2 text-xs font-semibold text-primary-foreground shadow-red", children: "Sign In" })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 glass rounded-2xl p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "w-12 h-12 mx-auto text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mt-4", children: "Your watchlist is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Start building your queue of must-watch films." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center mt-6 rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red", children: "Discover movies" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: items.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, m.id)) })
  ] }) });
}
export {
  WatchlistPage as component
};
