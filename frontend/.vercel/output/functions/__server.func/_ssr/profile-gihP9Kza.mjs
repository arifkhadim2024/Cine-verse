import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-DUlbaIBa.mjs";
import { M as MovieCard } from "./MovieCard-BjYvX2GX.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useAuth, a as api } from "./router-BNkE9H8C.mjs";
import "../_libs/sonner.mjs";
import { B as Bookmark, H as Heart, b as Settings, L as LogOut } from "../_libs/lucide-react.mjs";
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
function ProfilePage() {
  const {
    user,
    isAuthenticated,
    logout,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const {
    data: favorites = [],
    isLoading: loadingFavorites
  } = useQuery({
    queryKey: ["favorites"],
    queryFn: api.favorites.get
  });
  const {
    data: watchlist = [],
    isLoading: loadingWatchlist
  } = useQuery({
    queryKey: ["watchlist"],
    queryFn: api.watchlist.get
  });
  const handleLogout = () => {
    logout();
    navigate({
      to: "/"
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" }) }) });
  }
  const currentUser = user || {
    name: "Guest User",
    email: "guest@cineverse.com"
  };
  const stats = [{
    label: "Watchlist",
    value: watchlist.length,
    icon: Bookmark
  }, {
    label: "Favorites",
    value: favorites.length,
    icon: Heart
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-64 sm:h-80 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-red opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 -mt-24 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-end gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 sm:w-40 sm:h-40 rounded-2xl gradient-red shadow-red grid place-items-center font-display text-6xl text-primary-foreground border-4 border-background select-none", children: currentUser.name.charAt(0).toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl", children: currentUser.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: isAuthenticated ? `@${currentUser.email.split("@")[0]} · CineVerse member` : "Temporary profile · List stored locally" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-md glass-strong px-4 py-2 text-sm hover:bg-accent cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
            " Settings"
          ] }),
          isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "inline-flex items-center gap-2 rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
            " Sign out"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "inline-flex items-center gap-2 rounded-md gradient-red px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-red", children: "Sign in" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 sm:gap-5", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-5 text-center sm:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary mx-auto sm:mx-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl mt-2", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl mb-5", children: [
          "Favorites (",
          favorites.length,
          ")"
        ] }),
        loadingFavorites ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" }) }) : favorites.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-xl p-8 text-center text-muted-foreground text-sm", children: "Your favorite movies will appear here. Like a movie to add it!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", children: favorites.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, m.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl mb-5", children: [
          "Watchlist Queue (",
          watchlist.length,
          ")"
        ] }),
        loadingWatchlist ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" }) }) : watchlist.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-xl p-8 text-center text-muted-foreground text-sm", children: "Your watchlist is empty. Discover and save some movies!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", children: watchlist.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }, m.id)) })
      ] })
    ] })
  ] });
}
export {
  ProfilePage as component
};
