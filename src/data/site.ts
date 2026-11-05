// Global site settings. Values marked TODO(owner) must be supplied before launch.

export const site = {
  name: 'Copper Design',
  tagline: 'Graphic & AI-assisted design studio',
  description:
    'Copper Design is a graphic design studio that pairs hand-crafted craft with AI-assisted exploration — brand identities, social graphics, marketing materials, web visuals and AI concept imagery.',
  // TODO(owner): real contact email.
  email: '',
  // TODO(owner): booking link (e.g. Cal.com or Calendly). Until set, "Book a call" opens the contact form with "call" pre-selected.
  bookingUrl: '',
  // TODO(owner): form endpoint, e.g. "https://formspree.io/f/xxxxxxx". Leave empty until connected.
  formEndpoint: '',
  // TODO(owner): social profile URLs (only add accounts that exist).
  socials: [] as { label: string; href: string }[],
  locale: 'en_GB',
} as const;

export const nav = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const bookCallHref = site.bookingUrl || '/contact/?enquiry=call#enquiry';
export const startProjectHref = '/contact/#enquiry';
