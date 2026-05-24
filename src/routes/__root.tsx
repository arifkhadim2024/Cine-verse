import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-red">404</h1>
        <h2 className="mt-4 font-display text-2xl">Scene not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This reel doesn't exist in our cinematic universe.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red"
        >
          Back to CineVerse
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Cut! Something broke.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try again or head back to the main stage.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CineVerse AI — Discover movies that match your mood" },
      { name: "description", content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant." },
      { name: "theme-color", content: "#0a0000" },
      { property: "og:title", content: "CineVerse AI — Discover movies that match your mood" },
      { property: "og:description", content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CineVerse AI — Discover movies that match your mood" },
      { name: "twitter:description", content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6e945dd1-b830-46d5-b3e7-137c76c0087d/id-preview-d130a10f--e9b1fae6-24df-4b84-a181-7d270bc0763b.lovable.app-1779641904197.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6e945dd1-b830-46d5-b3e7-137c76c0087d/id-preview-d130a10f--e9b1fae6-24df-4b84-a181-7d270bc0763b.lovable.app-1779641904197.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
