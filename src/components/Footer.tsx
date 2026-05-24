import { Link } from "@tanstack/react-router";
import { Film, Github, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-red grid place-items-center shadow-red">
              <Film className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl tracking-wider">
              CINE<span className="text-gradient-red">VERSE</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            An AI-powered cinematic universe. Discover, track, and obsess over films
            that match your mood — not just your watch history.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/search" className="hover:text-foreground">Movies</Link></li>
            <li><Link to="/genres" className="hover:text-foreground">Genres</Link></li>
            <li><Link to="/ai" className="hover:text-foreground">AI Assistant</Link></li>
            <li><Link to="/watchlist" className="hover:text-foreground">Watchlist</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CineVerse AI. Crafted for cinephiles.
        </p>
      </div>
    </footer>
  );
}
