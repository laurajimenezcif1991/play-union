/**
 * Items that must not be published as confirmed policy until the owner resolves them.
 * Also summarized in OWNER-REVIEW.md at the project root.
 */

export type ReviewItem = {
  id: string;
  topic: string;
  detail: string;
  sources: string[];
};

export const ownerConfirmationNeeded: ReviewItem[] = [
  {
    id: 'party-setup-time',
    topic: 'Birthday party set-up / clean-up time',
    detail:
      'Homepage says “an additional 15 minutes each for set up and clean up.” FAQ says “15 to 20 minutes before to set up and 15 minutes after to load out.”',
    sources: ['Homepage Parties/Rental', 'FAQ'],
  },
  {
    id: 'party-total-vs-shopify',
    topic: 'Party total vs Shopify final-payment product',
    detail:
      'Site/FAQ list $450 for a 2-hour party (1–15 kids), including a $50 deposit per FAQ. Shopify product “2 Hour Party 1-15 Children” is $400 and describes itself as final payment after deposit. Confirm the exact booking/payment flow before publishing as a single confirmed checkout path.',
    sources: ['Homepage', 'FAQ', 'Shopify'],
  },
  {
    id: 'party-deposit-purchase-link',
    topic: 'Party Deposit purchase link',
    detail:
      'Homepage lists Party Deposit $50 with Contact Us. The Purchase control is a dead link (#). Do not publish a purchase URL until a correct Shopify (or other) link is provided.',
    sources: ['Homepage Parties/Rental'],
  },
  {
    id: 'friday-singalong',
    topic: 'Friday Singalong schedule',
    detail:
      'Homepage lists weekly Friday Singalong with Jeff Jam, 11:30–12:00, no sign-up. Confirm it is still current (instructor, time, and cadence) before removing the needs-review flag.',
    sources: ['Homepage'],
  },
  {
    id: 'other-rentals-details',
    topic: 'Other private rentals',
    detail:
      'Homepage invites contact for other space rentals but does not publish confirmed pricing/terms. Keep inquiry-only until owner provides details.',
    sources: ['Homepage Parties/Rental'],
  },
  {
    id: 'partnerships-details',
    topic: 'Partnerships & community collaborations',
    detail:
      'No confirmed published partnership package on the current site. Keep a separate inquiry path only.',
    sources: ['Brief + current site'],
  },
  {
    id: 'staff-photos',
    topic: 'Staff photos beyond owner bio',
    detail:
      'Owner bio for Debbie Musnikow is published. Additional current staff photos/bios were not confirmed in the brief assets provided beyond existing site media.',
    sources: ['Meet the Staff'],
  },
];

export const missingLinks = [
  {
    id: 'party-deposit-url',
    label: 'Party Deposit $50 purchase URL',
    notes: 'Current site Purchase button is href="#". Contact form is the working path.',
  },
  {
    id: 'class-registration-urls',
    label: 'Class/event registration links',
    notes: 'Add registrationUrl on each entry in src/data/events.ts when available.',
  },
  {
    id: 'contact-form-backend',
    label: 'Contact form delivery backend',
    notes:
      'Form currently opens a prefilled email to info@playunionsomerville.com. Wire Formspree, Netlify Forms, or similar if preferred.',
  },
  {
    id: 'owner-headshot',
    label: 'Confirmed owner/staff headshot asset',
    notes: 'Add provided photos to public/images when available; do not invent portraits.',
  },
];
