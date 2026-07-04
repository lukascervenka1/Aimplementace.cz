// Prerenders the built SPA into static HTML so crawlers that don't execute
// JavaScript (GPTBot, ClaudeBot, PerplexityBot, and Googlebot's first pass)
// see the full page text instead of an empty <div id="root">.
//
// Runs after `vite build`: serves dist/ locally, opens it in headless
// Chromium, waits for React + GSAP to settle, scrolls through the page so
// ScrollReveal's IntersectionObserver-triggered sections render too, then
// captures the final DOM and overwrites dist/index.html — keeping the
// original <script type="module"> tag so React hydrates on top of it.

import { chromium } from 'playwright-chromium';
import { preview } from 'vite';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

async function main() {
  // Serves the already-built dist/ folder (production bundle, hashed asset
  // filenames) — NOT the dev server, which would prerender the wrong markup.
  const previewServer = await preview({
    root,
    preview: { port: 4173, strictPort: true },
  });
  const url = `http://localhost:4173/`;

  // --no-sandbox is required in containerized CI environments (Vercel's
  // build runs as root in a container where Chromium's sandbox can't init).
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });

  // Let the Hero GSAP timeline + entrance transitions finish.
  await page.waitForTimeout(2000);

  // Scroll the full page in steps so every ScrollReveal section
  // (IntersectionObserver-based) has a chance to fire before we snapshot.
  await page.evaluate(async () => {
    const step = 600;
    const height = document.body.scrollHeight;
    for (let y = 0; y < height; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);

  const html = await page.content();

  await browser.close();
  await previewServer.close();

  const distIndex = path.join(root, 'dist', 'index.html');
  await writeFile(distIndex, `<!DOCTYPE html>\n${html}`, 'utf-8');

  console.log('Prerendered dist/index.html with full page content.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
