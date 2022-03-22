import React from "react";
import img from "../../assets/images/twitter.jpg";
import { Icon } from "../elements";
import { ExternalLink } from "../utils";

export const NewsItem: React.FC = () => {
  return (
    <>
      <div className=" md:w-1/3 h-72 mb-4">
        <div className=" inline-block">
          <p className=" font-bold pb-2">10,000 NFT Collection</p>
          <p className=" pr-3">
            My first 10,000 NFT collection. 3 Objectives and what I’ve learned
            so far. This explains my thought process and goals for my first NFT
            collection. The goal is to start a collabertive space for Artists
            and Computer Science majors.
          </p>
        </div>
        <div className="  pt-6  flex  justify-center">
          <ExternalLink link="https://twitter.com/victorcodez">
            <Icon img={img} imgAltText="Twitte Icon" />
          </ExternalLink>
        </div>
      </div>
    </>
  );
};
