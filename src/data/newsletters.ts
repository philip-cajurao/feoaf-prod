// ─────────────────────────────────────────────────────────────────────────────
// Newsletter Data
// To add a new monthly newsletter, prepend a new entry to the `newsletters`
// array below (newest first). Fill in the fields and you're done!
// ─────────────────────────────────────────────────────────────────────────────

export interface Newsletter {
  /** Unique slug used as an anchor / URL fragment */
  id: string;
  /** Display month + year, e.g. "June 2026" */
  month: string;
  /** Short headline shown on the card */
  title: string;
  /** One-or-two sentence teaser shown on the card */
  excerpt: string;
  /** Optional — tag labels shown as badges */
  tags?: string[];
  /** Optional — highlight this issue as "Latest" */
  isLatest?: boolean;
  /**
   * Full body of the newsletter.
   * Each element in the array is a paragraph.
   * Leave empty ([]) if you haven't written the full edition yet.
   */
  body: string[];
}

export const newsletters: Newsletter[] = [
  // ── ADD NEW NEWSLETTERS AT THE TOP ──────────────────────────────────────────
  // Example entry (copy, paste above this comment, and fill in your details):
  //
  // {
  //   id: "july-2026",
  //   month: "July 2026",
  //   title: "Your headline here",
  //   excerpt: "A short teaser sentence shown on the card.",
  //   tags: ["Programs", "Events"],
  //   isLatest: true,
  //   body: [
  //     "First paragraph of the newsletter...",
  //     "Second paragraph...",
  //   ],
  // },
];
