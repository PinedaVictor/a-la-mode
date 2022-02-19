import React from "react";
import img1 from "../../../assets/images/idk.png";
import img2 from "../../../assets/images/yes.jpg";
import img3 from "../../../assets/images/rims.png";
import img4 from "../../../assets/images/ph.png";

// TODO: Define image data - will need vertical and horizontal prop
// TODO: Abstract out image component and map it with data
// TODO: Select photos - have a varity of NFT and great photograghy

export const ImageGrid: React.FC = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 w-screen bg-yellow">
        <div className=" md:col-span-2">
          <picture>
            <source type="image/webp" srcSet={img1} />
            <img src={img1} alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <source type="image/webp" srcSet={img2} />
            <img src={img2} alt="" />
          </picture>
        </div>
        <div className="">
          <picture>
            <source type="image/webp" srcSet={img3} />
            <img src={img3} alt="" />
          </picture>
        </div>
        <div className=" md:row-span-2">
          <picture>
            <source type="image/webp" srcSet={img4} />
            <img src={img4} alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <source type="image/webp" srcSet={img3} />
            <img src={img3} alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <source type="image/webp" srcSet={img4} />
            <img src={img4} alt="" />
          </picture>
        </div>
      </div>
    </>
  );
};
