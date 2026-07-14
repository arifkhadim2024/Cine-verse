import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-BGcIPhqB.mjs";
import { g as genres, m as movies } from "./router-BVezp7my.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const genreMeta = {
  Horror: {
    gradient: "linear-gradient(135deg, #1a0000, #5a0a0a, #000)",
    tagline: "Sleep with the lights on"
  },
  Comedy: {
    gradient: "linear-gradient(135deg, #2a0a14, #c4244a, #ff6090)",
    tagline: "Laughter required"
  },
  Action: {
    gradient: "linear-gradient(135deg, #1a0a00, #8a1a0a, #ff3a1a)",
    tagline: "Pure adrenaline"
  },
  Thriller: {
    gradient: "linear-gradient(135deg, #0a001a, #3a0a4a, #8a1a4a)",
    tagline: "Edge of your seat"
  },
  Romance: {
    gradient: "linear-gradient(135deg, #2a0a1a, #8a1a4a, #e44a8a)",
    tagline: "Heart-stoppers"
  },
  "Sci-Fi": {
    gradient: "linear-gradient(135deg, #000, #1a0a4a, #4a1a8a)",
    tagline: "Beyond the stars"
  },
  Anime: {
    gradient: "linear-gradient(135deg, #0a1a4a, #4a1a8a, #e44a4a)",
    tagline: "Hand-drawn worlds"
  },
  Adventure: {
    gradient: "linear-gradient(135deg, #1a0a00, #a04a0a, #ff9a1a)",
    tagline: "Wander further"
  }
};
function GenresPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-7xl", children: "Genres" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Pick a flavor. We've got the rest." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: genres.map((g, i) => {
      const meta = genreMeta[g];
      const count = movies.filter((m) => m.genres.includes(g)).length;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/search", search: {
        q: g
      }, className: "relative block aspect-[16/9] rounded-2xl overflow-hidden shadow-card hover:shadow-red transition-all hover:scale-[1.02] group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: meta.gradient
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-widest text-white/70", children: [
            count,
            " films"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl mt-1 drop-shadow-lg", children: g }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80 mt-1", children: meta.tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity", children: "→" })
      ] }) }, g);
    }) })
  ] }) });
}
export {
  GenresPage as component
};
