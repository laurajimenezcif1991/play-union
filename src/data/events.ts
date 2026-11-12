/**
 * Editable class & event schedule.
 * Set status to "needs-review" for old or uncertain entries — they are labeled for owner review
 * and are not presented as confirmed permanent programming.
 */

export type EventStatus = 'confirmed' | 'needs-review' | 'canceled';

export type ScheduleEvent = {
  id: string;
  title: string;
  /** ISO date YYYY-MM-DD when known; leave empty for recurring-only items */
  date: string;
  time: string;
  instructor: string;
  ageRange: string;
  priceOrPass: string;
  registrationUrl: string | null;
  recurringNote?: string;
  status: EventStatus;
  notes?: string;
};

export const events: ScheduleEvent[] = [
  {
    id: 'friday-singalong',
    title: 'Friday Singalong with Jeff Jam',
    date: '',
    time: '11:30 a.m.–12:00 p.m.',
    instructor: 'Jeff Jam',
    ageRange: 'Open to drop-in play visitors (young children & caregivers)',
    priceOrPass: 'Included with open play / pass / membership — no sign-up needed',
    registrationUrl: null,
    recurringNote: 'Weekly on Fridays (as published on the current site)',
    status: 'needs-review',
    notes:
      'Listed on the current Play Union homepage. Confirm instructor, time, and whether it is still weekly before treating as confirmed.',
  },
];

export function visibleEvents(list: ScheduleEvent[] = events) {
  return list.filter((e) => e.status !== 'canceled');
}
