import React from "react";
import img1 from "../../assets/images/iBot.jpg";

export const NFTLAB: React.FC = () => {
  return (
    <>
      <section className=" grid md:grid-flow-col overflow-hidden">
        <div className=" bg-tan">
          {/* TODO: Picture that describes what NFTLAB is? FRankenstin? dexter? afro? image carousel */}
          <picture>
            <source type="image/webp" srcSet={img1} />
            {/* TODO: Alt text */}
            <img src={img1} alt="" width={1080} height={1080} />
          </picture>
        </div>
        <div className=" text-4xl p-5 font-TY">
          <ul className=" ">
            <li className=" mb-4 ">NFT Art Generation</li>
            <li className=" mb-4 ">Concept development</li>
            <li className=" mb-4 ">Advisement</li>
          </ul>
        </div>
      </section>
    </>
  );
};
