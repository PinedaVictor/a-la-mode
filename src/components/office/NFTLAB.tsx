import React from "react";
import img1 from "../../assets/images/iBot.jpg";
import { H1 } from "../elements";
import { Art } from "../office";

export const NFTLAB: React.FC = () => {
  return (
    <>
      <section className=" grid mt-40 mb-40 w-screen p-5  md:grid-cols-2  lg:pr-10 ">
        <div className=" text-4xl p-5 font-TY md:text-right">
          <div>
            <H1 heading="NFT LAB" />
          </div>
          <ul className=" ">
            <li className=" mb-4 ">Art Generation</li>
            <li className=" mb-4 ">Concept development</li>
            <li className=" mb-4 ">Advisement</li>
          </ul>
        </div>
        <div className="  ">
          <Art />
        </div>
      </section>
    </>
  );
};
