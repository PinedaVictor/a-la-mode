import { FC } from "react";
import { Project } from "../../../types";
import { TerminalCard } from "../molecules/TerminalCard";

type Props = {
  projects: Project[];
};

export const Projects: FC<Props> = (props) => {
  return (
    <section className="columns-1 md:columns-2 lg:columns-3">
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
