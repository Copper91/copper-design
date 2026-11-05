export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  deliverables: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    slug: 'brand-identity',
    title: 'Brand identity & logos',
    short: 'Logos, type, colour and the rules that hold them together.',
    summary:
      'A brand that looks like it means it. We start with what makes you different, then build a mark, a palette and a typographic voice that carry that difference everywhere they appear.',
    deliverables: [
      'Logo suite (primary, secondary, icon)',
      'Colour palette and type pairing',
      'Brand guidelines document',
      'Business card and letterhead files',
      'Export pack for web, print and social',
    ],
    goodFor: 'New businesses, rebrands and refreshes that have outgrown a DIY logo.',
  },
  {
    slug: 'social-media',
    title: 'Social media graphics',
    short: 'Template systems and campaign assets that stay on-brand at speed.',
    summary:
      'Feeds that look considered without taking all week. We design flexible template systems and launch sets you can reuse, so every post feels like it came from the same place.',
    deliverables: [
      'Post, carousel and story templates',
      'Launch or campaign asset sets',
      'Profile and highlight graphics',
      'Editable files for Canva or Figma',
    ],
    goodFor: 'Teams posting often who want consistency without a full-time designer.',
  },
  {
    slug: 'marketing-materials',
    title: 'Marketing & print',
    short: 'Brochures, posters, decks and packaging with real presence.',
    summary:
      'Things people hold, pin up and present. We design printed and digital collateral with the care of an editorial layout and the clarity of a good sales pitch.',
    deliverables: [
      'Brochures, flyers and posters',
      'Pitch and sales decks',
      'Packaging and labels',
      'Print-ready files and supplier specs',
    ],
    goodFor: 'Launches, events, trade shows and sales teams.',
  },
  {
    slug: 'web-ui',
    title: 'Web & UI visuals',
    short: 'Landing pages, interface visuals and product imagery.',
    summary:
      'Screens that look as good as the product works. We design landing pages, UI visual language, icons and illustrations, handed over in a form your developers can build from.',
    deliverables: [
      'Landing page and website design',
      'UI visual style and component kit',
      'Icon sets and spot illustrations',
      'Developer-ready Figma handoff',
    ],
    goodFor: 'Startups, product teams and businesses refreshing their site.',
  },
  {
    slug: 'ai-imagery',
    title: 'AI imagery & concepts',
    short: 'Directed, refined AI visuals — moodboards to finished campaign imagery.',
    summary:
      'AI image tools are fast; good taste is not automatic. We direct, curate and retouch AI-generated imagery so it serves your brand rather than looking like everyone else’s prompt.',
    deliverables: [
      'Concept moodboards and style frames',
      'Product and lifestyle concept imagery',
      'Campaign key visuals, retouched by hand',
      'A written note of tools used for each asset',
    ],
    goodFor: 'Early-stage concepts, campaigns on tight timelines, and visualising ideas before a shoot.',
  },
];
