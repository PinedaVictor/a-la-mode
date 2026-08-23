import { DownloadableItinerary } from "../types";

// Add a new itinerary by uploading its file(s) to Firebase Storage under
// itineraries/<file> (flat, no per-guide subfolder), then adding an entry
// here with one asset per downloadable file. Redeploy to publish it.
export const itinerariesConfig: DownloadableItinerary[] = [
  {
    title: "Top Two Hualien, Taiwan",
    slug: "top-two-hualien-taiwan",
    description:
      "The two must-see stops in Hualien from the ATV video — where to go and what to expect.",
    tags: ["Taiwan", "Hualien"],
    relatedVideoId: "FxissA1nuLo",
    assets: [
      {
        label: "Download PDF",
        storagePath: "itineraries/Top Two Hualien,Taiwan.pdf"
      }
    ]
  },
  {
    title: "3 Day Iraq Trip",
    slug: "3-day-iraq-trip",
    description:
      "A 3 day itinerary from the Iraq trip — where to go and what to expect.",
    tags: ["Iraq"],
    relatedVideoId: "JuYamR-5Ha4",
    assets: [
      {
        label: "Download PDF",
        storagePath: "itineraries/3 Day Iraq Trip.pdf"
      }
    ]
  }
];
