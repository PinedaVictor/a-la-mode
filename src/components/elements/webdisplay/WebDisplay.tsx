import React from "react";
import { ExternalLink } from "../../atomic/atoms";

interface WebDisplayProps {
  image: { src: string; altText: string };
  title: string;
  link: string;
}

export const WebDisplay: React.FC<WebDisplayProps> = (props) => {
  return (
    <div className=" p-7">
      <div className=" ">
        <div className="">
          <picture>
            <img
              className=" rounded-t-lg"
              src={props.image.src}
              width={1080}
              height={1080}
              alt={props.image.altText}
            />
          </picture>
        </div>
        <ExternalLink link={props.link}>
          <div className="flex p-2 font-SFM border-x-2 border-b-2 rounded-b-lg border-grey">
            <p className=" w-full mt-3 ">{props.title}</p>
            <div className=" ">
              <div className=" float-right mr-3 mt-3 text-2xl ">🚀</div>
            </div>
          </div>
        </ExternalLink>
      </div>
    </div>
  );
};
