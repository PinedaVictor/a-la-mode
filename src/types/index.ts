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
