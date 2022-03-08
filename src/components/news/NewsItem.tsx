import React from "react";
import img from "../../assets/images/twitter.png";
import { Avatar } from "../elements";

export const NewsItem: React.FC = () => {
  return (
    <>
      <div className=" md:w-1/3 h-72">
        <div className=" inline-block">
          <p className=" font-bold pb-2">10,000 NFT Collection</p>
          <p className=" pr-3">
            My first 10,000 NFT collection. 3 Objectives and what I’ve learned
            so far. This explains my thought process and goals for my first NFT
            collection. The goal is to start a collabertive space for Artists
            and Computer Science majors.
          </p>
        </div>
        <div className="  pt-6 float-right flex ">
          <p className=" inline-block float-left pt-[1.1rem]  pl-40 mr-4">
            Read more
          </p>
          {/* TODO: Twitter post link */}
          <Avatar img={img} imgAltText="Twitte Icon" />
        </div>
      </div>
    </>
  );
};
