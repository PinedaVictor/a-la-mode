export type ReactChildren = {
  children: React.ReactNode;
};

export type Project = {
  title: string;
  link: string;
  status: "In Progress" | "Released" | "Archived" | "Repository";
  description: string;
  tags: string[];
};
