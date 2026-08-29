import React from "react";
import img5 from "../../../assets/images/Art/vic.webp";
import img9 from "../../../assets/images/Art/andres.webp";
import img10 from "../../../assets/images/Art/TV.webp";
import img42 from "../../../assets/images/42.jpg";
import imgDope from "../../../assets/images/dopamine3.jpg";
import plat2 from "../../../assets/images/Art/IMG_0608.webp";
import building from "../../../assets/images/Art/building.webp";
import test2 from "../../../assets/images/Art/test2.webp";

import { ArtPiece } from "../../elements";

const imgData = [
  {
    imgSrc: plat2,
    altText: ""
  },
  {
    imgSrc: imgDope,
    altText: ""
  },
  {
    imgSrc: img9,
    altText: ""
  },
  {
    imgSrc: img10,
    altText: ""
  },
  {
    imgSrc: img5,
    altText: ""
  },
  {
    imgSrc: img42,
    altText: ""
  },
  {
    imgSrc: building,
    altText: ""
  },
  {
    imgSrc: test2,
    altText: ""
  }
];

export const ImageGrid: React.FC = () => {
  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-4 w-screen bg-satBlack">
        {imgData.map((item, index) => (
          <ArtPiece key={index} imageURL={item.imgSrc} altText={item.altText} />
        ))}
      </section>
    </>
  );
};
