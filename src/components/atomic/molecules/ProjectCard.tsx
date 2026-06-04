import { type FC } from "react";
import { type Project } from "../../../types";
import { ExternalLink } from "../atoms";
import { Badge } from "../atoms/Badge";
import { LeftRightSpring } from "../../springs";
import { Trails } from "../../springs/Trails";

export const ProjectCard: FC<Project> = (props) => {
  let badgeColor = "" as "blue" | "green" | "yellow" | "grey" | "orange";
  switch (props.status) {
    case "In Progress":
      badgeColor = "yellow";
      break;
    case "Released":
      badgeColor = "green";
      break;
    case "Archived":
      badgeColor = "grey";
      break;
    case "Repository":
      badgeColor = "orange";
      break;
    case "Under Construction":
      badgeColor = "orange";
      break;
    case "Active":
      badgeColor = "green";
      break;
    default:
      badgeColor = "grey";
      break;
  }
  return (
    <LeftRightSpring left={false} height={250}>
      <div className=" p-7">
        <div className=" border-2 p-3 rounded-md border-grey">
          <div className="rounded-t-lg flex flex-row justify-between items-center">
            <p className=" font-TY font-bold text-2xl">{props.title}</p>
            <Badge color={badgeColor} text={props.status} />
          </div>
          {props.youtube && (
            <div className="relative w-full my-3" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src={props.youtube}
                title={`${props.title} demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
          <div>
            <p className=" mb-2">{props.description}</p>
            <div className="flex flex-wrap">
              {props.tags.map((tag: string, idx: number) => (
                <div className=" mr-1 mb-1" key={idx}>
                  <Badge color="blue" text={tag} />
                </div>
              ))}
            </div>
          </div>
          <ExternalLink link={props.link}>
            <div className="flex font-TY">
              <p className="ml-auto mt-3 pr-1">View</p>
            </div>
          </ExternalLink>
        </div>
      </div>
    </LeftRightSpring>
  );
};
