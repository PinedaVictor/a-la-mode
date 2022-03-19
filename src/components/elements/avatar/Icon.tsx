import React from "react";

interface IconProps {
  img: string;
  imgAltText: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <picture className="mr-2 mt-2">
      <source srcSet={props.img} />
      <img
        className=" rounded-full h-9 w-9"
        src={props.img}
        alt={props.imgAltText}
      />
    </picture>
  );
};
