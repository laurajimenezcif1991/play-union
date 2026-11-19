/**
 * Catalog used by the guided pass chooser (demo).
 * Prices match published Play Union / Shopify products.
 */

export type VisitFrequency = 'today' | 'multi' | 'membership';
export type MultiOption = '5-day' | '10-day';
export type MembershipOption = '1-month' | '4-month' | '6-month';

export type CatalogLine = {
  id: string;
  name: string;
  price: number;
  role: 'primary' | 'additional' | 'infant';
  purchaseUrl: string | null;
};

const shop = (handle: string) => `https://play-union.myshopify.com/products/${handle}`;

const packs = {
  today: {
    primary: { id: 'day-pass', name: 'Day Pass', price: 20, purchaseUrl: shop('1-day-pass') },
    additional: {
      id: 'addl-child-day-pass',
      name: "Add'l Child Day Pass",
      price: 10,
      purchaseUrl: shop('1-day-sibling-or-second-child-pass'),
    },
    infant: {
      id: 'day-pass-0-1',
      name: 'Day Pass Ages 0-1yr',
      price: 10,
      purchaseUrl: shop('1-day-pass-ages-0-1yr'),
    },
  },
  '5-day': {
    primary: { id: '5-day-pass', name: '5 Day Pass', price: 90, purchaseUrl: shop('5-day-pass') },
    additional: {
      id: 'addl-child-5-day',
      name: "Add'l Child 5 Day Pass",
      price: 45,
      purchaseUrl: shop('5-day-pass-sibling-or-second-child'),
    },
    infant: {
      id: '5-day-0-1',
      name: '5 Day Pass Ages 0-1yr',
      price: 45,
      purchaseUrl: shop('5-day-pass-ages-0-1yr'),
    },
  },
  '10-day': {
    primary: { id: '10-day-pass', name: '10 Day Pass', price: 160, purchaseUrl: shop('10-day-pass') },
    additional: {
      id: 'addl-child-10-day',
      name: "Add'l Child 10 Day Pass",
      price: 80,
      purchaseUrl: shop('10-day-pass-sibling-or-second-child'),
    },
    infant: {
      id: '10-day-0-1',
      name: '10 Day Pass Ages 0-1yr',
      price: 80,
      purchaseUrl: shop('10-day-pass-ages-0-1yr'),
    },
  },
  '1-month': {
    primary: {
      id: '1-month',
      name: '1 Month Membership',
      price: 130,
      purchaseUrl: shop('1-month-membership'),
    },
    additional: {
      id: 'addl-1-month',
      name: "Add'l Child 1 Month Membership",
      price: 65,
      purchaseUrl: shop('1-month-membership-sibling-or-second-child'),
    },
    infant: {
      id: '1-month-0-1',
      name: '1 Month Membership Ages 0-1Yr',
      price: 65,
      purchaseUrl: shop('1-month-membership-ages-0-1yr'),
    },
  },
  '4-month': {
    primary: {
      id: '4-month',
      name: '4 Month Membership',
      price: 440,
      purchaseUrl: shop('4-month-membership'),
    },
    additional: {
      id: 'addl-4-month',
      name: "Add'l Child 4 Month Membership",
      price: 220,
      purchaseUrl: shop('4-month-membership-sibling-or-second-child'),
    },
    infant: {
      id: '4-month-0-1',
      name: '4 Month Membership Ages 0-1Yr',
      price: 220,
      purchaseUrl: shop('4-month-membership-ages-0-1yr'),
    },
  },
  '6-month': {
    primary: {
      id: '6-month',
      name: '6 Month Membership',
      price: 600,
      purchaseUrl: shop('6-month-membership'),
    },
    additional: {
      id: 'addl-6-month',
      name: "Add'l Child 6 Month Membership",
      price: 300,
      purchaseUrl: shop('6-month-membership-sibling-or-second-child'),
    },
    infant: {
      id: '6-month-0-1',
      name: '6 Month Membership Ages 0-1yr',
      price: 300,
      purchaseUrl: shop('6-month-membership-ages-0-1yr'),
    },
  },
} as const;

export type PackKey = keyof typeof packs;

/**
 * Build cart lines for a family.
 * - Children 1+: first gets primary price, each extra gets additional
 * - Infants 0–1 with an older sibling (1+): free (published rule)
 * - Infants only (no 1+ child): each gets infant pricing
 */
export function buildFamilyLines(options: {
  pack: PackKey;
  childrenOnePlus: number;
  infants: number;
}): { lines: CatalogLine[]; explanation: string[]; total: number; packLabel: string } {
  const pack = packs[options.pack];
  const lines: CatalogLine[] = [];
  const explanation: string[] = [];
  const { childrenOnePlus, infants } = options;

  const packLabels: Record<PackKey, string> = {
    today: 'Day Pass',
    '5-day': '5 Day Pass',
    '10-day': '10 Day Pass',
    '1-month': '1 Month Membership',
    '4-month': '4 Month Membership',
    '6-month': '6 Month Membership',
  };

  if (childrenOnePlus <= 0 && infants <= 0) {
    return { lines: [], explanation: ['Add at least one child to see a recommendation.'], total: 0, packLabel: packLabels[options.pack] };
  }

  if (childrenOnePlus > 0) {
    lines.push({ ...pack.primary, role: 'primary' });
    explanation.push(`First child (ages 1+): ${pack.primary.name} — $${pack.primary.price}`);
    for (let i = 1; i < childrenOnePlus; i++) {
      lines.push({ ...pack.additional, role: 'additional', id: `${pack.additional.id}-${i}` });
      explanation.push(`Additional child ${i + 1} (ages 1+): ${pack.additional.name} — $${pack.additional.price}`);
    }
    if (infants > 0) {
      explanation.push(
        infants === 1
          ? '1 infant (ages 0–1) with an older sibling: free'
          : `${infants} infants (ages 0–1) with an older sibling: free`,
      );
    }
  } else {
    for (let i = 0; i < infants; i++) {
      lines.push({ ...pack.infant, role: 'infant', id: `${pack.infant.id}-${i}` });
      explanation.push(`Infant ${i + 1} (ages 0–1): ${pack.infant.name} — $${pack.infant.price}`);
    }
  }

  const total = lines.reduce((sum, line) => sum + line.price, 0);
  return { lines, explanation, total, packLabel: packLabels[options.pack] };
}

export const catalogForClient = {
  packs,
  packLabels: {
    today: 'Day Pass',
    '5-day': '5 Day Pass',
    '10-day': '10 Day Pass',
    '1-month': '1 Month Membership',
    '4-month': '4 Month Membership',
    '6-month': '6 Month Membership',
  },
  notes: {
    siblingsInfants: 'Siblings ages 0–1 yr are always free when visiting with an older sibling.',
    multiDayNeverExpire: '5 and 10 Day Passes are punch cards that never expire.',
    membershipBenefits: 'Membership includes 10% off all parties and 2 crafts per week for children ages 2+.',
  },
};
