export type ReactChildren = {
  children: React.ReactNode;
};

export type ProjectStatus =
  | "In Progress"
  | "Released"
  | "Archived"
  | "Repository";

export const projectStatuses: ProjectStatus[] = [
  "Released",
  "In Progress",
  "Repository",
  "Archived",
];

export type Project = {
  title: string;
  link: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
};
