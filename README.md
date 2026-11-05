# Copper Design

The Copper Design website.

- `PROJECT_BRIEF.md`: the business, brand, pages and decisions. Keep it up to date.
- `.claude/agents/copper-design-builder.md`: a Claude Code agent that builds and maintains this site.

## Run locally

Requires Node.js 22.12+ (developed on 22.23) and npm.

```sh
npm install        # install pinned dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # type-check (astro check) + static build to dist/
npm run preview    # serve the production build locally
```

- Site content (services, projects, packages, FAQ, contact settings) lives in `src/data/`.
- Design tokens (copper palette, light/dark themes) are in `src/styles/global.css`.
- Open owner TODOs are listed in `PROJECT_BRIEF.md`; search the code for `TODO(owner)`.
- Reference screenshots: `docs/screenshots/`.
