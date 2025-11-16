# Open Insurance Corporate Site – Implementation Plan (Next.js + Tailwind + Framer Motion)

## High-level Goal

Build a **Next.js App Router** corporate site for **openinsurance.ai** in the **repo root**, using **TypeScript**, **Tailwind CSS**, and **Framer Motion**, with:

- A **story-driven, art-gallery-like experience** inspired by Alexander McQueen.
- Heavy use of **serif typography**, **landscape imagery**, and **brush-stroke transitions**.
- A **time-of-day-aware light/dark experience** (day/night cycle) rather than a simple theme toggle.
- A **sticky, elegant navigation bar** with a **text-based logo** (Sentient + Satoshi) and an external **Login** link.
- Several **interior pages** (Platform, Open OS, Philosophy, Research) that share the same aesthetic.

This document describes the structure, design system, and key components so the implementation can proceed consistently.

---

## Tech Stack & Project Setup

**Framework & language**
- Next.js (App Router, latest stable – e.g. 14+)
- TypeScript
- React 18

**Styling & animation**
- Tailwind CSS
- Custom CSS (for clip-path / brush strokes where needed)
- Framer Motion (page + section transitions, micro-interactions)

**Tooling**
- ESLint (TypeScript + React) and Prettier
- `next/font/local` for self-hosted fonts from Fontshare

**Project location**
- Initialize the Next.js project **in the repo root** (`/Users/.../openinsurancecorporate`).
- Use **App Router** with `app/` directory (no legacy `pages/`).

**Suggested initialization (conceptual)**
- Use `create-next-app` with:
  - TypeScript
  - App Router enabled
  - Tailwind enabled
  - ESLint enabled
  - Prettier configured afterwards

---

## Information Architecture & Routes

Top-level routes (App Router):

1. `/` – **Home**
2. `/platform` – **Platform** (AI-based insurance shopping & management)
3. `/open-os` – **Open OS** (web-based enterprise OS)
4. `/worldview` – **Our Worldview & Philosophy** (renamed “company” page)
5. `/research` – **Our Research** (renamed “contact” page concept)

**Login** is an **external link** in the nav pointing to: `https://dev.openinsurance.ai`.

### Navigation labels

Use the following labels in the top nav (desktop):

- `Home` → `/`
- `Platform` → `/platform`
- `Open OS` → `/open-os`
- `Our Worldview & Philosophy` → `/worldview`
- `Our Research` → `/research`
- `Log In` → external `https://dev.openinsurance.ai`

### Directory structure (key parts)

- `app/layout.tsx` – Root layout
- `app/page.tsx` – Home page
- `app/platform/page.tsx`
- `app/open-os/page.tsx`
- `app/worldview/page.tsx`
- `app/research/page.tsx`

- `components/Navigation.tsx`
- `components/Hero.tsx`
- `components/Section.tsx`
- `components/BrushTransition.tsx`
- `components/FeatureCard.tsx`
- `components/animations/…` (ParallaxImage, MagneticButton, etc.)

- `lib/animations.ts`
- `lib/theme.ts` or `hooks/useDayNightCycle.ts`

- `public/images/hero/hero.png` (hero landscape)
- `public/fonts/sentient-*.woff2`
- `public/fonts/satoshi-*.woff2`

---

## Branding, Colors, and Typography

### Color palette

Use these as Tailwind custom colors (under `theme.extend.colors`):

- `brand.primary` – `#e6ccb2` (soft, warm beige)
- `brand.secondary` – `#34293D` (deep, moody plum; primary dark background)
- `brand.accent` – `#837E87` (muted grey-lavender)
- `brand.accentAlt` – `#7f5539` (rich, warm brown)
- `brand.logo` – `#DAD8D2` (light grey-beige used for logo text)

Additional neutrals for UI:

- `surface.light` – subtle off-white (e.g. `#f7f3ee`)
- `surface.dark` – deep near-black version of secondary (darkened `#34293D`)
- `text.primaryLight` – dark text on light backgrounds
- `text.primaryDark` – light text on dark backgrounds

These will be used in combination with the **day/night theme system** (see below) via CSS variables so backgrounds and text can smoothly shift over time.

### Typography

Fonts come from Fontshare:

- **Sentient** (serif)
  - Use for display headlines and the "open" part of the logo.
  - At minimum, include:
    - Sentient Bold Italic (for logo)
    - Sentient Regular/Medium (for headings)

- **Satoshi** (sans)
  - Use for body text and the "insurance" part of the logo.
  - At minimum, include:
    - Satoshi Light (for logo and subtle subheadings)
    - Satoshi Regular (for body text)

Implementation:

- Download font files and place in `public/fonts/sentient/` and `public/fonts/satoshi/`.
- Use `next/font/local` in a layout-level font module (e.g. `fonts.ts`) to define:
  - `sentient` (headings)
  - `satoshi` (body)
- Wire these into Tailwind via `fontFamily` extension for utility classes like `font-sentient` and `font-satoshi`.

### Logo (text-based)

Recreate the logo as text in the nav, not an image:

- Entire string: `openinsurance` (all lowercase).
- Styling:
  - `open`: **Sentient Bold Italic**
  - `insurance`: **Satoshi Light**
  - Base color: `#DAD8D2` (can adapt slightly under dark/light themes).

Conceptual JSX example for reference (actual implementation can vary):

```tsx
<span className="inline-flex items-baseline gap-1">
  <span className="font-sentient font-bold italic tracking-tight text-brand-logo">
    open
  </span>
  <span className="font-satoshi font-light tracking-[0.18em] uppercase text-brand-logo/90">
    insurance
  </span>
</span>
```

The logo should respond subtly to the day/night cycle with slight color/brightness adjustments, without losing legibility.

---

## Day/Night Cycle Theme System

Instead of a simple dark-mode toggle, the site should **experience a day-night cycle** based on the visitor’s local time.

### Behavior

- **Detect local time** via JavaScript (`new Date()` on the client).
- Determine a **time phase**:
  - **Dawn**: 05:00–08:00
  - **Day**: 08:00–17:00
  - **Dusk**: 17:00–20:00
  - **Night**: 20:00–05:00
- Set a `data-theme` attribute on `<html>` or `<body>` (e.g. `data-theme="dawn" | "day" | "dusk" | "night"`).
- Use CSS variables (configured via Tailwind `:root` and `[data-theme]` selectors) to define:
  - Background gradients
  - Text color
  - Accent and border colors
  - Overlay opacity for imagery

### Implementation sketch

- `hooks/useDayNightCycle.ts`:
  - Compute current phase from local time.
  - Update state on an interval (e.g. every 5–15 minutes, not every second).
- `providers/ThemeProvider.tsx`:
  - Wraps the app in `app/layout.tsx`.
  - Reads phase from `useDayNightCycle` and sets `data-theme`.
  - Optional manual override can be added later (e.g. “lock to dark mode”).

### Visual language for phases

- **Dawn**: soft, warm gradients (beige + blush), low contrast, slightly misty overlays.
- **Day**: light backgrounds (off-white), crisp typography, landscapes brighter.
- **Dusk**: golden-hour warmth, more saturated backgrounds, long-shadow feeling.
- **Night**: dark plum backgrounds, subtle star-like noise textures, high-contrast text.

Framer Motion can animate opacity/transform of background overlays so transitions between phases feel smooth and cinematic (not jarring).

---

## Layout & Navigation

### Root layout (`app/layout.tsx`)

Responsibilities:

- Import global styles (Tailwind, custom CSS).
- Apply `ThemeProvider` for day/night cycle.
- Load fonts via `next/font/local` and apply their classNames.
- Set global metadata (title, description) and `<html lang="en">`.
- Render shared `Navigation` at the top and potentially a site-wide footer.

### Sticky navigation (`components/Navigation.tsx`)

Design:

- Sticky at top: `position: sticky; top: 0; z-index: high`.
- Over hero, nav is **transparent** or minimally visible.
- After scroll, nav background gains a **glassmorphism** effect:
  - Slight blur
  - Semi-transparent dark/light surface depending on phase
  - Soft border and shadow

Structure:

- **Left**: Logo text (`openinsurance`).
- **Center**: Nav links (Home, Platform, Open OS, Our Worldview & Philosophy, Our Research).
- **Right**: `Log In` button linking to `https://dev.openinsurance.ai`.
  - Styled as an outline or subtle pill button.

Interaction:

- Framer Motion for:
  - Initial fade-in of nav on page load.
  - Slight size/background change on scroll (e.g. shrink height, increase blur).
- Mobile:
  - Hamburger icon that opens a full-screen or side-drawer nav.
  - Links stacked with generous spacing and touch-friendly targets.

---

## Hero Section & Imagery

### Assets

- Create folder: `public/images/hero/`.
- Primary hero image: `public/images/hero/hero.png` (landscape imagery).
  - Use Next.js `<Image>` component for optimization.

### Hero content (`components/Hero.tsx`)

Concept:

- Full viewport height section with **cinematic landscape**.
- The hero feels like a **canvas**: subtle textures, layered gradients, and brush-stroke transitions into the next section.

Content elements:

- Tagline (large serif headline) – e.g. placeholder: *"Insurance, reimagined as an operating system."*
- Subheading – 1–2 sentence explanation:
  - Open Insurance as the one-of-a-kind AI insurance shopping platform, plus Open OS as the full web-based OS for the industry.
- Primary CTA – e.g. `Explore the Platform` → scroll to platform section or `/platform`.
- Secondary CTA – e.g. `Read Our Research` → `/research`.

Visual behavior:

- Background image with **parallax**: slow movement vs scroll.
- Overlay gradient color tied into day/night phase (dawn/day/dusk/night).
- Brush-stroke mask at bottom to transition into the next section (via SVG clip-path + Framer Motion).

---

## Section & Transition System

### Reusable section wrapper (`components/Section.tsx`)

- Provides padding, max-width, and vertical rhythm.
- Uses Intersection Observer + Framer Motion to animate in when scrolled into view (fade + slight translate).

### Brush-stroke transitions (`components/BrushTransition.tsx`)

- Uses inline SVG or `<svg>` background with organic brush-stroke shapes.
- Applied at top and/or bottom of sections.
- Animations:
  - Reveal sections via mask or clip-path that sweeps across the screen.
  - Use easing curves that feel natural and “hand-driven,” not mechanical.

### Animations library (`lib/animations.ts`)

- Export common Framer Motion variants:
  - `fadeInUp`, `fadeIn`, `staggerContainer`, etc.
- Centralize transition timing (durations, easings) to keep motion coherent.

---

## Page-by-Page Content Structure

### Home page (`app/page.tsx`)

Sections (rough outline):

1. **Hero** – story hook and landscape imagery.
2. **What is Open Insurance?** – narrative section explaining the concept.
   - Focus on: single shopping + management layer for all insurance.
   - Emphasize the AI chat + voice buying experience.
3. **Why it matters / industry disruption**.
   - Contrast fragmented tools vs. unified platform.
   - Introduce resilience, enterprise architecture, and reliability.
4. **Open OS preview**.
   - Small teaser of the full OS: websites, app store, ERP, CRM, tickets, claims, email builders.
   - Visuals: maybe a stylized OS window layout in a minimal, artistic way.
5. **Who it’s for**.
   - Carriers, FMOs, agents, enterprises (non-insurance businesses too).
6. **Bridge to philosophy & research**.
   - Teaser snippets linking to `/worldview` and `/research`.
7. **Final CTA**.
   - Invite users to explore platform or join early access / talk to team.

Each section separated with brush-stroke transitions and aligned with the day/night theme’s mood.

### Platform page (`app/platform/page.tsx`)

Focus: **the AI interface for buying and managing insurance**.

- Hero-like intro with landscape and concise summary.
- Section: "Buy insurance through AI chat and voice".
- Section: "Manage all your insurance in one place" with feature cards.
- Section: user journey/storyboard for a typical user.
- CTAs to `Our Research` or contact channels (if later added).

### Open OS page (`app/open-os/page.tsx`)

Focus: **the enterprise OS for carriers, FMOs, agents, and adjacent businesses**.

- Hero section with bold statement about running your entire operation on one OS.
- Feature groups:
  - Website builder & app store
  - ERP, CRM, lead management
  - Customer service & ticketing
  - Claims inboxing & email builders
- Conceptual architecture illustration (animated connections between modules).
- Compare life with and without Open OS (split layout, story-driven).

### Our Worldview & Philosophy (`app/worldview/page.tsx`)

Tone: **brand manifesto / design philosophy**.

- Narrative on why Open Insurance exists.
- The problem with current insurance systems.
- Principles: openness, reliability, AI-native, unified experience.
- Landscape imagery used as metaphors (e.g., branching valleys, paths, horizons).

### Our Research (`app/research/page.tsx`)

Tone: **insights and thought leadership**, replacing a classic “Contact” page with something deeper.

- Summaries of research areas (market, technology, consumer behavior).
- Placeholder components for whitepapers, reports, case studies (cards).
- Potential simple contact or “join research list” section later.

All interior pages should:

- Use the same layout & nav.
- Use subtle brush-stroke transitions and day/night theming.
- Favor long-form, elegant layouts over “generic SaaS grid” patterns.

---

## Responsive & Performance Considerations

- Mobile-first Tailwind classes; ensure hero imagery and typography remain legible and artful on small screens.
- Mobile nav: full-screen overlay or slide-in drawer.
- Simplify or tone down heavy animations on mobile to keep performance strong.
- Use Next.js `<Image>` optimization for all imagery.
- Use `next/font/local` to avoid layout shifts and unnecessary font weight loading.

---

## GitHub & Deployment

- Keep project in this repo root.
- Once implemented, create an initial commit and push to GitHub.
- Prepare for deployment (likely Vercel) with standard Next.js build (`npm run build`) and start commands.
- Document scripts and basic usage in `README.md`.

---

This plan should give enough structure for an agent to:
- Initialize the Next.js project with the correct stack.
- Implement the day/night theming system.
- Build the navigation, hero, and core pages.
- Wire up Tailwind, fonts, and Framer Motion to achieve the desired art-driven, serene, and unique experience for openinsurance.ai.
