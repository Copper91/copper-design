import { u } from '../lib/url';
// Global site settings. Values marked TODO(owner) must be supplied before launch.

export const site = {
  name: 'Copper Design',
  tagline: 'Graphic & AI-assisted design studio',
  slogan: 'Design Without Limits.',
  description:
    'Copper Design is a creative studio for brand identity, graphic design, AI creative and motion graphics — bold identities, cinematic visuals and digital experiences that stick.',
  // TODO(owner): real contact email.
  email: '',
  // TODO(owner): booking link (e.g. Cal.com or Calendly). Until set, "Book a call" opens the contact form with "call" pre-selected.
  bookingUrl: '',
  // TODO(owner): form endpoint, e.g. "https://formspree.io/f/xxxxxxx". Leave empty until connected.
  formEndpoint: '',
  // TODO(owner): social profile URLs. Only accounts with an href are shown, so leave href empty until it exists.
  socials: [
    { label: 'Instagram', href: '' },
    { label: 'Behance', href: '' },
    { label: 'LinkedIn', href: '' },
    { label: 'YouTube', href: '' },
  ] as { label: string; href: string }[],
  locale: 'en_GB',
} as const;

export const nav = [
  { label: 'Work', href: u('/work/') },
  { label: 'Services', href: u('/services/') },
  { label: 'About', href: u('/about/') },
  { label: 'Journal', href: u('/journal/') },
  { label: 'Contact', href: u('/contact/') },
] as const;

export const bookCallHref = site.bookingUrl || u('/contact/?enquiry=call#enquiry');
export const activeSocials = site.socials.filter((s) => s.href);
export const startProjectHref = u('/contact/#enquiry');
