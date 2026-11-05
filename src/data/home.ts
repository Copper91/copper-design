// Home page content: process, AI approach, packages and FAQ.

export const disciplines = [
  'Brand identity',
  'Logo design',
  'Social media graphics',
  'Marketing & print',
  'Pitch decks',
  'Packaging',
  'Web & UI visuals',
  'AI concept imagery',
  'Art direction',
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'A short call and a written brief. We agree what success looks like, the deliverables, the timeline and the budget before any design starts.',
  },
  {
    step: '02',
    title: 'Explore',
    text: 'We sketch, research and — where it helps — use AI tools to explore a wide range of directions quickly. You see a focused shortlist, not a pile of options.',
  },
  {
    step: '03',
    title: 'Refine',
    text: 'One direction, crafted properly by hand. Typography, colour, detail and consistency, with structured feedback rounds so nothing drifts.',
  },
  {
    step: '04',
    title: 'Deliver',
    text: 'Organised, correctly formatted files for every place they’ll be used, plus simple guidance so your team can keep things consistent.',
  },
];

export const aiPrinciples = [
  {
    title: 'AI for range, people for judgement',
    text: 'We use AI tools to explore more ideas earlier — moodboards, rough concepts, image studies. Every direction is chosen, refined and finished by a designer.',
  },
  {
    title: 'Logos are drawn, not generated',
    text: 'Marks and wordmarks are built by hand as vector artwork, so they are original, scalable and yours to use.',
  },
  {
    title: 'You always know what was used',
    text: 'Where AI played a part in a final asset, we say so and note the tool. No surprises in your brand files.',
  },
  {
    title: 'Faster where it counts',
    text: 'Less time on blank-page searching means more of your budget goes on the craft that makes design work.',
  },
];

export type Package = {
  name: string;
  for: string;
  // TODO(owner): set prices. Leave null to show "Quoted per project".
  price: string | null;
  includes: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: 'Essentials',
    for: 'A strong start for a new business or side project.',
    price: null,
    includes: ['Logo and icon', 'Colour palette and type pairing', 'One-page brand sheet', 'Social profile kit', 'Two rounds of revisions'],
  },
  {
    name: 'Identity',
    for: 'A complete brand system, ready for everything.',
    price: null,
    featured: true,
    includes: [
      'Everything in Essentials',
      'Full logo suite and brand guidelines',
      'Business stationery',
      'Social media template set',
      'AI concept moodboards',
      'Three rounds of revisions',
    ],
  },
  {
    name: 'Studio partner',
    for: 'Ongoing design support on a monthly basis.',
    price: null,
    includes: ['A set number of design hours each month', 'Social, marketing and web assets', 'Priority turnaround', 'Monthly planning call', 'Cancel with notice'],
  },
];

export const faqs = [
  {
    q: 'What does “AI-assisted” actually mean here?',
    a: 'We use AI tools at specific stages — mainly early exploration and concept imagery — to try more ideas faster. A designer makes every decision and finishes every deliverable. Logos are always drawn by hand.',
  },
  {
    q: 'Do I own the final designs?',
    a: 'Ownership and usage rights are set out in your project agreement before work begins. If any final asset includes AI-generated elements, we tell you which ones and which tool was used.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on scope. A small social kit can take days; a full identity usually takes several weeks. You’ll get a clear timeline with your proposal.',
  },
  {
    q: 'How much will it cost?',
    a: 'Every project gets a fixed quote after a short discovery call, so you know the cost before anything starts. The packages above are a guide to typical scopes.',
  },
  {
    q: 'Do you work with clients remotely?',
    a: 'Yes. Calls, feedback and file delivery all work online, so where you are doesn’t matter.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'A few lines about your business, what you need and when you need it. Use the enquiry form — we’ll take it from there.',
  },
];
