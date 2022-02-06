import React from "react";
import img from "../../../assets/images/idk.png";

export const ImageCarousel: React.FC = () => {
  return (
    <>
      <div className="text-offBlack">My image carousel</div>
      <img src={img} />
    </>
  );
};
