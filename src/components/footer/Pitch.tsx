import React from "react";
import img from "../../assets/images/vicgithub.jpg";
import { Avatar } from "../elements";

export const Pitch: React.FC = () => {
  return (
    <>
      <Avatar img={img} imgAltText="Victor Pineda profile picture" />
      <div>Hi, 👋</div>
      <div>
        My name is Victor Pineda. Here to help you with your brand, NFT
        colleciton, and front-end development. I have 3 Years of industry
        expeirence and a creative mind that works to help you reach your goals.
        Feel free to reach at any of my socials or lets chat over email
        pinedavictor095@gmail.com
      </div>
    </>
  );
};
