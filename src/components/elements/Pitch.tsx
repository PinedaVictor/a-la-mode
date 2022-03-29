import React from "react";
import img from "../../assets/images/vicgithub.jpg";
import { Avatar } from "../elements";

interface PitchProps {
  intro: string;
  pitch: string;
}

export const Pitch: React.FC<PitchProps> = (props) => {
  return (
    <>
      <Avatar img={img} imgAltText="Victor Pineda profile picture" />
      <div>{props.intro}</div>
      <div>{props.pitch}</div>
    </>
  );
};
