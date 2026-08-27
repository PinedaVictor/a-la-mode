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
    title: "Taiwan Complete Blueprint",
    slug: "taiwan-complete-blueprint",
    description: "A complete guide to traveling Taiwan, covering where to go and what to expect.",
    tags: ["Taiwan"],
    relatedVideoId: "Ti4dY9tbN7A",
    costBreakdown: [
      { region: "Taipei", label: "Meander Hostel", amount: "$32 - $55/night (depending on options)" },
      { region: "Taipei", label: "Sundaily Hostel", amount: "$28 - $35/night" },
      { region: "Taipei", label: "Daily food & drinks", amount: "$20 - $30" },
      { region: "Hualien", label: "Dumbo Hostel", amount: "$28 - $40" },
      { region: "Hualien", label: "ATV beach ride", amount: "$17.24" },
      { region: "Hualien", label: "Train ticket (from Taipei)", amount: "$13 - $21" },
      { region: "Kenting", label: "Train ride (from Hualien)", amount: "$15 - $25" },
      { region: "Kenting", label: "Hotel", amount: "$50 - $60" },
      { region: "Kenting", label: "Beach", amount: "No entrance fee — just gas or an Uber ride" },
      { region: "Kenting", label: "Scooter rental", amount: "$15 - $25/day (higher deposit without an IDP)" },
      { region: "Tainan", label: "Hope Hotel", amount: "$35 - $55/night" },
      { region: "Tainan", label: "Food & drinks", amount: "$25 - $40/day" },
      { region: "Taichung", label: "Modern Inn Hotel", amount: "$20 - $30/night" },
      { region: "Taichung", label: "Taichung Park", amount: "Free" },
      { region: "Taichung", label: "Night markets", amount: "$15 - $25" }
    ],
    assets: [
      {
        label: "Download PDF",
        storagePath: "itineraries/Taiwan Complete Blueprint.pdf"
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
