// Prerenders the built SPA into static HTML so crawlers that don't execute
// JavaScript (GPTBot, ClaudeBot, PerplexityBot, and Googlebot's first pass)
// see the full page text instead of an empty <div id="root">.
//
// Uses React's own server renderer (ReactDOMServer.renderToString) — no
// headless browser involved, so there's no native Chromium binary that can
// break in a locked-down container (this replaced an earlier Playwright-based
// version that failed on Vercel's build image with a missing libnspr4.so).
//
// Runs after both builds:
//   1. `vite build`               → dist/            (client bundle)
//   2. `vite build --ssr ...`     → dist-ssr/         (Node-runnable server bundle)
// This script renders the SSR bundle to an HTML string and splices it into
// dist/index.html in place of the empty root div, keeping the original
// <script type="module"> tag so React hydrates on top of it in the browser.

import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

async function main() {
  const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
  const { render } = await import(pathToFileURL(ssrEntry).href);

  const appHtml = render();

  const templatePath = path.join(root, 'dist', 'index.html');
  const template = await readFile(templatePath, 'utf-8');

  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html — template shape changed?');
  }

  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  await writeFile(templatePath, finalHtml, 'utf-8');

  // Intermediate SSR build artifact — not needed once inlined above.
  await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });

  console.log('Prerendered dist/index.html with full page content.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
