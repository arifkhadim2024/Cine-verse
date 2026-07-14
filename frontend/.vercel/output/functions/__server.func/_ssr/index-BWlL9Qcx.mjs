import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-CTklu0JT.mjs";
import { M as MovieCard } from "./MovieCard-BjYvX2GX.mjs";
import { c as continueWatching, g as genres, G as GENRE_IDS, a as api } from "./router-TtzNJHZG.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { R as RowSkeleton } from "./SkeletonLoader-czYsnFCo.mjs";
import "../_libs/sonner.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { P as Play, j as Info, a as Search, S as Sparkles, C as Compass, F as Film, k as ChevronRight, l as ChevronLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-cinema-CQyss4zu.jpg";
function MovieRow({
  title,
  movies,
  subtitle
}) {
  const ref = reactExports.useRef(null);
  const scroll = (dir) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 mt-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scroll(-1),
            className: "w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => scroll(1),
            className: "w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: "flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0",
        children: movies.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-start shrink-0 w-[160px] sm:w-[200px] md:w-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MovieCard, { movie: m, index: i }) }, m.id))
      }
    )
  ] });
}
function GenreSidebar() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed left-4 top-28 z-40 hidden xl:flex items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20, scale: 0.95 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -20, scale: 0.95 },
        transition: { duration: 0.2 },
        className: "glass-strong rounded-2xl p-4 w-52 shadow-red flex flex-col gap-1 border border-white/5 backdrop-blur-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-2 pb-2 mb-2 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-widest uppercase opacity-80 text-white", children: "Explore Genres" })
          ] }),
          Object.entries(GENRE_IDS).map(([name, id]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/genre/$id",
              params: { id: String(id) },
              className: "px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-3.5 h-3.5 group-hover:text-primary transition-colors" }),
                  name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" })
              ]
            },
            id
          ))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-10 h-10 rounded-full glass border border-white/10 hover:border-primary/50 text-white grid place-items-center ml-2 hover:scale-105 transition-all shadow-red",
        "aria-label": "Toggle Genre Sidebar",
        children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-5 h-5 text-primary animate-pulse" })
      }
    )
  ] });
}
const genreColors = {
  Horror: "from-red-900 to-black",
  Comedy: "from-pink-700 to-red-900",
  Action: "from-red-700 to-orange-900",
  Thriller: "from-purple-900 to-red-950",
  Romance: "from-pink-600 to-rose-900",
  "Sci-Fi": "from-indigo-900 to-red-900",
  Anime: "from-blue-900 to-red-900",
  Adventure: "from-amber-800 to-red-900"
};
function HomePage() {
  const [heroIndex, setHeroIndex] = reactExports.useState(0);
  const [query, setQuery] = reactExports.useState("");
  const navigate = useNavigate();
  const {
    data: trendingMovies = [],
    isLoading: loadingTrending
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => api.movies.getTrending()
  });
  const {
    data: topRatedMovies = [],
    isLoading: loadingTopRated
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () => api.movies.getTopRated()
  });
  const {
    data: upcomingMovies = [],
    isLoading: loadingUpcoming
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: () => api.movies.getUpcoming()
  });
  const {
    data: bollywoodMovies = [],
    isLoading: loadingBollywood
  } = useQuery({
    queryKey: ["bollywoodMovies"],
    queryFn: () => api.movies.getBollywood()
  });
  const {
    data: koreanMovies = [],
    isLoading: loadingKorean
  } = useQuery({
    queryKey: ["koreanMovies"],
    queryFn: () => api.movies.getKorean()
  });
  const {
    data: animeMovies = [],
    isLoading: loadingAnime
  } = useQuery({
    queryKey: ["animeMovies"],
    queryFn: () => api.movies.getAnime()
  });
  const {
    data: actionMovies = [],
    isLoading: loadingAction
  } = useQuery({
    queryKey: ["actionMovies"],
    queryFn: () => api.movies.getByGenre(28)
  });
  const {
    data: comedyMovies = [],
    isLoading: loadingComedy
  } = useQuery({
    queryKey: ["comedyMovies"],
    queryFn: () => api.movies.getByGenre(35)
  });
  const {
    data: horrorMovies = [],
    isLoading: loadingHorror
  } = useQuery({
    queryKey: ["horrorMovies"],
    queryFn: () => api.movies.getByGenre(27)
  });
  const {
    data: romanceMovies = [],
    isLoading: loadingRomance
  } = useQuery({
    queryKey: ["romanceMovies"],
    queryFn: () => api.movies.getByGenre(10749)
  });
  const {
    data: sciFiMovies = [],
    isLoading: loadingSciFi
  } = useQuery({
    queryKey: ["sciFiMovies"],
    queryFn: () => api.movies.getByGenre(878)
  });
  const hero = trendingMovies[heroIndex] || continueWatching[0];
  const {
    data: heroDetails
  } = useQuery({
    queryKey: ["movieDetails", hero?.id],
    queryFn: () => api.movies.getDetails(hero.id),
    enabled: !!hero?.id
  });
  reactExports.useEffect(() => {
    if (trendingMovies.length === 0) return;
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % trendingMovies.length), 6e3);
    return () => clearInterval(t);
  }, [trendingMovies.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GenreSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[92vh] min-h-[600px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero.backdropUrl || heroImg, alt: "", width: 1920, height: 1080, className: "absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 1
      }, className: "absolute inset-0", style: {
        background: hero.backdropGradient
      } }, hero.id) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full mx-auto max-w-7xl px-4 sm:px-6 flex flex-col justify-end pb-20 sm:pb-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, transition: {
          duration: 0.6
        }, className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-[0.3em] uppercase text-primary", children: "◆ Featured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "#",
              heroIndex + 1,
              " Trending today"
            ] })
          ] }),
          heroDetails?.logoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroDetails.logoUrl, alt: hero.title, className: "h-20 sm:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] max-w-[90%] select-none pointer-events-none" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-7xl lg:text-8xl leading-none drop-shadow-2xl mb-4", children: hero.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-primary", children: [
              "★ ",
              hero.imdb,
              " IMDb"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: hero.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: hero.duration }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: hero.genres.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full glass text-xs", children: g }, g)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed", children: hero.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/movie/$id", params: {
              id: hero.id
            }, className: "inline-flex items-center gap-2 rounded-md gradient-red px-6 py-3 font-semibold text-primary-foreground shadow-red hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 fill-current" }),
              " Watch Trailer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/movie/$id", params: {
              id: hero.id
            }, className: "inline-flex items-center gap-2 rounded-md glass-strong px-6 py-3 font-semibold hover:bg-accent transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
              " More Info"
            ] })
          ] })
        ] }, hero.id) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 sm:right-6 bottom-20 sm:bottom-28 hidden md:flex flex-col gap-2", children: trendingMovies.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHeroIndex(i), className: `h-10 w-1 rounded-full transition-all ${i === heroIndex ? "bg-primary shadow-red" : "bg-white/20 hover:bg-white/40"}`, "aria-label": `Slide ${i + 1}` }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mt-12 sm:-mt-16 mx-auto max-w-3xl px-4 sm:px-6 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        navigate({
          to: "/search",
          search: {
            q: query
          }
        });
      }, className: "glass-strong rounded-2xl p-2 flex items-center gap-2 shadow-red", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 ml-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search films, actors, moods… try 'mind bending'", className: "flex-1 bg-transparent outline-none text-base py-3 placeholder:text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-xl gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform", children: "Search" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap justify-center gap-2 text-xs", children: ["sad", "funny", "mind bending", "dark", "feel-good"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/search", search: {
        q: m
      }, className: "px-3 py-1.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors", children: [
        "#",
        m
      ] }, m)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl", children: "Browse by Genre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/genres", className: "text-sm text-primary hover:underline", children: "View all →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4", children: genres.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.04
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/search", search: {
        q: g
      }, className: `group relative block aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br ${genreColors[g]} shadow-card hover:shadow-red transition-all hover:scale-[1.03]`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl sm:text-3xl drop-shadow-lg", children: g }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity", children: "→" })
      ] }) }, g)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/ai", className: "relative block overflow-hidden rounded-2xl glass-strong p-6 sm:p-10 group hover:shadow-red transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 w-80 h-80 rounded-full gradient-red opacity-30 blur-3xl group-hover:opacity-50 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row items-start sm:items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl gradient-red grid place-items-center shadow-red shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-7 h-7 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl", children: "Meet your AI Cinematographer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-muted-foreground mt-1", children: '"Suggest a mind-bending thriller like Inception." Get instant, curated picks.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red whitespace-nowrap", children: "Open Assistant →" })
      ] })
    ] }) }),
    loadingTrending ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Trending Now", subtitle: "What everyone's watching this week", movies: trendingMovies }),
    loadingTopRated ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Top Rated", subtitle: "Critically acclaimed masterpieces", movies: topRatedMovies }),
    loadingUpcoming ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Upcoming Releases", subtitle: "Anticipated blockbusters coming soon", movies: upcomingMovies }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Continue Watching", subtitle: "Pick up where you left off", movies: continueWatching }),
    loadingBollywood ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : bollywoodMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Bollywood Hits", subtitle: "Epic Hindi drama and musical blockbusters", movies: bollywoodMovies }),
    loadingKorean ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : koreanMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Korean Cinema", subtitle: "K-Drama, action thrillers, and award winners", movies: koreanMovies }),
    loadingAnime ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : animeMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Anime Movies", subtitle: "Stunning hand-drawn Japanese animation classics", movies: animeMovies }),
    loadingAction ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : actionMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Action Blockbusters", subtitle: "High-octane explosions and thrilling stunts", movies: actionMovies }),
    loadingComedy ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : comedyMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Laughter & Comedy", subtitle: "Lighthearted laughs and hilarious scenarios", movies: comedyMovies }),
    loadingHorror ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : horrorMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Midnight Horrors", subtitle: "Creepy tales, jump scares, and supernatural fears", movies: horrorMovies }),
    loadingRomance ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : romanceMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Romantic Stories", subtitle: "Heartfelt romance, passionate love stories, and dramas", movies: romanceMovies }),
    loadingSciFi ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { count: 6 }) : sciFiMovies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(MovieRow, { title: "Sci-Fi & Fantasy", subtitle: "Futuristic adventures, alien worlds, and tech dystopias", movies: sciFiMovies })
  ] });
}
export {
  HomePage as component
};
