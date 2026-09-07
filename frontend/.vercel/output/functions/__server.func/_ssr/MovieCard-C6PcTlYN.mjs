import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as Star, P as Play, d as Plus } from "../_libs/lucide-react.mjs";
function MovieCard({ movie, index = 0 }) {
  const isNetflix = movie.streaming?.includes("Netflix") || movie.id.startsWith("netflix-");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.4, delay: Math.min(index * 0.03, 0.3) },
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/movie/$id", params: { id: movie.id }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[2/3] rounded-xl overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-red group-hover:scale-[1.04] group-hover:-translate-y-1 bg-zinc-900 border border-white/5", children: [
        movie.posterUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: movie.posterUrl,
            alt: movie.title,
            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            loading: "lazy",
            onError: (e) => {
              e.target.src = "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop";
            }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: movie.posterGradient } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-3.5 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/60 text-white/90 backdrop-blur-sm border border-white/10", children: movie.genres?.[0] || "Film" }),
              isNetflix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-600 text-white shadow-red uppercase", children: "N" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs glass px-2 py-0.5 rounded-full font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }),
              movie.imdb
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg sm:text-xl leading-snug drop-shadow-md line-clamp-2 text-white font-semibold", children: movie.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/70 mt-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: movie.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: movie.duration })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-3 bottom-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-md gradient-red text-primary-foreground text-xs font-semibold py-2.5 shadow-red hover:brightness-110", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3.5 h-3.5 fill-current" }),
            " Watch Movie"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 grid place-items-center rounded-md glass-strong text-white hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) })
        ] })
      ] }) })
    }
  );
}
export {
  MovieCard as M
};
