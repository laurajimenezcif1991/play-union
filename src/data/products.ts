/**
 * Passes, memberships, and craft add-ons.
 * Update names, prices, notes, and purchaseUrl here — pages read from this file.
 * Source: playunionsomerville.com published pricing + play-union.myshopify.com products.
 */

export type Product = {
  id: string;
  /** Exact published name from the current website */
  name: string;
  price: number;
  priceLabel: string;
  category: 'day-pass' | 'multi-day' | 'membership' | 'craft' | 'party';
  group: string;
  note?: string;
  purchaseUrl: string | null;
  benefits?: string[];
};

const shop = (handle: string) => `https://play-union.myshopify.com/products/${handle}`;

export const productNotes = {
  siblingsInfants: 'Siblings ages 0–1 yr are always free.',
  multiDayNeverExpire: '5 and 10 Day Passes are punch cards that never expire.',
  membershipBenefits:
    'Membership includes 10% off all parties and 2 crafts per week for children ages 2+.',
  craftsAge: 'Crafting is available for children ages 2+ during drop-in play and parties.',
};

export const passes: Product[] = [
  {
    id: 'day-pass',
    name: 'Day Pass',
    price: 20,
    priceLabel: '$20',
    category: 'day-pass',
    group: 'Day Passes',
    purchaseUrl: shop('1-day-pass'),
  },
  {
    id: 'addl-child-day-pass',
    name: "Add'l Child Day Pass",
    price: 10,
    priceLabel: '$10',
    category: 'day-pass',
    group: 'Day Passes',
    note: productNotes.siblingsInfants,
    purchaseUrl: shop('1-day-sibling-or-second-child-pass'),
  },
  {
    id: 'day-pass-0-1',
    name: 'Day Pass Ages 0-1yr',
    price: 10,
    priceLabel: '$10',
    category: 'day-pass',
    group: 'Day Passes',
    purchaseUrl: shop('1-day-pass-ages-0-1yr'),
  },
  {
    id: '5-day-pass',
    name: '5 Day Pass',
    price: 90,
    priceLabel: '$90',
    category: 'multi-day',
    group: '5 Day Passes',
    note: productNotes.multiDayNeverExpire,
    purchaseUrl: shop('5-day-pass'),
  },
  {
    id: 'addl-child-5-day',
    name: "Add'l Child 5 Day Pass",
    price: 45,
    priceLabel: '$45',
    category: 'multi-day',
    group: '5 Day Passes',
    note: productNotes.siblingsInfants,
    purchaseUrl: shop('5-day-pass-sibling-or-second-child'),
  },
  {
    id: '5-day-0-1',
    name: '5 Day Pass Ages 0-1yr',
    price: 45,
    priceLabel: '$45',
    category: 'multi-day',
    group: '5 Day Passes',
    purchaseUrl: shop('5-day-pass-ages-0-1yr'),
  },
  {
    id: '10-day-pass',
    name: '10 Day Pass',
    price: 160,
    priceLabel: '$160',
    category: 'multi-day',
    group: '10 Day Passes',
    note: productNotes.multiDayNeverExpire,
    purchaseUrl: shop('10-day-pass'),
  },
  {
    id: 'addl-child-10-day',
    name: "Add'l Child 10 Day Pass",
    price: 80,
    priceLabel: '$80',
    category: 'multi-day',
    group: '10 Day Passes',
    note: productNotes.siblingsInfants,
    purchaseUrl: shop('10-day-pass-sibling-or-second-child'),
  },
  {
    id: '10-day-0-1',
    name: '10 Day Pass Ages 0-1yr',
    price: 80,
    priceLabel: '$80',
    category: 'multi-day',
    group: '10 Day Passes',
    purchaseUrl: shop('10-day-pass-ages-0-1yr'),
  },
];

export const memberships: Product[] = [
  {
    id: '1-month',
    name: '1 Month Membership',
    price: 130,
    priceLabel: '$130',
    category: 'membership',
    group: '1 Month',
    purchaseUrl: shop('1-month-membership'),
    benefits: [
      'Open play during published hours',
      '10% off all parties',
      '2 crafts per week for children ages 2+',
    ],
  },
  {
    id: 'addl-1-month',
    name: "Add'l Child 1 Month Membership",
    price: 65,
    priceLabel: '$65',
    category: 'membership',
    group: '1 Month',
    note: productNotes.siblingsInfants,
    purchaseUrl: shop('1-month-membership-sibling-or-second-child'),
  },
  {
    id: '1-month-0-1',
    name: '1 Month Membership Ages 0-1Yr',
    price: 65,
    priceLabel: '$65',
    category: 'membership',
    group: '1 Month',
    purchaseUrl: shop('1-month-membership-ages-0-1yr'),
  },
  {
    id: '4-month',
    name: '4 Month Membership',
    price: 440,
    priceLabel: '$440',
    category: 'membership',
    group: '4 Month',
    purchaseUrl: shop('4-month-membership'),
    benefits: [
      'Open play during published hours',
      '10% off all parties',
      '2 crafts per week for children ages 2+',
    ],
  },
  {
    id: 'addl-4-month',
    name: "Add'l Child 4 Month Membership",
    price: 220,
    priceLabel: '$220',
    category: 'membership',
    group: '4 Month',
    note: productNotes.siblingsInfants,
    purchaseUrl: shop('4-month-membership-sibling-or-second-child'),
  },
  {
    id: '4-month-0-1',
    name: '4 Month Membership Ages 0-1Yr',
    price: 220,
    priceLabel: '$220',
    category: 'membership',
    group: '4 Month',
    purchaseUrl: shop('4-month-membership-ages-0-1yr'),
  },
  {
    id: '6-month',
    name: '6 Month Membership',
    price: 600,
    priceLabel: '$600',
    category: 'membership',
    group: '6 Month',
    purchaseUrl: shop('6-month-membership'),
    benefits: [
      'Open play during published hours',
      '10% off all parties',
      '2 crafts per week for children ages 2+',
    ],
  },
  {
    id: 'addl-6-month',
    name: "Add'l Child 6 Month Membership",
    price: 300,
    priceLabel: '$300',
    category: 'membership',
    group: '6 Month',
    note: productNotes.siblingsInfants,
    purchaseUrl: shop('6-month-membership-sibling-or-second-child'),
  },
  {
    id: '6-month-0-1',
    name: '6 Month Membership Ages 0-1yr',
    price: 300,
    priceLabel: '$300',
    category: 'membership',
    group: '6 Month',
    purchaseUrl: shop('6-month-membership-ages-0-1yr'),
  },
];

export const crafts: Product[] = [
  {
    id: 'member-craft',
    name: 'Members get 2 free crafts per week',
    price: 5,
    priceLabel: '$5+',
    category: 'craft',
    group: 'Crafting',
    note: 'Additional crafts beyond the weekly member allotment.',
    purchaseUrl: shop('additional-membership-craft'),
  },
  {
    id: 'multi-day-craft',
    name: 'Members and multi day pass holders can do a craft for $5 at any time',
    price: 5,
    priceLabel: '$5',
    category: 'craft',
    group: 'Crafting',
    purchaseUrl: shop('5-and-10-day-pass-craft'),
  },
  {
    id: 'day-pass-craft',
    name: 'Day pass holders can do a craft for $8 at any time',
    price: 8,
    priceLabel: '$8',
    category: 'craft',
    group: 'Crafting',
    purchaseUrl: shop('day-pass-craft'),
  },
];

export function groupProducts(items: Product[]) {
  const order: string[] = [];
  const map = new Map<string, Product[]>();
  for (const item of items) {
    if (!map.has(item.group)) {
      map.set(item.group, []);
      order.push(item.group);
    }
    map.get(item.group)!.push(item);
  }
  return order.map((group) => ({ group, items: map.get(group)! }));
}
