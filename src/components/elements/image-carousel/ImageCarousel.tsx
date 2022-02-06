import React, { useState } from "react";
import img from "../../../assets/images/idk.png";
import img2 from "../../../assets/images/yes.jpg";

const images = [img, img2];

export const ImageCarousel: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(img);
  // TODO: Get started with gestures API
  // TODO: Associate gesture with moving right and left of an image

  return (
    <>
      <div className=" h-full w-full">
        <picture>
          <img
            src={currentImg}
            alt="Make sure alt text is in data"
            className="object-cover h-full w-full"
          />
        </picture>
      </div>
    </>
  );
};
