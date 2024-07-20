import { type FC } from "react";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { Projects } from "../components/atomic/organisms/Projects";
import { projectsConfig } from "../configs/projects";

export const ProjectsPage: FC = () => {
  return (
    <PageWrapper>
      <Projects projects={projectsConfig} />
    </PageWrapper>
  );
};
