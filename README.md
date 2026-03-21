# Aimplemetance.cz

Moderní jednostránkový React web zaměřený na AI automatizace pro firmy.

## Jak spustit projekt

Tento projekt je postaven na nástroji [Vite](https://vitejs.dev/).

### 1. Instalace závislostí
Pokud jste to ještě neudělali, nainstalujte potřebné balíčky:
```bash
npm install
```

### 2. Spuštění vývojového serveru
Pro lokální vývoj a prohlížení webu použijte:
```bash
npm run dev
```
Po spuštění uvidíte v terminálu adresu (obvykle `http://localhost:3000`), na které web běží.

### 3. Sestavení pro produkci (Deploy)
Pokud chcete web nahrát na server nebo GitHub Pages/Vercel:
```bash
npm run build
```
Výsledné soubory se vygenerují do složky `dist/`.

## Struktura projektu
- `/src/components` - Jednotlivé sekce webu (Hero, Services, Contact atd.)
- `/src/App.jsx` - Hlavní komponenta sestavující web
- `/src/index.css` - Globální styly a design systém
- `index.html` - Vstupní bod s nastaveným SEO (title, meta description)
