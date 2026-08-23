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
    costBreakdown: [
      { label: "ATV booking", amount: "$17.24" },
      { label: "Hostel", amount: "$34.87" },
      { label: "Train ticket (from Taipei)", amount: "$13 - $21" },
      { label: "Scooter rental (1 day)", amount: "$25 (may be more without an IDP)" },
      { label: "Gasoline", amount: "$3.15" }
    ],
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
    costBreakdown: [
      { label: "Flight (from Muscat, Oman)", amount: "$150" },
      { label: "Flight (from LAX, one way)", amount: "~$722" },
      { label: "Hotel", amount: "$346.56" },
      { label: "Daily food", amount: "$15 - $30" },
      { label: "Day trip", amount: "$60" }
    ],
    assets: [
      {
        label: "Download PDF",
        storagePath: "itineraries/3 Day Iraq Trip.pdf"
      }
    ]
  }
];
