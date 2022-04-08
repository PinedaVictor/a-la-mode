import React from "react";
import { NewsItem } from "./NewsItem";
import { H1 } from "../elements";
import an from "../../assets/images/Art/rai.png";

const NewsData = [
  {
    title: "10,000 NFT Collection",
    summary:
      "My first 10,000 NFT collection with goals in mind. " +
      "The main goal is to start a collabertive space for Artists " +
      "and Computer Science majors. " +
      "This project was a great starting point to learn web 3 and NFTs.",
  },
  {
    title: "React Firebase Blog Server",
    summary:
      "Visit dreamlikedigital.com to see it in action. This project " +
      "included a blogging server for file storage and a custom company dashboard. " +
      "Company dashboard allowed users to create new blog posts and edit exisiting posts.",
  },
  {
    title: "JS Functions for Blog Database",
    summary:
      "Fundamentals are important to create great tools in technology. " +
      "Five functions and their use cases that were implemented in the " +
      "blogging database project. ",
  },
  {
    title: "Image Upload with TS, React, and Firebase",
    summary:
      "Utilizing Firebase file storage and asynchronous functions to upload " +
      "an image. Upon successful upload, the UI will display the image in it's " +
      "corresponding section. ",
  },
];

export const News: React.FC = () => {
  return (
    <>
      <section className="grid p-5 lg:grid-cols-1 md:m-24 lg:m-36 w-fit mt-24 mb-24">
        <div className="md:text-center mb-5  lg:ml-36 lg:mr-36">
          <img
            src={an}
            className=" drop-shadow-[-25px_35px_35px_rgba(0,0,0,0.30)] mb-8"
          />
        </div>
        <div className="md:grid md:grid-cols-2 p-4 lg:ml-36 lg:mr-36 border-l-4 border-b-4 border-red">
          {NewsData.map((item, index) => (
            <NewsItem key={index} title={item.title} summary={item.summary} />
          ))}
        </div>
      </section>
    </>
  );
};
