import { FC } from "react";
import { type Project } from "../../../types";
import { ProjectCard } from "../molecules/ProjectCard";

const projects: Project[] = [
  {
    title: "Vexal.io",
    link: "https://www.vexal.io/",
    description: "Automation tool built for automating developer workflow.",
    tags: [
      "Go",
      "OAuth2.0",
      "Node",
      "Typescript",
      "React",
      "CLI",
      "Open-source",
      "Firebase",
      "Homebrew",
      "Cobra-CLI",
      "Viper",
    ],
    status: "Released",
  },
  {
    title: "Zvite.io",
    description:
      "Invitation system designed ease of use and to promote in-person events.",
    link: "https://www.zvite.io/",
    tags: [
      "React",
      "NextJS",
      "Node",
      "Typescript",
      "Stripe",
      "SupaBase",
      "Atomic Design",
    ],
    status: "In Progress",
  },
];

export const Projects: FC = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3">
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
          status={item.status}
          description={item.description}
          link={item.link}
          title={item.title}
          tags={item.tags}
        />
      ))}
    </section>
  );
};
