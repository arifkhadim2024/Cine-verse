import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 gradient-glow opacity-40" />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
