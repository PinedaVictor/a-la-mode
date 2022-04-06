import React from "react";
import { H1 } from "../elements";
import { Art } from "../office";

export const NFTLAB: React.FC = () => {
  return (
    <>
      <section className=" grid mt-40 mb-40 w-screen p-5  md:grid-cols-2 lg:grid-cols-3  lg:pr-1">
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
        <div className="drop-shadow-[25px_35px_35px_rgba(0,0,0,0.50)]">
          <Art />
        </div>
      </section>
    </>
  );
};
