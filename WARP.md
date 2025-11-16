# WARP.md

Guidance for WARP (warp.dev) when working in this repository.

## Tech stack

- **Framework:** Next.js 16, App Router (`app/` directory), TypeScript
- **Styling:** Tailwind CSS 3, global CSS in `app/globals.css`
- **Animation:** Framer Motion (hero video cross-fade, footer reveal, etc.)
- **Utilities:** `clsx`/`cn` helper, `tailwind-merge`
- **Linting/formatting:** ESLint (Next.js config + TypeScript rules), Prettier + `prettier-plugin-tailwindcss`

## Key commands

From the repo root (`openinsurancecorporate`):

- Development server: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`
- Lint TypeScript/JavaScript: `npm run lint`

There is currently **no test script** configured in `package.json`. If tests are added, update this section with the appropriate commands (e.g., `npm test`, `npm run test:e2e`).

## Architecture and structure

- **App entry:**
  - `app/layout.tsx` – root layout, font wiring, theme provider, global navigation.
  - `app/page.tsx` – marketing homepage (hero video + continuous canvas content sections).
- **Routing:** App Router with top-level routes under `app/`:
  - `app/platform/page.tsx` – platform overview page.
  - `app/open-os/page.tsx` – Open OS page.
  - `app/research/page.tsx` – research index.
  - `app/worldview/page.tsx` – philosophy/worldview page.
- **Shared components:**
  - `components/Navigation.tsx` – fixed glassy navbar with scroll state.
  - `components/Hero.tsx` – time-of-day hero with video background, sundial control, CTA buttons.
  - `components/VideoFooter.tsx` – video-backed footer.
  - `components/Section.tsx`, `components/BrushTransition.tsx` – layout primitives / section transitions.
  - `components/home/*` – homepage sections (story, disruption, OpenOS preview, audiences, CTA).
- **Styling & themes:**
  - `app/globals.css` defines CSS variables for page text/background, glass surfaces, and a global **cream canvas + paper texture** background applied at the `body` level.
  - Theme variants are handled via `html[data-theme=...]` attributes (`dawn`, `day`, `dusk`, `night`), which adjust the underlying cream palette but keep the canvas continuous.
- **Tailwind config:**
  - `tailwind.config.ts` extends brand colors, surface/text tokens, and font families (`sentient`, `satoshi`).

## Conventions & notes

- Prefer **Tailwind utility classes** for layout + typography; use `app/globals.css` only for cross-cutting tokens and complex backgrounds (e.g., the global canvas texture).
- The hero, sundial, and footer assume a dark-over-light composition (dark video, light text); when adjusting colors, make sure contrast remains sufficient for accessibility.
- When adding new pages, follow the pattern of:
  - `app/<route>/page.tsx` wrapping content in `<main className="min-h-screen text-[var(--page-text)]">` so the global canvas remains visible.
- For new animations, prefer Framer Motion and keep motion durations/easings consistent with the hero/footer for a coherent feel.