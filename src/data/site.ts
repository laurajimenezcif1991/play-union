/** Easy-to-edit site-wide business info for Play Union. */

export const site = {
  name: 'Play Union',
  tagline: 'Play • Learn • Grow',
  description:
    'Indoor pretend-play and craft space for young children and caregivers in Somerville, Massachusetts.',
  email: 'info@playunionsomerville.com',
  phone: '617-764-3570',
  phoneHref: 'tel:617-764-3570',
  address: {
    line1: '378 Somerville Ave',
    city: 'Somerville',
    state: 'MA',
    zip: '02143',
    full: '378 Somerville Ave, Somerville, MA 02143',
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=378+Somerville+Ave,+Somerville,+MA+02143&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=378+Somerville+Ave,+Somerville,+MA+02143',
  instagram: 'https://www.instagram.com/playunion/',
  shopifyStore: 'https://play-union.myshopify.com',
  hours: [
    { days: 'Monday–Wednesday', time: '9:00 a.m.–5:00 p.m.' },
    { days: 'Thursday', time: '9:00 a.m.–4:00 p.m.' },
    { days: 'Friday', time: '9:00 a.m.–5:00 p.m.' },
    { days: 'Saturday–Sunday', time: 'Closed' },
  ],
  finalEntryNote: 'Final entry is 30 minutes before closing during drop-in play.',
  amenities: [
    'Adults are free',
    'Complimentary coffee and tea',
    'Free Wi-Fi',
    'Unlimited play time with passes and memberships',
  ],
  parking: [
    'Parking spots 1 & 2 in the private lot next to Play Union are for Play Union customers.',
    '2-hour spots are nearby, plus metered parking in Union Square.',
    'Somerville residents with a residential sticker can park on nearby side streets.',
  ],
  transit: [
    'About a 5-minute walk from the Union Square Green Line T station.',
    'Local bus service is also available.',
  ],
  socialProofTerms: [
    'indoor play space in Somerville',
    'toddler activities',
    "children's birthday parties in Somerville",
  ],
} as const;

/** Primary header nav — short labels for what families want to do next. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Visit', href: '/visit/' },
  { label: 'Passes', href: '/passes/' },
  { label: 'Events & Classes', href: '/classes-events/' },
  {
    label: 'Parties',
    href: '/private-events/birthday-parties/',
    /** Highlight Parties for all private-event URLs */
    activePrefix: '/private-events/',
  },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Secondary links for the footer (About / FAQ / hours live here, not in the header). */
export const footerNav = [
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Hours', href: '/visit/#hours' },
  { label: 'Other private rentals', href: '/private-events/other-rentals/' },
  { label: 'Partnerships', href: '/private-events/partnerships/' },
] as const;
