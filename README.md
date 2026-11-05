# Copper Design

The Copper Design website.

- `PROJECT_BRIEF.md`: the business, brand, pages and decisions. Keep it up to date.
- `.claude/agents/copper-design-builder.md`: a Claude Code agent that builds and maintains this site.

## Run locally

Requires Node.js 22.23.4+ (Astro 7 engines requirement) and npm.

```sh
npm install        # install pinned dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # type-check (astro check) + static build to dist/
npm run preview    # serve the production build locally
```

- Site content (services, projects, process, packages, FAQ, testimonials, journal, contact settings) lives in `src/data/`.
- Design tokens (monochrome, dark-only) and type styles are in `src/styles/global.css`.
- Logo: source `brand/logo-original.jpg`; traced SVGs in `public/brand/`; path data in `src/data/logo.ts`.
- Page-transition glitch loader: `src/components/GlitchLoader.astro` (Astro `ClientRouter`). Page scripts re-initialise on `astro:page-load`.
- Open owner TODOs are listed in `PROJECT_BRIEF.md`; search the code for `TODO(owner)`.
- Owner's style reference: `docs/style-reference.webp`. Reference screenshots: `docs/screenshots/`.
- `npm run preview` in this Astro version starts a background server; stop it with `npx astro preview stop`.
