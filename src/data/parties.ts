/**
 * Birthday party details sourced from the current website and FAQ.
 * Conflicting details are kept separate and flagged — do not silently resolve.
 */

export const partyOverview = {
  headline: "Kids' Birthday Parties",
  intro:
    'Host a children’s birthday party in Somerville with exclusive use of Play Union’s indoor pretend-play space — about 1,000 square feet of toys geared primarily for ages 1–5.',
  includesFromHome: [
    'Free balloon bunches',
    'Exclusive use of the entire space',
    'Additional time for set up and clean up (see confirmation note)',
    'Basic paper goods and tablecloths at no extra charge',
  ],
  membershipDiscount: '10% off for membership holders.',
  favors: 'Party Favors – 15% off with your party. We’ll even assemble the bags for you!',
};

export const partyPricing = {
  base: {
    label: '2 hour party, 1–15 children',
    priceLabel: '$450',
    note: 'FAQ states this includes a $50 non-refundable deposit.',
  },
  deposit: {
    label: 'Party Deposit',
    priceLabel: '$50',
    /** Current site Purchase button is a dead link (#). Contact is the working path. */
    purchaseUrl: null as string | null,
    contactFallback: true,
  },
  addlChild: {
    label: 'Additional child',
    priceLabel: '$10 each',
    faqDetail: 'Max 25 kids; counting starts at crawling.',
  },
  addlTime: {
    label: 'Additional party time',
    priceLabel: '$60 per 1/2 hour',
  },
  crafts: {
    label: 'Party crafts / painting crafts',
    priceLabel: '$5 each / per participant',
  },
  shopifyFinalPayment: {
    label: 'Shopify “2 Hour Party 1-15 Children” product',
    priceLabel: '$400',
    note: 'Listed as “Final Payment. Make sure deposit was also paid.” Aligns with $450 total if $50 deposit is separate — confirm with owner.',
    purchaseUrl: 'https://play-union.myshopify.com/products/2-hour-party-1-15-children',
  },
};

/** FAQ-only details (more complete than homepage). */
export const partyFaqDetails = {
  capacityKids: 'Maximum 25 kids (counting starts at crawling).',
  capacityPeople: 'Maximum capacity is 60 people.',
  extraAdults:
    'If you have more than 40 people (including adults and kids) — $5 per additional adult.',
  balloons: 'Typically 2 bunches of 6 balloons each.',
  setupCleanupHome: 'Homepage: additional 15 minutes each for set up and clean up.',
  setupCleanupFaq:
    'FAQ: 15 to 20 minutes before to set up and 15 minutes after to load out items you’re taking with you.',
  staffHelp:
    'Staff help set up party food and decorations and help repackage food and drinks to take away. Staff handle other cleaning and resetting of the play space.',
  spaceNotes:
    'Pretend kitchen, blocks, trains, trucks, dolls, dress-up, musical instruments, and more. No climbing structures or bouncy houses.',
  decorations:
    'You can bring decorations. Party area is a bit narrow — large backdrops and balloon architecture don’t fit well. Tables: 2 six-foot tables (end to end) for eating, 1 six-foot buffet table, and 1 three-foot square buffet table.',
  food:
    'You can bring any food and beverages. Please keep food in the party area to lower allergen risk on toys.',
  favorsDetail:
    'Favors shop items range from $0.05–$7.99. Pick favors in-shop and/or add favors from outside; bags assembled for your party.',
  finalPayment:
    'Final payment is done at the end of the party so you only pay for guests that arrive.',
};

export const otherRentals = {
  summary:
    'Play Union may be available for other private space rentals beyond kids’ birthday parties.',
  detailsConfirmed: false,
  ctaLabel: 'Inquire about a private rental',
};

export const partnerships = {
  summary:
    'Instructors, organizations, and community partners can inquire about collaborations, classes, or shared programming — this is a separate path from birthday-party bookings.',
  detailsConfirmed: false,
  ctaLabel: 'Inquire about a partnership',
};
