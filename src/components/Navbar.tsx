import { Link } from "@tanstack/react-router";
import { Film, Search, Sparkles, Bookmark, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Movies" },
  { to: "/genres", label: "Genres" },
  { to: "/ai", label: "AI Assistant", icon: Sparkles },
  { to: "/watchlist", label: "Watchlist", icon: Bookmark },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            className="hidden sm:grid w-9 h-9 place-items-center rounded-full hover:bg-accent transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>
          <Link
            to="/profile"
            className="hidden sm:grid w-9 h-9 place-items-center rounded-full gradient-red shadow-red hover:scale-105 transition-transform"
            aria-label="Profile"
          >
            <User className="w-4 h-4 text-primary-foreground" />
          </Link>
          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold gradient-red text-primary-foreground shadow-red hover:scale-[1.03] transition-transform"
          >
            Sign in
          </Link>
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
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-accent text-sm flex items-center gap-2"
              >
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold gradient-red text-primary-foreground shadow-red"
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
