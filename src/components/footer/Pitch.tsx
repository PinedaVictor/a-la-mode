import React from "react";
import img from "../../assets/images/art.jpg";
import { Avatar } from "../elements";

export const Pitch: React.FC = () => {
  return (
    <>
      <Avatar img={img} imgAltText="Victor Pineda profile picture" />
      <div>THe pith compoent</div>
    </>
  );
};
