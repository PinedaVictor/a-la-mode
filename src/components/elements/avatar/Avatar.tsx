import React from "react";

interface AvatarProps {
  img: string;
  imgAltText: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <picture className=" w-11 h-11 mr-2 mt-2">
      <source srcSet={props.img} />
      <img
        className=" rounded-full w-11 h-11"
        src={props.img}
        alt={props.imgAltText}
      />
    </picture>
  );
};
