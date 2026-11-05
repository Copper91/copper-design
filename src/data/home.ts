// Home page content: process, AI approach, packages and FAQ.

// Five-step process (from the owner's style reference).
export const process = [
  { step: '01', title: 'Discover', short: 'Research, audit and creative brief.', text: 'A short call and a written brief. We look at your market, your audience and what you already have, and agree scope, timeline and budget before design starts.' },
  { step: '02', title: 'Strategy', short: 'Positioning and visual direction.', text: 'We define what the work needs to say and how it should feel, then set a clear visual direction to design against.' },
  { step: '03', title: 'Design', short: 'Concepting and craft.', text: 'We explore widely (using AI tools where they help) and then craft the strongest route properly, by hand.' },
  { step: '04', title: 'Refine', short: 'Iteration and polish.', text: 'Structured feedback rounds, tightening typography, detail and consistency until it holds up everywhere it will be used.' },
  { step: '05', title: 'Deliver', short: 'Handoff and launch support.', text: 'Organised, correctly formatted files and simple guidance, plus support while it goes live.' },
];

// Testimonials render ONLY when this array has entries.
// TODO(owner): add real, approved client quotes (name, role, company) here. Never use invented quotes.
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [];

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
    includes: ['A set number of design hours each month', 'Graphic, social and motion assets', 'Priority turnaround', 'Monthly planning call', 'Cancel with notice'],
  },
];

export const faqs = [
  {
    q: 'What does “AI Creative” actually mean here?',
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
