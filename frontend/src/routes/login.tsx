import { createFileRoute, Link } from "@tanstack/react-router";
import { Film, Mail, Lock, User, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        toast.info("Password reset simulated. Check your email!");
      }
    } catch (err) {
      const error = err as Error;
      toast.error(error.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="relative min-h-[95vh] flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden">
        {/* Cinema Backdrop Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute inset-0 bg-black/80 z-10 backdrop-blur-[2px]" />
          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop"
            alt="Cinema background"
            className="w-full h-full object-cover scale-105 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Logo Brand Header */}
          <div className="text-center mb-6">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 blur-xl gradient-red opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl gradient-red grid place-items-center shadow-red">
                  <Film className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
                </div>
              </div>
              <span className="font-display text-3xl tracking-wider text-white">
                CINE<span className="text-gradient-red">VERSE</span>
              </span>
            </Link>
          </div>

          {/* Form Box */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="glass-strong rounded-3xl p-6 sm:p-8 shadow-red border border-white/10 relative overflow-hidden"
          >
            {/* Vibe lines */}
            <div className="absolute -left-16 -top-16 w-36 h-36 rounded-full gradient-red opacity-10 blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="font-display text-3xl text-white">
                  {mode === "login" && "Welcome back"}
                  {mode === "register" && "Create account"}
                  {mode === "forgot" && "Reset password"}
                </h1>
                <p className="text-xs text-muted-foreground mt-1.5">
                  {mode === "login" && "Sign in to continue your cinematic journey."}
                  {mode === "register" && "Join CineVerse and customize your experience."}
                  {mode === "forgot" && "Enter your email to receive a password reset link."}
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  {mode === "register" && (
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                        Name
                      </label>
                      <div className="relative mt-1.5">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl bg-background/40 border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-primary focus:bg-background/60 transition-all text-white placeholder:text-muted-foreground/50 text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Email Address
                    </label>
                    <div className="relative mt-1.5">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-background/40 border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-primary focus:bg-background/60 transition-all text-white placeholder:text-muted-foreground/50 text-sm"
                        placeholder="you@cineverse.com"
                      />
                    </div>
                  </div>

                  {mode !== "forgot" && (
                    <div>
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                          Password
                        </label>
                        {mode === "login" && (
                          <button
                            type="button"
                            onClick={() => setMode("forgot")}
                            className="text-xs text-primary hover:underline font-medium cursor-pointer"
                          >
                            Forgot?
                          </button>
                        )}
                      </div>
                      <div className="relative mt-1.5">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          required
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full rounded-xl bg-background/40 border border-white/10 pl-11 pr-11 py-3 outline-none focus:border-primary focus:bg-background/60 transition-all text-white placeholder:text-muted-foreground/50 text-sm"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl gradient-red py-3 font-semibold text-primary-foreground shadow-red hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer disabled:opacity-50 mt-2 text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Authenticating...
                      </span>
                    ) : (
                      <>
                        {mode === "login" && "Sign In"}
                        {mode === "register" && "Create Account"}
                        {mode === "forgot" && "Send Reset Link"}
                      </>
                    )}
                  </button>
                </form>

                {mode !== "forgot" && (
                  <>
                    <div className="my-5 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span className="flex-1 h-px bg-white/10" /> OR{" "}
                      <span className="flex-1 h-px bg-white/10" />
                    </div>
                    <button
                      type="button"
                      onClick={() => toast.info("Google sign-in is a demo simulator.")}
                      className="w-full flex items-center justify-center gap-2.5 rounded-xl glass border border-white/10 py-3 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#EA4335"
                          d="M12 5c1.6 0 3 .55 4.1 1.6l3-3C17.2 1.8 14.8 1 12 1 7.4 1 3.5 3.5 1.6 7.2l3.5 2.7C6 7.1 8.8 5 12 5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M23 12c0-.8-.1-1.6-.2-2.3H12v4.5h6.2c-.3 1.5-1.1 2.7-2.4 3.5v3h3.9c2.3-2.1 3.6-5.2 3.6-8.7z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.1 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1L1.6 7.2C.6 9 0 10.9 0 13s.6 4 1.6 5.8l3.5-2.7z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c3 0 5.5-1 7.3-2.7l-3.9-3c-1 .7-2.3 1.1-3.4 1.1-3.2 0-5.9-2.1-6.9-5L1.6 16C3.5 19.7 7.4 23 12 23z"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </>
                )}

                <p className="text-xs text-center mt-6 text-muted-foreground">
                  {mode === "login" && (
                    <>
                      Don't have an account?{" "}
                      <button
                        onClick={() => setMode("register")}
                        className="text-primary hover:underline font-semibold cursor-pointer"
                      >
                        Sign up
                      </button>
                    </>
                  )}
                  {mode === "register" && (
                    <>
                      Already a member?{" "}
                      <button
                        onClick={() => setMode("login")}
                        className="text-primary hover:underline font-semibold cursor-pointer"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                  {mode === "forgot" && (
                    <button
                      onClick={() => setMode("login")}
                      className="text-primary hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to sign in
                    </button>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
