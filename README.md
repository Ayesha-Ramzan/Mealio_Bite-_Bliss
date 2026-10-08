# Mealio_Bite Bliss

A halal Pakistani food & seafood delivery landing page — biryani, karahi, nihari, seekh kebab, Karachi seafood and fast food, delivered hot in 30 minutes.

Demo:

https://github.com/user-attachments/assets/347fdf1b-da34-463b-acd7-2d2d79ca575b


The repository ships **two flavours of the same frontend**:

| | Path | Stack | Use it for |
|---|------|-------|------------|
| **App** | `src/` | React 19 · TanStack Start · Tailwind CSS 4 | Full-stack development, SSR, future features |
| **Static** | `index.html` | Plain HTML · CSS · JS (single file) | Instant hosting on any static server, zero build step |

Both render the identical landing page and share the same images (`src/assets/`).

---

##  Features

- **Cuisine categories** — Biryani, Karahi, BBQ & Kebab, Seafood, Fast Food, Mithai
- **Featured restaurants** with ratings, delivery times and price ranges
- **Trending dishes** — the most ordered plates this week
- **Full menu browser** across five sections (Desi Handi & Rice, Charcoal BBQ, Karachi Seafood, Fast Food, Mithai & Sweets)
- **WhatsApp-first ordering** — every "Order" button opens a pre-filled WhatsApp chat with the dish, price and restaurant
- **Sign-in dialog**, address search bar, live delivery stats, floating status cards
- **Fully responsive** — mobile-first layout that scales up to desktop

##  Tech stack

| Layer | Tools |
|-------|-------|
| Framework | React 19, TanStack Start (SSR), TanStack Router + Query |
| Styling | Tailwind CSS 4, tw-animate-css, Radix UI primitives |
| Icons | lucide-react |
| Build | Vite, Nitro (Cloudflare-ready output) |
| Language | TypeScript |
| Static page | Vanilla HTML / CSS / JS — no dependencies |

##  Project structure

```
.
├── index.html              # Standalone single-file landing page (no build needed)
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Root layout, meta tags, error & 404 pages
│   │   └── index.tsx       # The landing page (all sections & data)
│   ├── assets/             # Food, restaurant & hero imagery
│   ├── components/ui/      # Shadcn-style UI primitives
│   ├── lib/                # Utilities
│   └── styles.css          # Design tokens (colors, fonts, shadows)
├── vite.config.ts
└── package.json
```

## 🚀 Getting started

### Prerequisites

- [Bun](https://bun.sh) (or Node.js 20+ with npm/pnpm)
- A WhatsApp number to receive orders on (see [Configuration](#⚙️-configuration))

### Run the React app

```bash
bun install
bun run dev        # start the dev server
bun run build      # production build (Nitro / Cloudflare target)
bun run preview    # preview the production build
```

### Serve the static page

No install, no build — the images are shared with the app, so serve them from the project root:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Or simply upload `index.html` together with the `src/assets/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel…).

## ⚙️ Configuration

All ordering happens through WhatsApp. To point the site at your own restaurant number:

- **React app** — change `WA_NUMBER` at the top of `src/routes/index.tsx`
- **Static page** — find & replace `923001234567` in `index.html`

##  Deployment

The React app builds to a Nitro output with Cloudflare as the default target (`bun run build`), so it deploys cleanly to Cloudflare Workers/Pages. For the quickest path to production, deploy the static `index.html` — it has zero runtime dependencies beyond the Google Fonts CDN.


---

© Mealio_Bite Bliss. All rights reserved.
