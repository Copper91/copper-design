# Copper Design — Project Brief

## Business
- What Copper Design does: graphic design + AI-assisted design studio. Sells design work: brand identity / logos, social media graphics, marketing & print materials, web / UI visuals, and AI-generated imagery / concepts.
- Audience / ideal client: businesses and individuals who need professional design work: new businesses, small teams posting on social media, startups, and anyone launching or refreshing a brand.
- Location / service area: TBD (site copy says work happens online/remotely; owner to confirm).
- Primary goal of the site: win clients. That means enquiries first ("Start a project" / "Book a call") and the portfolio second.

## Brand
- Logo files: TBD. A placeholder SVG mark (copper disc + "C") and wordmark are in `src/components/Logo.astro` and `public/favicon.svg`.
- Colors / fonts: agent defaults (copper token palette; Fraunces display + Inter body, self-hosted via Fontsource).
- Voice: warm, crafted, premium, plain-spoken and honest about AI use.

## Pages
- [x] Home: hero, disciplines marquee, selected work, services bento, "How AI fits", process, packages, FAQ, CTA
- [x] Work: filterable, plus 6 concept project pages (`/work/<slug>/`)
- [x] Services
- [x] About
- [x] Contact: form, honeypot, success state (`/contact/thanks/` for no-JS redirects)
- [x] 404
- [x] Privacy (placeholder, TODO)

## Stack & hosting
- Framework: Astro 7.4.6 + Tailwind CSS 4.3.4 (Vite plugin) + TypeScript 6.0.3, `@astrojs/sitemap` 3.7.4. Exact versions are pinned.
- Output: fully static (`dist/`); deploys to Netlify, Vercel or Cloudflare Pages.
- Domain / hosting: TBD. Placeholder `https://copperdesign.example` is set in `astro.config.mjs`.

## Design research (patterns adopted)
From a short scan of 2025–26 award-site and agency-portfolio trend coverage (Awwwards listings, 2026 trend roundups). These are general patterns, not any one site's layout:
- **Oversized editorial typography**: a huge serif display hero, with a metallic gradient on one key phrase.
- **Bento grid for services**: modular cards of mixed sizes, with one large feature tile and a full-width CTA tile.
- **Large case-study cards**: big artwork-led cards with hover zoom, category metadata and a single arrow affordance.
- **Marquee strip**: scrolling list of disciplines (not client logos). Pauses on hover; becomes static under reduced motion.
- **Scroll-triggered reveals**: subtle fade-and-rise, progressive enhancement, disabled for `prefers-reduced-motion`.
- **Sticky minimal nav**: translucent blurred header with one persistent primary CTA.
- **Dark-mode-first, one accent colour**: copper on near-black, with a matching light theme and a toggle.
- **Clear packages section**: three tiers, with the middle one highlighted.
- **Strong single CTA**: "Start a project" repeated in the header, hero, packages and a closing CTA band; "Book a call" as the secondary.
- **Trust through honesty** (in place of fake social proof): an explicit "How AI fits our process" section and clearly labelled concept work.

## Decisions
- 2026-11-05: Repo created; `copper-design-builder` agent added to lead site work.
- 2026-11-05: Astro + Tailwind v4 static site; dependencies pinned with `save-exact`. Default stack; npm install worked.
- 2026-11-05: Theme: saved choice, else OS preference, else dark. Dark was designed first; the inline head script prevents a flash of the wrong theme.
- 2026-11-05: Contrast: small copper text uses `--copper-deep` in light mode (6.1:1) and `--copper` in dark (6.8:1). CTAs are deep-copper/paper in light and copper/near-black in dark.
- 2026-11-05: Portfolio uses six self-initiated **concept projects**, each with original generated SVG artwork. Every one is labelled "Concept project", and the site makes no client claims.
- 2026-11-05: No testimonials, client logos, awards or statistics until the owner supplies real ones.
- 2026-11-05: Package prices show "Quoted per project" until prices are set (`price: null` in `src/data/home.ts`).
- 2026-11-05: Contact form posts by `fetch` to `site.formEndpoint` (Formspree-style JSON). With no endpoint it simulates success in dev only; in production it shows an honest "not connected yet" message. The honeypot field is `_gotcha` (Formspree convention).
- 2026-11-05: "Book a call" falls back to `/contact/?enquiry=call` until a booking link is set.
- 2026-11-05: JSON-LD uses `Organization` (not `LocalBusiness`) because the address and location are unknown.

## Owner TODOs
- [ ] **Form endpoint**: create a Formspree form (recommended; works on any host) and set `formEndpoint` in `src/data/site.ts`. Alternative on Netlify: Netlify Forms (add `data-netlify="true"` and `netlify-honeypot="_gotcha"` to the form and drop the fetch endpoint).
- [ ] **Contact email**: `email` in `src/data/site.ts`.
- [ ] **Booking link** (Cal.com / Calendly): `bookingUrl` in `src/data/site.ts`.
- [ ] **Phone number and social accounts** (only real ones): `src/data/site.ts`.
- [ ] **Domain**: `SITE_URL` in `astro.config.mjs` (used for canonical URLs, the sitemap, robots and OG tags).
- [ ] **Package prices and currency**: `src/data/home.ts`.
- [ ] **Reply time** on the contact page ("within N working days").
- [ ] **Confirm the AI-use commitments** (logos drawn by hand, AI use disclosed per asset) on Home and in the FAQ, and the ownership/rights FAQ answer.
- [ ] **Confirm remote working / service area** (FAQ).
- [ ] **About page**: founder name, background, location and photo.
- [ ] **Logo files**: replace the placeholder mark and favicon.
- [ ] **Privacy notice**: replace the placeholder with a reviewed notice naming the form processor and any analytics.
- [ ] **Real case studies**: replace or add to the concept projects in `src/data/projects.ts`, with client permission.
- [ ] Testimonials, client logos or results, only when real and approved.
