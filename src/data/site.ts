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

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Visit & Open Play', href: '/visit/' },
  { label: 'Passes & Memberships', href: '/passes/' },
  { label: 'Classes & Events', href: '/classes-events/' },
  {
    label: 'Private Events',
    href: '/private-events/',
    children: [
      { label: "Kids' Birthday Parties", href: '/private-events/birthday-parties/' },
      { label: 'Other Private Rentals', href: '/private-events/other-rentals/' },
      {
        label: 'Partnerships & Community Collaborations',
        href: '/private-events/partnerships/',
      },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'FAQ', href: '/faq/' },
] as const;
