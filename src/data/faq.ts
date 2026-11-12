export type FaqItem = {
  question: string;
  answer: string;
  ownerConfirmationNeeded?: boolean;
};

export type FaqSection = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: 'visiting',
    title: 'Visiting & Open Play',
    items: [
      {
        question: 'What is drop-in / open play?',
        answer:
          'Play Union is an indoor pretend-play and craft space in Somerville where young children can explore, imagine, create, and play. Build with Magnatiles and blocks, solve puzzles, play restaurant or market, zoom with trucks and trains, launch into space, put on a puppet show, and more.',
      },
      {
        question: 'What are your hours?',
        answer:
          'Monday–Wednesday 9:00 a.m.–5:00 p.m.; Thursday 9:00 a.m.–4:00 p.m.; Friday 9:00 a.m.–5:00 p.m.; Saturday and Sunday closed.',
      },
      {
        question: 'When is final entry?',
        answer: 'Final entry is 30 minutes before closing during drop-in play.',
      },
      {
        question: 'Do adults pay?',
        answer: 'Adults are free. Enjoy complimentary coffee, tea, and Wi-Fi.',
      },
      {
        question: 'Where can I park? How do I get there on the T?',
        answer:
          'Parking spots 1 & 2 in the private lot next to Play Union are for Play Union customers. There are also nearby 2-hour and metered spots in Union Square. Somerville residents with a residential sticker can park on nearby side streets. Play Union is about a 5-minute walk from the Union Square Green Line station; local buses also serve the area.',
      },
    ],
  },
  {
    id: 'passes',
    title: 'Passes & Memberships',
    items: [
      {
        question: 'What pass options do you offer?',
        answer:
          'Published options include Day Pass, 5 Day Pass, and 10 Day Pass, plus additional-child and ages 0–1 yr options. See Passes & Memberships for exact names, prices, and purchase links.',
      },
      {
        question: 'Do multi-day passes expire?',
        answer: '5 and 10 Day Passes are punch cards that never expire.',
      },
      {
        question: 'What do memberships include?',
        answer:
          'Membership includes 10% off all parties and 2 crafts per week for children ages 2+. Published lengths include 1 Month, 4 Month, and 6 Month (with additional-child and ages 0–1 yr options).',
      },
      {
        question: 'Are infant siblings free?',
        answer: 'Siblings ages 0–1 yr are always free (as published with add’l-child pass notes).',
      },
    ],
  },
  {
    id: 'classes',
    title: 'Classes & Events',
    items: [
      {
        question: 'Do you have a weekly singalong?',
        answer:
          'The current site lists a Friday Singalong with Jeff Jam, weekly 11:30 a.m.–12:00 p.m., with no sign-up needed. Schedules can change — check Classes & Events for the editable schedule and any owner review flags.',
        ownerConfirmationNeeded: true,
      },
      {
        question: 'How do I register for a class?',
        answer:
          'When a registration link is available, it appears on the Classes & Events schedule entry. If none is listed, contact Play Union.',
      },
    ],
  },
  {
    id: 'parties',
    title: 'Birthday Parties',
    items: [
      {
        question: 'How much is a birthday party?',
        answer:
          'Published base rate: 2-hour party for 1–15 kids — $450 (FAQ: includes $50 non-refundable deposit). Additional child $10; additional time $60 per half-hour; painting crafts $5 per participant. Members get 10% off parties.',
      },
      {
        question: 'What is the guest limit / capacity?',
        answer:
          'FAQ: max 25 kids (counting starts at crawling); max capacity 60 people. If more than 40 people total, $5 per additional adult.',
      },
      {
        question: 'How much set-up and clean-up time is included?',
        answer:
          'Homepage and FAQ wording differs. Homepage: additional 15 minutes each for set up and clean up. FAQ: 15–20 minutes before to set up and 15 minutes after to load out. Staff help with food/decor setup and take-away packaging; staff handle other cleaning/reset.',
        ownerConfirmationNeeded: true,
      },
      {
        question: 'Can we bring food and decorations?',
        answer:
          'Yes. Keep food in the party area to lower allergen risk on toys. Decorations are welcome; the party area is narrow so large backdrops and balloon architecture may not fit well. Basic paper goods, tablecloths, and balloon bunches are included as published.',
      },
      {
        question: 'When do we pay?',
        answer:
          'A $50 deposit is listed on the current site. FAQ: final payment is at the end of the party so you only pay for guests that arrive.',
      },
    ],
  },
];
