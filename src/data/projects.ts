// Sample / concept projects. These are self-initiated studies created to show approach,
// not client work. TODO(owner): replace with real case studies (with client permission) as they become available.

export type Category = 'Brand Identity' | 'Graphic Design' | 'AI Creative' | 'Motion Graphics';

export const categories: Category[] = ['Brand Identity', 'Graphic Design', 'AI Creative', 'Motion Graphics'];

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
    categories: ['Brand Identity'],
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
    categories: ['Graphic Design'],
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
    categories: ['Graphic Design'],
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
    slug: 'budgeting-app-product-reveal',
    title: 'Animated product reveal for a budgeting app',
    sector: 'Finance & technology',
    categories: ['Motion Graphics'],
    art: 'interface',
    year: '2026',
    summary: 'A calm 20-second launch animation that introduces an app in three moves, cut down for every social format.',
    brief:
      'Concept a launch reveal for an imagined personal-budgeting app aimed at people who find money apps stressful: short, clear, and reusable across ads and social.',
    approach: [
      'Storyboarded the reveal around three plain-English ideas instead of a feature list.',
      'Designed interface frames and UI elements as one consistent visual family, ready for animation.',
      'Planned 16:9, 1:1 and 9:16 cut-downs with safe areas from the start.',
    ],
    deliverables: ['Storyboard and styleframes', 'Hero animation', 'Social cut-downs', 'Animated logo sting'],
  },
  {
    slug: 'botanical-skincare-concepts',
    title: 'AI-assisted concept imagery for a botanical skincare range',
    sector: 'Beauty',
    categories: ['AI Creative'],
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
    categories: ['Brand Identity', 'Graphic Design'],
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
