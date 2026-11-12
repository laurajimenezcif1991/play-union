# Owner review checklist — Play Union website

Do **not** treat items marked **OWNER CONFIRMATION NEEDED** as confirmed public policy until resolved.

## Conflicting details

1. **Birthday party set-up / clean-up time**
   - Homepage: additional **15 minutes each** for set up and clean up.
   - FAQ: **15–20 minutes before** to set up and **15 minutes after** to load out.
   - Site currently shows both under a confirmation flag (not as one settled rule).

2. **Party price vs Shopify final payment**
   - Site/FAQ: **$450** for 2-hour party (1–15 kids); FAQ says this **includes $50 non-refundable deposit**.
   - Shopify: “2 Hour Party 1-15 Children” = **$400**, “Final Payment. Make sure deposit was also paid.”
   - Confirm the exact booking/payment flow before promoting a single checkout path.

## Missing or broken links

1. **Party Deposit $50 purchase URL** — current site Purchase control is `href="#"`. Contact / Ask About a Party is used instead.
2. **Class/event registration links** — add `registrationUrl` in `src/data/events.ts` when available.
3. **Contact form backend** — form opens a prefilled email to `info@playunionsomerville.com`. Optional: Formspree / Netlify Forms / similar.
4. **Owner/staff headshot** — bio is published; add a provided photo to `public/images/` when ready (no generated portraits).

## Needs confirmation before publishing as permanent

1. **Friday Singalong with Jeff Jam** — weekly 11:30 a.m.–12:00 p.m., no sign-up (from current homepage). Flagged `needs-review` in `src/data/events.ts`.
2. **Other private rentals** — inquiry only until pricing/terms are confirmed.
3. **Partnerships & collaborations** — separate inquiry path only; no published package.

## How to update content (owner-friendly)

| Content | File |
| --- | --- |
| Hours, address, phone, amenities | `src/data/site.ts` |
| Pass / membership / craft prices & purchase links | `src/data/products.ts` |
| Class & event schedule | `src/data/events.ts` |
| Party copy & flags | `src/data/parties.ts` |
| FAQ answers | `src/data/faq.ts` |
| This review list (code mirror) | `src/data/owner-review.ts` |

## Photos used

Only assets from Play Union’s provided logo and existing Play Union website media library (real space/event imagery). No AI-generated photos. Logo file: `public/images/logo.png`.
