import { Outlet } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="pointer-events-none fixed inset-0 gradient-glow opacity-40" />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
