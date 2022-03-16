import React from "react";
import img from "../../../assets/images/art.jpg";
import { Avatar } from "../avatar/Avatar";

interface ClientProps {
  avatar: { img: string; altText: string };
  review: string;
}

// TODO: Map client data with props

export const Client: React.FC<ClientProps> = () => {
  return (
    <>
      <div className="flex mt-8 mb-8">
        <div className=" absolute">
          <Avatar img={img} imgAltText="Client image" />
        </div>
        <div className=" pl-14 pr-12 ">
          <p>
            Great angles! Victor takes the time and patience when it comes to
            capturing the moment. He also pays attention to detail such as
            location, clothes. A pleasure to work with, ALL-around great!
          </p>
        </div>
      </div>
    </>
  );
};
