import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout } from "./Layout-DUlbaIBa.mjs";
import { a as api } from "./router-BNkE9H8C.mjs";
import "../_libs/sonner.mjs";
import { S as Sparkles, U as User, h as Bot, i as Send } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const starterPrompts = ["Suggest horror movies like Conjuring", "Best comedy movies for family", "Mind-bending sci-fi like Inception", "Something sad and beautiful"];
function AIPage() {
  const [messages, setMessages] = reactExports.useState([{
    id: "intro",
    role: "assistant",
    content: "Hey, I'm your CineVerse AI. Tell me your mood, a movie you loved, or anything you're craving — I'll find the perfect watch."
  }]);
  const [input, setInput] = reactExports.useState("");
  const [typing, setTyping] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, typing]);
  const send = async (text) => {
    if (!text.trim()) return;
    const userMsg = {
      id: crypto.randomUUID(),
      role: "user",
      content: text
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    try {
      const res = await api.ai.recommend(text);
      setMessages((m) => [...m, {
        id: crypto.randomUUID(),
        role: "assistant",
        content: res.message,
        recommendations: res.recommendations
      }]);
    } catch (error) {
      console.error("AI recommendation error:", error);
      setMessages((m) => [...m, {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Oops! My neural reel got tangled. Please try again or ask for another vibe."
      }]);
    } finally {
      setTyping(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
        " AI Assistant"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-7xl mt-4", children: [
        "Your Cinematic ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-red", children: "Co-Pilot" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Describe a vibe, name a movie you loved, or ask for the perfect Friday night pick." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl overflow-hidden shadow-red flex flex-col h-[65vh] min-h-[500px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-5", children: [
        messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, className: `flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 shrink-0 rounded-full grid place-items-center ${m.role === "user" ? "bg-accent" : "gradient-red shadow-red"}`, children: m.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] ${m.role === "user" ? "text-right" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "gradient-red text-primary-foreground" : "glass"}`, children: m.content }),
            m.recommendations && m.recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5", children: m.recommendations.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/movie/$id", params: {
              id: r.id
            }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[2/3] rounded-lg overflow-hidden shadow-card group-hover:shadow-red group-hover:scale-105 transition-all", children: [
              r.posterUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.posterUrl, alt: r.title, className: "absolute inset-0 w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
                background: r.posterGradient
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-2 bottom-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm leading-tight line-clamp-2", children: r.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-white/70", children: [
                  "★ ",
                  r.imdb,
                  " · ",
                  r.year
                ] })
              ] })
            ] }) }, r.id)) })
          ] })
        ] }, m.id)),
        typing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full gradient-red grid place-items-center shadow-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl px-4 py-3 flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-bounce", style: {
            animationDelay: `${i * 0.15}s`
          } }, i)) })
        ] })
      ] }),
      messages.length <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-6 pb-3 flex flex-wrap gap-2", children: starterPrompts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => send(p), className: "text-xs px-3 py-1.5 rounded-full glass hover:bg-accent transition-colors cursor-pointer", children: p }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        send(input);
      }, className: "border-t border-border/60 p-3 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Ask anything cinematic…", className: "flex-1 bg-transparent outline-none px-3 py-2 text-sm placeholder:text-muted-foreground text-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-10 h-10 grid place-items-center rounded-full gradient-red text-primary-foreground shadow-red hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer", disabled: !input.trim() || typing, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }) })
      ] })
    ] })
  ] }) });
}
export {
  AIPage as component
};
