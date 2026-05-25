import { createFileRoute, Link } from "@tanstack/react-router";
import { Film } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/Layout";

import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || (mode !== "forgot" && !password)) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (mode === "register" && !name) {
      toast.error("Please enter your name.");
      return;
    }

    setLoading(true);
    try {
      if (mode === "login") {
        await login(email, password);
        toast.success("Welcome back to CineVerse!");
        navigate({ to: "/" });
      } else if (mode === "register") {
        await register(name, email, password);
        toast.success("Account created successfully!");
        navigate({ to: "/" });
      } else {
        toast.info("Password reset simulated. Check your console!");
      }
    } catch (err: any) {
      toast.error(err.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl gradient-red grid place-items-center shadow-red">
                <Film className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-3xl tracking-wider">
                CINE<span className="text-gradient-red">VERSE</span>
              </span>
            </Link>
          </div>

          <div className="glass-strong rounded-3xl p-7 shadow-red">
            <h1 className="font-display text-3xl">
              {mode === "login" && "Welcome back"}
              {mode === "register" && "Create account"}
              {mode === "forgot" && "Reset password"}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {mode === "login" && "Sign in to continue your binge."}
              {mode === "register" && "Join CineVerse and start your reel."}
              {mode === "forgot" && "We'll send a magic link to your email."}
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {mode === "register" && (
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white"
                    placeholder="Your full name"
                  />
                </div>
              )}
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white"
                  placeholder="you@cineverse.com"
                />
              </div>
              {mode !== "forgot" && (
                <div>
                  <div className="flex justify-between items-center">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Password</label>
                    {mode === "login" && (
                      <button type="button" onClick={() => setMode("forgot")} className="text-xs text-primary hover:underline">Forgot?</button>
                    )}
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1.5 w-full rounded-lg bg-input/60 border border-border px-4 py-2.5 outline-none focus:border-primary transition-colors text-white"
                    placeholder="••••••••"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg gradient-red py-3 font-semibold text-primary-foreground shadow-red hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-50"
              >
                {loading ? "Authenticating..." : (
                  <>
                    {mode === "login" && "Sign in"}
                    {mode === "register" && "Create account"}
                    {mode === "forgot" && "Send reset link"}
                  </>
                )}
              </button>
            </form>

            {mode !== "forgot" && (
              <>
                <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex-1 h-px bg-border" /> OR <span className="flex-1 h-px bg-border" />
                </div>
                <button className="w-full flex items-center justify-center gap-3 rounded-lg glass border border-border py-3 font-medium hover:bg-accent transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5c1.6 0 3 .55 4.1 1.6l3-3C17.2 1.8 14.8 1 12 1 7.4 1 3.5 3.5 1.6 7.2l3.5 2.7C6 7.1 8.8 5 12 5z"/><path fill="#4285F4" d="M23 12c0-.8-.1-1.6-.2-2.3H12v4.5h6.2c-.3 1.5-1.1 2.7-2.4 3.5v3h3.9c2.3-2.1 3.6-5.2 3.6-8.7z"/><path fill="#FBBC05" d="M5.1 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1L1.6 7.2C.6 9 0 10.9 0 13s.6 4 1.6 5.8l3.5-2.7z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.9-3c-1 .7-2.3 1.1-3.4 1.1-3.2 0-5.9-2.1-6.9-5L1.6 16C3.5 19.7 7.4 23 12 23z"/></svg>
                  Continue with Google
                </button>
              </>
            )}

            <p className="text-sm text-center mt-6 text-muted-foreground">
              {mode === "login" && (
                <>Don't have an account? <button onClick={() => setMode("register")} className="text-primary hover:underline">Sign up</button></>
              )}
              {mode === "register" && (
                <>Already a member? <button onClick={() => setMode("login")} className="text-primary hover:underline">Sign in</button></>
              )}
              {mode === "forgot" && (
                <button onClick={() => setMode("login")} className="text-primary hover:underline">← Back to sign in</button>
              )}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
