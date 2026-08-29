import { FC } from "react";
import { Project } from "../../../types";
import { TerminalCard } from "../molecules/TerminalCard";

type Props = {
  projects: Project[];
};

export const Projects: FC<Props> = (props) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3">
      {props.projects.map((item, index) => (
        <TerminalCard
          key={index}
          status={item.status}
          description={item.description}
          link={item.link}
          title={item.title}
          tags={item.tags}
          youtube={item.youtube}
        />
      ))}
    </section>
  );
};
