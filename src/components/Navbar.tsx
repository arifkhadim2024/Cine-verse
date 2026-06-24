import { Link } from "@tanstack/react-router";
import { Film, Search, Sparkles, Bookmark, User, Menu, X, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const links = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Movies" },
  { to: "/genres", label: "Genres" },
  { to: "/ai", label: "AI Assistant", icon: Sparkles },
  { to: "/watchlist", label: "Watchlist", icon: Bookmark },
] as const;

import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const [showSettings, setShowSettings] = useState(false);
  const [tmdbKey, setTmdbKey] = useState("");
  const [geminiKey, setGeminiKey] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTmdbKey(localStorage.getItem("cineverse_tmdb_key") || "");
      setGeminiKey(localStorage.getItem("cineverse_gemini_key") || "");
    }
  }, [showSettings]);

  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("cineverse_tmdb_key", tmdbKey.trim());
    localStorage.setItem("cineverse_gemini_key", geminiKey.trim());
    setShowSettings(false);
    toast.success("API keys updated successfully! Reloading page...");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
    }, 1000);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 blur-xl gradient-red opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-9 h-9 rounded-lg gradient-red grid place-items-center shadow-red">
              <Film className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <span className="font-display text-2xl tracking-wider">
            CINE<span className="text-gradient-red">VERSE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground group"
            >
              <span className="flex items-center gap-1.5">
                {"icon" in l && l.icon ? <l.icon className="w-4 h-4" /> : null}
                {l.label}
              </span>
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-red scale-x-0 group-data-[status=active]:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/search"
            className="hidden sm:grid w-9 h-9 place-items-center rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setShowSettings(true)}
            className="w-9 h-9 grid place-items-center rounded-full hover:bg-accent transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
            aria-label="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
          {isAuthenticated && (
            <Link
              to="/profile"
              className="hidden sm:grid w-9 h-9 place-items-center rounded-full gradient-red shadow-red hover:scale-105 transition-transform"
              aria-label="Profile"
            >
              <User className="w-4 h-4 text-primary-foreground" />
            </Link>
          )}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold glass-strong hover:bg-accent hover:scale-[1.03] transition-transform cursor-pointer"
            >
              Sign out
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold gradient-red text-primary-foreground shadow-red hover:scale-[1.03] transition-transform"
            >
              Sign in
            </Link>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-9 h-9 grid place-items-center rounded-full hover:bg-accent"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass-strong mt-2 mx-4 rounded-xl p-4"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2"
                >
                  {"icon" in l && l.icon ? <l.icon className="w-4 h-4" /> : null}
                  {l.label}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> Profile
                </Link>
              )}
              <button
                onClick={() => {
                  setOpen(false);
                  setShowSettings(true);
                }}
                className="px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2 text-left w-full cursor-pointer text-muted-foreground hover:text-foreground"
              >
                <Settings className="w-4 h-4" /> Developer Settings
              </button>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold glass-strong w-full cursor-pointer"
                >
                  Sign out
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold gradient-red text-primary-foreground shadow-red"
                >
                  Sign in
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-black/85 backdrop-blur-md grid place-items-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-md glass-strong rounded-3xl p-6 sm:p-8 shadow-red border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSettings(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass hover:bg-accent text-white grid place-items-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h2 className="font-display text-3xl mb-1 text-white">Developer Settings</h2>
              <p className="text-xs text-muted-foreground mb-6">
                Configure your own API keys to access all movies in the world and use the Gemini AI recommender. Keys are stored safely in your browser.
              </p>

              <form onSubmit={saveSettings} className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      TMDB API Key (v3)
                    </label>
                    <a
                      href="https://www.themoviedb.org/settings/api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-primary hover:underline"
                    >
                      Get TMDB Key ↗
                    </a>
                  </div>
                  <input
                    type="password"
                    value={tmdbKey}
                    onChange={(e) => setTmdbKey(e.target.value)}
                    placeholder="Enter your TMDB API Key"
                    className="w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white text-sm"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Gemini API Key
                    </label>
                    <a
                      href="https://aistudio.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-primary hover:underline"
                    >
                      Get Gemini Key ↗
                    </a>
                  </div>
                  <input
                    type="password"
                    value={geminiKey}
                    onChange={(e) => setGeminiKey(e.target.value)}
                    placeholder="Enter your Gemini API Key"
                    className="w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white text-sm"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={clearSettings}
                    className="flex-1 rounded-lg glass py-2.5 text-xs font-semibold text-white hover:bg-accent transition-colors cursor-pointer"
                  >
                    Clear Keys
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] rounded-lg gradient-red py-2.5 text-xs font-semibold text-primary-foreground shadow-red hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                    Save Config
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
