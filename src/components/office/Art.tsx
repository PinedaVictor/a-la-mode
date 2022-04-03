import React from "react";
import { ArtPiece } from "../elements";
import img from "../../assets/images/art.jpg";
import img2 from "../../assets/images/vic1.jpg";
import img3 from "../../assets/images/dopamine3.jpg";
import img4 from "../../assets/images/u.jpg";
import img5 from "../../assets/images/b.jpg";
import img6 from "../../assets/images/42.jpg";

const Arts = [
  {
    imgURL: img,
    altText: "Tunnel Vision Art piece",
  },
  {
    imgURL: img2,
    altText: "Three stack Art piece",
  },
  {
    imgURL: img3,
    altText: "Tunnel Vision Art piece",
  },
  {
    imgURL: img4,
    altText: "Three stack Art piece",
  },
  {
    imgURL: img6,
    altText: "Tunnel Vision Art piece",
  },
  {
    imgURL: img5,
    altText: "Three stack Art piece",
  },
];

export const Art: React.FC = () => {
  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-4 pb-8 bg-satBlack">
        {Arts.map((item, index) => (
          <ArtPiece key={index} imageURL={item.imgURL} altText={item.altText} />
        ))}
      </section>
    </>
  );
};
