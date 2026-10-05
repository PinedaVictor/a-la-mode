export type ReactChildren = {
  children: React.ReactNode;
};

export type Project = {
  title: string;
  link: string;
  youtube?: string;
  status:
    | "In Progress"
    | "Released"
    | "Archived"
    | "Repository"
    | "Under Construction"
    | "Active";
  description: string;
  tags: string[];
};

export type TravelVideo = {
  title: string;
  videoId: string;
  tags: string[];
};

export type ItineraryAsset = {
  label: string;
  storagePath: string;
};

export type CostItem = {
  label: string;
  amount: string;
  region?: string;
};

export type DownloadableItinerary = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  relatedVideoId?: string;
  costBreakdown?: CostItem[];
  assets: ItineraryAsset[];
  // Public teaser fields, shown to signed-out visitors (and Google):
  // one headline number, e.g. "~$45/day" or "3 days ≈ $1,250 all-in".
  costHeadline?: string;
  // Extra "what's inside" bullets, e.g. "Local guide contacts".
  highlights?: string[];
};

export type Announcement = {
  date: string;
  title: string;
  body?: string;
  link?: string;
};
