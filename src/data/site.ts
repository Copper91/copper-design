import { u } from '../lib/url';
// Global site settings. Values marked TODO(owner) must be supplied before launch.

export const site = {
  name: 'Copper Design',
  tagline: 'Graphic & AI-assisted design studio',
  slogan: 'Design Without Limits.',
  description:
    'Copper Design is a creative studio for brand identity, graphic design, AI creative and motion graphics — bold identities, cinematic visuals and digital experiences that stick.',
  email: 'copperdesign1@gmail.com',
  // TODO(owner): booking link (e.g. Cal.com or Calendly). Until set, "Book a call" opens the contact form with "call" pre-selected.
  bookingUrl: '',
  // Enquiries are forwarded to the email above by FormSubmit (formsubmit.co, free, no account).
  // The first submission sends an activation email to that inbox; click "Activate" once to start receiving messages.
  formEndpoint: 'https://formsubmit.co/copperdesign1@gmail.com',
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
