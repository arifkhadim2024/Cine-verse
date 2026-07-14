import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth } from "./router-BVezp7my.mjs";
import { F as Film, S as Sparkles, B as Bookmark, a as Search, b as Settings, U as User, X, M as Menu, T as Twitter, I as Instagram, Y as Youtube, G as Github } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
const links = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Movies" },
  { to: "/genres", label: "Genres" },
  { to: "/ai", label: "AI Assistant", icon: Sparkles },
  { to: "/watchlist", label: "Watchlist", icon: Bookmark }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [showSettings, setShowSettings] = reactExports.useState(false);
  const [tmdbKey, setTmdbKey] = reactExports.useState("");
  const [geminiKey, setGeminiKey] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      setTmdbKey(localStorage.getItem("cineverse_tmdb_key") || "");
      setGeminiKey(localStorage.getItem("cineverse_gemini_key") || "");
    }
  }, [showSettings]);
  const saveSettings = (e) => {
    e.preventDefault();
    localStorage.setItem("cineverse_tmdb_key", tmdbKey.trim());
    localStorage.setItem("cineverse_gemini_key", geminiKey.trim());
    setShowSettings(false);
    toast.success("API keys updated successfully! Reloading page...");
    setTimeout(() => {
      window.location.reload();
    }, 1e3);
  };
  const clearSettings = () => {
    localStorage.removeItem("cineverse_tmdb_key");
    localStorage.removeItem("cineverse_gemini_key");
    setTmdbKey("");
    setGeminiKey("");
    setShowSettings(false);
    toast.info("API keys cleared. Reloading page...");
    setTimeout(() => {
      window.location.reload();
    }, 1e3);
  };
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong py-2" : "bg-transparent py-4"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blur-xl gradient-red opacity-60 group-hover:opacity-100 transition-opacity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-9 h-9 rounded-lg gradient-red grid place-items-center shadow-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-5 h-5 text-primary-foreground", strokeWidth: 2.5 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl tracking-wider", children: [
              "CINE",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "VERSE" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: l.to,
              activeOptions: { exact: l.to === "/" },
              className: "relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  "icon" in l && l.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "w-4 h-4" }) : null,
                  l.label
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 gradient-red scale-x-0 group-data-[status=active]:scale-x-100 transition-transform origin-left" })
              ]
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/search",
                className: "hidden sm:grid w-9 h-9 place-items-center rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground",
                "aria-label": "Search",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowSettings(true),
                className: "w-9 h-9 grid place-items-center rounded-full hover:bg-accent transition-colors cursor-pointer text-muted-foreground hover:text-foreground",
                "aria-label": "Settings",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" })
              }
            ),
            isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/profile",
                className: "hidden sm:grid w-9 h-9 place-items-center rounded-full gradient-red shadow-red hover:scale-105 transition-transform",
                "aria-label": "Profile",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary-foreground" })
              }
            ),
            isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: logout,
                className: "hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold glass-strong hover:bg-accent hover:scale-[1.03] transition-transform cursor-pointer",
                children: "Sign out"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/login",
                className: "hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold gradient-red text-primary-foreground shadow-red hover:scale-[1.03] transition-transform",
                children: "Sign in"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                className: "lg:hidden w-9 h-9 grid place-items-center rounded-full hover:bg-accent",
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "lg:hidden glass-strong mt-2 mx-4 rounded-xl p-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2",
                  children: [
                    "icon" in l && l.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "w-4 h-4" }) : null,
                    l.label
                  ]
                },
                l.to
              )),
              isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/profile",
                  onClick: () => setOpen(false),
                  className: "px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
                    " Profile"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setOpen(false);
                    setShowSettings(true);
                  },
                  className: "px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2 text-left w-full cursor-pointer text-muted-foreground hover:text-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }),
                    " Developer Settings"
                  ]
                }
              ),
              isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    logout();
                    setOpen(false);
                  },
                  className: "mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold glass-strong w-full cursor-pointer",
                  children: "Sign out"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/login",
                  onClick: () => setOpen(false),
                  className: "mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold gradient-red text-primary-foreground shadow-red",
                  children: "Sign in"
                }
              )
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSettings && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "fixed inset-0 z-55 bg-black/85 backdrop-blur-md grid place-items-center p-4",
            onClick: () => setShowSettings(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { scale: 0.95, y: 15 },
                animate: { scale: 1, y: 0 },
                exit: { scale: 0.95, y: 15 },
                transition: { type: "spring", duration: 0.4 },
                className: "relative w-full max-w-md glass-strong rounded-3xl p-6 sm:p-8 shadow-red border border-white/10",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setShowSettings(false),
                      className: "absolute top-4 right-4 w-8 h-8 rounded-full glass hover:bg-accent text-white grid place-items-center cursor-pointer",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-1 text-white", children: "Developer Settings" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "Configure your own API keys to access all movies in the world and use the Gemini AI recommender. Keys are stored safely in your browser." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: saveSettings, className: "space-y-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground font-semibold", children: "TMDB API Key (v3)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "https://www.themoviedb.org/settings/api",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-[10px] text-primary hover:underline",
                            children: "Get TMDB Key ↗"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "password",
                          value: tmdbKey,
                          onChange: (e) => setTmdbKey(e.target.value),
                          placeholder: "Enter your TMDB API Key",
                          className: "w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white text-sm"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground font-semibold", children: "Gemini API Key" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "https://aistudio.google.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-[10px] text-primary hover:underline",
                            children: "Get Gemini Key ↗"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "password",
                          value: geminiKey,
                          onChange: (e) => setGeminiKey(e.target.value),
                          placeholder: "Enter your Gemini API Key",
                          className: "w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white text-sm"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: clearSettings,
                          className: "flex-1 rounded-lg glass py-2.5 text-xs font-semibold text-white hover:bg-accent transition-colors cursor-pointer",
                          children: "Clear Keys"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "submit",
                          className: "flex-[2] rounded-lg gradient-red py-2.5 text-xs font-semibold text-primary-foreground shadow-red hover:scale-[1.02] transition-transform cursor-pointer",
                          children: "Save Config"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 border-t border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg gradient-red grid place-items-center shadow-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-5 h-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl tracking-wider", children: [
            "CINE",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "VERSE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm", children: "An AI-powered cinematic universe. Discover, track, and obsess over films that match your mood — not just your watch history." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-2", children: [Twitter, Instagram, Youtube, Github].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors",
            "aria-label": "Social link",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-3", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/search", className: "hover:text-foreground", children: "Movies" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/genres", className: "hover:text-foreground", children: "Genres" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ai", className: "hover:text-foreground", children: "AI Assistant" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/watchlist", className: "hover:text-foreground", children: "Watchlist" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-3", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Contact" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms of Service" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " CineVerse AI. Crafted for cinephiles."
    ] }) })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 gradient-glow opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Layout as L
};
