import React from "react";
import img from "../../../assets/images/art.jpg";
import img2 from "../../../assets/images/vic2.jpg";
import { Icon } from "../avatar/Icon";
import { Comment } from "./Comment";

interface ClientProps {
  avatar: { img: string; altText: string };
  review: string;
}

// TODO: Map client data with props

export const Client: React.FC<ClientProps> = () => {
  return (
    <>
      <div className=" absolute">
        <Icon img={img} imgAltText="Client image" />
      </div>
      <div className=" absolute ml-3">
        <Icon img={img2} imgAltText="Client image" />
      </div>
      <div className="flex mt-7 mb-8 bg-iGrey text-offBlack rounded-2xl">
        <div className=" pl-4 pt-2 pr-3 pb-1 ">
          <p>
            Great angles! Victor takes the time and patience when it comes to
            capturing the moment. He also pays attention to detail such as
            location, clothes. A pleasure to work with, ALL-around great!
          </p>
        </div>
      </div>
      <Comment />
    </>
  );
};
