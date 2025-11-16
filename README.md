# Open Insurance – Corporate Site

This repository contains the marketing and product overview site for **Open Insurance**. It presents the platform, Open OS, research, and worldview of the company in a single, continuous canvas experience.

The site is designed as a high-fidelity, story-first single-page experience with a hero video, canvas-style cream background, and a set of focused content sections.

---

## Features

- **Time-of-day hero**
  - Full-bleed background video that changes based on the viewer's local time.
  - Smooth cross-fade between hero phases using Framer Motion.
  - Primary call-to-action and a secondary link into the research section.

- **Sundial control**
  - Interactive control beneath the hero card to scrub through hero phases.
  - Phase dots and time display aligned with the navigation aesthetic.

- **Continuous canvas background**
  - Global cream gradient with a subtle canvas/paper texture applied at the `body` level.
  - Sections use transparent backgrounds so the canvas feels like one continuous surface with no seams.

- **Fixed navigation and video footer**
  - Glassy, scroll-aware navbar with links into key areas of the site.
  - Video-backed footer that mirrors the hero aesthetic and links into Platform, Open OS, Research, and company information.

- **Content sections**
  - Story and worldview
  - Industry disruption and product framing
  - Open OS preview
  - Audiences and use cases
  - Call-to-action section

---

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) with the App Router (`app/` directory)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 + global CSS in `app/globals.css`
- **Animation:** [Framer Motion](https://www.framer.com/motion/) for hero transitions, footer reveal, and micro-animations
- **Utilities:**
  - `clsx`/`cn` helper for composing class names
  - `tailwind-merge` for merging Tailwind utility classes
- **Linting and formatting:**
  - ESLint with the Next.js/TypeScript configuration
  - Prettier with `prettier-plugin-tailwindcss` for class sorting

> **Note:** This repository is front-end only. Any production APIs, data sources, or secrets are configured outside this codebase (for example, via environment variables in deployment).

---

## Getting started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+ (or a compatible package manager)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Lint the codebase

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## Project structure

High-level structure only (not an exhaustive file listing):

- `app/`
  - `layout.tsx` – root layout, fonts, theme provider, global navigation.
  - `page.tsx` – homepage (hero + content sections + footer).
  - `platform/page.tsx` – platform overview route.
  - `open-os/page.tsx` – Open OS route.
  - `research/page.tsx` – research index route.
  - `worldview/page.tsx` – philosophy/worldview route.
  - `globals.css` – global tokens and the cream canvas/paper background.
- `components/`
  - `Navigation.tsx` – fixed, scroll-aware navbar.
  - `Hero.tsx` – hero card, background video, and sundial control.
  - `VideoFooter.tsx` – video-backed site footer.
  - `Section.tsx`, `BrushTransition.tsx` – layout/transition primitives.
  - `home/*` – homepage content sections.
  - `animations/*` – Framer Motion-based primitives (e.g., `MagneticButton`, `ParallaxImage`).
- `lib/` – utility functions (e.g., hero video selection).
- `public/` – static assets (images, fonts, hero videos).
- `tailwind.config.ts` – Tailwind configuration and design tokens.
- `next.config.mjs` – Next.js configuration.
- `tsconfig.json` – TypeScript configuration.
- `eslint.config.mjs` – ESLint configuration.

---

## Design principles

- **Continuous canvas:** the background is treated as a single, continuous surface; sections should avoid solid background colors unless there is a strong UX reason.
- **Focused palette:** warm creams and deep charcoal tones, with accent colors coming from brand tokens in `tailwind.config.ts`.
- **Motion with purpose:** animations should feel calm and informative (e.g., transitions between phases, gentle reveals), never distracting.
- **Accessibility:** maintain sufficient contrast for text and key UI elements (navigation, sundial controls, CTAs) and avoid relying solely on color to convey meaning.

---

## License

This project is licensed under the **ISC License**. See `package.json` for details.
