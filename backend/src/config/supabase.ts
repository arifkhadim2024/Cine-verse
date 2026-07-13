import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env and force override of existing variables in monorepo environment
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath, override: true });

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";

let supabaseClient: any = null;

if (supabaseUrl && supabaseUrl.startsWith("http")) {
  try {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
  }
}

if (!supabaseClient) {
  console.warn(
    "WARNING: Supabase URL is invalid or missing. Database integration is disabled. Local storage fallbacks will be used.",
  );
  // Create a dummy client to prevent runtime crashes when database is not configured
  supabaseClient = {
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => ({ data: null, error: null }),
          single: async () => ({ data: null, error: new Error("Supabase not configured") }),
        }),
        maybeSingle: async () => ({ data: null, error: null }),
      }),
      insert: () => ({
        select: () => ({
          single: async () => ({ data: null, error: new Error("Supabase not configured") }),
        }),
      }),
      update: () => ({
        eq: async () => ({ error: new Error("Supabase not configured") }),
      }),
    }),
  };
}

export const supabase = supabaseClient;
