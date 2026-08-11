import { type FC } from "react";
import { type TravelVideo } from "../../../types";
import { ExternalLink } from "../atoms";
import { Badge } from "../atoms/Badge";
import { LeftRightSpring } from "../../springs";

export const VideoCard: FC<TravelVideo> = (props) => {
  return (
    <LeftRightSpring left={false} height={250}>
      <div className=" p-7">
        <div className=" border-2 p-3 rounded-md border-grey">
          <div className="rounded-t-lg flex flex-row justify-between items-center">
            <p className=" font-TY font-bold text-2xl">{props.title}</p>
          </div>
          <div className="relative w-full my-3" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded"
              src={`https://www.youtube.com/embed/${props.videoId}`}
              title={props.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap">
            {props.tags.map((tag: string, idx: number) => (
              <div className=" mr-1 mb-1" key={idx}>
                <Badge color="blue" text={tag} />
              </div>
            ))}
          </div>
          <ExternalLink
            link={`https://www.youtube.com/watch?v=${props.videoId}`}
          >
            <div className="flex font-TY">
              <p className="ml-auto mt-3 pr-1">Watch on YouTube</p>
            </div>
          </ExternalLink>
        </div>
      </div>
    </LeftRightSpring>
  );
};
