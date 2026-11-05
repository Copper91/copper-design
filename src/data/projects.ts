// Sample / concept projects. These are self-initiated studies created to show approach,
// not client work. TODO(owner): replace with real case studies (with client permission) as they become available.

export type Category = 'Branding' | 'Social' | 'Marketing' | 'Web & UI' | 'AI imagery';

export const categories: Category[] = ['Branding', 'Social', 'Marketing', 'Web & UI', 'AI imagery'];

export type Project = {
  slug: string;
  title: string;
  sector: string;
  categories: Category[];
  art: 'arcs' | 'grid' | 'waves' | 'poster' | 'interface' | 'bloom';
  year: string;
  summary: string;
  brief: string;
  approach: string[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: 'coffee-roaster-identity',
    title: 'Identity for a small-batch coffee roaster',
    sector: 'Food & drink',
    categories: ['Branding'],
    art: 'arcs',
    year: '2026',
    summary: 'A warm, roast-inspired identity built around a single arc mark that scales from bag label to shopfront.',
    brief:
      'Design a brand for an imagined independent roaster that wants to feel specialist but not intimidating — something that works on a 250g bag, a cup sleeve and a market-stall banner.',
    approach: [
      'Explored roast curves and steam forms as a starting point for the mark.',
      'Used AI image tools to generate fast packaging mood studies, then redrew the chosen direction by hand.',
      'Built a three-colour palette that prints reliably on kraft paper.',
    ],
    deliverables: ['Logo suite', 'Packaging label system', 'Colour and type guide', 'Cup sleeve and stamp'],
  },
  {
    slug: 'fitness-studio-social-kit',
    title: 'Launch social kit for a boutique fitness studio',
    sector: 'Health & fitness',
    categories: ['Social'],
    art: 'grid',
    year: '2026',
    summary: 'A modular grid of post and story templates that turns a class timetable into a feed people stop for.',
    brief:
      'Create an opening-month social system for an imagined studio: announcements, class spotlights, timetables and offers, all editable by a non-designer.',
    approach: [
      'Designed a 4-column modular grid so every template shares the same bones.',
      'Kept type large and high-contrast for small screens and fast scrolling.',
      'Built the set as editable templates with locked brand elements.',
    ],
    deliverables: ['18 post templates', '9 story templates', 'Highlight covers', 'Usage guide'],
  },
  {
    slug: 'arts-festival-posters',
    title: 'Poster series for a community arts festival',
    sector: 'Arts & culture',
    categories: ['Marketing'],
    art: 'poster',
    year: '2025',
    summary: 'A bold typographic poster system with one rule: every venue gets its own colourway, the layout never changes.',
    brief:
      'Design an imagined week-long festival’s printed campaign — posters, programme and wayfinding — that reads from across a street.',
    approach: [
      'Set the festival dates as oversized display type that doubles as the visual.',
      'Gave each venue a colourway so the series feels varied but connected.',
      'Prepared print-ready files with bleed and supplier specs.',
    ],
    deliverables: ['A2 poster series', 'Folded programme', 'Wayfinding signs', 'Social cut-downs'],
  },
  {
    slug: 'fintech-landing-visuals',
    title: 'Landing page visuals for a budgeting app',
    sector: 'Finance & technology',
    categories: ['Web & UI'],
    art: 'interface',
    year: '2026',
    summary: 'Calm, trustworthy interface visuals and a landing page that explain the product in three scrolls.',
    brief:
      'Concept a landing page and visual language for an imagined personal-budgeting app aimed at people who find money apps stressful.',
    approach: [
      'Replaced the usual neon dashboards with soft, warm surfaces and plain-English labels.',
      'Designed device mock-ups and spot illustrations as one consistent family.',
      'Delivered a component kit and annotated Figma file for build.',
    ],
    deliverables: ['Landing page design', 'UI style kit', 'Icon set', 'Figma handoff'],
  },
  {
    slug: 'botanical-skincare-concepts',
    title: 'AI-assisted concept imagery for a botanical skincare range',
    sector: 'Beauty',
    categories: ['AI imagery'],
    art: 'bloom',
    year: '2026',
    summary: 'Directed AI concept imagery to explore product worlds before committing to a photoshoot.',
    brief:
      'Visualise three possible campaign worlds for an imagined plant-based skincare line, fast enough to choose a direction in one meeting.',
    approach: [
      'Wrote art-direction briefs for each world — light, materials, colour, mood.',
      'Generated and curated hundreds of AI frames down to a handful per world.',
      'Retouched selects by hand and labelled every image as AI-assisted.',
    ],
    deliverables: ['Three style worlds', 'Moodboards', 'Retouched key visuals', 'Tool & usage notes'],
  },
  {
    slug: 'architecture-practice-refresh',
    title: 'Identity refresh and social templates for an architecture practice',
    sector: 'Architecture',
    categories: ['Branding', 'Social'],
    art: 'waves',
    year: '2025',
    summary: 'A quieter, more confident identity and a social system that lets the buildings do the talking.',
    brief:
      'Refresh the brand of an imagined small practice whose old logo felt dated, and give them a simple way to share projects online.',
    approach: [
      'Refined the wordmark and introduced a line motif drawn from contour plans.',
      'Set a strict photo-first template system with minimal type.',
      'Documented spacing and image rules in a short guide.',
    ],
    deliverables: ['Refined wordmark', 'Line motif system', 'Social templates', 'Mini brand guide'],
  },
];
