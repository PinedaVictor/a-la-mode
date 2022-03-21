import React from "react";
import { ExternalLink } from "../../utils";
import { LeftRightSpring } from "../../springs";

interface WebDisplayProps {
  image: { src: string; altText: string };
  title: string;
  link: string;
}

export const WebDisplay: React.FC<WebDisplayProps> = (props) => {
  return (
    <>
      <LeftRightSpring left={false} height={500}>
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
            <div className="flex p-2 font-TY border-x-2 border-b-2 rounded-b-lg border-grey">
              <p className=" text-xl">{props.title}</p>
              <div className="w-full">
                <ExternalLink link={props.link}>
                  <div className=" float-right border-2 rounded-full  mr-3 mt-3 text-xl p-1 border-solid border-b-offBlack">
                    🚀
                  </div>
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </LeftRightSpring>
    </>
  );
};
