import { type FC } from "react";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { Projects } from "../components/atomic/organisms/Projects";
import { projectsConfig } from "../configs/projects";
import { Input } from "../components/atomic/atoms";
import { Badge } from "../components/atomic/atoms/Badge";
import { projectStatuses } from "../types";

export const ProjectsPage: FC = () => {
  return (
    <PageWrapper>
      <div className=" p-2">
        <Input
          label="Filter"
          placeholder="Search"
          id="Something"
          name={"search"}
        />
        <div className="flex flex-wrap p-2">
          <p>By Status:</p>
          {projectStatuses.map((item: string, idx: number) => (
            <div className=" mr-1 mb-1" key={idx}>
              <Badge text={item} color={"blue"} />
            </div>
          ))}
        </div>
        <div className=" p-2">
          <p>By Tags:</p>
          {["Open Source", "React", "Typescript"].map((item: string) => (
            <Badge text={item} color={"blue"} />
          ))}
        </div>
      </div>
      <Projects projects={projectsConfig} />
    </PageWrapper>
  );
};
