import React from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { H1 } from "../elements";
import { Art } from "../office";
import { ExternalLink } from "../atomic/atoms";

export const NFTLAB: React.FC = () => {
  const handleEtsyClick = () => {
    logEvent(getAnalytics(getApp()), "select_content", {
      content_type: "shop-etsy-link",
    });
  };

  return (
    <>
      <section className=" bg-offWhite grid mt-40 mb-40 w-screen p-5  md:grid-cols-2 lg:grid-cols-3  lg:pr-1">
        <div className=" text-4xl p-5 font-TY md:text-right">
          <div>
            <H1 heading="Art" />
          </div>
          <div className="pt-4 font-SFR underline text-orange font-bold">
            <ExternalLink
              link="https://www.etsy.com/shop/DreamlikedigitalCo?ref=dashboard-header"
              onClick={handleEtsyClick}
            >
              Shop on Etsy
            </ExternalLink>
          </div>
          <p className="pt-2 font-SFR text-base font-normal md:ml-auto max-w-[14rem]">
            Explore my Etsy shop for original art and custom travel posters
            inspired by my adventures.
          </p>
        </div>
        <div className="drop-shadow-[25px_35px_35px_rgba(0,0,0,0.50)] ">
          <Art />
        </div>
      </section>
    </>
  );
};
