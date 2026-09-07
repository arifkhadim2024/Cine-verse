import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as notFound } from "../_libs/tanstack__router-core.mjs";
import { L as Layout } from "./Layout-DaLu436r.mjs";
import { M as MovieCard } from "./MovieCard-C6PcTlYN.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { b as Route$1, u as useAuth, a as api } from "./router-DvBJO8Uy.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { D as DetailSkeleton } from "./SkeletonLoader-czYsnFCo.mjs";
import { A as ArrowLeft, m as Calendar, n as Clock, P as Play, o as Tv, d as Plus, H as Heart, p as Share2, F as Film, q as Pause, R as Rewind, r as FastForward, V as VolumeX, s as Volume2, t as Maximize, u as Server, S as Sparkles, v as Layers, X } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
const SAMPLE_STREAMS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
];
function CinemaPlayer({ movie, autoPlay = true }) {
  const isTvShow = movie.type === "TV Show" || movie.duration?.toLowerCase().includes("season") || movie.id.includes("season");
  const [season, setSeason] = reactExports.useState(1);
  const [episode, setEpisode] = reactExports.useState(1);
  const [selectedServer, setSelectedServer] = reactExports.useState("vidsrc");
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [isMuted, setIsMuted] = reactExports.useState(false);
  const [volume, setVolume] = reactExports.useState(1);
  const [currentTime, setCurrentTime] = reactExports.useState(0);
  const [duration, setDuration] = reactExports.useState(0);
  const videoRef = reactExports.useRef(null);
  const playerContainerRef = reactExports.useRef(null);
  let numericId = movie.id.replace(/[^0-9]/g, "");
  if (!numericId || numericId.length < 2) {
    let hash = 0;
    for (let i = 0; i < movie.title.length; i++) {
      hash = movie.title.charCodeAt(i) + ((hash << 5) - hash);
    }
    numericId = String(Math.abs(hash) % 9e5 + 1e4);
  }
  const getStreamUrl = () => {
    const tmdbId = numericId;
    switch (selectedServer) {
      case "vidsrc":
        return isTvShow ? `https://vidsrc.cc/v2/embed/tv/${tmdbId}/${season}/${episode}` : `https://vidsrc.cc/v2/embed/movie/${tmdbId}`;
      case "embedsu":
        return isTvShow ? `https://embed.su/embed/tv/${tmdbId}/${season}/${episode}` : `https://embed.su/embed/movie/${tmdbId}`;
      case "multiembed":
        return isTvShow ? `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1&s=${season}&e=${episode}` : `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1`;
      case "vidsrcxyz":
        return isTvShow ? `https://vidsrc.xyz/embed/tv?tmdb=${tmdbId}&season=${season}&episode=${episode}` : `https://vidsrc.xyz/embed/movie?tmdb=${tmdbId}`;
      case "trailer":
        return `https://www.youtube.com/embed/${movie.trailerId || "dQw4w9WgXcQ"}?autoplay=1&rel=0&modestbranding=1`;
      default:
        return "";
    }
  };
  const sampleStreamUrl = SAMPLE_STREAMS[Math.abs(Number(numericId)) % SAMPLE_STREAMS.length];
  const netflixSearchUrl = `https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}`;
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };
  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(() => {
      });
    } else {
      document.exitFullscreen().catch(() => {
      });
    }
  };
  const episodesList = Array.from({ length: 8 }, (_, i) => ({
    episodeNumber: i + 1,
    title: `Episode ${i + 1}: ${[
      "The Beginning",
      "Rising Shadows",
      "Unforeseen Paths",
      "The Breaking Point",
      "Secrets Revealed",
      "Behind Enemy Lines",
      "The Reckoning",
      "The Final Showdown"
    ][i] || `Part ${i + 1}`}`,
    duration: "48m"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: playerContainerRef,
      className: "relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-white/10 backdrop-blur-md gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg gradient-red grid place-items-center shadow-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-4 h-4 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-base sm:text-lg text-white font-semibold flex items-center gap-2", children: [
                movie.title,
                isTvShow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-sans px-2 py-0.5 rounded-full bg-red-600/30 text-red-400 border border-red-500/30 font-bold", children: [
                  "S",
                  season,
                  " E",
                  episode
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                isTvShow ? "Web Series / TV Show" : "Full Feature Movie",
                " • 4K Ultra HD • English & Multi-Audio"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: netflixSearchUrl,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-red transition-all cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tv, { className: "w-3.5 h-3.5" }),
                " Watch on Netflix"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden", children: selectedServer === "cloud" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full group bg-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              ref: videoRef,
              src: sampleStreamUrl,
              className: "w-full h-full object-contain",
              onTimeUpdate: () => {
                if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
              },
              onLoadedMetadata: () => {
                if (videoRef.current) setDuration(videoRef.current.duration);
              },
              autoPlay,
              playsInline: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded bg-black/60 backdrop-blur-sm", children: "CineVerse Direct Stream (4K)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: 0,
                  max: duration || 100,
                  value: currentTime,
                  onChange: handleSeek,
                  className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red-600"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-white text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: togglePlay,
                      className: "w-8 h-8 rounded-full gradient-red grid place-items-center text-white shadow-red hover:scale-105 transition-transform",
                      children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 ml-0.5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        if (videoRef.current) videoRef.current.currentTime -= 10;
                      },
                      className: "p-1 hover:text-red-400 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rewind, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        if (videoRef.current) videoRef.current.currentTime += 10;
                      },
                      className: "p-1 hover:text-red-400 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FastForward, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggleMute, className: "p-1 hover:text-red-400 transition-colors", children: isMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    formatTime(currentTime),
                    " / ",
                    formatTime(duration)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold", children: "1080p HD" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggleFullscreen, className: "p-1 hover:text-red-400 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "w-4 h-4" }) })
                ] })
              ] })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            src: getStreamUrl(),
            title: `${movie.title} Stream Player`,
            className: "w-full h-full border-0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true
          },
          `${selectedServer}-${season}-${episode}`
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-zinc-900/90 border-t border-white/10 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-semibold flex items-center gap-1.5 mr-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-3.5 h-3.5 text-primary" }),
                " Select Stream Server:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedServer("vidsrc"),
                  className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedServer === "vidsrc" ? "gradient-red text-white shadow-red" : "glass hover:bg-white/10 text-muted-foreground hover:text-white"}`,
                  children: "⚡ Server 1 (VidSrc 4K)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedServer("embedsu"),
                  className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedServer === "embedsu" ? "gradient-red text-white shadow-red" : "glass hover:bg-white/10 text-muted-foreground hover:text-white"}`,
                  children: "🚀 Server 2 (Embed.su)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedServer("multiembed"),
                  className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedServer === "multiembed" ? "gradient-red text-white shadow-red" : "glass hover:bg-white/10 text-muted-foreground hover:text-white"}`,
                  children: "🌐 Server 3 (Multi-Language)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedServer("cloud"),
                  className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedServer === "cloud" ? "gradient-red text-white shadow-red" : "glass hover:bg-white/10 text-muted-foreground hover:text-white"}`,
                  children: "🍿 Direct Stream (Ad-Free HD)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSelectedServer("trailer"),
                  className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedServer === "trailer" ? "gradient-red text-white shadow-red" : "glass hover:bg-white/10 text-muted-foreground hover:text-white"}`,
                  children: "🎬 Official Trailer"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-yellow-400 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                " IMDb ",
                movie.imdb
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: movie.duration })
            ] })
          ] }),
          isTvShow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-3 border-t border-white/10 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-white", children: "Episodes & Seasons" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: [1, 2, 3].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setSeason(s);
                    setEpisode(1);
                  },
                  className: `px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${season === s ? "bg-red-600 text-white" : "glass hover:bg-white/10 text-muted-foreground"}`,
                  children: [
                    "Season ",
                    s
                  ]
                },
                s
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: episodesList.map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setEpisode(ep.episodeNumber),
                className: `p-2.5 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between ${episode === ep.episodeNumber ? "bg-red-950/50 border-red-500/80 shadow-red" : "glass hover:bg-white/5 border-white/5"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-white", children: [
                      "E",
                      ep.episodeNumber
                    ] }),
                    episode === ep.episodeNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 animate-pulse" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/90 line-clamp-1 font-medium mt-1", children: ep.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-1", children: ep.duration })
                ]
              },
              ep.episodeNumber
            )) })
          ] })
        ] })
      ]
    }
  );
}
function MoviePlayerModal({ movie, isOpen, onClose }) {
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);
  if (!isOpen || !movie) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "absolute inset-0"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.95, opacity: 0, y: 20 },
        animate: { scale: 1, opacity: 1, y: 0 },
        exit: { scale: 0.95, opacity: 0, y: 20 },
        transition: { type: "spring", damping: 25, stiffness: 300 },
        className: "relative w-full max-w-5xl z-10 flex flex-col max-h-[96vh] overflow-y-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onClose,
              className: "px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/20 text-white hover:bg-red-600 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-lg",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                " Close Player"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CinemaPlayer, { movie, autoPlay: true })
        ]
      }
    )
  ] }) });
}
function MovieDetailsPage() {
  const {
    id
  } = Route$1.useParams();
  const {
    isAuthenticated
  } = useAuth();
  const queryClient = useQueryClient();
  const [showTrailer, setShowTrailer] = reactExports.useState(false);
  const [showPlayer, setShowPlayer] = reactExports.useState(false);
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
        }, className: "aspect-[2/3] rounded-2xl overflow-hidden shadow-red relative bg-zinc-900 border border-white/10", children: [
          movie.posterUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: movie.posterUrl, alt: movie.title, className: "absolute inset-0 w-full h-full object-cover", onError: (e) => {
            e.target.src = "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop";
          } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
            background: movie.posterGradient
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/60 text-white/90 backdrop-blur-sm self-start border border-white/10", children: movie.genres?.[0] || "Featured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl leading-tight drop-shadow-lg text-white font-semibold", children: movie.title }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: movie.genres?.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full glass text-xs font-medium", children: g }, g)) }),
          movie.logoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: movie.logoUrl, alt: movie.title, className: "h-20 sm:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] max-w-[90%] select-none pointer-events-none" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-6xl font-bold leading-none mb-4 text-white", children: movie.title }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowPlayer(true), className: "inline-flex items-center gap-2 rounded-md gradient-red px-7 py-3.5 font-bold text-primary-foreground shadow-red hover:scale-105 hover:brightness-110 transition-all cursor-pointer text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 fill-current" }),
              " Watch Movie"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              if (movie.trailerId) {
                setShowTrailer(true);
              } else {
                toast.error("Trailer not available for this movie.");
              }
            }, className: "inline-flex items-center gap-2 rounded-md glass-strong px-5 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
              " Watch Trailer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: movie.netflixUrl || `https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}`, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 px-5 py-3.5 font-semibold text-white shadow-red transition-all cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tv, { className: "w-4 h-4" }),
              " Watch on Netflix"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleWatchlistClick, disabled: toggleWatchlistMutation.isPending, className: `inline-flex items-center gap-2 rounded-md px-5 py-3.5 font-semibold transition-colors cursor-pointer ${isSaved ? "gradient-red text-primary-foreground shadow-red" : "glass-strong hover:bg-accent"}`, children: [
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
            movie.watchProviders && movie.watchProviders.providers && movie.watchProviders.providers.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full mt-2 p-4 rounded-xl glass-strong border border-white/5 shadow-inner", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold", children: "Where to Watch (Click to Stream)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: movie.watchProviders.providers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: movie.watchProviders.link, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-primary/20 border border-white/5 hover:border-primary/45 transition-all hover:scale-[1.03] active:scale-95 group shadow-sm", title: `Stream ${movie.title} on ${p.name}`, children: [
                p.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: p.name, className: "w-5 h-5 rounded object-cover border border-white/10", loading: "lazy" }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-xs text-white/90 group-hover:text-primary transition-colors", children: p.name })
              ] }, p.id)) })
            ] }) : movie.streaming && movie.streaming.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-1", children: "Streaming on" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1", children: movie.streaming.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded glass text-xs", children: s }, s)) })
            ] }) : null
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "cinema-player-section", className: "mt-14 border-t border-white/10 pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between mb-5 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-red" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-4xl text-white font-bold", children: movie.type === "TV Show" ? "Watch Web Series Episodes" : "Stream Full Movie" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "4K Ultra HD • Switch Servers & Audio Below" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CinemaPlayer, { movie, autoPlay: false })
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
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MoviePlayerModal, { movie, isOpen: showPlayer, onClose: () => setShowPlayer(false) })
    ] })
  ] });
}
export {
  MovieDetailsPage as component
};
