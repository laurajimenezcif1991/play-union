/**
 * Editable class & event schedule + calendar occurrences.
 *
 * Featured video (Events page):
 * - YouTube: use the embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
 * - Vimeo: https://player.vimeo.com/video/VIDEO_ID
 * - Local file: put the file in public/videos/ and set type to "file" with src "/videos/your-file.mp4"
 */

export type EventStatus = 'confirmed' | 'needs-review' | 'canceled';

export type FeaturedVideo =
  | {
      type: 'youtube' | 'vimeo';
      /** Full embed URL (youtube.com/embed/... or player.vimeo.com/video/...) */
      src: string;
      title: string;
    }
  | {
      type: 'file';
      /** Path under public/, e.g. /videos/singalong.mp4 */
      src: string;
      title: string;
      poster?: string;
    }
  | null;

/** Set to a video object to show on the Events page; leave null to hide. */
export const featuredVideo: FeaturedVideo = {
  type: 'file',
  src: 'videos/events-feature.mp4',
  title: 'Events at Play Union',
};

/** Color tokens for calendar dates (Program Calendar palette). */
export type CalendarTone = 'purple' | 'rust' | 'teal' | 'indigo';

export type CalendarOccurrence = {
  id: string;
  title: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  time: string;
  tone: CalendarTone;
  note?: string;
};

/**
 * November 2026 schedule (editable).
 * Add more months as ISO dates — the calendar UI filters by month.
 */
export const calendarOccurrences: CalendarOccurrence[] = [
  {
    id: '2026-11-02-dance',
    title: 'Dance Together With Miss Tori',
    date: '2026-11-02',
    time: '10:30 am – 11:15 am',
    tone: 'purple',
  },
  {
    id: '2026-11-03-stretch',
    title: 'Stretch and Dance: Morning Movement and Music for Kids',
    date: '2026-11-03',
    time: '11:15 am – 12:00 pm',
    tone: 'indigo',
  },
  {
    id: '2026-11-04-sensory',
    title: 'Sensory Play With Miss Heather',
    date: '2026-11-04',
    time: '10:00 am – 11:00 am',
    tone: 'teal',
  },
  {
    id: '2026-11-05-music',
    title: 'Music Together Class Fall Session With Jeff Jam',
    date: '2026-11-05',
    time: '4:15 pm – 5:00 pm',
    tone: 'rust',
  },
  {
    id: '2026-11-06-sing',
    title: 'Free Weekly Sing Along With Jeff Jam',
    date: '2026-11-06',
    time: '11:30 am – 12:00 pm',
    tone: 'rust',
  },
  {
    id: '2026-11-06-story',
    title: 'Storytime and Play From Around The World',
    date: '2026-11-06',
    time: '3:30 pm – 4:15 pm',
    tone: 'teal',
  },
  {
    id: '2026-11-09-dance',
    title: 'Dance Together With Miss Tori',
    date: '2026-11-09',
    time: '10:30 am – 11:15 am',
    tone: 'purple',
  },
  {
    id: '2026-11-11-sensory',
    title: 'Sensory Play With Miss Heather',
    date: '2026-11-11',
    time: '10:00 am – 11:00 am',
    tone: 'teal',
  },
  {
    id: '2026-11-13-sing',
    title: 'No Sing Along This Week!',
    date: '2026-11-13',
    time: '11:30 am – 12:00 pm',
    tone: 'rust',
  },
  {
    id: '2026-11-16-dance',
    title: 'Dance Together With Miss Tori',
    date: '2026-11-16',
    time: '10:30 am – 11:15 am',
    tone: 'purple',
  },
  {
    id: '2026-11-18-sensory',
    title: 'Sensory Play With Miss Heather',
    date: '2026-11-18',
    time: '10:00 am – 11:00 am',
    tone: 'teal',
  },
  {
    id: '2026-11-20-sing',
    title: 'No Sing Along This Week!',
    date: '2026-11-20',
    time: '11:30 am – 12:00 pm',
    tone: 'rust',
  },
  {
    id: '2026-11-20-story',
    title: 'Storytime and Play From Around The World',
    date: '2026-11-20',
    time: '3:30 pm – 4:15 pm',
    tone: 'teal',
  },
  {
    id: '2026-11-24-stretch',
    title: 'Stretch and Dance: Morning Movement and Music for Kids',
    date: '2026-11-24',
    time: '11:15 am – 12:00 pm',
    tone: 'indigo',
  },
  {
    id: '2026-11-25-sensory',
    title: 'Sensory Play With Miss Heather',
    date: '2026-11-25',
    time: '10:00 am – 11:00 am',
    tone: 'teal',
  },
  {
    id: '2026-11-27-sing',
    title: 'Free Weekly Sing Along With Jeff Jam',
    date: '2026-11-27',
    time: '11:30 am – 12:00 pm',
    tone: 'rust',
  },
  {
    id: '2026-11-27-story',
    title: 'Storytime and Play From Around The World',
    date: '2026-11-27',
    time: '3:30 pm – 4:15 pm',
    tone: 'teal',
  },
  {
    id: '2026-11-30-dance',
    title: 'Dance Together With Miss Tori',
    date: '2026-11-30',
    time: '10:30 am – 11:15 am',
    tone: 'purple',
  },
];

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

/** Longer-form program cards (optional detail under the calendar). */
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
    recurringNote: 'Weekly on Fridays when scheduled',
    status: 'confirmed',
    notes: 'Rust-colored dates mark free singalongs and weeks without a session.',
  },
];

export function visibleEvents(list: ScheduleEvent[] = events) {
  return list.filter((e) => e.status !== 'canceled');
}

export function calendarForClient(list: CalendarOccurrence[] = calendarOccurrences) {
  return list;
}
