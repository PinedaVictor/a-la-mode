import React from "react";
import img1 from "../../../assets/images/IMG_2801.jpg";
import img2 from "../../../assets/images/DLDS.jpg";
import img3 from "../../../assets/images/DLD.jpg";
import img4 from "../../../assets/images/NAS.jpg";
import img5 from "../../../assets/images/NA.jpg";
import img6 from "../../../assets/images/hb.jpg";
import img7 from "../../../assets/images/MV.jpg";
import img8 from "../../../assets/images/UISStreetSign.jpg";

// TODO: Select photos - have a varity of NFT and great photograghy
// TODO: Add preview component
const imgData = [
  {
    imgSrc: img3,
    altText: "",
  },
  {
    imgSrc: img2,
    altText: "",
  },
  {
    imgSrc: img7,
    altText: "",
  },
  {
    imgSrc: img8,
    altText: "",
  },
  {
    imgSrc: img6,
    altText: "",
  },
  {
    imgSrc: img5,
    altText: "",
  },
  {
    imgSrc: img4,
    altText: "",
  },
];

export const ImageGrid: React.FC = () => {
  return (
    <>
      <section className=" grid grid-cols-2  w-screen bg-yellow">
        {imgData.map((item) => (
          <div>
            <picture>
              <source type="image/webp" srcSet={item.imgSrc} />
              <img src={item.imgSrc} alt={item.altText} />
            </picture>
          </div>
        ))}
      </section>
    </>
  );
};
