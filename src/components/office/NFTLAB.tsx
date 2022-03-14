import React from "react";
import img1 from "../../assets/images/idk3.jpg";

export const NFTLAB: React.FC = () => {
  return (
    <>
      <section className=" grid md:grid-flow-col">
        <div className=" bg-tan">
          {/* TODO: Picture that describes what NFTLAB is? FRankenstin? dexter? afro? image carousel */}
          <picture>
            <source type="image/webp" srcSet={img1} />
            {/* TODO: Alt text */}
            <img src={img1} alt="" />
          </picture>
        </div>
        <div className=" bg-yellow text-5xl font-[Tommy] p-5">
          {/* <ul className=" ">
            <li>NFT Art Generation</li>
            <li>Concept development and Advisement</li>
          </ul> */}
        </div>
      </section>
    </>
  );
};
