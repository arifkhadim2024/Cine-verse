import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Send, User, Bot } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { api } from "@/lib/api";
import type { Movie } from "@/data/movies";

export const Route = createFileRoute("/ai")({ component: AIPage });

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  recommendations?: Movie[];
};

const starterPrompts = [
  "Suggest horror movies like Conjuring",
  "Best comedy movies for family",
  "Mind-bending sci-fi like Inception",
  "Something sad and beautiful",
];

function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "assistant",
      content: "Hey, I'm your CineVerse AI. Tell me your mood, a movie you loved, or anything you're craving — I'll find the perfect watch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const res = await api.ai.recommend(text);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: res.message,
          recommendations: res.recommendations,
        },
      ]);
    } catch (error) {
      console.error("AI recommendation error:", error);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Oops! My neural reel got tangled. Please try again or ask for another vibe.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" /> AI Assistant
          </div>
          <h1 className="font-display text-5xl sm:text-7xl mt-4">Your Cinematic <span className="text-gradient-red">Co-Pilot</span></h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Describe a vibe, name a movie you loved, or ask for the perfect Friday night pick.
          </p>
        </div>

        <div className="glass-strong rounded-3xl overflow-hidden shadow-red flex flex-col h-[65vh] min-h-[500px]">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-9 h-9 shrink-0 rounded-full grid place-items-center ${
                  m.role === "user" ? "bg-accent" : "gradient-red shadow-red"
                }`}>
                  {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-primary-foreground" />}
                </div>
                <div className={`max-w-[80%] ${m.role === "user" ? "text-right" : ""}`}>
                  <div className={`inline-block rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === "user" ? "gradient-red text-primary-foreground" : "glass"
                  }`}>
                    {m.content}
                  </div>
                  {m.recommendations && m.recommendations.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {m.recommendations.map((r) => (
                        <Link
                          key={r.id}
                          to="/movie/$id"
                          params={{ id: r.id }}
                          className="group block"
                        >
                          <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-card group-hover:shadow-red group-hover:scale-105 transition-all">
                            {r.posterUrl ? (
                              <img src={r.posterUrl} alt={r.title} className="absolute inset-0 w-full h-full object-cover" />
                            ) : (
                              <div className="absolute inset-0" style={{ background: r.posterGradient }} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                            <div className="absolute inset-x-2 bottom-2">
                              <p className="font-display text-sm leading-tight line-clamp-2">{r.title}</p>
                              <p className="text-[10px] text-white/70">★ {r.imdb} · {r.year}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {typing && (
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 rounded-full gradient-red grid place-items-center shadow-red">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="glass rounded-2xl px-4 py-3 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="px-4 sm:px-6 pb-3 flex flex-wrap gap-2">
              {starterPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-xs px-3 py-1.5 rounded-full glass hover:bg-accent transition-colors cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-border/60 p-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything cinematic…"
              className="flex-1 bg-transparent outline-none px-3 py-2 text-sm placeholder:text-muted-foreground text-white"
            />
            <button
              type="submit"
              className="w-10 h-10 grid place-items-center rounded-full gradient-red text-primary-foreground shadow-red hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer"
              disabled={!input.trim() || typing}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
