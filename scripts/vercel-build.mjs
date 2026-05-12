// Adapts the TanStack Start Vite build output to the Vercel Build Output API v3.
// Reads dist/client (static assets) and dist/server/server.js (Web fetch handler)
// and emits .vercel/output with a Node serverless function that runs the SSR handler.
import { cp, mkdir, rm, writeFile, readFile, stat, symlink } from "node:fs/promises";
import path from "node:path";
import { nodeFileTrace } from "@vercel/nft";

const root = process.cwd();
const dist = path.join(root, "dist");
const out = path.join(root, ".vercel", "output");

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function main() {
  if (!(await exists(path.join(dist, "client"))) || !(await exists(path.join(dist, "server", "server.js")))) {
    throw new Error("Expected dist/client and dist/server/server.js. Run `vite build` first.");
  }

  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });

  // 1. Static assets -> .vercel/output/static
  await cp(path.join(dist, "client"), path.join(out, "static"), { recursive: true });

  // 2. SSR function -> .vercel/output/functions/ssr.func
  const fnDir = path.join(out, "functions", "ssr.func");
  await mkdir(fnDir, { recursive: true });
  await cp(path.join(dist, "server"), path.join(fnDir, "server"), { recursive: true });

  // Node entry that adapts (req,res) -> Web fetch -> Web Response
  const entry = `import { createServer } from "node:http";
import server from "./server/server.js";

async function toWebRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = new URL(req.url, protocol + "://" + host);
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) v.forEach((vv) => headers.append(k, vv));
    else if (v != null) headers.set(k, String(v));
  }
  const method = (req.method || "GET").toUpperCase();
  let body;
  if (method !== "GET" && method !== "HEAD") {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    body = Buffer.concat(chunks);
  }
  return new Request(url, { method, headers, body, duplex: "half" });
}

async function sendWebResponse(res, response) {
  res.statusCode = response.status;
  response.headers.forEach((v, k) => res.setHeader(k, v));
  if (!response.body) { res.end(); return; }
  const reader = response.body.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    res.write(value);
  }
  res.end();
}

export default async function handler(req, res) {
  try {
    const request = await toWebRequest(req);
    const response = await server.fetch(request);
    await sendWebResponse(res, response);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
`;
  await writeFile(path.join(fnDir, "index.mjs"), entry);

  await writeFile(path.join(fnDir, ".vc-config.json"), JSON.stringify({
    runtime: "nodejs20.x",
    handler: "index.mjs",
    launcherType: "Nodejs",
    shouldAddHelpers: false,
    supportsResponseStreaming: true
  }, null, 2));

  // Minimal package.json so Node treats index.mjs/server.js as ESM
  await writeFile(path.join(fnDir, "package.json"), JSON.stringify({ type: "module" }));

  // 3. Routing config: serve static first, fall back to SSR
  const config = {
    version: 3,
    routes: [
      { handle: "filesystem" },
      { src: "/(.*)", dest: "/ssr" }
    ]
  };
  await writeFile(path.join(out, "config.json"), JSON.stringify(config, null, 2));

  console.log("Vercel Build Output ready at", out);
}

main().catch((e) => { console.error(e); process.exit(1); });
