import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function CardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[2/3] rounded-xl overflow-hidden bg-accent/20 animate-pulse border border-white/5 flex flex-col justify-between p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-4 rounded bg-accent/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-6 rounded-full bg-accent/30" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/4 h-5 rounded bg-accent/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 h-3 rounded bg-accent/30" })
    ] })
  ] });
}
function RowSkeleton({ count = 6 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 mt-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-8 rounded bg-accent/20 animate-pulse mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-72 h-4 rounded bg-accent/15 animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-x-hidden pb-2", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-[160px] sm:w-[200px] md:w-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardSkeleton, {}) }, i)) })
  ] });
}
function GridSkeleton({ count = 10 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardSkeleton, {}, i)) });
}
function DetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[70vh] min-h-[500px] bg-accent/10 animate-pulse relative" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 -mt-64 sm:-mt-72 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[280px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[2/3] rounded-2xl bg-accent/20 animate-pulse border border-white/5 shadow-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-6 rounded-full bg-accent/20 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-6 rounded-full bg-accent/20 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/3 h-16 rounded bg-accent/20 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-10 rounded bg-accent/20 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-10 rounded bg-accent/20 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-4 rounded bg-accent/25 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-4 rounded bg-accent/25 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4/5 h-4 rounded bg-accent/25 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-10 rounded bg-accent/15 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-10 rounded bg-accent/15 animate-pulse" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  DetailSkeleton as D,
  GridSkeleton as G,
  RowSkeleton as R
};
