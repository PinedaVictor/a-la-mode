import { Announcement } from "../types";

// TODO: Seeded from recent site changes as placeholder content - swap in
// real dated announcements (new videos, guides, art drops, etc.) as they ship.
export const announcementsConfig: Announcement[] = [
  {
    date: "Aug 2026",
    title: "Site refresh",
    body: "Cleaned up the nav, gave Building its own page, and streamlined the homepage."
  },
  {
    date: "Aug 2026",
    title: "Free Taiwan itinerary added",
    body: "A full route breakdown from the Taiwan trip is now live in Travel Guides.",
    link: "/travel-guides"
  },
  {
    date: "Jul 2026",
    title: "Travel guides now include cost breakdowns",
    body: "Every itinerary now ships with real cost numbers and the matching YouTube walkthrough.",
    link: "/travel-guides"
  }
];
