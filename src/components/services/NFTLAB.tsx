import React from "react";
import img1 from "../../assets/images/idk3.jpg";

export const NFTLAB: React.FC = () => {
  return (
    <>
      <section className="grid md:grid-flow-col">
        <div className=" bg-tan">
          {/* TODO: Picture that describes what NFTLAB is? FRankenstin? dexter? afro? */}
          <picture>
            <source type="image/webp" srcSet={img1} />
            {/* TODO: Alt text */}
            <img src={img1} alt="" />
          </picture>
        </div>
        <div className=" bg-yellow text-6xl font-[Tommy] p-5">
          <ul>
            <p>10,000 NFT collection</p>
            <p>Art guidence</p>
            <p>For more info visit ThatNFT.io</p>
          </ul>
        </div>
      </section>
    </>
  );
};
