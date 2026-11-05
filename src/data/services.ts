// The four disciplines (from the owner's style reference).
export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  summary: string;
  deliverables: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    slug: 'brand-identity',
    number: '01',
    title: 'Brand Identity',
    short: 'Logos, visual systems, typography and brand guidelines built to scale.',
    summary:
      'A brand that looks like it means it. We find what makes you different, then build a mark, a type system and a set of rules that carry that difference everywhere it appears, from a favicon to a billboard.',
    deliverables: ['Logo suite and monogram', 'Colour and typography system', 'Brand guidelines', 'Stationery and templates', 'Export pack for web, print and social'],
    goodFor: 'New businesses, rebrands, and brands that have outgrown a DIY logo.',
  },
  {
    slug: 'graphic-design',
    number: '02',
    title: 'Graphic Design',
    short: 'Campaigns, posters, print, packaging and social media assets.',
    summary:
      'The everyday surfaces where a brand is won or lost. We design campaigns, print and social content with editorial care, so everything you put out looks like it came from the same place.',
    deliverables: ['Campaign key visuals', 'Posters, flyers and print', 'Packaging and labels', 'Social media template systems', 'Pitch and sales decks'],
    goodFor: 'Launches, events, product drops and teams that post often.',
  },
  {
    slug: 'ai-creative',
    number: '03',
    title: 'AI Creative',
    short: 'AI concept art, prompt engineering, editorial imagery and visual ideation.',
    summary:
      'AI tools are fast; taste is not automatic. We direct, curate and retouch AI-generated imagery so it serves your brand instead of looking like everyone else’s prompt, and we tell you where AI was used.',
    deliverables: ['Concept art and moodboards', 'Editorial and campaign imagery', 'Prompt and style libraries', 'Hand retouching of selects', 'A note of the tools used for each asset'],
    goodFor: 'Early concepts, fast campaigns, and visualising ideas before a shoot.',
  },
  {
    slug: 'motion-graphics',
    number: '04',
    title: 'Motion Graphics',
    short: 'Commercials, animated logos, social content and product reveals.',
    summary:
      'Movement makes a brand feel alive. We animate logos, build short social and product films, and design motion systems that keep every clip on-brand.',
    deliverables: ['Animated logo stings', 'Social and short-form video', 'Product reveal animations', 'Motion guidelines', 'Exports for every platform'],
    goodFor: 'Launches, ads, social channels and product announcements.',
  },
];
