import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log("🚀 Starting backend bundle compilation for Vercel...");

  const outDir = path.resolve(__dirname, ".vercel/output/functions/api.func");
  
  // 1. Create directory if not exists
  fs.mkdirSync(outDir, { recursive: true });

  // 2. Run esbuild to bundle api/index.ts into outDir/index.js
  console.log("📦 Bundling Express backend with esbuild...");
  execSync(
    "npx esbuild api/index.ts --bundle --platform=node --format=esm --target=node22 --outfile=.vercel/output/functions/api.func/index.js",
    { stdio: "inherit", cwd: __dirname }
  );

  // 3. Write .vc-config.json
  const vcConfig = {
    handler: "index.js",
    launcherType: "Nodejs",
    shouldAddHelpers: false,
    supportsResponseStreaming: true,
    runtime: "nodejs24.x",
  };
  fs.writeFileSync(
    path.join(outDir, ".vc-config.json"),
    JSON.stringify(vcConfig, null, 2)
  );
  console.log("📝 Created .vc-config.json for api.func");

  // 4. Update .vercel/output/config.json with the rewrite rule
  const configPath = path.resolve(__dirname, ".vercel/output/config.json");
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    
    // Add the /api rewrite rule before the catch-all rule
    if (config.routes) {
      // Find the index of the catch-all / (.*) route
      const catchAllIndex = config.routes.findIndex((r) => r.src === "/(.*)");
      
      const apiRoute = {
        src: "/api/(.*)",
        dest: "/api",
      };

      // Check if it already exists
      const exists = config.routes.some((r) => r.src === "/api/(.*)");
      if (!exists) {
        if (catchAllIndex !== -1) {
          config.routes.splice(catchAllIndex, 0, apiRoute);
        } else {
          config.routes.push(apiRoute);
        }
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log("✨ Successfully updated config.json with /api rewrite rule");
      } else {
        console.log("ℹ️ /api rewrite rule already exists in config.json");
      }
    }
  } else {
    console.warn("⚠️ Warning: .vercel/output/config.json not found!");
  }

  console.log("✅ Backend compilation complete!");
}

main().catch((err) => {
  console.error("❌ Backend compilation failed:", err);
  process.exit(1);
});
