// Rewrites Next.js's root-absolute asset/link paths ("/_next/...", "/images/...",
// "/leistungen", ...) to relative ones in the `out/` export, so it can be opened
// directly via file:// (double-click index.html) exactly like the plain-HTML
// sibling projects in this repo, in addition to still working when served from a
// real web root.
//
// Must run against a webpack build (`npm run build:static`, i.e. `next build`
// without --turbopack) — Turbopack's chunk loader resolves paths via
// `location.origin`, which file:// URLs don't have, and no amount of string
// rewriting in the output can fix that. Webpack resolves relative to the
// executing <script>'s own src, which works fine under file://.
//
// Generic (not per-route hardcoded), unlike the sibling projects' scripts: this
// site has ~8 top-level routes, so every internal href of the form "/<segment>"
// (optionally with a "#anchor") is rewritten to "<prefix><segment>.html<#anchor>"
// automatically. Depth-aware: every HTML file gets a "../" prefix per path
// segment below out/ (all routes here are flat/depth-1, but this still holds if
// a nested route is added later). Known limitation: path strings baked inside
// *shared* .js chunks (referenced from pages at more than one depth) are only
// root-stripped, since a single static prefix can't be correct for every depth
// that loads them — harmless for real web hosting (root-absolute paths there are
// untouched and correct regardless), only a possible file://-only quirk.
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
if (!fs.existsSync(outDir)) {
  console.error(`Not found: ${outDir} — run "npm run build:static" first.`);
  process.exit(1);
}

function walk(dir, exts) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, exts));
    else if (exts.includes(path.extname(entry.name))) out.push(full);
  }
  return out;
}

function depthOf(file) {
  const rel = path.relative(outDir, path.dirname(file));
  return rel === "" ? 0 : rel.split(path.sep).length;
}

const htmlFiles = walk(outDir, [".html"]);
const jsFiles = walk(outDir, [".js"]);
let changedFiles = 0;
let totalHits = 0;

for (const file of htmlFiles) {
  const prefix = "../".repeat(depthOf(file));
  const rules = [
    // Reserved asset prefixes and the root itself, before the generic route rule.
    [/href="\/"/g, `href="${prefix}index.html"`],
    [/href="\/(#[a-zA-Z0-9_-]+)"/g, `href="${prefix}index.html$1"`],
    [/(src|href)="\/(_next\/|images\/|icon\.png)/g, `$1="${prefix}$2`],
    // The generated /icon favicon route, e.g. href="/icon?409e43d3e29b6268".
    [/href="\/icon(\?[^"]*)?"/g, `href="${prefix}icon$1"`],
    // Generic single-segment route, e.g. href="/leistungen" or href="/leistungen#pflasterarbeiten".
    [/href="\/(?!_next\/|images\/|icon\.png)([a-zA-Z0-9_-]+)((?:#[a-zA-Z0-9_-]+)?)"/g, `href="${prefix}$1.html$2"`],
  ];
  let text = fs.readFileSync(file, "utf-8");
  let hits = 0;
  for (const [pattern, replacement] of rules) {
    const matches = text.match(pattern);
    if (matches) hits += matches.length;
    text = text.replace(pattern, replacement);
  }
  if (hits > 0) {
    fs.writeFileSync(file, text);
    changedFiles++;
    totalHits += hits;
  }
}

// Shared JS chunks: best-effort root-strip only (see limitation note above).
const jsRules = [
  [/href:"\/"/g, 'href:"index.html"'],
  [/"\/_next\/static\/media\/"/g, '"_next/static/media/"'],
  [/"\/_next\/static\/"/g, '"_next/static/"'],
  [/"\/_next\/"/g, '"_next/"'],
  [/"\/images\/([a-zA-Z0-9_./-]+)"/g, '"images/$1"'],
];
for (const file of jsFiles) {
  let text = fs.readFileSync(file, "utf-8");
  let hits = 0;
  for (const [pattern, replacement] of jsRules) {
    const matches = text.match(pattern);
    if (matches) hits += matches.length;
    text = text.replace(pattern, replacement);
  }
  if (hits > 0) {
    fs.writeFileSync(file, text);
    changedFiles++;
    totalHits += hits;
  }
}

console.log(`Rewrote ${totalHits} path(s) across ${changedFiles} file(s) in out/.`);
