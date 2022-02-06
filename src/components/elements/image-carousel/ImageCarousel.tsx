import React from "react";
import img from "../../../assets/images/idk.png";
import img2 from "../../../assets/images/yes.jpg";

const images = [img, img2];

export const ImageCarousel: React.FC = () => {
  return (
    <>
      <div className="text-offBlack">My image carousel</div>
      <div className=" h-full w-full">
        <picture>
          <img
            src={img}
            alt="Make sure alt text is in data"
            className="object-cover h-full w-full"
          />
        </picture>
      </div>
    </>
  );
};
