# AGENTS.md

Single-page Next.js 16 portfolio (App Router, React 19), deployed on Vercel. pnpm, Tailwind v4, TypeScript strict.

## Commands

| Command      | Action                                   |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Dev server at `localhost:3000`           |
| `pnpm build` | Production build                         |
| `pnpm lint`  | ESLint (flat config `eslint.config.mjs`) |

No tests exist — no test runner configured.

## Architecture

- `app/` — App Router layout + page (only one page: `/`)
- `features/home/` — feature components (organized by domain, not route)
- `components/ui/` — shared primitives (Badge, Button, Dialog via Radix)
- `components/mouse-tracker.tsx` — global client component (renders in layout)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `public/` — static images referenced via `src="/filename.png"`

`"use client"` is declared at feature-level components when interactivity is needed (header, projects). About, Skills, Experience, Footer are server components.

Use `@/` path alias (e.g. `@/lib/utils`, `@/components/ui/button`).

## Tailwind v4

- **No `tailwind.config.js`** — Tailwind v4 uses `@import "tailwindcss"` in `globals.css` and `@theme` directive for design tokens.
- CSS variables defined in `@layer base` (slate-900 bg, teal-300 accent).
- Theme colors use custom CSS variables with `var(--color-*)` naming.

## Conventions

- `inter` font via `next/font/google` as CSS variable (`--font-inter`), applied via `font-sans`.
- Badges styled inline with `bg-teal-400/10 text-teal-300`.
- Skill icons from `skillicons.dev` are `unoptimized` (external domain, no Next.js optimization).
- `next.config.ts` allows `skillicons.dev` as a remote image pattern.
- Sticky section headers use backdrop-blur pattern (see `about.tsx`, `skills.tsx`, etc.).
- Project list uses Radix Dialog for detail modals (projects.tsx).
- Link targets: social links open in new tab (`target="_blank" rel="noreferrer noopener"`).

## Notable

- `CLAUDE.md` only contains `@AGENTS.md` — this file is the single instruction source.
- No `.env` files needed to run the project.
