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
};

export type DownloadableItinerary = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  relatedVideoId?: string;
  costBreakdown?: CostItem[];
  assets: ItineraryAsset[];
};
