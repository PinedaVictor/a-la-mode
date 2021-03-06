import React from "react";

interface H1Props {
  heading: string;
}

export const H1: React.FC<H1Props> = (props) => {
  return (
    <>
      <h1 className=" text-6xl font-[Tommy] text-offBlack  underline">
        {props.heading}
      </h1>
    </>
  );
};
