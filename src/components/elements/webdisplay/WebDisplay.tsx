import React from "react";
import img from "../../../assets/images/webapps/UIS.jpg";
import { ExternalLink } from "../../utils";

interface WebDisplayProps {
  image: { src: string; altText: string };
  title: string;
  link: string;
}

export const WebDisplay: React.FC<WebDisplayProps> = (props) => {
  return (
    <>
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
                <div className=" float-right">
                  {/* TODO: Design arrow icon */}
                  <img
                    className=" rounded-full mt-2 mr-2"
                    src={img}
                    height={40}
                    width={40}
                  />
                </div>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
