/**
 * Generates public/sitemap.xml from the same routes as src/App.tsx.
 * Default base URL is production; override with SITE_URL or VITE_SITE_URL if needed.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import { SitemapStream, streamToPromise } from "sitemap";
import { portfolioProjects } from "../src/data/portfolio";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULT_SITE_URL = "https://www.terracepool.com";

/** Indents minified XML so each tag is on its own line (handles mixed-content lines like `<loc>…</loc>`). */
function prettifyMinifiedXml(xml: string): string {
  const withBreaks = xml
    .replace(/\?>\s*</, "?>\n<")
    .replace(/></g, ">\n<");
  const lines = withBreaks
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  let depth = 0;
  const indent = "  ";
  const out: string[] = [];
  for (const t of lines) {
    if (t.startsWith("</")) {
      depth = Math.max(0, depth - 1);
    }
    out.push(indent.repeat(depth) + t);
    const isDeclaration = t.startsWith("<?");
    const hasCloseInside = t.includes("</");
    const isOpening =
      !isDeclaration &&
      t.startsWith("<") &&
      !t.startsWith("</") &&
      !t.endsWith("/>") &&
      !hasCloseInside;
    if (isOpening) {
      depth += 1;
    }
  }
  return `${out.join("\n")}\n`;
}

/** Kept in sync with <Routes> in src/App.tsx */
const STATIC_ROUTES: { url: string; changefreq: string; priority: number }[] = [
  { url: "/", changefreq: "weekly", priority: 1 },
  { url: "/terrace-pools", changefreq: "monthly", priority: 0.9 },
  { url: "/pool-renovations", changefreq: "monthly", priority: 0.9 },
  { url: "/pool-tech", changefreq: "monthly", priority: 0.85 },
  { url: "/prices", changefreq: "monthly", priority: 0.85 },
  { url: "/building-renovation-gallery", changefreq: "monthly", priority: 0.8 },
  { url: "/gallery", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.9 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.9 },
];

function getHostname(): string {
  const raw =
    process.env.SITE_URL?.trim() ||
    process.env.VITE_SITE_URL?.trim() ||
    DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

async function main(): Promise<void> {
  const hostname = getHostname();
  const portfolioEntries = portfolioProjects.map((p) => ({
    url: `/portfolio/${p.slug}`,
    changefreq: "monthly",
    priority: 0.75,
  }));

  const links = [...STATIC_ROUTES, ...portfolioEntries];

  const stream = new SitemapStream({ hostname });
  const xmlBuffer = await streamToPromise(
    Readable.from(links).pipe(stream)
  );

  const outPath = join(__dirname, "..", "public", "sitemap.xml");
  writeFileSync(outPath, prettifyMinifiedXml(xmlBuffer.toString()));

  console.log(`Wrote ${outPath} (${links.length} URLs, base: ${hostname})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
