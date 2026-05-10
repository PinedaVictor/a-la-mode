export type ReactChildren = {
  children: React.ReactNode;
};

export type Project = {
  title: string;
  link: string;
  status:
    | "In Progress"
    | "Released"
    | "Archived"
    | "Repository"
    | "Under Construction";
  description: string;
  tags: string[];
};
