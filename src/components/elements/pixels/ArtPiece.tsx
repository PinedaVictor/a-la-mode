import React from "react";
import img from "../../../assets/images/art.jpg";

export const ArtPiece: React.FC = () => {
  return (
    <>
      <picture
        onClick={() => {
          console.log("CLicking image: ", img);
        }}
      >
        <source type="image/webp" srcSet={img} />
        <img src={img} width={1080} height={1080} />
      </picture>
    </>
  );
};
