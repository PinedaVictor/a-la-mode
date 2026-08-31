import { type FC } from "react";
import { type Project } from "../../../types";
import { ExternalLink } from "../atoms";
import { Badge } from "../atoms/Badge";
import { LeftRightSpring } from "../../springs";

export const TerminalCard: FC<Project> = (props) => {
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
    <LeftRightSpring left={false} height={250} className="break-inside-avoid">
      <div className="p-7">
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-yellow" />
          <div className="relative flex flex-col overflow-hidden rounded-3xl border-4 border-satBlack bg-white">
            <div className="bg-satBlack">
              {props.youtube ? (
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 h-full w-full"
                    src={props.youtube}
                    title={`${props.title} demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex h-48 items-center justify-center">
                  <p className="font-TY text-2xl text-offWhite/40">
                    {props.title}
                  </p>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-TY text-2xl font-bold text-satBlack">
                  {props.title}
                </p>
                <Badge color={badgeColor} text={props.status} />
              </div>
              <p className="mb-4 text-offBlack">{props.description}</p>
              <div className="mb-4 flex flex-wrap gap-1">
                {props.tags.map((tag: string, idx: number) => (
                  <Badge key={idx} color="blue" text={tag} />
                ))}
              </div>
              <ExternalLink link={props.link}>
                <div className="flex justify-end gap-1">
                  <span className="h-2 w-2 rounded-full bg-satBlack" />
                  <span className="h-2 w-2 rounded-full bg-satBlack" />
                  <span className="h-2 w-2 rounded-full bg-satBlack" />
                </div>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </LeftRightSpring>
  );
};
