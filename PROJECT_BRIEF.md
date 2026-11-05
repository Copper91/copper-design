# Copper Design — Project Brief

## Business
- What Copper Design does: a creative studio offering four disciplines: **Brand Identity, Graphic Design, AI Creative and Motion Graphics** (per the owner's style reference). It sells design work to clients who need it.
- Audience / ideal client: businesses and individuals who need professional design: new businesses, brands launching or refreshing, teams producing campaigns and social content.
- Location / service area: TBD (FAQ says work happens online/remotely; owner to confirm).
- Primary goal of the site: win clients. That means enquiries first ("Start a project" / "Book a call") and the portfolio second.
- Slogan: "Design Without Limits."

## Brand
- **Logo**: owner's real logo. Source file: `brand/logo-original.jpg` (2000×2000, white on black). Traced with potrace into clean `currentColor` SVGs:
  - `public/brand/copper-design-lockup.svg` (monogram + wordmark)
  - `public/brand/copper-design-monogram.svg` (monogram only)
  - path data in `src/data/logo.ts`, used inline by `src/components/Logo.astro` and the loader
  - favicons: `public/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png` (180); OG image `public/og-default.png` (black with logo)
- **Style reference**: `docs/style-reference.webp` (owner's mock-up).
- **Palette**: monochrome, dark only. Tokens in `src/styles/global.css`: `--bg #050505`, `--bg-raised #0b0b0b`, `--card #101010`, `--card-hover #161616`, `--fg #f5f5f5`, `--fg-muted #a3a3a3`, `--fg-subtle #858585`, hairlines at 9% / 20% white. No copper/orange accents.
- **Fonts** (self-hosted via Fontsource, OFL): **Archivo Variable** at 800 weight / 112% width for the huge uppercase display lines; **Space Grotesk Variable** for sentence-case headings and card titles; **Inter Variable** for body and UI.
- Voice: bold, confident, intentional; honest about AI use.

## Pages
- [x] Home (order follows the reference): hero "Design / Without / Limits", four discipline cards, About block, horizontal scroll-snap "Signature projects", five-step process, testimonials (hidden until real), centred uppercase CTA
- [x] Work: filterable by discipline, plus 6 concept project pages (`/work/<slug>/`)
- [x] Services: four disciplines, process (detailed), packages, FAQ
- [x] About: studio text, "How AI fits our process", values
- [x] Journal: "coming soon" placeholder (noindex and out of the sitemap while empty)
- [x] Contact: form, honeypot, success state (`/contact/thanks/` for no-JS redirects)
- [x] 404, Privacy (placeholder, TODO)

## Stack & hosting
- Framework: Astro 7.4.6 + Tailwind CSS 4.3.4 (Vite plugin) + TypeScript 6.0.3, `@astrojs/sitemap` 3.7.4, Astro `ClientRouter` for client-side navigation. Exact versions are pinned.
- Output: fully static (`dist/`); deploys to Netlify, Vercel or Cloudflare Pages.
- Domain / hosting: TBD. Placeholder `https://copperdesign.example` is set in `astro.config.mjs`.

## Glitch loader
- `src/components/GlitchLoader.astro`. A full-screen black overlay with the logo: red/cyan RGB-split copies, two clip-path slice layers displaced horizontally, flicker and scanlines, plus a thin progress line.
- Plays on the first visit once per session (inline head script, `sessionStorage` key `cd-intro`, wrapped in try/catch, self-clearing timers) and on every internal navigation. For navigation it hooks `astro:before-preparation` and wraps `event.loader` so the new page loads in parallel with a 600 ms minimum. It then fades over 240 ms, with a hard cap at 900 ms. Measured: about 650 ms visible plus the fade.
- Safety:
  - `display: none` unless JS turns it on, so it never shows without JS;
  - `aria-hidden="true"` and `pointer-events: none`, so it can't trap focus or block clicks;
  - `transition:persist`, so it survives page swaps.
- Reduced motion: no split, slices, flicker or scanlines; a static logo with a ~200 ms fade.
- Page scripts (menu, Work filters, project scroller, contact form, scroll reveals) re-initialise on `astro:page-load`. The contact form has `data-astro-reload` so the router never intercepts it.

## Design research (patterns adopted)
v1 used a short scan of 2025–26 award-site and agency-portfolio trend coverage. v2 follows the owner's own style reference, which uses many of the same patterns:
- Oversized uppercase display typography, with the last line in grey.
- Monochrome dark UI, and a single strong primary CTA (white pill).
- Numbered service cards and a horizontal "cinematic" project scroller with scroll-snap.
- Sticky minimal nav with spaced small-caps links and an outlined pill CTA.
- Tiny letter-spaced eyebrow labels with a leading rule.
- Subtle scroll reveals and faint geometric line art, respecting reduced motion.
- Trust through honesty (no fake social proof): concept work is labelled, and testimonials are hidden until real.

## Decisions
- 2026-11-05: Repo created; `copper-design-builder` agent added to lead site work.
- 2026-11-05: Astro + Tailwind v4 static site; dependencies pinned with `save-exact`.
- 2026-11-05: Portfolio uses six self-initiated **concept projects**, each with original generated SVG artwork (now greyscale), all labelled "Concept". No client claims.
- 2026-11-05: No testimonials, client logos, awards or statistics until the owner supplies real ones. The `Testimonials` component renders only when `testimonials` in `src/data/home.ts` is non-empty. The quotes in the style reference were not used because they aren't known to be real.
- 2026-11-05: Package prices show "Quoted per project" until set (`price: null`).
- 2026-11-05: Contact form posts by `fetch` to `site.formEndpoint` (Formspree-style JSON). With no endpoint it simulates success in dev only; production shows an honest "not connected yet" message. Honeypot field `_gotcha`.
- 2026-11-05: "Book a call" falls back to `/contact/?enquiry=call` until a booking link is set.
- 2026-11-05: JSON-LD `Organization` (not `LocalBusiness`) because address and location are unknown.
- 2026-11-05 (v2): Restyled to the owner's monochrome reference. Dropped the copper palette, the Fraunces serif and the light theme/toggle; the site is dark-only per the reference. Contrast is AA-checked: subtle grey `#858585` is ≥4.9:1 on all card surfaces.
- 2026-11-05 (v2): Services are the four disciplines from the reference. "Web & UI" was removed as a separate service; the fintech concept became a Motion Graphics product-reveal concept.
- 2026-11-05 (v2): Packages and FAQ moved from Home to Services, so Home matches the reference order. The marquee and bento grid were removed.
- 2026-11-05 (v2): About text ("Black-owned creative studio…") taken from the owner's reference. Marked TODO(owner) to confirm.
- 2026-11-05 (v2): Footer "Connect" shows only social accounts with a real URL. Instagram/Behance/LinkedIn/YouTube are listed in `site.ts` with empty hrefs.
- 2026-11-05 (v2): Logo traced with potrace (turdsize 40, alphamax 0.9) at full resolution. The trace is close to the original, with slight edge softness from the JPEG; a vector original from the owner would be better.

## Owner TODOs
- [ ] **Form endpoint**: create a Formspree form (recommended; works on any host) and set `formEndpoint` in `src/data/site.ts`. Alternative on Netlify: Netlify Forms (add `data-netlify="true"` and `netlify-honeypot="_gotcha"` to the form and drop the fetch endpoint).
- [ ] **Contact email**: `email` in `src/data/site.ts` (also adds "Email" to the footer Connect list).
- [ ] **Social URLs** (Instagram, Behance, LinkedIn, YouTube; only real ones): `socials` in `src/data/site.ts`.
- [ ] **Booking link** (Cal.com / Calendly): `bookingUrl` in `src/data/site.ts`.
- [ ] **Domain**: `SITE_URL` in `astro.config.mjs` (canonical URLs, sitemap, robots, OG).
- [ ] **Package prices and currency**: `src/data/home.ts`.
- [ ] **Testimonials**: real, approved quotes only, in `testimonials` in `src/data/home.ts` (the section appears automatically).
- [ ] **Journal articles**: `src/data/journal.ts`. Once there are entries, remove the `/journal/` sitemap exclusion in `astro.config.mjs`; article pages are not built yet.
- [ ] **Confirm the About text** (from the style reference) and add founder name, story, location and photo.
- [ ] **Confirm the AI-use commitments** (logos drawn by hand, AI use disclosed per asset) on About and in the FAQ, plus the ownership/rights FAQ answer.
- [ ] **Reply time** on the contact page; **remote working / service area** (FAQ).
- [ ] **Vector logo** (AI/SVG/PDF) if available, to replace the traced version.
- [ ] **Privacy notice**: replace the placeholder with a reviewed notice naming the form processor and any analytics.
- [ ] **Real case studies and project imagery** (the reference shows photo-led cards): replace or add to the concept projects in `src/data/projects.ts`, with client permission.
