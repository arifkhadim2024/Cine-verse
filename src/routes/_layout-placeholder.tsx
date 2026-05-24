import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Info, Search, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-cinema.jpg";
import { Layout } from "@/components/Layout";
import { MovieRow } from "@/components/MovieRow";
import { trending, topRated, continueWatching, genres, movies } from "@/data/movies";

export const Route = createFileRoute("/_layout-placeholder")({ component: () => <Layout /> as never, });

// Override: render Home inside layout via component wrapper
Route.options.component = function HomeRoute() {
  return (
    <Layout>
      {/* unused — Layout already renders Outlet via __root, but we need Home content */}
    </Layout>
  );
} as never;
