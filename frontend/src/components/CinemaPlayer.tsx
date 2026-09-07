import { useState, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Server,
  Tv,
  Film,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  CheckCircle2,
  FastForward,
  Rewind,
} from "lucide-react";
import type { Movie } from "@/data/movies";

interface CinemaPlayerProps {
  movie: Movie;
  autoPlay?: boolean;
}

// Sample open-source 4K/HD streaming sources for instant playback
const SAMPLE_STREAMS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
];

export function CinemaPlayer({ movie, autoPlay = true }: CinemaPlayerProps) {
  const isTvShow =
    movie.type === "TV Show" ||
    movie.duration?.toLowerCase().includes("season") ||
    movie.id.includes("season");

  const [season, setSeason] = useState(1);
  const [episode, setEpisode] = useState(1);
  const [selectedServer, setSelectedServer] = useState<
    "vidsrc" | "embedsu" | "multiembed" | "vidsrcxyz" | "cloud" | "trailer"
  >("vidsrc");

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Extract or generate a numeric TMDB ID
  let numericId = movie.id.replace(/[^0-9]/g, "");
  if (!numericId || numericId.length < 2) {
    let hash = 0;
    for (let i = 0; i < movie.title.length; i++) {
      hash = movie.title.charCodeAt(i) + ((hash << 5) - hash);
    }
    numericId = String(Math.abs(hash) % 900000 + 10000);
  }

  // Get stream URL according to selected server
  const getStreamUrl = () => {
    const tmdbId = numericId;
    switch (selectedServer) {
      case "vidsrc":
        return isTvShow
          ? `https://vidsrc.cc/v2/embed/tv/${tmdbId}/${season}/${episode}`
          : `https://vidsrc.cc/v2/embed/movie/${tmdbId}`;
      case "embedsu":
        return isTvShow
          ? `https://embed.su/embed/tv/${tmdbId}/${season}/${episode}`
          : `https://embed.su/embed/movie/${tmdbId}`;
      case "multiembed":
        return isTvShow
          ? `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1&s=${season}&e=${episode}`
          : `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1`;
      case "vidsrcxyz":
        return isTvShow
          ? `https://vidsrc.xyz/embed/tv?tmdb=${tmdbId}&season=${season}&episode=${episode}`
          : `https://vidsrc.xyz/embed/movie?tmdb=${tmdbId}`;
      case "trailer":
        return `https://www.youtube.com/embed/${movie.trailerId || "dQw4w9WgXcQ"}?autoplay=1&rel=0&modestbranding=1`;
      default:
        return "";
    }
  };

  const sampleStreamUrl = SAMPLE_STREAMS[Math.abs(Number(numericId)) % SAMPLE_STREAMS.length];
  const netflixSearchUrl = `https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}`;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Mock list of episodes for Web Series
  const episodesList = Array.from({ length: 8 }, (_, i) => ({
    episodeNumber: i + 1,
    title: `Episode ${i + 1}: ${
      [
        "The Beginning",
        "Rising Shadows",
        "Unforeseen Paths",
        "The Breaking Point",
        "Secrets Revealed",
        "Behind Enemy Lines",
        "The Reckoning",
        "The Final Showdown",
      ][i] || `Part ${i + 1}`
    }`,
    duration: "48m",
  }));

  return (
    <div
      ref={playerContainerRef}
      className="relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl flex flex-col"
    >
      {/* Player Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-white/10 backdrop-blur-md gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg gradient-red grid place-items-center shadow-red">
            <Film className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg text-white font-semibold flex items-center gap-2">
              {movie.title}
              {isTvShow && (
                <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-red-600/30 text-red-400 border border-red-500/30 font-bold">
                  S{season} E{episode}
                </span>
              )}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isTvShow ? "Web Series / TV Show" : "Full Feature Movie"} • 4K Ultra HD • English & Multi-Audio
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={netflixSearchUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-red transition-all cursor-pointer"
          >
            <Tv className="w-3.5 h-3.5" /> Watch on Netflix
          </a>
        </div>
      </div>

      {/* Screen Frame */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        {selectedServer === "cloud" ? (
          <div className="relative w-full h-full group bg-black">
            <video
              ref={videoRef}
              src={sampleStreamUrl}
              className="w-full h-full object-contain"
              onTimeUpdate={() => {
                if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
              }}
              onLoadedMetadata={() => {
                if (videoRef.current) setDuration(videoRef.current.duration);
              }}
              autoPlay={autoPlay}
              playsInline
            />

            {/* Custom Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
              <div className="flex justify-between items-center text-white">
                <span className="text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded bg-black/60 backdrop-blur-sm">
                  CineVerse Direct Stream (4K)
                </span>
              </div>

              <div className="space-y-2">
                {/* Progress Bar */}
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red-600"
                />

                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 rounded-full gradient-red grid place-items-center text-white shadow-red hover:scale-105 transition-transform"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>

                    <button
                      onClick={() => {
                        if (videoRef.current) videoRef.current.currentTime -= 10;
                      }}
                      className="p-1 hover:text-red-400 transition-colors"
                    >
                      <Rewind className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        if (videoRef.current) videoRef.current.currentTime += 10;
                      }}
                      className="p-1 hover:text-red-400 transition-colors"
                    >
                      <FastForward className="w-4 h-4" />
                    </button>

                    <button onClick={toggleMute} className="p-1 hover:text-red-400 transition-colors">
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold">1080p HD</span>
                    <button onClick={toggleFullscreen} className="p-1 hover:text-red-400 transition-colors">
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            key={`${selectedServer}-${season}-${episode}`}
            src={getStreamUrl()}
            title={`${movie.title} Stream Player`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      {/* Streaming Server Selector */}
      <div className="p-4 bg-zinc-900/90 border-t border-white/10 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5 mr-1">
              <Server className="w-3.5 h-3.5 text-primary" /> Select Stream Server:
            </span>

            <button
              onClick={() => setSelectedServer("vidsrc")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedServer === "vidsrc"
                  ? "gradient-red text-white shadow-red"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-white"
              }`}
            >
              ⚡ Server 1 (VidSrc 4K)
            </button>

            <button
              onClick={() => setSelectedServer("embedsu")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedServer === "embedsu"
                  ? "gradient-red text-white shadow-red"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-white"
              }`}
            >
              🚀 Server 2 (Embed.su)
            </button>

            <button
              onClick={() => setSelectedServer("multiembed")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedServer === "multiembed"
                  ? "gradient-red text-white shadow-red"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-white"
              }`}
            >
              🌐 Server 3 (Multi-Language)
            </button>

            <button
              onClick={() => setSelectedServer("cloud")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedServer === "cloud"
                  ? "gradient-red text-white shadow-red"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-white"
              }`}
            >
              🍿 Direct Stream (Ad-Free HD)
            </button>

            <button
              onClick={() => setSelectedServer("trailer")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedServer === "trailer"
                  ? "gradient-red text-white shadow-red"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-white"
              }`}
            >
              🎬 Official Trailer
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 text-yellow-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> IMDb {movie.imdb}
            </span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>
        </div>

        {/* Web Series Episode Picker */}
        {isTvShow && (
          <div className="mt-2 pt-3 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Episodes & Seasons
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSeason(s);
                      setEpisode(1);
                    }}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      season === s
                        ? "bg-red-600 text-white"
                        : "glass hover:bg-white/10 text-muted-foreground"
                    }`}
                  >
                    Season {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {episodesList.map((ep) => (
                <button
                  key={ep.episodeNumber}
                  onClick={() => setEpisode(ep.episodeNumber)}
                  className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                    episode === ep.episodeNumber
                      ? "bg-red-950/50 border-red-500/80 shadow-red"
                      : "glass hover:bg-white/5 border-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">
                      E{ep.episodeNumber}
                    </span>
                    {episode === ep.episodeNumber && (
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    )}
                  </div>
                  <span className="text-xs text-white/90 line-clamp-1 font-medium mt-1">
                    {ep.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-1">{ep.duration}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
