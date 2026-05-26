import React from "react";
import { H1 } from "../elements";
import { Art } from "../office";
import { ExternalLink } from "../atomic/atoms";

export const NFTLAB: React.FC = () => {
  return (
    <>
      <section className=" bg-offWhite grid mt-40 mb-40 w-screen p-5  md:grid-cols-2 lg:grid-cols-3  lg:pr-1">
        <div className=" text-4xl p-5 font-TY md:text-right">
          <div>
            <H1 heading="Art" />
          </div>
          <div className="pt-4 font-SFR underline text-orange font-bold">
            <ExternalLink link="https://www.etsy.com/shop/DreamlikedigitalCo?ref=dashboard-header">
              Shop on Etsy
            </ExternalLink>
          </div>
        </div>
        <div className="drop-shadow-[25px_35px_35px_rgba(0,0,0,0.50)] ">
          <Art />
        </div>
      </section>
    </>
  );
};
