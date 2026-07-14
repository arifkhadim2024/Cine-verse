import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-CTklu0JT.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth } from "./router-TtzNJHZG.mjs";
import { F as Film, U as User, e as Mail, f as Lock, E as EyeOff, g as Eye, A as ArrowLeft } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function LoginPage() {
  const [mode, setMode] = reactExports.useState("login");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const {
    login,
    register
  } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || mode !== "forgot" && !password) {
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
        navigate({
          to: "/"
        });
      } else if (mode === "register") {
        await register(name, email, password);
        toast.success("Account created successfully!");
        navigate({
          to: "/"
        });
      } else {
        toast.info("Password reset simulated. Check your email!");
      }
    } catch (err) {
      const error = err;
      toast.error(error.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[95vh] flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 select-none pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 z-10 backdrop-blur-[2px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop", alt: "Cinema background", className: "w-full h-full object-cover scale-105 opacity-35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blur-xl gradient-red opacity-60 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-12 h-12 rounded-xl gradient-red grid place-items-center shadow-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-6 h-6 text-primary-foreground", strokeWidth: 2.5 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl tracking-wider text-white", children: [
          "CINE",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "VERSE" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 35
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }, className: "glass-strong rounded-3xl p-6 sm:p-8 shadow-red border border-white/10 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-16 -top-16 w-36 h-36 rounded-full gradient-red opacity-10 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 15
        }, animate: {
          opacity: 1,
          x: 0
        }, exit: {
          opacity: 0,
          x: -15
        }, transition: {
          duration: 0.2
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl text-white", children: [
            mode === "login" && "Welcome back",
            mode === "register" && "Create account",
            mode === "forgot" && "Reset password"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1.5", children: [
            mode === "login" && "Sign in to continue your cinematic journey.",
            mode === "register" && "Join CineVerse and customize your experience.",
            mode === "forgot" && "Enter your email to receive a password reset link."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: handleSubmit, children: [
            mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-semibold", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: name, onChange: (e) => setName(e.target.value), className: "w-full rounded-xl bg-background/40 border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-primary focus:bg-background/60 transition-all text-white placeholder:text-muted-foreground/50 text-sm", placeholder: "Your full name" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-semibold", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full rounded-xl bg-background/40 border border-white/10 pl-11 pr-4 py-3 outline-none focus:border-primary focus:bg-background/60 transition-all text-white placeholder:text-muted-foreground/50 text-sm", placeholder: "you@cineverse.com" })
              ] })
            ] }),
            mode !== "forgot" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-semibold", children: "Password" }),
                mode === "login" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode("forgot"), className: "text-xs text-primary hover:underline font-medium cursor-pointer", children: "Forgot?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full rounded-xl bg-background/40 border border-white/10 pl-11 pr-11 py-3 outline-none focus:border-primary focus:bg-background/60 transition-all text-white placeholder:text-muted-foreground/50 text-sm", placeholder: "••••••••" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors cursor-pointer", children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full rounded-xl gradient-red py-3 font-semibold text-primary-foreground shadow-red hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer disabled:opacity-50 mt-2 text-sm", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" }),
              "Authenticating..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              mode === "login" && "Sign In",
              mode === "register" && "Create Account",
              mode === "forgot" && "Send Reset Link"
            ] }) })
          ] }),
          mode !== "forgot" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-white/10" }),
              " OR",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-white/10" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => toast.info("Google sign-in is a demo simulator."), className: "w-full flex items-center justify-center gap-2.5 rounded-xl glass border border-white/10 py-3 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5c1.6 0 3 .55 4.1 1.6l3-3C17.2 1.8 14.8 1 12 1 7.4 1 3.5 3.5 1.6 7.2l3.5 2.7C6 7.1 8.8 5 12 5z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M23 12c0-.8-.1-1.6-.2-2.3H12v4.5h6.2c-.3 1.5-1.1 2.7-2.4 3.5v3h3.9c2.3-2.1 3.6-5.2 3.6-8.7z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M5.1 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1L1.6 7.2C.6 9 0 10.9 0 13s.6 4 1.6 5.8l3.5-2.7z" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 23c3 0 5.5-1 7.3-2.7l-3.9-3c-1 .7-2.3 1.1-3.4 1.1-3.2 0-5.9-2.1-6.9-5L1.6 16C3.5 19.7 7.4 23 12 23z" })
              ] }),
              "Continue with Google"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center mt-6 text-muted-foreground", children: [
            mode === "login" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Don't have an account?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("register"), className: "text-primary hover:underline font-semibold cursor-pointer", children: "Sign up" })
            ] }),
            mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Already a member?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("login"), className: "text-primary hover:underline font-semibold cursor-pointer", children: "Sign in" })
            ] }),
            mode === "forgot" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMode("login"), className: "text-primary hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
              " Back to sign in"
            ] })
          ] })
        ] }, mode) })
      ] })
    ] })
  ] }) });
}
export {
  LoginPage as component
};
